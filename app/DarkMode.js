"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
export default function DarkMode() {
  let router = useRouter();
  let cookieValue = ("; " + document.cookie)
    .split(`; mode=`)
    .pop()
    .split(";")[0];
  useEffect(() => {
    let cookieValue2 = ("; " + document.cookie)
      .split(`; mode=`)
      .pop()
      .split(";")[0];
    if (cookieValue == null)
      document.cookie = "mode=light; max-age=" + 3600 * 24 * 400;
  }, []);

  return (
    <span
      onClick={() => {
        if (cookieValue == "light") {
          document.cookie = "mode=dark; max-age=" + 3600 * 24 * 400;
          router.refresh();
        } else {
          document.cookie = "mode=light; max-age=" + 3600 * 24 * 400;
          router.refresh();
        }
      }}
    >
      🌙
    </span>
  );
}
