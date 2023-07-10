import { connectDB } from "/util/database";
import { ObjectId } from "mongodb";
import Comment from "./Comment";
import { notFound } from "next/navigation";
import Image from "next/image";

export default async function Detail(props) {
  const db = (await connectDB).db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });
  let reply = await db.collection("comment").find().toArray();

  if (result === null) {
    return notFound();
  }
  console.log(result, reply);
  return (
    <div className="list-bg">
      <div className="list-item">
        <h4>제목: {result.title}</h4>
        <p>내용: {result.content}</p>
        {result.image != null ? (
          <Image src={result.image} width="500" height="500" alt=""></Image>
        ) : null}
        <br></br>
        <p>---댓글---</p>
        <Comment _id={result._id.toString()} reply={reply} />
      </div>
    </div>
  );
}
