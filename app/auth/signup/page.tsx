"use client";

import { useState } from "react";

export default function SignupPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    // API Example
    // await fetch("/api/auth/signup",{method:"POST", body: JSON.stringify(form)})

    console.log("Signup submitted", form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSignup}
        className="w-full max-w-md bg-white p-6 rounded-xl shadow"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>

        <input
          name="name"
          placeholder="Name"
          className="w-full border border-gray-300 p-3 rounded mb-3"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 p-3 rounded mb-3"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="w-full border border-gray-300 p-3 rounded mb-3"
          value={form.password}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="w-full cursor-pointer bg-green-600 hover:bg-green-700 text-white p-3 rounded"
        >
          Create Account
        </button>

        <p className="text-sm text-center mt-3">
          Already have an account?{" "}
          <a href="/auth/login" className="text-blue-600">
            Login
          </a>
        </p>
      </form>
    </div>
  );
}
