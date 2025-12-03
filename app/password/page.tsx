"use client";

import React, { useState } from "react";
import DashboardLayout from "@/components/latest-dashboardLayout/dashboardlayout";

const PasswordPage = () => {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ password, newPassword, confirmPassword });
  };

  return (
    <DashboardLayout>
      <div className="px-6 py-6 bg-[#f5f7fb] min-h-screen">

        {/* PAGE TITLE */}
        <h1 className="text-xl font-semibold text-gray-800 mb-6">
          Password Setting
        </h1>

        <div className="flex items-start gap-6">

          {/* LEFT SUPER ADMIN CARD */}
          <div className="bg-white rounded-xl shadow-md w-[300px]">
            <div className="bg-[#3b44ff] px-6 py-5 flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
                <img src="/icons/tickicon.png" alt="tick icon" />
              </div>

              <div className="text-white">
                <p className="text-lg font-semibold leading-tight">Super</p>
                <p className="text-lg font-semibold leading-tight -mt-1">Admin</p>
              </div>
            </div>

            <div className="px-6 py-4 text-sm">
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-gray-500">Name</span>
                <span className="font-semibold">Super Admin</span>
              </div>

              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-gray-500">Username</span>
                <span className="font-semibold">admin</span>
              </div>

              <div className="flex justify-between py-2">
                <span className="text-gray-500">Email</span>
                <span className="font-semibold break-all">
                  ahmadop1205@gmail.com
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex-1">

            {/* TOP RIGHT BUTTON */}
            <div className="flex justify-end mb-4">
              <a
                href="/profile"
                className="px-4 py-2 text-sm border border-[#3b44ff] text-[#3b44ff] rounded-md hover:bg-[#3b44ff] hover:text-white transition"
              >
                Profile Setting
              </a>
            </div>

            {/* FORM CARD */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Change Password
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">

                {/* CURRENT PASSWORD */}
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#3b44ff]"
                  />
                </div>

                {/* NEW PASSWORD */}
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    New Password <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#3b44ff]"
                  />
                </div>

                {/* CONFIRM PASSWORD */}
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Confirm Password <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#3b44ff]"
                  />
                </div>

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  className="w-full py-3 rounded-md bg-[#3b44ff] hover:bg-[#2d36d0] text-white text-sm font-semibold"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </DashboardLayout>
  );
};

export default PasswordPage;
