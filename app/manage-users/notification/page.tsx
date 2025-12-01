"use client";

import DashboardLayout from "@/components/latest-dashboardLayout/dashboardlayout";
import { useState } from "react";
import { Search } from "lucide-react";

export default function NotificationsPage() {
  const [sendVia, setSendVia] = useState<"email" | "sms">("email");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <DashboardLayout>

      {/* Light background area (page body) */}
      <div className="bg-[#f5f7ff] min-h-[calc(100vh-80px)] px-6 py-6">
        {/* Title row */}
        <div className="mb-4">
          <h2 className="text-[#1d2452] text-xl font-semibold">
            Notification to Verified Users
          </h2>
        </div>

        {/* Main white card, left-aligned like screenshot */}
        <div className="bg-white shadow-sm rounded-xl border border-gray-200 p-6 max-w-5xl">
          {/* SEND VIA CARD */}
          <div className="mb-6">
            <div className="relative w-full sm:w-80 border-2 border-[#3b37ff] rounded-lg overflow-hidden">
              {/* angled blue corner like in screenshot */}
              <div className="absolute right-0 top-0 w-10 h-10 bg-[#3b37ff] clip-path-triangle" />

              <button
                type="button"
                onClick={() => setIsDropdownOpen((p) => !p)}
                className="flex flex-col items-center justify-center w-full bg-[#f5f7ff] py-4 cursor-pointer"
              >
                <span className="text-3xl mb-1">✉️</span>
                <span className="font-medium text-[#1d2452] text-base">
                  {sendVia === "email" ? "Send Via Email" : "Send Via SMS"}
                </span>
              </button>

              {/* dropdown under card */}
              {isDropdownOpen && (
                <div className="absolute left-0 top-full mt-1 bg-white border border-gray-200 w-full shadow-lg rounded-md z-10">
                  <button
                    type="button"
                    onClick={() => {
                      setSendVia("email");
                      setIsDropdownOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Send Via Email
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setSendVia("sms");
                      setIsDropdownOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Send Via SMS
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* FORM */}
          <form className="space-y-6">
            {/* Being Sent To */}
            <div>
              <label className="text-gray-700 font-medium block mb-1 text-sm">
                Being Sent To <span className="text-red-500">*</span>
              </label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 text-sm focus:outline-none focus:ring-1 focus:ring-[#3b37ff]">
                <option>All Users</option>
                <option>Verified Users</option>
                <option>Unverified Users</option>
              </select>
            </div>

            {/* Subject */}
            <div>
              <label className="text-gray-700 font-medium block mb-1 text-sm">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Subject / Title"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 text-sm focus:outline-none focus:ring-1 focus:ring-[#3b37ff]"
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-gray-700 font-medium block mb-1 text-sm">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                placeholder="Write your message here..."
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 text-sm h-48 focus:outline-none focus:ring-1 focus:ring-[#3b37ff] resize-y"
              />
            </div>

            {/* Start From / Per Batch / Cooling Period */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="text-gray-700 font-medium block mb-1 text-sm">
                  Start From <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  placeholder="Start from user id e.g. 1"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 text-sm focus:outline-none focus:ring-1 focus:ring-[#3b37ff]"
                />
              </div>

              <div>
                <label className="text-gray-700 font-medium block mb-1 text-sm">
                  Per Batch <span className="text-red-500">*</span>
                </label>
                <div className="flex">
                  <input
                    type="number"
                    placeholder="How many user"
                    className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 text-gray-700 text-sm focus:outline-none focus:ring-1 focus:ring-[#3b37ff]"
                  />
                  <span className="bg-gray-100 border border-gray-300 border-l-0 px-3 flex items-center rounded-r-md text-gray-700 text-sm">
                    User
                  </span>
                </div>
              </div>

              <div>
                <label className="text-gray-700 font-medium block mb-1 text-sm">
                  Cooling Period <span className="text-red-500">*</span>
                </label>
                <div className="flex">
                  <input
                    type="number"
                    placeholder="Waiting time"
                    className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 text-gray-700 text-sm focus:outline-none focus:ring-1 focus:ring-[#3b37ff]"
                  />
                  <span className="bg-gray-100 border border-gray-300 border-l-0 px-3 flex items-center rounded-r-md text-gray-700 text-sm">
                    Seconds
                  </span>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full  px-10 bg-[#3b37ff] hover:bg-[#2925d4] text-white py-3 rounded-md font-medium text-sm transition-all duration-200 cursor-pointer"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* CSS for the little angled corner */}
      <style jsx>{`
        .clip-path-triangle {
          clip-path: polygon(100% 0, 0 0, 100% 100%);
        }
      `}</style>
    </DashboardLayout>
  );
}
