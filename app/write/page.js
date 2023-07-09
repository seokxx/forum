"use client";
import { useState } from "react";

export default function Write() {
  let [src, setSrc] = useState("");

  return (
    <div className="list-bg">
      <div className="list-item">
        <h4>글작성</h4>
        <form className="form-div" action="/api/post/new" method="POST">
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
