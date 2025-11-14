"use client";

import React from "react";
import { Send, Monitor } from "lucide-react";
import DashboardLayout from "@/components/latest-dashboardLayout/dashboardlayout";

interface Notification {
  id: number;
  user: string;
  username: string;
  date: string;
  timeAgo: string;
  sender: string;
  method: string;
  subject: string;
}

const notifications: Notification[] = [
  {
    id: 1,
    user: "Ajim Rawoot",
    username: "@ajimrawoot",
    date: "2025-11-12 09:00 AM",
    timeAgo: "1 hour ago",
    sender: "Email",
    method: "via php",
    subject: "Your Account has been Credited",
  },
  {
    id: 2,
    user: "Sara Malik",
    username: "@saramalik",
    date: "2025-11-11 06:45 PM",
    timeAgo: "14 hours ago",
    sender: "System",
    method: "via NodeMailer",
    subject: "Your Password has been Updated",
  },
  {
    id: 3,
    user: "Bilal Khan",
    username: "@bilalkhan",
    date: "2025-11-10 03:30 PM",
    timeAgo: "2 days ago",
    sender: "Admin",
    method: "via Dashboard",
    subject: "New Login Alert from Unknown Device",
  },
];

const NotificationsPage = () => {
  return (
    <DashboardLayout>
      <div className=" min-h-screen">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-3">
          <h2 className="text-xl font-semibold text-gray-800">
            Notifications Sent to{" "}
            <span className="text-indigo-700">ajimrawoot</span>
          </h2>
          <button className="flex items-center gap-2 border border-indigo-500 text-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-600 hover:text-white transition-colors cursor-pointer">
            <Send size={16} />
            Send Notification
          </button>
        </div>

        {/* Table */}
        <div className="bg-white rounded-md shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left">
              <thead>
                <tr className="bg-indigo-600 text-white">
                  <th className="px-4 py-3 font-semibold">User</th>
                  <th className="px-4 py-3 font-semibold">Sent</th>
                  <th className="px-4 py-3 font-semibold">Sender</th>
                  <th className="px-4 py-3 font-semibold">Subject</th>
                  <th className="px-4 py-3 font-semibold">Action</th>
                </tr>
              </thead>

              <tbody>
                {notifications.map((n) => (
                  <tr
                    key={n.id}
                    className="border-t hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-4 py-3">
                      <p className="font-semibold text-gray-800">{n.user}</p>
                      <p className="text-indigo-600 text-sm">{n.username}</p>
                    </td>

                    <td className="px-4 py-3 text-gray-700">
                      <p>{n.date}</p>
                      <p className="text-sm text-gray-500">{n.timeAgo}</p>
                    </td>

                    <td className="px-4 py-3 text-gray-700">
                      <p className="font-semibold">{n.sender}</p>
                      <p className="text-sm text-gray-500">{n.method}</p>
                    </td>

                    <td className="px-4 py-3 text-gray-700">{n.subject}</td>

                    <td className="px-4 py-3">
                      <button className="flex items-center gap-1 bg-indigo-50 border border-indigo-500 text-indigo-600 px-3 py-1.5 rounded-md hover:bg-indigo-600 hover:text-white transition-colors cursor-pointer">
                        <Monitor size={16} />
                        Detail
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default NotificationsPage;
