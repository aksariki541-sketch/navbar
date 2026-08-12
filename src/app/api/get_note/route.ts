// app/api/get_note/route.ts
import Note from "@/lib/models/Note";
import { connectMongoDB } from "@/lib/MongoConnect";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    await connectMongoDB();

    const data = await Note.find({ email });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error, msg: "Something went wrong" },
      { status: 400 }
    );
  }
}
