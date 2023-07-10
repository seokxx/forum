"use client";

import { useState } from "react";

export default function Comment({ _id, reply }) {
  let [comment, setComment] = useState();
  console.log(_id, reply);

  // 해당 게시물의 댓글만 걸러내기 위한 함수
  const filterReplies = (replies) => {
    return replies.filter((reply) => reply.parentId === _id);
  };

  const filteredReplies = filterReplies(reply);
  return (
    <div>
      {filteredReplies.map((item, index) => {
        return (
          <div key={index}>
            내용: {item.content} <br></br>
            작성자: {item.author}
            <hr></hr>
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
