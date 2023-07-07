import { connectDB } from "/util/database";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  if (req.method == "POST") {
    if (req.body.name == "") {
      return res.status(400).json("닉네임을 입력해주세요.");
    }
    if (req.body.email == "") {
      return res.status(400).json("이메일을 입력해주세요.");
    }
    if (req.body.pw == "") {
      return res.status(400).json("PW를 입력해주세요.");
    }
    let hash = await bcrypt.hash(req.body.pw, 10);

    const db = (await connectDB).db("forum");
    // id 중복 방지
    const checkId = await db.collection("user").findOne({ id: req.body.email });

    if (checkId) {
      return res
        .status(400)
        .json("이미 존재하는 이메일입니다. 다른 이메일을 선택해주세요.");
    }
    req.body.pw = hash;
    await db.collection("user").insertOne(req.body);

    return res.redirect(302, "/");
  }
}
