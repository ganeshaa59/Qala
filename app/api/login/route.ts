import { NextResponse } from "next/server";
import connectToDatabase  from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  await connectToDatabase();
  const { mobile, password } = await req.json();

  try {
    const user = await User.findOne({ mobile });
    if (!user) {
      return NextResponse.json({ success: false, error: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ success: false, error: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET!, {
      expiresIn: "48h",
    });

    (await cookies()).set("token", token, {
      httpOnly: true,
      maxAge: 60 * 60 * 48,
      path: "/",
    });

    return NextResponse.json({ success: true, message: "Login successful" });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, error: "Login failed" });
  }
}
