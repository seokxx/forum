import { getServerSession } from "next-auth";
import { authOptions } from "/pages/api/auth/[...nextauth]";

export default async function Write() {
  let session = await getServerSession(authOptions);

  if (session == null) {
    return (
      <div>
        <p>로그인 후 이용해주세요.</p>
      </div>
    );
  } else {
    return (
      <div className="list-bg">
        <div className="list-item">
          <h4>글작성</h4>
          <form className="form-div" action="/api/post/new" method="POST">
            <input name="title" placeholder="글제목" />
            <input name="content" placeholder="글내용" />
            <button type="submit">전송</button>
          </form>
        </div>
      </div>
    );
  }
}
