import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { connectMongoDB } from "@/lib/MongoConnect";
import Note from "@/lib/models/Note";

export async function GET() {
  try {
    await connectMongoDB();

    // Get session from request headers
    const reqHeaders = Object.fromEntries((await headers()).entries());
    const session = await auth.api.getSession({ headers: reqHeaders });

    if (!session?.user?.email) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    // Only allow admin
    if (session.user.email !== "rakeshvishwas730@gmail.com") {
      return NextResponse.json({ message: "Forbidden" }, { status: 403 });
    }

    // Fetch all notes
    const notes = await Note.find().sort({ updatedAt: -1 });

    return NextResponse.json({ success: true, data: notes }, { status: 200 });
  } catch (err: any) {
    console.error("ADMIN NOTES ERROR:", err);
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
}
