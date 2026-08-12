import Note from "@/lib/models/Note";
import { connectMongoDB } from "@/lib/MongoConnect";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest) {
  try {
    const body = await request.json();
    const { id } = body;

    if (!id) {
      return NextResponse.json({ msg: "Note ID is required" }, { status: 400 });
    }

    await connectMongoDB();

    const deletedNote = await Note.findByIdAndDelete(id);

    if (!deletedNote) {
      return NextResponse.json({ msg: "Note not found" }, { status: 404 });
    }

    return NextResponse.json({ msg: "Note deleted successfully" });
  } catch (error) {
    console.error("❌ Delete note error:", error);
    return NextResponse.json(
      { msg: "Something went wrong", error: String(error) },
      { status: 500 }
    );
  }
}
