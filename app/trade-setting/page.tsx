"use client";

import React, { useState } from "react";
import DashboardLayout from "@/components/latest-dashboardLayout/dashboardlayout";
import Table from "@/components/table/table";
import { Pencil, Trash2, X } from "lucide-react";

type TradeTime = {
  time: number;
  unit: string;
};

const TradeSetting = () => {
  const [tradeTimes, setTradeTimes] = useState<TradeTime[]>([
    { time: 30, unit: "Seconds" },
    { time: 60, unit: "Seconds" },
    { time: 90, unit: "Seconds" },
    { time: 120, unit: "Seconds" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState<TradeTime>({
    time: 0,
    unit: "Seconds",
  });

  // === Modal Open / Close ===
  const handleOpenModal = (index: number | null = null) => {
    if (index !== null) {
      // ✅ Load existing row data for edit
      setEditIndex(index);
      setFormData({ ...tradeTimes[index] });
    } else {
      // ✅ Reset for Add New
      setEditIndex(null);
      setFormData({ time: 0, unit: "Seconds" });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // === Input Change ===
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "time" ? Number(value) : value,
    });
  };

  // === Submit ===
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editIndex !== null) {
      // ✅ Update existing row
      const updated = [...tradeTimes];
      updated[editIndex] = formData;
      setTradeTimes(updated);
    } else {
      // ✅ Add new entry
      setTradeTimes([...tradeTimes, formData]);
    }

    setIsModalOpen(false);
  };

  // === Delete ===
  const handleDelete = (index: number) => {
    const updated = tradeTimes.filter((_, i) => i !== index);
    setTradeTimes(updated);
  };

  return (
    <DashboardLayout>
      <div>
        {/* Header */}
        <div className="flex flex-col md:flex-row gap-3 items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">
            Trade Settings
          </h2>
          <button
            onClick={() => handleOpenModal()}
            className="w-[110px] border border-[#2d33ff] text-[#2d33ff] py-2.5 rounded-md cursor-pointer hover:bg-[#2d33ff] hover:text-white transition-all duration-300 ease-in-out"
          >
            + Add New
          </button>
        </div>

        {/* Table */}
        <Table
          trades={tradeTimes}
          actionRenderer={(trade, index) => (
            <div className="flex justify-center gap-3">
              <button
                onClick={() => handleOpenModal(index)}
                className="flex items-center gap-1 text-[#2d33ff] border border-[#2d33ff] px-3 py-1.5 rounded-md text-xs font-medium hover:bg-[#2d33ff] hover:text-white transition cursor-pointer"
              >
                <Pencil size={14} /> Edit
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="flex items-center gap-1 text-red-500 border border-red-500 px-3 py-1.5 rounded-md text-xs font-medium hover:bg-red-500 hover:text-white transition cursor-pointer"
              >
                <Trash2 size={14} /> Delete
              </button>
            </div>
          )}
        />

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-md p-6 relative">
              {/* Header */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  {editIndex !== null
                    ? "Update Trade Setting"
                    : "Add Trade Setting"}
                </h2>
                <button onClick={handleCloseModal}>
                  <X className="text-gray-500 hover:text-gray-700" />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Time <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#2d33ff]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Unit <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="unit"
                    value={formData.unit}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#2d33ff]"
                  >
                    <option value="Seconds">Seconds</option>
                    <option value="Minutes">Minutes</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#2d33ff] text-white py-2 rounded-md hover:bg-[#1f27cc] transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default TradeSetting;
