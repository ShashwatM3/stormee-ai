// app/api/auth/[...nextauth]/route.ts
import NextAuth, { DefaultSession, AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { JWT } from "next-auth/jwt";
import { NextRequest } from "next/server";

// Extend the built-in session type
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"]
  }
}

// Extend the built-in JWT type
declare module "next-auth/jwt" {
  interface JWT {
    user?: {
      id: string;
    } & DefaultSession["user"]
  }
}

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
        username: { label: "Username", type: "text" },
      },
      async authorize(credentials) {
        if (!credentials) return null;
        const { email, password, username } = credentials;

        const user = { 
          id: "1", 
          email, 
          name: username 
        };

        if (user) return user;
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt" as const,
    maxAge: 30 * 24 * 60 * 60,
  },
  jwt: {
    maxAge: 30 * 24 * 60 * 60,
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      if (token.user) {
        session.user = token.user;
      }
      return session;
    },
  },
  pages: {
    signIn: '/auth',
  },
};

const handler = NextAuth(authOptions);

// Export the route handlers with proper Next.js App Router types
export async function GET(request: NextRequest) {
  return handler(request);
}

export async function POST(request: NextRequest) {
  return handler(request);
}
