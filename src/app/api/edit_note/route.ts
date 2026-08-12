import Note from "@/lib/models/Note";
import { connectMongoDB } from "@/lib/MongoConnect";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, note } = body;

    if (!id || !note) {
      return NextResponse.json({ msg: "Missing required fields" }, { status: 400 });
    }

    await connectMongoDB();

    const updatedNote = await Note.findByIdAndUpdate(
      id,
      { note },
      { new: true } // returns updated document
    );

    if (!updatedNote) {
      return NextResponse.json({ msg: "Note not found" }, { status: 404 });
    }

    return NextResponse.json({ msg: "Note updated successfully", updatedNote });
  } catch (error) {
    console.error("❌ Edit note error:", error);
    return NextResponse.json(
      { msg: "Something went wrong", error: String(error) },
      { status: 500 }
    );
  }
}
