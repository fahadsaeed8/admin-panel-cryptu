"use client";

import React, { useState } from "react";
import { X } from "lucide-react";

type BalanceModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (amount: number, remark: string) => void;
};

const BalanceModal: React.FC<BalanceModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [amount, setAmount] = useState("");
  const [remark, setRemark] = useState("");

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (!amount || parseFloat(amount) <= 0) {
      alert("Please provide a positive amount");
      return;
    }
    onSubmit(parseFloat(amount), remark);
    setAmount("");
    setRemark("");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-full max-w-md p-6 relative shadow-lg">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 cursor-pointer"
        >
          <X size={20} />
        </button>

        <h2 className="text-lg font-semibold mb-6 text-slate-800">
          Add Balance
        </h2>

        {/* Amount Field */}
        <div className="mb-4">
          <label className="block text-sm text-gray-600 mb-1">Amount *</label>
          <div className="flex">
            <input
              type="number"
              className="w-full border border-gray-300 rounded-l-md p-2 focus:outline-none focus:ring-1 focus:ring-cyan-500"
              placeholder="Please provide positive amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <span className="bg-gray-100 border border-l-0 border-gray-300 rounded-r-md px-3 flex items-center text-gray-600">
              INR
            </span>
          </div>
        </div>

        {/* Remark Field */}
        <div className="mb-6">
          <label className="block text-sm text-gray-600 mb-1">Remark *</label>
          <textarea
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-cyan-500"
            placeholder="Remark"
            rows={3}
            value={remark}
            onChange={(e) => setRemark(e.target.value)}
          />
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 shadow-md cursor-pointer transition"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default BalanceModal;
