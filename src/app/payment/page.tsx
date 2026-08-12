"use client";

import { useEffect, useState } from "react";
import { sendGTMEvent } from '@next/third-parties/google'

export default function Payment() {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState<"INR" | "USD">("INR");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handlePay = async () => {
    const numericAmount = Number(amount);

    if (!numericAmount || numericAmount <= 0) {
      return alert("Please enter a valid amount");
    }

    const res = await fetch("/api/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: numericAmount,
        currency, // ✅ IMPORTANT
      }),
    });

    const order = await res.json();

    const rzp = new (window as any).Razorpay({
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
      order_id: order.id,
      name: "My Store",
      description: "Premium Purchase",
      theme: { color: "#6366f1" },
      handler: (res: any) => {
        alert("Payment Success: " + res.razorpay_payment_id);

        // ✅ Google Ads Conversion (REQUIRED)
        if (window.gtag) {
          window.gtag("event", "conversion", {
            send_to: "AW-11219169717/gAyhCPmLkt8bELXj2-Up",
            value: Number(amount),
            currency: currency,
            transaction_id: res.razorpay_payment_id, // PERFECT ID
          });
  }
      },
    });

    rzp.open();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-700 p-6">
      <div className="bg-white/10 backdrop-blur-lg shadow-xl p-8 rounded-2xl w-full max-w-md border border-white/20">
        <h1 className="text-3xl font-semibold text-white text-center mb-6">
          💳 Make a Payment
        </h1>

        {/* Amount */}
        <input
          type="number"
          className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white outline-none focus:border-purple-400 transition"
          placeholder={`Enter Amount (${currency})`}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        {/* Currency Toggle */}
        <div className="flex gap-3 mt-4">
          <button
            onClick={() => setCurrency("INR")}
            className={`flex-1 py-2 rounded-xl font-semibold transition ${
              currency === "INR"
                ? "bg-green-500 text-white"
                : "bg-white/20 text-gray-300"
            }`}
          >
            🇮🇳 INR
          </button>

          <button
            onClick={() => setCurrency("USD")}
            className={`flex-1 py-2 rounded-xl font-semibold transition ${
              currency === "USD"
                ? "bg-blue-500 text-white"
                : "bg-white/20 text-gray-300"
            }`}
          >
            🌍 USD
          </button>
        </div>

        <button
          onClick={handlePay}
          className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-lg font-semibold hover:shadow-xl hover:scale-[1.02] active:scale-95 transition"
        >
          Pay Now
        </button>

        <p className="text-gray-300 text-center mt-4 text-sm">
          Secure payment powered by Razorpay 🔐
        </p>
      </div>
    </div>
  );
}
