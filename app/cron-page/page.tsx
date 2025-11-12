"use client";
import React, { useState } from "react";
import {
  Play,
  Pause,
  Edit,
  FileText,
  Plus,
  Clock,
  MoreVertical,
  AlertTriangle,
  X,
} from "lucide-react";
import DashboardLayout from "@/components/latest-dashboardLayout/dashboardlayout";

export default function CronJobsPage() {
  const [jobs, setJobs] = useState([
    {
      name: "Trade Cron",
      key: "trade_cron",
      schedule: "One Minute",
      nextRun: "2025-11-12 11:58:03",
      nextIn: "22 seconds from now",
      lastRun: "2025-11-12 11:57:03",
      lastAgo: "37 seconds ago",
      isRunning: true,
      type: "Default",
      hasWarning: true,
    },
    {
      name: "Practice Cron",
      key: "practice_cron",
      schedule: "Hourly",
      nextRun: "2025-11-12 12:28:02",
      nextIn: "30 minutes from now",
      lastRun: "2025-11-12 11:28:02",
      lastAgo: "29 minutes ago",
      isRunning: true,
      type: "Default",
      hasWarning: false,
    },
    {
      name: "Crypto Price Cron",
      key: "crypto_price_cron",
      schedule: "Hourly",
      nextRun: "2025-11-12 12:40:03",
      nextIn: "42 minutes from now",
      lastRun: "2025-11-12 11:40:03",
      lastAgo: "17 minutes ago",
      isRunning: true,
      type: "Default",
      hasWarning: true,
    },
  ]);

  const [openAction, setOpenAction] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    name: "",
    key: "",
    schedule: "",
    type: "Default",
  });

  const handleAdd = () => {
    if (!form.name || !form.key || !form.schedule) return;
    setJobs([
      ...jobs,
      {
        ...form,
        nextRun: "2025-11-12 12:00:00",
        nextIn: "Just added",
        lastRun: "-",
        lastAgo: "-",
        isRunning: false,
        hasWarning: false,
      },
    ]);
    setForm({ name: "", key: "", schedule: "", type: "Default" });
    setShowModal(false);
  };

  return (
    <DashboardLayout>
      <div className="min-h-screen text-gray-800">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold">Cron Jobs</h1>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition cursor-pointer">
              <Clock size={18} />
              Cron Schedule
            </button>
            <button
              onClick={() => setShowModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition cursor-pointer"
            >
              <Plus size={18} />
              Add
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-separate border-spacing-y-2">
            <thead>
              <tr className="bg-blue-600 text-white text-left">
                {[
                  "Name",
                  "Schedule",
                  "Next Run",
                  "Last Run",
                  "Is Running",
                  "Type",
                  "Actions",
                ].map((h) => (
                  <th key={h} className="p-3 text-sm font-medium">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {jobs.map((job, i) => (
                <tr
                  key={i}
                  className="bg-white rounded-lg shadow-sm hover:shadow-md transition"
                >
                  <td className="p-3 font-medium">
                    <div className="flex items-center gap-2">
                      {job.name}
                      {job.hasWarning && (
                        <AlertTriangle size={16} className="text-red-500" />
                      )}
                    </div>
                    <div className="text-xs text-gray-500">{job.key}</div>
                  </td>
                  <td className="p-3 text-sm">{job.schedule}</td>
                  <td className="p-3 text-sm">
                    <div>{job.nextRun}</div>
                    <div className="text-xs text-gray-500">{job.nextIn}</div>
                  </td>
                  <td className="p-3 text-sm">
                    <div>{job.lastRun}</div>
                    <div className="text-xs text-gray-500">{job.lastAgo}</div>
                  </td>
                  <td className="p-3">
                    <span
                      className={`text-xs px-3 py-1 border rounded-full ${
                        job.isRunning
                          ? "border-green-400 text-green-600"
                          : "border-gray-400 text-gray-600"
                      }`}
                    >
                      {job.isRunning ? "Running" : "Stopped"}
                    </span>
                  </td>
                  <td className="p-3 text-sm">{job.type}</td>
                  <td className="relative p-3">
                    <button
                      onClick={() => setOpenAction(openAction === i ? null : i)}
                      className="border px-3 py-1 rounded-md hover:bg-gray-100 cursor-pointer"
                    >
                      <MoreVertical size={16} />
                    </button>

                    {openAction === i && (
                      <div className="absolute right-3 mt-2 bg-white border rounded-md shadow-lg w-36 z-20">
                        {[
                          { label: "Run Now", icon: Play },
                          { label: "Pause", icon: Pause },
                          { label: "Edit", icon: Edit },
                          { label: "Logs", icon: FileText },
                        ].map(({ label, icon: Icon }) => (
                          <button
                            key={label}
                            className="flex items-center w-full gap-2 px-3 py-2 hover:bg-gray-100 text-sm cursor-pointer"
                            onClick={() => setOpenAction(null)}
                          >
                            <Icon size={14} />
                            {label}
                          </button>
                        ))}
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Add Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-30">
            <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-md relative">
              <button
                onClick={() => setShowModal(false)}
                className="absolute right-3 top-3 text-gray-500 hover:text-gray-800 cursor-pointer"
              >
                <X size={18} />
              </button>
              <h2 className="text-lg font-semibold mb-4">Add Cron Job</h2>

              <div className="space-y-3">
                {["name", "key", "schedule", "type"].map((field) => (
                  <div key={field} className="flex flex-col text-sm">
                    <label className="font-medium capitalize mb-1">
                      {field}
                    </label>
                    <input
                      value={(form as any)[field]}
                      onChange={(e) =>
                        setForm({ ...form, [field]: e.target.value })
                      }
                      placeholder={`Enter ${field}`}
                      className="border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
                    />
                  </div>
                ))}
              </div>

              <div className="flex justify-end mt-5">
                <button
                  onClick={handleAdd}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 cursor-pointer"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
