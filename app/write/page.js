"use client";
import { useState } from "react";

export default function Write() {
  let [src, setSrc] = useState("");
  const handleSubmit = async (e) => {
    // Prevent page refresh 이벤트를 멈춥니다.
    e.preventDefault();

    // 이 객체에 사용자가 입력한 title 및 content와 함께 이미지url(src)를 추가합니다.
    const newPost = {
      title: e.target[0].value,
      content: e.target[1].value,
      image: src,
    };

    await fetch("/api/post/new", {
      method: "POST",
      body: JSON.stringify(newPost),
    });
  };
  return (
    <div className="list-bg">
      <div className="list-item">
        <h4>글작성</h4>
        <form className="form-div" onSubmit={handleSubmit}>
          <input name="title" placeholder="글제목" />
          <input name="content" placeholder="글내용" />
          <button type="submit">전송</button>
        </form>
        <input
          type="file"
          accept="image/*"
          onChange={async (e) => {
            let file = e.target.files[0];
            let fileName = encodeURIComponent(file.name);
            let res = await fetch(`/api/post/image?file=${fileName}`);
            res = await res.json();

            //S3 업로드
            const formData = new FormData();
            Object.entries({ ...res.fields, file }).forEach(([key, value]) => {
              formData.append(key, value);
            });
            let upload = await fetch(res.url, {
              method: "POST",
              body: formData,
            });
            console.log(upload);

            if (upload.ok) {
              setSrc(upload.url + "/" + fileName);
            } else {
              console.log("실패");
            }
          }}
        ></input>
        <img src={src} alt="" />
      </div>
    </div>
  );
}
