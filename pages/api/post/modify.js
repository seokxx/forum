import { connectDB } from "/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method == "POST") {
    if (req.body.title == "") {
      return res.status(400).json("제목을 입력해주세요.");
    }
    if (req.body.content == "") {
      return res.status(400).json("내용을 입력해주세요.");
    }

    let change = { title: req.body.title, content: req.body.content };
    const db = (await connectDB).db("forum");
    await db
      .collection("post")
      .updateOne({ _id: new ObjectId(req.body._id) }, { $set: change });
    console.log(change);
    return res.redirect(302, "/list");
  }
}
