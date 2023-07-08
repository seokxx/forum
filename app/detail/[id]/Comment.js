"use client";

import { useState } from "react";

export default function Comment({ _id, reply }) {
  let [comment, setComment] = useState();

  console.log({ reply });
  return (
    <div>
      {reply.map((item, index) => {
        return (
          <div key={index}>
            작성자: {item.author}
            내용: {item.content}
          </div>
        );
      })}
      <br></br>
      <input
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />
      <button
        onClick={() => {
          fetch("/api/comment/comment", {
            method: "POST",
            body: JSON.stringify({ comment: comment, _id: { _id }._id }),
          });
        }}
      >
        댓글전송
      </button>
    </div>
  );
}
