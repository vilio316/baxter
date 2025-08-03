import { connectMongoDB } from "app/lib/mongodb";
import User from "app/models/user";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials;

        try {
          await connectMongoDB();
          const user = await User.findOne({ email });

          if (!user) {
            return Promise.reject(new Error("No user found with this email"));
          }

          const isMatch = await bcrypt.compare(password, user.password);
          if (!isMatch) {
            return Promise.reject(new Error("Incorrect password"));
          }

          return {
            id: user._id.toString(),
            email: user.email,
            username: user.username,
          };
        } catch (error) {
          console.error("Login error:", error.message);
          return Promise.reject(
            new Error("An unexpected error occurred. Please try again.")
          );
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
