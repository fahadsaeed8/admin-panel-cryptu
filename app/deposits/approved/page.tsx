"use client";

import React from "react";
import DashboardLayout from "@/components/latest-dashboardLayout/dashboardlayout";
import Table from "@/components/table/table"; // Assuming your Table component can handle different columns

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

const TradeLogPending = () => {
  return (
    <DashboardLayout>
      <div>
        {/* Header Section */}
        <div className="flex flex-col md:flex-row gap-3 items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              Approved Trades
            </h2>
          </div>
        </div>

        {/* Table Component */}
        <Table trades={pendingTrades} />
      </div>
    </DashboardLayout>
  );
};

export default TradeLogPending;
