import { parse, serialize } from "cookie";

export const getAccessTokenFromCookies = (
  reqHeaders?: Headers
): string | null => {
  if (reqHeaders) {
    const cookieHeader = reqHeaders.get("cookie");
    const cookies = parse(cookieHeader || "");
    return cookies.accessToken || null;
  }

  if (typeof window !== "undefined") {
    const cookies = parse(document.cookie);
    return cookies.accessToken || null;
  }

  return null;
};

export const setTokensInCookies = (
  accessToken: string,
  refreshToken: string
) => {
  document.cookie = serialize("accessToken", accessToken, {
    path: "/",
    httpOnly: false,
  });
  document.cookie = serialize("refreshToken", refreshToken, {
    path: "/",
    httpOnly: false,
  });
};

export const clearTokensFromCookies = () => {
  document.cookie = serialize("accessToken", "", { path: "/", maxAge: -1 });
  document.cookie = serialize("refreshToken", "", { path: "/", maxAge: -1 });
};
