"use client";

import { useState } from "react";

export default function OTPPage() {
  const [otp, setOtp] = useState("");

  const handleOTP = async (e: React.FormEvent) => {
    e.preventDefault();

    // API Example
    // await fetch("/api/auth/verify-otp",{method:"POST", body: JSON.stringify({ otp })})

    console.log("OTP submitted", otp);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-400 via-blue-800 to-gray-900 px-4">
      <form
        onSubmit={handleOTP}
        className="w-full max-w-md bg-white p-6 rounded-xl shadow"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Verify OTP</h2>

        <input
          type="text"
          maxLength={6}
          placeholder="Enter 6-digit OTP"
          className="w-full border border-gray-300 p-3 rounded mb-3 text-center tracking-widest text-xl"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full cursor-pointer bg-purple-600 hover:bg-purple-700 text-white p-3 rounded"
        >
          Verify
        </button>

        <p className="text-center text-sm mt-3">Didn’t receive code?</p>
        <a className="text-blue-600 text-center block text-sm mt-1" href="#">
          Resend OTP
        </a>
      </form>
    </div>
  );
}
