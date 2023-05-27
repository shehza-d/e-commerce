import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  return NextResponse.json({
    status: "OK",
    message: "API running Good by SHEHZAD Book Store.",
  });
}
