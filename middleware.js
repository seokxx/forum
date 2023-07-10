import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request) {
  const session = await getToken({ req: request });
  console.log(session);

  if (request.nextUrl.pathname.startsWith("/write")) {
    if (session == null) {
      return NextResponse.redirect("http://localhost:3000/api/auth/signin");
    }
  }

  if (request.nextUrl.pathname.startsWith("/list")) {
    console.log(request.headers.get("sec-ch-ua-platform"));
    return NextResponse.next();
  }

  request.cookies.get("쿠키이름"); //출력
  request.cookies.has("쿠키이름"); //존재확인
  request.cookies.delete("쿠키이름"); //삭제

  const response = NextResponse.next();
  response.cookies.set({
    name: "mode",
    value: "dark",
    maxAge: 3600,
    httpOnly: true,
  });
  return response; //쿠키생성
}
