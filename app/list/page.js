import DetailLink from "./DetailLink";
import { connectDB } from "/util/database";
import Link from "next/link";
export default async function List() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  return (
    <div className="list-bg">
      {result.map((item, index) => {
        return (
          <div className="list-item" key={index}>
            <Link href={`/detail/${item._id}`}>
              <h4>{item.title}</h4>
            </Link>
            <DetailLink />
            <p>{item.date}</p>
          </div>
        );
      })}
    </div>
  );
}
