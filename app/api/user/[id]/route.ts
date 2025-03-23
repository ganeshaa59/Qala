import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import User from "@/models/User";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    await connectToDatabase();

    const userId = params.id;
    const user = await User.findById(userId).select("-password");

    if (!user) {
      return NextResponse.json({ success: false, error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, user });
  } catch (err) {
    console.error("Error fetching user by ID:", err);
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 });
  }
}
