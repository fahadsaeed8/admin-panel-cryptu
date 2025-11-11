"use client";
import DashboardLayout from "@/components/latest-dashboardLayout/dashboardlayout";
import { useState } from "react";

export default function EmailForm() {
  const [formData, setFormData] = useState({
    beingSentTo: "All Users",
    subject: "",
    message: "",
    startFrom: "",
    perBatch: "",
    coolingPeriod: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <DashboardLayout>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b pb-3">
          <h2 className="text-xl font-semibold text-gray-700">
            Send Via Email
          </h2>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded transition"
          >
            Send Via Email
          </button>
        </div>

        {/* Being Sent To */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Being Sent To <span className="text-red-500">*</span>
          </label>
          <select
            name="beingSentTo"
            value={formData.beingSentTo}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option>All Users</option>
            <option>Active Users</option>
            <option>Inactive Users</option>
          </select>
        </div>

        {/* Subject */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Subject <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="subject"
            placeholder="Subject / Title"
            value={formData.subject}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            rows={6}
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
            required
          />
        </div>

        {/* Bottom row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Start Form <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="startFrom"
              placeholder="Start from user id e.g. 1"
              value={formData.startFrom}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Per Batch <span className="text-red-500">*</span>
            </label>
            <div className="flex">
              <input
                type="number"
                name="perBatch"
                placeholder="How many users"
                value={formData.perBatch}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-l-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
              <span className="bg-gray-100 border border-l-0 border-gray-300 px-3 flex items-center rounded-r-md text-gray-700">
                User
              </span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Cooling Period <span className="text-red-500">*</span>
            </label>
            <div className="flex">
              <input
                type="number"
                name="coolingPeriod"
                placeholder="Waiting time"
                value={formData.coolingPeriod}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-l-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
              <span className="bg-gray-100 border border-l-0 border-gray-300 px-3 flex items-center rounded-r-md text-gray-700">
                Seconds
              </span>
            </div>
          </div>
        </div>

        {/* Submit */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-md font-semibold transition"
          >
            Submit
          </button>
        </div>
      </form>
    </DashboardLayout>
  );
}
