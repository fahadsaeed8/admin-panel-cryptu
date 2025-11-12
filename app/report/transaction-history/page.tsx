"use client";

import React from "react";
import DashboardLayout from "@/components/latest-dashboardLayout/dashboardlayout";
import { Search } from "lucide-react";
import Table from "@/components/table/table";

type Transaction = {
  name: string;
  user: string;
  trx: string;
  transacted: string;
  ago: string;
  amount: string;
  postBalance: string;
  details: string;
  type: "credit" | "debit";
};

const transactions: Transaction[] = [
  {
    name: "adil4564 adil4564",
    user: "@adil4564adil4564972",
    trx: "A7SFT6J2K62",
    transacted: "2025-11-11 11:24 AM",
    ago: "1 hour ago",
    amount: "- INR 332,360.00",
    postBalance: "INR 0.00",
    details: "Withdraw request via Bank Transfer",
    type: "debit",
  },
  {
    name: "adil4564 adil4564",
    user: "@adil4564adil4564972",
    trx: "V42HD6T5PJDW",
    transacted: "2025-11-11 11:20 AM",
    ago: "1 hour ago",
    amount: "- INR 36,800.00",
    postBalance: "INR 332,360.00",
    details: "Withdraw request via Bank Transfer",
    type: "debit",
  },
  {
    name: "adil4564 adil4564",
    user: "@adil4564adil4564972",
    trx: "4UUBXKEMDJN7",
    transacted: "2025-11-11 11:18 AM",
    ago: "1 hour ago",
    amount: "- INR 5,000.00",
    postBalance: "INR 369,160.00",
    details: "Withdraw request via Bank Transfer",
    type: "debit",
  },
  {
    name: "adil4564 adil4564",
    user: "@adil4564adil4564972",
    trx: "A3EF32BL3H2V",
    transacted: "2025-11-11 11:16 AM",
    ago: "1 hour ago",
    amount: "- INR 5,000.00",
    postBalance: "INR 374,160.00",
    details: "Withdraw request via Bank Transfer",
    type: "debit",
  },
  {
    name: "Prabhakar Prasad",
    user: "@prabhakarprasad",
    trx: "VXRY4I6OLSQM",
    transacted: "2025-11-11 11:13 AM",
    ago: "1 hour ago",
    amount: "+ INR 36,800.00",
    postBalance: "INR 374,160.00",
    details: "Refunded for withdrawal rejection",
    type: "credit",
  },
  {
    name: "Prabhakar Prasad",
    user: "@prabhakarprasad",
    trx: "VXRY4I6OLSQM",
    transacted: "2025-11-11 11:10 AM",
    ago: "1 hour ago",
    amount: "- INR 36,800.00",
    postBalance: "INR 337,360.00",
    details: "Withdraw request via Bank Transfer",
    type: "debit",
  },
];

const TransactionHistory = () => {
  return (
    <DashboardLayout>
      <div>
        {/* Header Section */}
        <div className="flex flex-col md:flex-row gap-3 items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              Transaction History
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-stretch border border-gray-300 rounded-md bg-white w-full md:w-72 overflow-hidden">
              <input
                type="text"
                placeholder="Username / TRX ID..."
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

        {/* Table */}
        <Table trades={transactions} />
      </div>
    </DashboardLayout>
  );
};

export default TransactionHistory;
