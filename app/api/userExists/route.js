import { connectMongoDB } from "app/lib/mongodb";
import User from "app/models/user";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectMongoDB();

    var { email, username } = await req.json();
    email = email.toLowerCase();
    username = username.toLowerCase();
    const user = await User.findOne({ email }).select("_id");
    const userN = await User.findOne({ username }).select("_id");
    console.log("user: ", user);
    console.log("User: ", userN);
    return NextResponse.json({ user });
  } catch (error) {
    console.log(error);
  }
}
