import Note from "@/lib/models/Note";
import { connectMongoDB } from "@/lib/MongoConnect";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, note } = body;

    // ✅ Basic validation
    if (!email || typeof email !== "string") {
      return NextResponse.json({ msg: "Valid email is required" }, { status: 400 });
    }

    if (!note || typeof note !== "string") {
      return NextResponse.json({ msg: "Note content is required" }, { status: 400 });
    }

    // ✅ Connect to MongoDB
    await connectMongoDB();

    // ✅ Create note document
    const data = await Note.create({ email, note });

    return NextResponse.json(
      { success: true, msg: "Note saved successfully", data },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error saving note:", error);

    return NextResponse.json(
      { success: false, msg: "Something went wrong", error: error.message },
      { status: 500 }
    );
  }
}
