import Link from "next/link";

export default async function Home() {
  return (
    <div className="list-bg">
      <div className="list-item">
        <Link href="/list">글목록</Link>
        <br />
        <br />
        <Link href="/write">글쓰기</Link>
        <br />
        <br />
        <Link href="/sign">회원가입</Link>
      </div>
    </div>
  );
}
