export default function Write() {
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
