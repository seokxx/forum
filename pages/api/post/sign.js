import { connectDB } from "/util/database";

export default async function handler(req, res) {
  if (req.method == "POST") {
    if (req.body.id == "") {
      return res.status(400).json("ID를 입력해주세요.");
    }
    if (req.body.pw == "") {
      return res.status(400).json("PW를 입력해주세요.");
    }
    const db = (await connectDB).db("forum");
    // id 중복 방지
    const checkId = await db.collection("user").findOne({ id: req.body.id });

    if (checkId) {
      return res
        .status(400)
        .json("이미 존재하는 ID입니다. 다른 ID를 선택해주세요.");
    }

    await db.collection("user").insertOne(req.body);

    return res.redirect(302, "/");
  }
}
