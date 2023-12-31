import { getServerSession } from "next-auth";
import { connectDB } from "/util/database";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  let session = await getServerSession(req, res, authOptions);
  req.body = JSON.parse(req.body);
  if (session) {
    req.body.author = session.user.email;
  }
  if (req.method == "POST") {
    if (req.body.title == "") {
      return res.status(400).json("제목을 입력해주세요.");
    }
    if (req.body.content == "") {
      return res.status(400).json("내용을 입력해주세요.");
    }

    const db = (await connectDB).db("forum");
    let date = formatDate(new Date());
    req.body.date = date;
    await db.collection("post").insertOne(req.body);
    return res.redirect(302, "/list");
  }
}

//날짜 함수
function formatDate(date) {
  let year = date.getFullYear().toString().substr(-2);
  let month = (1 + date.getMonth()).toString().padStart(2, "0");
  let day = date.getDate().toString().padStart(2, "0");

  return `${year}-${month}-${day}`;
}
