export default function Sign() {
  return (
    <div className="list-bg">
      <div className="list-item">
        <h4>회원가입</h4>
        <form className="form-div" action="/api/auth/sign" method="POST">
          <input name="name" placeholder="이름 입력"></input>
          <input name="email" placeholder="이메일 입력"></input>
          <input type="password" name="pw" placeholder="PW 입력"></input>
          <button type="submit">전송</button>
        </form>
      </div>
    </div>
  );
}
