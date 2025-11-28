"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("123456");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const defaultEmail = "admin@gmail.com";
    const defaultPassword = "123456";

    if (email === defaultEmail && password === defaultPassword) {
      document.cookie = "token=sample-token-123; path=/; max-age=86400";
      window.location.href = "/";
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-sm">
        <h1 className="text-xl font-semibold mb-4 text-center">Login</h1>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded p-2 mt-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium">Password</label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded p-2 mt-1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 cursor-pointer text-white py-2 rounded"
          >
            Login
          </button>

          <div className="text-center text-sm mt-3">
            <Link href="/auth/forgot-password" className="text-blue-600">
              Forgot Password?
            </Link>
          </div>

          <div className="text-center text-sm">
            Don’t have an account?{" "}
            <Link href="/auth/signup" className="text-blue-600">
              Signup
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
