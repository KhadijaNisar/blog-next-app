import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import UserModel from "../../../models/user";
import bcrypt from "bcryptjs";
import mongo from "../../../lib/mongodb";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
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
