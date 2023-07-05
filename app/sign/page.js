export default function Sign() {
  return (
    <div className="list-bg">
      <div className="list-item">
        <h4>회원가입</h4>
        <form action="/api/post/sign" method="POST">
          <input name="id" placeholder="ID 입력"></input>
          <input name="pw" placeholder="PW 입력"></input>
          <button type="submit">전송</button>
        </form>
      </div>
    </div>
  );
}
