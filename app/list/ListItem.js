"use client";
import Link from "next/link";
export default function ListItem(props) {
  return (
    <div>
      {props.result.map((item, index) => {
        return (
          <div className="list-item" key={index}>
            <Link href={`/detail/${item._id}`}>
              <h4>제목: {item.title}</h4>
            </Link>
            <p>날짜: {item.date}</p>
            <br />
            <Link href={`/modify/${item._id}`}>수정</Link>&nbsp;
            <button
              onClick={(e) => {
                fetch("/api/post/delete", {
                  method: "POST",
                  body: item._id,
                })
                  .then((r) => r.json())
                  .then(() => {
                    e.target.parentElement.style.opacity = 0;
                    setTimeout(() => {
                      e.target.parentElement.style.display = "none";
                    }, 1000);
                  });
                // fetch(`/api/post/delete?_id=${item._id}`, {
                //   method: "GET",
                // });
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
