import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';

import User from '@/models/User';
import bcrypt from 'bcryptjs';
import { logTrace } from '@/utils/traceLogger';

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const { username, email, password, confirmPassword, mobile, countryCode } = await req.json();

    if (password !== confirmPassword) {
      return NextResponse.json({ error: 'Passwords do not match' }, { status: 400 });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: 'User already exists' }, { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      mobile,
      countryCode,
    });

    await newUser.save();
    logTrace(`New user signed up: ${email}`);

    return NextResponse.json({ success: true, message: 'User registered successfully!' });
  } catch (error) {
    logTrace(`Signup error: ${error}`);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
