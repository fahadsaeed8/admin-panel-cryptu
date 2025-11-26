"use client";

import React from "react";
import DashboardLayout from "@/components/latest-dashboardLayout/dashboardlayout";
import { Search, XCircle } from "lucide-react";

type PendingTrade = {
  transactionId: string;
  user: string;
  amount: string;
  conversation: string;
  status: "Rejected";
};

const pendingTrades: PendingTrade[] = [
  {
    transactionId: "TXN1001",
    user: "Sivagnanavathi Singh",
    amount: "INR 5,000.00",
    conversation: "Crypto query regarding BTS",
    status: "Rejected",
  },
  {
    transactionId: "TXN1002",
    user: "Pankaj Giri",
    amount: "INR 1,000.00",
    conversation: "BTC transaction confirmation",
    status: "Rejected",
  },
  {
    transactionId: "TXN1003",
    user: "Anjali Verma",
    amount: "INR 900.00",
    conversation: "XRP payment pending",
    status: "Rejected",
  },
  {
    transactionId: "TXN1004",
    user: "Priya Nair",
    amount: "INR 1,200.00",
    conversation: "ETH payment verification",
    status: "Rejected",
  },
];

const TradeLogPending = () => {
  return (
    <DashboardLayout>
      <div>
        {/* Header Section */}
        <div className="flex flex-col md:flex-row gap-3 items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">All Trades</h2>

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

        {/* TABLE UI EXACTLY LIKE APPROVED PAGE */}
        <div className="mt-6 bg-white shadow-md rounded-xl overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#2d33ff] text-white">
                <th className="px-3 py-2">Gateway | Transaction</th>
                <th className="px-3 py-2">Initiated</th>
                <th className="px-3 py-2">User</th>
                <th className="px-3 py-2">Amount</th>
                <th className="px-3 py-2">Conversion</th>
                <th className="px-3 py-2">Status</th>
                <th className="px-3 py-2">Action</th>
              </tr>
            </thead>

            <tbody>
              {pendingTrades.map((t, i) => (
                <tr key={i} className="border-b hover:bg-gray-50 transition">
                  
                  {/* Gateway + Transaction */}
                  <td className="px-4 py-2 font-semibold text-blue-600">
                    Bank Transfer
                    <br />
                    <span className="text-gray-500 text-sm">
                      {t.transactionId}
                    </span>
                  </td>

                  {/* Initiated */}
                  <td className="px-4 py-2 text-gray-600">
                    2025-11-26 10:20 AM
                    <br />
                    <span className="text-sm">12 minutes ago</span>
                  </td>

                  {/* User */}
                  <td className="px-4 py-2 font-medium">
                    {t.user}
                    <br />
                    <span className="text-blue-500">@user</span>
                  </td>

                  {/* Amount */}
                  <td className="px-4 py-2">{t.amount}</td>

                  {/* Conversion */}
                  <td className="px-4 py-2 text-sm text-gray-700">
                    INR 1.00 = 1.00 RS • {t.amount}
                  </td>

                  {/* 🔴 Rejected Status Pill */}
                  <td className="px-4 py-2">
                    <span className="px-3 py-1 rounded-full text-sm bg-red-100 text-red-600 flex items-center gap-1 w-fit">
                      <XCircle size={14} />
                      Rejected
                    </span>
                  </td>

                  {/* Details Button */}
                  <td className="px-4 py-2">
                    <button
                      className="
                        px-4 py-1.5 text-sm border rounded-md transition 
                        text-[#2d33ff] border-[#2d33ff] bg-white 
                        hover:bg-[#2d33ff] hover:text-white
                      "
                    >
                      Details
                    </button>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>

          {/* Footer Summary */}
          <div className="px-4 py-3 bg-white text-gray-600 text-sm border-t">
            Showing <span className="font-semibold">1</span> to{" "}
            <span className="font-semibold">{pendingTrades.length}</span> of{" "}
            <span className="font-semibold">{pendingTrades.length}</span>{" "}
            results
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TradeLogPending;
