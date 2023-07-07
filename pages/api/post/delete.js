import { getServerSession } from "next-auth";
import { connectDB } from "/util/database";
import { ObjectId } from "mongodb";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  const db = (await connectDB).db("forum");
  let session = await getServerSession(req, res, authOptions);
  let checkUser = await db
    .collection("post")
    .findOne({ _id: new ObjectId(req.body) });

  if (session == null) {
    return res.redirect(302, "/list");
  } else {
    if (checkUser.author != session.user.email) {
      return res.redirect(302, "/list");
    } else {
      if (req.method == "POST") {
        let result = await db
          .collection("post")
          .deleteOne({ _id: new ObjectId(req.body) });

        if (result.deletedCount == 0) {
          return res.status(500).json("삭제가 되지 않았습니다.");
        }

        return res.status(200).json("삭제완료");
      } else {
        let result = await db
          .collection("post")
          .deleteOne({ _id: new ObjectId(req.query._id).toString });

        if (result.deletedCount == 0) {
          return res.status(500).json("삭제가 되지 않았습니다.");
        }
        return res.status(200).json("삭제완료");
      }
    }
  }
}
