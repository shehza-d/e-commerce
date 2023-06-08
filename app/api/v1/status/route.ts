import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  return NextResponse.json({
    status: "OK",
    message: "API running Good by SHEHZAD E Commerce Store.",
  });
}
console.log("example tesst 2");

export async function POST(request: NextRequest) {
  console.log("example tesst 2");

  return NextResponse.json({
    status: "OK",
    message: "POST API running Good by SHEHZAD E Commerce Store.",
  });
}
