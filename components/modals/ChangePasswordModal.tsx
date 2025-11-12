"use client";

import React, { useState } from "react";
import { X } from "lucide-react";

interface ChangePasswordModalProps {
  onClose: () => void;
  onSubmit: (password: string, confirmPassword: string) => void;
}

const ChangePasswordModal: React.FC<ChangePasswordModalProps> = ({
  onClose,
  onSubmit,
}) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = () => {
    if (password.length < 6)
      return alert("Password must be at least 6 characters.");
    if (password !== confirmPassword) return alert("Passwords do not match.");
    onSubmit(password, confirmPassword);
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-white rounded-md shadow-lg w-[95%] sm:w-[450px] p-6 relative">
        {/* Header */}
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-lg font-semibold text-gray-800">
            Change User Password
          </h2>
          <X
            size={20}
            className="text-gray-500 hover:text-gray-700 cursor-pointer"
            onClick={onClose}
          />
        </div>

        {/* New Password */}
        <div className="mb-4">
          <label
            htmlFor="newPassword"
            className="block text-gray-700 text-sm font-medium mb-1"
          >
            New Password <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            id="newPassword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter new password"
            className="w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none p-2 text-sm"
          />
          <p className="text-xs text-gray-500 mt-1">
            Password must be at least 6 characters
          </p>
        </div>

        {/* Confirm Password */}
        <div className="mb-5">
          <label
            htmlFor="confirmPassword"
            className="block text-gray-700 text-sm font-medium mb-1"
          >
            Confirm Password <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Re-enter new password"
            className="w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none p-2 text-sm"
          />
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-[#3b28f2] text-white font-medium py-2.5 rounded-md cursor-pointer hover:bg-[#2f22d6] transition-all"
        >
          Update Password
        </button>
      </div>
    </div>
  );
};

export default ChangePasswordModal;
