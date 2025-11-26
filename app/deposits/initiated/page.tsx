"use client";

import React from "react";
import DashboardLayout from "@/components/latest-dashboardLayout/dashboardlayout";
import { Search } from "lucide-react";

type Deposit = {
  transactionId: string;
  user: string;
  amount: string;
  conversation: string;
  status: string;
  action: string;
};

const initiatedData: Deposit[] = []; // empty → will show “Data not found”

const InitiatedDeposits = () => {
  return (
    <DashboardLayout>
      <div className="w-full">

        {/* 🔍 Search Filters */}
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

        {/* 🔵 Page Heading (matches all deposit pages) */}
        <h1 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
          Initiated Deposits
        </h1>

        {/* 📄 Table */}
        <div className="bg-white rounded-lg shadow overflow-x-auto">
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

            <tbody>
              {initiatedData.length === 0 ? (
                <tr>
                  <td
                    colSpan={7}
                    className="text-center text-gray-500 py-10 text-sm"
                  >
                    No initiated deposits found
                  </td>
                </tr>
              ) : (
                initiatedData.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="py-3 px-4">{item.transactionId}</td>
                    <td className="py-3 px-4">--</td>
                    <td className="py-3 px-4">{item.user}</td>
                    <td className="py-3 px-4">{item.amount}</td>
                    <td className="py-3 px-4">{item.conversation}</td>

                    {/* Status Badge */}
                    <td className="py-3 px-4">
                      <span className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700">
                        Initiated
                      </span>
                    </td>

                    <td className="py-3 px-4 text-blue-600 cursor-pointer">
                      View
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

      </div>
    </DashboardLayout>
  );
};

export default InitiatedDeposits;
