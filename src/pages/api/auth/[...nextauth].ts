import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
 import { validateUser } from "@/lib/auth";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    Credentials({
      credentials: {
        phone: { label: "Phone", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = await validateUser(parseInt(credentials!.phone), credentials!.password);
        return user;
      }
    }),
  ],
});