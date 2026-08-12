import crypto from "crypto";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    await req.json();

  const expectedSign = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
    .update(`${razorpay_order_id}|${razorpay_payment_id}`)
    .digest("hex");

  return expectedSign === razorpay_signature
    ? NextResponse.json({ verified: true })
    : NextResponse.json({ verified: false }, { status: 400 });
}
