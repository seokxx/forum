import { getServerSession } from "next-auth";
import { connectDB } from "/util/database";
import { authOptions } from "../auth/[...nextauth]";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  let session = await getServerSession(req, res, authOptions);
  req.body = JSON.parse(req.body);
  let id = req.body._id.toString();
  console.log(id);
  if (session == null) {
    return res.redirect(302, `/detail${id}`);
  } else {
    if (req.method == "POST") {
      let data = {
        content: req.body.comment,
        parentId: new ObjectId(req.body._id),
        author: session.user.email,
      };
      const db = (await connectDB).db("forum");
      let result = await db.collection("comment").insertOne(data);
      return res.status(200).json(result);
    }
  }
}
