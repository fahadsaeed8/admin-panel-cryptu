"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Pencil, Search, Trash } from "lucide-react";
import DashboardLayout from "@/components/latest-dashboardLayout/dashboardlayout";
import Table from "@/components/table/table";

type Trade = {
  user: string;
  username: string;
  crypto: string;
  amount: string;
  inTime: string;
  highLow: "UP" | "Down";
  result: "Win" | "Loss";
  status: "Completed";
  date: string;
};

const trades: Trade[] = [
  {
    user: "Abhishek Kumar",
    username: "abhishekkumar",
    crypto: "BTC",
    amount: "INR 1,000.00",
    inTime: "2025-08-31 09:18 AM",
    highLow: "UP",
    result: "Loss",
    status: "Completed",
    date: "2025-08-31 09:17 AM",
  },
  {
    user: "Amogh Khairav",
    username: "amoghkhairav",
    crypto: "BTC",
    amount: "INR 600.00",
    inTime: "2025-08-31 07:32 AM",
    highLow: "UP",
    result: "Loss",
    status: "Completed",
    date: "2025-08-31 07:29 AM",
  },
  {
    user: "Sivagnanavathi Singh",
    username: "sivagnanavathisingh",
    crypto: "BTS",
    amount: "INR 5,000.00",
    inTime: "2025-08-30 05:03 PM",
    highLow: "UP",
    result: "Win",
    status: "Completed",
    date: "2025-08-30 05:01 PM",
  },
  {
    user: "Nilesh Kumar",
    username: "nileshkumar",
    crypto: "BTC",
    amount: "INR 600.00",
    inTime: "2025-08-30 12:15 PM",
    highLow: "Down",
    result: "Loss",
    status: "Completed",
    date: "2025-08-30 12:12 PM",
  },
  {
    user: "Pankaj Giri",
    username: "pankajgiri",
    crypto: "BTC",
    amount: "INR 1,000.00",
    inTime: "2025-08-30 11:10 AM",
    highLow: "UP",
    result: "Win",
    status: "Completed",
    date: "2025-08-30 11:10 AM",
  },
  {
    user: "Sumit Darandale",
    username: "sumitdarandale",
    crypto: "BTC",
    amount: "INR 1,000.00",
    inTime: "2025-08-30 09:14 AM",
    highLow: "UP",
    result: "Win",
    status: "Completed",
    date: "2025-08-30 09:11 AM",
  },
];

const TradeLogAll = () => {
  const router = useRouter();

  return (
    <DashboardLayout>
      <div className="">
        {/* Search & Filter Section */}
        <div className="flex flex-col md:flex-row gap-3 items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Trade Log</h2>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-stretch border border-gray-300 rounded-md bg-white w-full md:w-72 overflow-hidden">
              <input
                type="text"
                placeholder="Username, Crypto..."
                className="w-full text-sm outline-none py-2 px-2"
              />
              <div className="bg-[#2d33ff] flex items-center justify-center px-3">
                <Search size={16} className="text-white" />
              </div>
            </div>

            <div className="flex items-stretch border border-gray-300 rounded-md bg-white w-full md:w-72 overflow-hidden">
              <input
                type="text"
                placeholder="Start Date - End Date"
                className="w-full text-sm outline-none py-2 px-2"
              />
              <div className="bg-[#2d33ff] flex items-center justify-center px-3">
                <Search size={16} className="text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        {/* <div className="overflow-x-auto rounded-md bg-white shadow-md">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#2d33ff]  text-white text-left">
                <th className="p-3">User</th>
                <th className="p-3">Crypto</th>
                <th className="p-3">Amount</th>
                <th className="p-3">In Time</th>
                <th className="p-3">High/Low</th>
                <th className="p-3">Result</th>
                <th className="p-3">Status</th>
                <th className="p-3">Date</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {trades.map((trade, index) => (
                <tr
                  key={index}
                  className={` hover:bg-orange-100 transition border-b border-gray-300 last:border-b-0`}
                >
                  <td className="py-3 pl-5">
                    <div className="flex flex-col">
                      <span className="font-medium">{trade.user}</span>
                      <span className="text-xs text-gray-500">
                        {trade.username}
                      </span>
                    </div>
                  </td>
                  <td className="p-3 ">
                    <div className="flex flex-col items-start">
                      <span className="font-semibold text-sm">
                        {trade.crypto.charAt(0)}
                      </span>
                      <span className="text-xs text-gray-500">
                        {trade.crypto}
                      </span>
                    </div>
                  </td>
                  <td className="p-3 ">{trade.amount}</td>
                  <td className="p-3 ">{trade.inTime}</td>
                  <td className="p-3 ">
                    <span
                      className={`px-2 py-1 text-xs rounded-full font-medium ${
                        trade.highLow === "UP"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {trade.highLow}
                    </span>
                  </td>
                  <td className="p-3 ">
                    <span
                      className={`px-2 py-1 text-xs rounded-full font-medium ${
                        trade.result === "Win"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {trade.result}
                    </span>
                  </td>
                  <td className="p-3 ">
                    <span className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded-full font-medium">
                      {trade.status}
                    </span>
                  </td>
                  <td className="p-3 ">{trade.date}</td>
                  <td className="p-3  text-center">
                    <button className="bg-[#2d33ff] hover:bg-[#1f26cc] cursor-pointer text-white text-xs px-3 py-1 rounded">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> */}
        <div className="overflow-x-auto rounded-md bg-white shadow-md">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#2d33ff]  text-white text-left">
                <th className="p-3">User</th>
                <th className="p-3">Crypto</th>
                <th className="p-3">Amount</th>
                <th className="p-3">In Time</th>
                <th className="p-3">High/Low</th>
                <th className="p-3">Result</th>
                <th className="p-3">Status</th>
                <th className="p-3">Date</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {trades.map((trade, index) => (
                <tr
                  key={index}
                  className={` hover:bg-orange-100 transition border-b border-gray-300 last:border-b-0`}
                >
                  <td className="py-3 pl-5">
                    <div className="flex flex-col">
                      <span className="font-medium">{trade.user}</span>
                      <a
                        className="text-xs text-blue-600 font-semibold cursor-pointer"
                        onClick={(e) => {
                          e.preventDefault();
                          router.push(`/admin/users/${trade.username}`);
                        }}
                        href="#"
                      >
                        {trade.username}
                      </a>
                    </div>
                  </td>
                  <td className="p-3 ">
                    <div className="flex flex-col items-start">
                      <span className="font-semibold text-sm">{trade.crypto.charAt(0)}</span>
                      <span className="text-xs text-gray-500">{trade.crypto}</span>
                    </div>
                  </td>
                  <td className="p-3 ">{trade.amount}</td>
                  <td className="p-3 ">{trade.inTime}</td>
                  <td className="p-3 ">
                    <span
                      className={`px-2 py-1 text-xs rounded-full font-medium ${
                        trade.highLow === "UP"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {trade.highLow}
                    </span>
                  </td>
                  <td className="p-3 ">
                    <span
                      className={`px-2 py-1 text-xs rounded-full font-medium ${
                        trade.result === "Win"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {trade.result}
                    </span>
                  </td>
                  <td className="p-3 ">
                    <span className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded-full font-medium">
                      {trade.status}
                    </span>
                  </td>
                  <td className="p-3 ">{trade.date}</td>
                  <td className="p-3  text-center">
                    <button className="bg-[#2d33ff] hover:bg-[#1f26cc] cursor-pointer text-white text-xs px-3 py-1 rounded">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TradeLogAll;
