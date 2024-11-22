import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const authorizationHeader = req.headers.get("authorization");
  const accessToken = authorizationHeader?.split(" ")[1];

  if (!accessToken || accessToken !== "valid-access-token") {
    return NextResponse.json(
      { error: "Unauthorized: Invalid or missing token" },
      { status: 403 }
    );
  }

  return NextResponse.json({
    message: "This is protected data!",
    data: {
      example: "You successfully accessed a protected endpoint.",
    },
  });
}
