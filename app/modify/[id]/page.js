import { connectDB } from "/util/database";
import { ObjectId } from "mongodb";

export default async function Modify(props) {
  const db = (await connectDB).db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });
  return (
    <div className="list-bg">
      <div className="list-item">
        <h4>수정하기</h4>
        <form className="form-div" action="/api/post/modify" method="POST">
          <input name="title" defaultValue={result.title}></input>
          <input name="content" defaultValue={result.content}></input>
          <input
            style={{ display: "none" }}
            name="_id"
            defaultValue={result._id.toString()}
          ></input>
          <button type="sudmit">수정</button>
        </form>
      </div>
    </div>
  );
}
