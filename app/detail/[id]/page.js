import { connectDB } from "/util/database";
import { ObjectId } from "mongodb";
import Comment from "./Comment";

export default async function Detail(props) {
  const db = (await connectDB).db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });
  let reply = await db.collection("comment").find().toArray();
  return (
    <div className="list-bg">
      <div className="list-item">
        <h4>제목: {result.title}</h4>
        <p>내용: {result.content}</p>
        <br></br>
        <p>---댓글---</p>
        <Comment _id={result._id.toString()} reply={reply} />
      </div>
    </div>
  );
}
