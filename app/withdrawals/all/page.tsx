"use client";

import React, { useState } from "react";
import DashboardLayout from "@/components/latest-dashboardLayout/dashboardlayout";
import { CheckCircle, Clock, Search, XCircle } from "lucide-react";

// ------------------------------------------------------
// PAGE DATA (mock)
// ------------------------------------------------------
const allTradesData = Array.from({ length: 875 }).map((_, i) => ({
  gateway: "Bank Transfer",
  transactionId: `TXN${1000 + i}`,
  initiated: "2025-11-26 10:30 AM",
  timeAgo: `${Math.floor(Math.random() * 60)} minutes ago`,
  user: `User ${i + 1}`,
  username: `@user${i + 1}`,
  amount: `INR ${(Math.random() * 50000 + 1000).toFixed(2)}`,
  conversion: `INR 1.00 = 1.00 RS • ${(Math.random() * 50000 + 1000).toFixed(
    2
  )} RS`,
  status: "Pending",
}));

// ------------------------------------------------------
// CUSTOM TABLE WITH PAGINATION
// ------------------------------------------------------
const WithdrawalsTable = ({ trades }: { trades: any[] }) => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 50;

  const total = trades.length;
  const totalPages = Math.ceil(total / rowsPerPage);

  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = Math.min(startIndex + rowsPerPage, total);

  const paginatedTrades = trades.slice(startIndex, endIndex);

  return (
    <div className="mt-6 bg-white shadow-md rounded-xl overflow-hidden">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-[#2d33ff] text-white">
            <th className="px-4 py-3">Gateway | Transaction</th>
            <th className="px-4 py-3">Initiated</th>
            <th className="px-4 py-3">User</th>
            <th className="px-4 py-3">Amount</th>
            <th className="px-4 py-3">Conversion</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Action</th>
          </tr>
        </thead>

        <tbody>
          {paginatedTrades.map((t, i) => (
            <tr key={i} className="border-b hover:bg-gray-50 transition">
              <td className="px-4 py-2 font-semibold text-blue-600">
                {t.gateway}
                <br />
                <span className="text-gray-500 text-sm">{t.transactionId}</span>
              </td>

              <td className="px-4 py-2 text-gray-600">
                {t.initiated}
                <br />
                <span className="text-sm">{t.timeAgo}</span>
              </td>

              <td className="px-4 py-2 font-medium">
                {t.user}
                <br />
                <span className="text-blue-500">{t.username}</span>
              </td>

              <td className="px-4 py-2">{t.amount}</td>

              <td className="px-4 py-2">{t.conversion}</td>

              <td className="px-4 py-2">
                <span className="px-3 py-1 rounded-full text-sm bg-orange-100 text-orange-600">
                  {t.status}
                </span>
              </td>

              {/* ACTION COLUMN */}
              <td className="px-4 py-2">
                <button
                  className="
                    px-4 py-1.5 
                    text-sm 
                    border 
                    rounded-md 
                    transition 
                    text-[#2d33ff] 
                    border-[#2d33ff] 
                    bg-white 
                    hover:bg-[#2d33ff] 
                    hover:text-white
                  "
                >
                  Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Bottom Summary */}
      <div className="px-4 py-3 bg-white text-gray-600 text-sm border-t">
        Showing <span className="font-semibold">{startIndex + 1}</span> to{" "}
        <span className="font-semibold">{endIndex}</span> of{" "}
        <span className="font-semibold">{total}</span> results
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-t rounded-b-xl">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className={`px-3 py-1 rounded-md border ${
            page === 1
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-white hover:bg-gray-100"
          }`}
        >
          Previous
        </button>

        <div className="flex items-center gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`px-3 py-1 rounded-md border ${
                page === i + 1
                  ? "bg-[#2d33ff] text-white"
                  : "bg-white hover:bg-gray-100"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>

        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          className={`px-3 py-1 rounded-md border ${
            page === totalPages
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-white hover:bg-gray-100"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

// ------------------------------------------------------
// SUMMARY CARDS
// ------------------------------------------------------
const summaryCards = [
  {
    title: "Approved Withdrawal",
    amount: "INR 12,821,503.00",
    color: "bg-green-100 text-green-600",
    icon: <CheckCircle className="w-6 h-6" />,
  },
  {
    title: "Pending Withdrawals",
    amount: "INR 5,728,100.80",
    color: "bg-yellow-100 text-yellow-600",
    icon: <Clock className="w-6 h-6" />,
  },
  {
    title: "Rejected Withdrawals",
    amount: "INR 19,236,598.00",
    color: "bg-red-100 text-red-600",
    icon: <XCircle className="w-6 h-6" />,
  },
];

// ------------------------------------------------------
// MAIN PAGE
// ------------------------------------------------------
const AllWithdrawalsPage = () => {
  return (
    <DashboardLayout>
      <div>
        {/* Header */}
        <div className="flex flex-col md:flex-row gap-3 items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">
            All Withdrawals
          </h2>

          <div className="flex items-center gap-2">
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
        </div>

        {/* Summary Cards */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-gray-50 p-4 sm:p-6 rounded-2xl my-4">
          {summaryCards.map((item, i) => (
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

        {/* Table With Pagination */}
        <WithdrawalsTable trades={allTradesData} />
      </div>
    </DashboardLayout>
  );
};

export default AllWithdrawalsPage;
