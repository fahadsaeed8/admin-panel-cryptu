"use client";

import React, { useState } from "react";
import { Pencil, Search, X } from "lucide-react";
import DashboardLayout from "@/components/latest-dashboardLayout/dashboardlayout";
import Table from "@/components/table/table";
import { useRouter } from "next/navigation";

type Trade = {
  user: string;
  date: string;
  crypto: string;
  amount: string;
  inTime: string;
  highLow: "UP" | "Down";
  result: "Win" | "Loss" | "Draw";
  status: "Completed" | "Incompleted";
};

const initialTrades: Trade[] = [
  {
    user: "abhishekkumar",
    crypto: "BTC",
    amount: "INR 1,000.00",
    inTime: "2025-08-31T09:18",
    highLow: "UP",
    result: "Loss",
    status: "Completed",
    date: "2025-08-31",
  },
  {
    user: "amoghkhairav",
    crypto: "BTC",
    amount: "INR 600.00",
    inTime: "2025-08-31T07:32",
    highLow: "UP",
    result: "Loss",
    status: "Completed",
    date: "2025-08-31",
  },
  {
    user: "sivagnanavathisingh",
    crypto: "BTS",
    amount: "INR 5,000.00",
    inTime: "2025-08-30T17:03",
    highLow: "UP",
    result: "Win",
    status: "Completed",
    date: "2025-08-30",
  },
  {
    user: "sivagnanavathisingh",
    crypto: "BTS",
    amount: "INR 5,000.00",
    inTime: "2025-08-30T17:03",
    highLow: "UP",
    result: "Win",
    status: "Completed",
    date: "2025-08-30",
  },
  {
    user: "sivagnanavathisingh",
    crypto: "BTS",
    amount: "INR 5,000.00",
    inTime: "2025-08-30T17:03",
    highLow: "UP",
    result: "Win",
    status: "Completed",
    date: "2025-08-30",
  },
  {
    user: "sivagnanavathisingh",
    crypto: "BTS",
    amount: "INR 5,000.00",
    inTime: "2025-08-30T17:03",
    highLow: "UP",
    result: "Win",
    status: "Completed",
    date: "2025-08-30",
  },
  {
    user: "sivagnanavathisingh",
    crypto: "BTS",
    amount: "INR 5,000.00",
    inTime: "2025-08-30T17:03",
    highLow: "UP",
    result: "Win",
    status: "Completed",
    date: "2025-08-30",
  },
  {
    user: "sivagnanavathisingh",
    crypto: "BTS",
    amount: "INR 5,000.00",
    inTime: "2025-08-30T17:03",
    highLow: "UP",
    result: "Win",
    status: "Completed",
    date: "2025-08-30",
  },
  {
    user: "sivagnanavathisingh",
    crypto: "BTS",
    amount: "INR 5,000.00",
    inTime: "2025-08-30T17:03",
    highLow: "UP",
    result: "Win",
    status: "Completed",
    date: "2025-08-30",
  },
  {
    user: "sivagnanavathisingh",
    crypto: "BTS",
    amount: "INR 5,000.00",
    inTime: "2025-08-30T17:03",
    highLow: "UP",
    result: "Win",
    status: "Completed",
    date: "2025-08-30",
  },
];

const TradeLogAll = () => {
  const router = useRouter();

  const [trades, setTrades] = useState<Trade[]>(initialTrades);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editTrade, setEditTrade] = useState<Trade | null>(null);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const modifiedTrades = trades.map((t) => ({
    ...t,

    user: (
      <span
        onClick={(e) => {
          e.stopPropagation();
          router.push(`/admin/users/${t.user}`);
        }}
        className="text-[#2d33ff] font-medium cursor-pointer cursor-pointer no-underline hover:text-[#1e26d9]"
      >
        {t.user}
      </span>
    ),
  }));

  const handleEdit = (index: number) => {
    const tradeToEdit = trades[index];
    setEditTrade({ ...tradeToEdit });
    setEditIndex(index);
    setIsModalOpen(true);
  };

  // Save Edited Data
  const handleSave = () => {
    if (editTrade && editIndex !== null) {
      const updatedTrades = [...trades];
      updatedTrades[editIndex] = { ...editTrade };
      setTrades(updatedTrades);
      setIsModalOpen(false);
      setEditTrade(null);
      setEditIndex(null);
    }
  };

  return (
    <DashboardLayout>
      <div>
        {/* Header */}
        <div className="flex flex-col md:flex-row gap-3 items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Trade Log</h2>
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

        {/* Table */}
        <div className="overflow-x-auto">
          <div className="min-w-[1000px]">
            <Table
              trades={modifiedTrades}
              actionRenderer={(row, index) => (
                <button
                  onClick={() => handleEdit(index)}
                  className="flex items-center gap-1 text-[#2d33ff] no-underline border border-[#2d33ff] px-3 py-1.5 rounded-md text-xs font-medium hover:bg-[#2d33ff] hover:text-white transition cursor-pointer"
                >
                  <Pencil size={14} /> Edit
                </button>
              )}
            />
          </div>
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
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700">
                    Username
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

                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700">
                    Date
                  </label>
                  <input
                    type="date"
                    value={editTrade.date}
                    onChange={(e) =>
                      setEditTrade({ ...editTrade, date: e.target.value })
                    }
                    className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:ring-2 focus:ring-[#2d33ff] focus:outline-none"
                  />
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

export default TradeLogAll;
