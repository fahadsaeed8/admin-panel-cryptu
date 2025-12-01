"use client";

import React from "react";
import DashboardLayout from "@/components/latest-dashboardLayout/dashboardlayout";
import { Search } from "lucide-react";

type PendingTrade = {
  transactionId: string;
  user: string;
  amount: string;
  conversation: string;
  status: string;
  action: string;
};

const pendingTrades: PendingTrade[] = []; // Empty so it shows “Data not found”

const RejectedTrades = () => {
  return (
    <DashboardLayout>
      <div className="w-full">

        {/* 🔍 Search Section */}
        <div className="flex flex-col md:flex-row gap-3 items-center justify-end mb-6">
          <div className="flex items-stretch border border-gray-300 rounded-md bg-white w-full md:w-72 overflow-hidden">
            <input
              type="text"
              placeholder="Username / Email"
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

        {/* 🟥 Heading (Same style as Deposit History mock) */}
        <h1 className="text-2xl font-semibold text-gray-900 mb-4">
          Rejected Trades
        </h1>

        {/* 📄 Table */}
        <div className="bg-white rounded-lg shadow">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#2d33ff] text-white text-sm">
                <th className="py-3 px-4">Gateway | Transaction</th>
                <th className="py-3 px-4">Initiated</th>
                <th className="py-3 px-4">User</th>
                <th className="py-3 px-4">Amount</th>
                <th className="py-3 px-4">Conversion</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Action</th>
              </tr>
            </thead>

            {/* Empty state */}
            <tbody>
              <tr>
                <td
                  colSpan={7}
                  className="text-center text-gray-500 py-8 text-sm"
                >
                  Data not found
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </DashboardLayout>
  );
};

export default RejectedTrades;
