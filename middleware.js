// import { NextResponse } from "next/server";
// export function middleware(request) {
//   return NextResponse.redirect(new URL("/about", request.url));
// }

export { auth as middleware } from "./app/_lib/auth";

export const config = {
  matcher: ["/account"],
};
// We put in matcher the URLs we want to redirect from. (Where to execute this middleware in general)
