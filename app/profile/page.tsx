"use client";

import React, { useState } from "react";
import DashboardLayout from "@/components/latest-dashboardLayout/dashboardlayout";

const ProfilePage = () => {
  const [name, setName] = useState("Super Admin");
  const [email, setEmail] = useState("ahmadop1205@gmail.com");
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (ev) => setPreview(ev.target?.result as string);
    reader.readAsDataURL(file);
  };

  return (
    <DashboardLayout>
      <div className="px-6 py-6 bg-[#f5f7fb] min-h-screen">
        {/* PAGE TITLE */}
        <h1 className="text-xl font-semibold text-gray-800 mb-4">Profile</h1>

        <div className="flex items-start justify-between">
          <div className="bg-white rounded-xl shadow-md w-[300px]">
            <div className="bg-[#3b44ff] px-6 py-5 flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
                <img
                  src={"/profile-img.png"}
                  alt="Profile"
                  className="object-contain w-10 h-10"
                />
              </div>
              <div className="text-white">
                <p className="text-lg font-semibold leading-tight">Super</p>
                <p className="text-lg font-semibold leading-tight -mt-1">
                  Admin
                </p>
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

          <div className="flex-1 ml-6">
            <div className="flex justify-end mb-4">
              <a
                href="/password"
                className="px-4 py-2 text-sm border border-[#3b44ff] text-[#3b44ff] rounded-md hover:bg-[#3b44ff] hover:text-white transition"
              >
                Password Setting
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Profile Information
              </h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* IMAGE */}
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">
                      Image
                    </label>

                    <div className="relative bg-[#fafbff] border border-gray-200 rounded-xl flex items-center justify-center overflow-hidden">
                      <div className="w-full max-w-[350px] aspect-square bg-white flex items-center justify-center">
                        <img
                          src={preview ? preview : "/profile-img.png"}
                          alt="Profile"
                          className="object-contain max-w-full max-h-full"
                        />
                      </div>

                      <label className="absolute bottom-4 right-4 w-11 h-11 bg-[#3b44ff] rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition">
                        <input
                          type="file"
                          accept=".png,.jpg,.jpeg"
                          className="hidden"
                          onChange={handleImageChange}
                        />
                        <span className="text-white text-xl">☁</span>
                      </label>
                    </div>

                    <p className="text-xs text-gray-500 mt-2">
                      Supported Files: <b>.png</b>, <b>.jpg</b>, <b>.jpeg</b> —
                      resized to <b>400×400px</b>
                    </p>
                  </div>

                  {/* NAME / EMAIL */}
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#3b44ff]"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#3b44ff]"
                      />
                    </div>
                  </div>
                </div>

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

export default ProfilePage;
