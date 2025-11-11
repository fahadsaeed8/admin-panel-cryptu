"use client";

import React from "react";
import {
  AlertTriangle,
  Users,
  Mail,
  Phone,
  BarChart2,
  Trophy,
} from "lucide-react";
import DashboardLayout from "@/components/latest-dashboardLayout/dashboardlayout";

const DashboardPage = () => {
  const stats = [
    {
      title: "Total Users",
      value: 200,
      icon: <Users className="text-purple-600 w-6 h-6" />,
    },
    {
      title: "Active Users",
      value: 83,
      icon: <Users className="text-green-600 w-6 h-6" />,
    },
    {
      title: "Email Unverified Users",
      value: 114,
      icon: <Mail className="text-orange-500 w-6 h-6" />,
    },
    {
      title: "Mobile Unverified Users",
      value: 114,
      icon: <Phone className="text-orange-500 w-6 h-6" />,
    },
    {
      title: "Total Trades",
      value: 381,
      icon: <BarChart2 className="text-blue-500 w-6 h-6" />,
    },
    {
      title: "Win Trades",
      value: 192,
      icon: <Trophy className="text-green-500 w-6 h-6" />,
    },
  ];

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
        <button className="bg-[#f1efff] text-[#5e48e8] text-sm font-medium px-4 py-2 rounded-md hover:bg-[#e4e0ff] transition">
          Cron Setup
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {stats.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all"
          >
            <div>
              <h2 className="text-sm font-medium text-gray-500">
                {item.title}
              </h2>
              <p className="text-2xl font-semibold text-gray-800 mt-1">
                {item.value}
              </p>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">{item.icon}</div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
