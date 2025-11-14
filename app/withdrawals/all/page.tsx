"use client";

import React from "react";
import DashboardLayout from "@/components/latest-dashboardLayout/dashboardlayout";
import Table from "@/components/table/table"; // Assuming your Table component can handle different columns
import { CheckCircle, Clock, Search, XCircle } from "lucide-react";

type PendingTrade = {
  transactionId: string;
  user: string;
  amount: string;
  conversation: string;
  status: "Pending" | "In Progress";
  action: "";
};

const pendingTrades: PendingTrade[] = [
  {
    transactionId: "TXN1001",
    user: "Sivagnanavathi Singh",
    amount: "INR 5,000.00",
    conversation: "Crypto query regarding BTS",
    status: "Pending",
    action: "",
  },
  {
    transactionId: "TXN1002",
    user: "Pankaj Giri",
    amount: "INR 1,000.00",
    conversation: "BTC transaction confirmation",
    status: "Pending",
    action: "",
  },
  {
    transactionId: "TXN1003",
    user: "Anjali Verma",
    amount: "INR 900.00",
    conversation: "XRP payment pending",
    status: "In Progress",
    action: "",
  },
  {
    transactionId: "TXN1004",
    user: "Priya Nair",
    amount: "INR 1,200.00",
    conversation: "ETH payment verification",
    status: "Pending",
    action: "",
  },
];

const data = [
  {
    title: "Approved Withdrawal",
    amount: "INR 12,344,690.00",
    color: "bg-green-100 text-green-600",
    icon: <CheckCircle className="w-6 h-6" />,
  },
  {
    title: "Pending Withdrawals",
    amount: "INR 5,474,477.80",
    color: "bg-yellow-100 text-yellow-600",
    icon: <Clock className="w-6 h-6" />,
  },
  {
    title: "Rejected Withdrawals",
    amount: "INR 16,831,726.00",
    color: "bg-red-100 text-red-600",
    icon: <XCircle className="w-6 h-6" />,
  },
];

const TradeLogPending = () => {
  return (
    <DashboardLayout>
      <div>
        {/* Header Section */}
        <div className="flex flex-col md:flex-row gap-3 items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">All Trades</h2>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-stretch border border-gray-300 rounded-md bg-white w-full md:w-72 overflow-hidden">
              <input
                type="text"
                placeholder="Username Crypto..."
                className="w-full text-sm outline-none py-3 px-2"
              />
              <div className="bg-[#2d33ff] flex items-center justify-center px-4">
                <Search size={16} className="text-white" />
              </div>
            </div>
            <div className="flex items-stretch border border-gray-300 rounded-md bg-white w-full md:w-72 overflow-hidden">
              <input
                type="text"
                placeholder="Start Date - End Date"
                className="w-full text-sm outline-none py-3 px-2"
              />
              <div className="bg-[#2d33ff] flex items-center justify-center px-4">
                <Search size={16} className="text-white" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-gray-50 p-4 sm:p-6 rounded-2xl my-4">
          {data.map((item, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6 w-full"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex items-center justify-center w-12 h-12 rounded-lg ${item.color}`}
                >
                  {item.icon}
                </div>
                <div>
                  <p className="text-xl font-semibold text-gray-900">
                    {item.amount}
                  </p>
                  <h3 className="text-gray-600 font-medium text-sm sm:text-base">
                    {item.title}
                  </h3>
                </div>
              </div>
              <div className="hidden sm:block text-gray-300 text-lg">›</div>
            </div>
          ))}
        </div>

        {/* Table Component */}
        <Table trades={pendingTrades} />
      </div>
    </DashboardLayout>
  );
};

export default TradeLogPending;
