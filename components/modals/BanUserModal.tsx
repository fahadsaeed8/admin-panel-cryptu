"use client";

import React, { useState } from "react";
import { X } from "lucide-react";

interface BanUserModalProps {
  onClose: () => void;
  onSubmit: (reason: string) => void;
}

const BanUserModal: React.FC<BanUserModalProps> = ({ onClose, onSubmit }) => {
  const [reason, setReason] = useState("");

  const handleSubmit = () => {
    if (reason.trim() === "") return;
    onSubmit(reason);
    setReason("");
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-white rounded-md shadow-lg w-[95%] sm:w-[450px] p-6 relative">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Ban User</h2>
          <X
            size={20}
            className="text-gray-500 hover:text-gray-700 cursor-pointer"
            onClick={onClose}
          />
        </div>

        {/* Description */}
        <p className="text-gray-700 text-sm mb-4">
          If you ban this user he/she won't able to access his/her dashboard.
        </p>

        {/* Textarea */}
        <div className="mb-5">
          <label
            htmlFor="reason"
            className="block text-gray-700 text-sm font-medium mb-1"
          >
            Reason <span className="text-red-500">*</span>
          </label>
          <textarea
            id="reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            rows={4}
            className="w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none p-2 text-sm"
            placeholder="Enter reason..."
          />
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-[#3b28f2] text-white font-medium py-2.5 rounded-md cursor-pointer hover:bg-[#2f22d6] transition-all"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default BanUserModal;
