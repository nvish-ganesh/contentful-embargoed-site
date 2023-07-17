import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ["/"],
};

export function middleware(req: NextRequest) {
  const basicAuth = req.headers.get("authorization");
  const url = req.nextUrl;

  if (basicAuth) {
    let {SERVICE_USER,SERVICE_PASSCODE} = process.env;
    const authValue = basicAuth.split(" ")[1];
    const [username, passcode] = atob(authValue).split(":");
    

    if (username === SERVICE_USER && passcode === SERVICE_PASSCODE) {
      return NextResponse.next();
    }
  }
  url.pathname = "/api/auth";

  return NextResponse.rewrite(url);
}
