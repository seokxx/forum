# Next.js 게시판 프로젝트

## 목차

1. [Next.js에서 MongoDB 사용하기](#1-nextjs에서-mongodb-사용하기)
2. [글 목록 조회 기능 만들기](#2-글-목록-조회-기능-만들기)
3. [상세페이지 만들기 (Dynamic route)](#3-상세페이지-만들기-dynamic-route)
4. [상세페이지 만들기 (useRouter)](#4-상세페이지-만들기-userouter)
5. [글 작성기능 만들기](#5-글-작성기능-만들기)
6. [수정 기능 만들기](#6-수정-기능-만들기)
7. [삭제 기능 만들기 (Ajax, 에러처리, query string, URL parameter)](#7-삭제-기능-만들기-ajax-에러처리-query-string-url-parameter)
8. [Static rendering, dynamic rendering, cache](#8-static-rendering-dynamic-rendering-cache)
9. [JWT, session, OAuth](#9-jwt-session-oauth)
10. [회원기능 만들기 (OAuth+session)](#10-회원기능-만들기-oauthsession)
11. [아이디/비밀번호 (JWT)](#11-아이디비밀번호-jwt)
12. [Refresh token (JWT)](#12-refresh-token-jwt)
13. [댓글 기능 만들기 (input데이터, useEffect)](#13-댓글-기능-만들기-input데이터-useeffect)
14. [Loading.js](#14-loadingjs)
15. [Error.js](#15-errorjs)
16. [Not-found.js](#16-not-foundjs)
17. [AWS Elastic Beanstalk에 Next.js서버 배포](#17-aws-elastic-beanstalk에-nextjs서버-배포)
18. [이미지 업로드 기능 (AWS S3 셋팅)](#18-이미지-업로드-기능-aws-s3-셋팅)
19. [Presigned URL](#19-presigned-url)
20. [Dark Mode 기능 (cookies, localStorage)](#20-dark-mode-기능-cookies-localstorage)
21. [Middleware](#21-middleware)
22. [Next.js의 Server actions 기능](#22-nextjs의-server-actions-기능)

## 1. Next.js에서 MongoDB 사용하기

Next.js 프로젝트에서 MongoDB 데이터베이스와 연결하고, 데이터를 저장하고 조회하는 방법을 배웁니다.

## 2. 글 목록 조회 기능 만들기

게시글들의 목록을 조회하여 화면에 나타내는 기능을 구현하는 방법을 배웁니다.

## 3. 상세페이지 만들기 (Dynamic route)

다양한 게시물의 상세 페이지를 동적으로 생성하는 방법을 배웁니다. 이를 통해 게시글에 따라 URL이 변경되도록 구현할 수 있습니다.

## 4. 상세페이지 만들기 (useRouter)

Next.js의 useRouter 훅을 사용하여 상세 페이지에서 게시글의 정보를 가져오는 방법을 배웁니다.

## 5. 글 작성기능 만들기

사용자가 입력한 내용을 게시판에 게시하는 글 작성 기능을 구현하는 방법을 배웁니다.

## 6. 수정 기능 만들기

기존 게시글을 수정하는 기능을 구현하여 사용자가 작성한 내용을 변경할 수 있도록 합니다.

## 7. 삭제 기능 만들기 (Ajax, 에러처리, query string, URL parameter)

게시글을 삭제하고 처리 결과를 반환하는 기능을 구현합니다. 이 과정에서 Ajax, 에러처리, 쿼리 문자열, URL 매개변수를 사용해보겠습니다.

## 8. Static rendering, dynamic rendering, cache

Next.js에서 제공하는 정적 렌더링, 동적 렌더링, 캐시 기능을 활용하여 페이지 로딩 속도를 개선하고 최적화하는 방법을 배웁니다.

## 9. JWT, session, OAuth

인증과 권한 관리를 위해 JSON Web Token(JWT), 세션, OAuth를 사용하는 방법을 배웁니다.

## 10. 회원기능 만들기 (OAuth+session)

회원가입 및 로그인 기능을 OAuth와 세션을 사용하여 구현하는 방법을 배웁니다.

## 11. 아이디/비밀번호 (JWT)

아이디와 비밀번호를 가지고 사용자 인증을 진행하는 방법을 배웁니다. 인증을 위해 JWT를 사용합니다.

## 12. Refresh token (JWT)

JWT를 사용할 때 더 안전한 인증 처리를 위해 Refresh Token을 사용하는 방법을 배웁니다.

## 13. 댓글 기능 만들기 (input데이터, useEffect)

게시글에 댓글을 작성하고 조회할 수 있는 기능을 구현합니다. 이 과정에서 입력데이터 처리 및 useEffect 훅을 사용해봅니다.

## 14. Loading.js

페이지 로딩 상태를 나타내는 로딩 컴포넌트를 작성하는 방법을 배웁니다.

## 15. Error.js

프로젝트 전반적인 에러를 관리할 수 있는 에러 컴포넌트를 작성하는 방법을 배웁니다.

## 16. Not-found.js

존재하지 않는 페이지에 대한 404 Not Found 에러 페이지를 작성하는 방법을 배웁니다.

## 17. AWS Elastic Beanstalk에 Next.js서버 배포

AWS Elastic Beanstalk를 사용하여 Next.js 서버를 배포하고 클라우드 환경에서 테스트하는 방법을 배웁니다.

## 18. 이미지 업로드 기능 (AWS S3 셋팅)

이미지 업로드 기능을 구현하고 AWS S3 서비스를 셋팅하여 이미지 파일을 저장하는 방법을 배웁니다.

## 19. Presigned URL

AWS S3의 Presigned URL 기능을 사용하여 파일에 대한 임시 URL을 생성하는 방법을 배웁니다.

## 20. Dark Mode 기능 (Cookies, localStorage)

다크 모드 기능을 구현하여 사용자의 환경에 맞게 테마를 적용하는 방법을 배웁니다. 이 과정에서 쿠키와 로컬 스토리지를 사용합니다.

## 21. Middleware

Next.js에서 미들웨어를 사용하여 HTTP 요청에 대한 처리를 구현하는 방법을 배웁니다. 미들웨어를 활용하여 개발 및 유지 보수를 효율적으로 진행할 수 있습니다.

## 22. Next.js의 Server actions 기능

이 섹션에서는 Next.js의 Server actions 기능을 사용하여 서버 측 작업을 수행하는 방법에 대해 알아봅니다. 이를 통해 API 요청을 효율적으로 처리할 수 있습니다.
