"use client";
import Link from "next/link";
export default function ListItem(props) {
  return (
    <div>
      {props.result.map((item, index) => {
        return (
          <div className="list-item" key={index}>
            <Link href={`/detail/${item._id}`}>
              <h4>{item.title}</h4>
            </Link>
            <Link href={`/modify/${item._id}`}>수정</Link>
            <button
              onClick={() => {
                fetch("/api/post/delete", {
                  method: "POST",
                  body: item._id,
                })
                  .then((r) => r.json())
                  .then(() => {});
              }}
            >
              삭제
            </button>
          </div>
        );
      })}
    </div>
  );
}
