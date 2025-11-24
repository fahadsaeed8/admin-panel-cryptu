"use client";

import React, { useState } from "react";
import { Search, X } from "lucide-react";
import DashboardLayout from "@/components/latest-dashboardLayout/dashboardlayout";

type Trade = {
  user: string;
  username: string;
  crypto: string;
  amount: string;
  inTime: string;
  highLow: "UP" | "Down";
  result: "Win" | "Loss" | "Draw";
  status: "Completed" | "Incompleted";
};

const initialTrades: Trade[] = [
  {
    user: "Abhishek Kumar",
    username: "abhishekkumar",
    crypto: "BTC",
    amount: "INR 1,000.00",
    inTime: "2025-08-31T09:18",
    highLow: "UP",
    result: "Loss",
    status: "Completed",
  },
  {
    user: "Amogh Khairav",
    username: "amoghkhairav",
    crypto: "BTC",
    amount: "INR 600.00",
    inTime: "2025-08-31T07:32",
    highLow: "UP",
    result: "Loss",
    status: "Completed",
  },
  {
    user: "Sivagnanavathi Singh",
    username: "sivagnanavathisingh",
    crypto: "BTS",
    amount: "INR 5,000.00",
    inTime: "2025-08-30T17:03",
    highLow: "UP",
    result: "Win",
    status: "Completed",
  },
  {
    user: "Rohan Pawar",
    username: "rohanpawar",
    crypto: "BTC",
    amount: "INR 3,000.00",
    inTime: "2025-11-20T07:14",
    highLow: "UP",
    result: "Draw",
    status: "Completed",
  },
];

const TradeLogWinning = () => {
  const [trades, setTrades] = useState<Trade[]>(initialTrades);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editTrade, setEditTrade] = useState<Trade | null>(null);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 50;

  // Open modal for editing
  const handleEdit = (trade: Trade, index: number) => {
    setEditTrade({ ...trade });
    const actualIndex = trades.indexOf(trade);
    setEditIndex(actualIndex);
    setIsModalOpen(true);
  };

  // Save changes
  const handleSave = () => {
    if (editTrade && editIndex !== null) {
      const updatedTrades = [...trades];
      updatedTrades[editIndex] = editTrade;
      setTrades(updatedTrades);
      setIsModalOpen(false);
      setEditTrade(null);
      setEditIndex(null);
    }
  };

  const filteredTrades = trades
    .filter((t) => t.result === "Win")
    .filter((trade) => {
      const q = searchTerm.trim().toLowerCase();
      if (!q) return true;
      return (
        trade.user.toLowerCase().includes(q) ||
        trade.username.toLowerCase().includes(q) ||
        trade.crypto.toLowerCase().includes(q)
      );
    });

  const totalPages = Math.ceil(filteredTrades.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedTrades = filteredTrades.slice(startIndex, endIndex);

  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  return (
    <DashboardLayout>
      <div>
        {/* Header */}
        <div className="flex flex-col md:flex-row gap-3 items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Winning Trades</h2>
          <div className="flex items-center gap-2">
            <div className="flex items-stretch border border-gray-300 rounded-md bg-white w-full md:w-72 overflow-hidden">
              <input
                type="text"
                placeholder="Username Crypto..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full text-sm outline-none py-3 px-2"
              />
              <div className="bg-[#2d33ff] flex items-center justify-center px-4">
                <Search size={16} className="text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#2d33ff] text-white">
                  <th className="px-4 py-3 text-left font-semibold">User</th>
                  <th className="px-4 py-3 text-left font-semibold">Crypto</th>
                  <th className="px-4 py-3 text-left font-semibold">Amount</th>
                  <th className="px-4 py-3 text-left font-semibold">In Time</th>
                  <th className="px-4 py-3 text-left font-semibold">High/Low</th>
                  <th className="px-4 py-3 text-left font-semibold">Result</th>
                  <th className="px-4 py-3 text-left font-semibold">Status</th>
                  <th className="px-4 py-3 text-left font-semibold">Date</th>
                  <th className="px-4 py-3 text-right font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {paginatedTrades.length > 0 ? (
                  paginatedTrades.map((trade, index) => (
                    <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition">
                      <td className="px-4 py-3">
                        <div className="flex flex-col">
                          <span className="font-medium text-gray-800">{trade.user}</span>
                          <a className="text-xs text-blue-600 font-semibold" href="#">{trade.username}</a>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex flex-col">
                          <span className="font-semibold text-gray-800">{trade.crypto.charAt(0)}</span>
                          <span className="text-xs text-gray-500">{trade.crypto}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-gray-800">{trade.amount}</td>
                      <td className="px-4 py-3 text-gray-800">{trade.inTime}</td>
                      <td className="px-4 py-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${trade.highLow === "UP" ? "border-green-400 text-green-600 bg-green-50" : "border-red-400 text-red-600 bg-red-50"}`}>
                          {trade.highLow}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${trade.result === "Win" ? "border-green-400 text-green-600 bg-green-50" : trade.result === "Loss" ? "border-red-400 text-red-600 bg-red-50" : "border-gray-400 text-gray-600 bg-gray-50"}`}>
                          {trade.result}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold border border-green-400 text-green-600 bg-green-50">{trade.status}</span>
                      </td>
                      <td className="px-4 py-3 text-gray-800">{trade.inTime}</td>
                      <td className="px-4 py-3 text-right">
                        <button onClick={() => handleEdit(trade, index)} className="px-3 py-1.5 bg-[#2d33ff] text-white text-xs font-medium rounded hover:bg-[#1e26d9] transition">Edit</button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={9} className="px-4 py-6 text-center text-gray-500">No trades found</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">
            Showing {startIndex + 1} to {Math.min(endIndex, filteredTrades.length)} of {filteredTrades.length} results
          </p>

          {totalPages > 1 && (
            <div className="flex items-center gap-2 flex-wrap justify-center md:justify-end">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition"
              >
                ‹
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                if (
                  page === 1 ||
                  page === totalPages ||
                  (page >= currentPage - 1 && page <= currentPage + 1)
                ) {
                  return (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition ${
                        page === currentPage
                          ? "bg-[#2d33ff] text-white"
                          : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {page}
                    </button>
                  );
                }
                if (page === currentPage - 2 || page === currentPage + 2) {
                  return (
                    <span key={`ellipsis-${page}`} className="px-2 text-gray-500">
                      …
                    </span>
                  );
                }
                return null;
              })}

              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition"
              >
                ›
              </button>
            </div>
          )}
        </div>

        {/* Edit Modal */}
        {isModalOpen && editTrade && (
          <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-6 relative">
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>

              <h2 className="text-lg font-semibold mb-4">Edit Trade</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* User */}
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700">
                    User
                  </label>
                  <input
                    type="text"
                    value={editTrade.user}
                    onChange={(e) =>
                      setEditTrade({ ...editTrade, user: e.target.value })
                    }
                    className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:ring-2 focus:ring-[#2d33ff] focus:outline-none"
                  />
                </div>

                {/* Username */}
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700">
                    Username
                  </label>
                  <input
                    type="text"
                    value={editTrade.username}
                    onChange={(e) =>
                      setEditTrade({ ...editTrade, username: e.target.value })
                    }
                    className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:ring-2 focus:ring-[#2d33ff] focus:outline-none"
                  />
                </div>

                {/* Crypto */}
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700">
                    Crypto
                  </label>
                  <input
                    type="text"
                    value={editTrade.crypto}
                    onChange={(e) =>
                      setEditTrade({ ...editTrade, crypto: e.target.value })
                    }
                    className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:ring-2 focus:ring-[#2d33ff] focus:outline-none"
                  />
                </div>

                {/* Amount */}
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700">
                    Amount
                  </label>
                  <input
                    type="text"
                    value={editTrade.amount}
                    onChange={(e) =>
                      setEditTrade({ ...editTrade, amount: e.target.value })
                    }
                    className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:ring-2 focus:ring-[#2d33ff] focus:outline-none"
                  />
                </div>

                {/* In Time */}
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700">
                    In Time
                  </label>
                  <input
                    type="datetime-local"
                    value={editTrade.inTime}
                    onChange={(e) =>
                      setEditTrade({ ...editTrade, inTime: e.target.value })
                    }
                    className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:ring-2 focus:ring-[#2d33ff] focus:outline-none"
                  />
                </div>

                {/* High / Low */}
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700">
                    High / Low
                  </label>
                  <select
                    value={editTrade.highLow}
                    onChange={(e) =>
                      setEditTrade({
                        ...editTrade,
                        highLow: e.target.value as "UP" | "Down",
                      })
                    }
                    className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:ring-2 focus:ring-[#2d33ff] focus:outline-none"
                  >
                    <option value="UP">UP</option>
                    <option value="Down">Down</option>
                  </select>
                </div>

                {/* Result */}
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700">
                    Result
                  </label>
                  <select
                    value={editTrade.result}
                    onChange={(e) =>
                      setEditTrade({
                        ...editTrade,
                        result: e.target.value as "Win" | "Loss" | "Draw",
                      })
                    }
                    className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:ring-2 focus:ring-[#2d33ff] focus:outline-none"
                  >
                    <option value="Win">Win</option>
                    <option value="Loss">Loss</option>
                    <option value="Draw">Draw</option>
                  </select>
                </div>

                {/* Status */}
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700">
                    Status
                  </label>
                  <select
                    value={editTrade.status}
                    onChange={(e) =>
                      setEditTrade({
                        ...editTrade,
                        status: e.target.value as "Completed" | "Incompleted",
                      })
                    }
                    className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:ring-2 focus:ring-[#2d33ff] focus:outline-none"
                  >
                    <option value="Completed">Completed</option>
                    <option value="Incompleted">Incompleted</option>
                  </select>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex justify-end mt-6 gap-3">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 text-gray-800"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-4 py-2 rounded-md bg-[#2d33ff] text-white hover:bg-[#1e26d9]"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default TradeLogWinning;
