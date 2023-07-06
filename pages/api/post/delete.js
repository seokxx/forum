import { connectDB } from "/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method == "POST") {
    const db = (await connectDB).db("forum");
    let result = await db
      .collection("post")
      .deleteOne({ _id: new ObjectId(req.body) });

    if (result.deletedCount == 0) {
      return res.status(500).json("삭제가 되지 않았습니다.");
    }
    return res.status(200).json("삭제완료");
  }
}