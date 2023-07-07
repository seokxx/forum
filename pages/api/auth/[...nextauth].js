import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import { connectDB } from "/util/database";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "f5fe6851933dcf2a1919",
      clientSecret: "49d82d7cd2c29bcb6574d97a12fa69a2711c552e",
    }),
  ],
  secret: "qwer1234",
  adapter: MongoDBAdapter(connectDB),
};
export default NextAuth(authOptions);
