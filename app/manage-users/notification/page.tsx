"use client";

import DashboardLayout from "@/components/latest-dashboardLayout/dashboardlayout";
import { useState } from "react";

export default function NotificationsPage() {
  const [sendVia, setSendVia] = useState("Send Via Email");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <DashboardLayout>
      <h2 className="text-gray-700 text-lg font-semibold mb-6">
        Notification to Verified Users
      </h2>

      <div className="min-h-screen bg-gray-100 flex justify-center items-start">
        <div className="w-full max-w-6xl bg-white shadow-md rounded-md p-6 border border-gray-300">
          {/* Send Via Email */}
          <div className="relative border border-gray-300 rounded-md overflow-hidden mb-6 w-60">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center justify-center w-full bg-indigo-50 hover:bg-indigo-100 transition-all duration-300 py-3 font-medium text-gray-700 cursor-pointer"
            >
              <span className="mr-2">📧</span>
              {sendVia}
              <span className="ml-2 text-indigo-600">▼</span>
            </button>
            {isDropdownOpen && (
              <div className="absolute bg-white border border-gray-300 w-full shadow-lg z-10 animate-fadeIn">
                <button
                  onClick={() => {
                    setSendVia("Send Via Email");
                    setIsDropdownOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer border-b border-gray-200 last:border-b-0"
                >
                  Send Via Email
                </button>
                <button
                  onClick={() => {
                    setSendVia("Send Via SMS");
                    setIsDropdownOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  Send Via SMS
                </button>
              </div>
            )}
          </div>

          {/* Form */}
          <form className="space-y-6">
            {/* Being Sent To */}
            <div>
              <label className="text-gray-700 font-medium block mb-1">
                Being Sent To <span className="text-red-500">*</span>
              </label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 cursor-pointer">
                <option>All Users</option>
                <option>Verified Users</option>
                <option>Unverified Users</option>
              </select>
            </div>

            {/* Subject */}
            <div>
              <label className="text-gray-700 font-medium block mb-1">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Subject / Title"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-gray-700 font-medium block mb-1">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                placeholder="Write your message here..."
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-600 h-48 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              ></textarea>
            </div>

            {/* Start Form / Per Batch / Cooling Period */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="text-gray-700 font-medium block mb-1">
                  Start Form <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Start from user id e.g. 1"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              <div>
                <label className="text-gray-700 font-medium block mb-1">
                  Per Batch <span className="text-red-500">*</span>
                </label>
                <div className="flex">
                  <input
                    type="number"
                    placeholder="How many user"
                    className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                  <span className="bg-gray-100 border border-gray-300 border-l-0 px-3 flex items-center rounded-r-md text-gray-700">
                    User
                  </span>
                </div>
              </div>

              <div>
                <label className="text-gray-700 font-medium block mb-1">
                  Cooling Period <span className="text-red-500">*</span>
                </label>
                <div className="flex">
                  <input
                    type="number"
                    placeholder="Waiting time"
                    className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                  <span className="bg-gray-100 border border-gray-300 border-l-0 px-3 flex items-center rounded-r-md text-gray-700">
                    Seconds
                  </span>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-md font-medium transition-all duration-300 transform hover:scale-[1.02] active:scale-95 cursor-pointer"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
}
