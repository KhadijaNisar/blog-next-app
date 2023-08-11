import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import UserModel from "../../../models/user";
import bcrypt from "bcryptjs";
import mongo from "../../../lib/mongodb";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    CredentialsProvider({
      async authorize(credentials, req) {
        mongo();
        const { email, password } = credentials;

        const user = await UserModel.findOne({ email });

        try {
          if (!user) {
            throw new Error("Invalid credentials!!!!");
          }
          const isPasswordMatched = await bcrypt.compare(
            password,
            user.password
          );


          if (!isPasswordMatched) {
            throw new Error("Invalid password");
          }
          return user;
        } catch (error) {
          console.log(error);
        }
      },
    }),
  ],secret:process.env.NEXTAUTH_SECRET,
});
