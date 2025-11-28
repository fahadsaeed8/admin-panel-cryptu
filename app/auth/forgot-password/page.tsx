"use client";

import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");

  const handleForgot = async (e: React.FormEvent) => {
    e.preventDefault();

    // API Example
    // await fetch("/api/auth/forgot-password",{method:"POST", body: JSON.stringify({ email })})

    console.log("Forgot Password Email:", email);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-400 via-blue-800 to-gray-900 px-4">
      <form
        onSubmit={handleForgot}
        className="w-full max-w-md bg-white p-6 rounded-xl shadow"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Forgot Password</h2>

        <input
          type="email"
          placeholder="Enter email"
          className="w-full border border-gray-300 p-3 rounded mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white p-3 rounded"
        >
          Send Reset Link
        </button>

        <p className="text-sm text-center mt-3">
          Go back to{" "}
          <a href="/auth/login" className="text-blue-600">
            Login
          </a>
        </p>
      </form>
    </div>
  );
}
