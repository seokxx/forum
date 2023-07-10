"use client";
import { signIn, signOut } from "next-auth/react";

export default function LoginBtn({ session }) {
  return (
    <div>
      &nbsp;
      {session == null ? (
        <button
          onClick={() => {
            signIn();
          }}
        >
          login
        </button>
      ) : (
        <div>
          <p>
            {session.user.name} &nbsp;
            <button
              onClick={() => {
                signOut();
              }}
            >
              logOut
            </button>
          </p>
        </div>
      )}
    </div>
  );
}
