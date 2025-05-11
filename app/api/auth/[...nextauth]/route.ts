// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import { NextRequest } from "next/server";
import { authOptions } from "./auth.config";

const handler = NextAuth(authOptions);

export async function GET(request: NextRequest) {
  return handler(request);
}

export async function POST(request: NextRequest) {
  return handler(request);
}
