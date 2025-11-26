"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import DashboardLayout from "@/components/latest-dashboardLayout/dashboardlayout";
import {
  DollarSign,
  ArrowUpCircle,
  ArrowDownCircle,
  Repeat,
  LineChart,
  Trophy,
  XCircle,
  MinusCircle,
  RefreshCw,
  Wallet,
  Lock,
  Bell,
  Ban,
} from "lucide-react";
import BalanceModal from "@/components/modals/BalanceModal";
import WithdrawModal from "@/components/modals/WithdrawModal";
import Link from "next/link";
import BanUserModal from "@/components/modals/BanUserModal";
import ChangePasswordModal from "@/components/modals/ChangePasswordModal";

const UserDetailPage = () => {
  const [isBalanceModalOpen, setIsBalanceModalOpen] = useState(false);
  const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isPasswordOpen, setIsPasswordOpen] = useState(false);

  const handlePasswordChange = (password: string, confirmPassword: string) => {
    console.log("Password changed:", { password, confirmPassword });
    setIsPasswordOpen(false);
  };

  const handleBanSubmit = (reason: string) => {
    console.log("User banned for reason:", reason);
    setIsOpen(false);
  };

  const handleAddBalance = (amount: number, remark: string) => {
    console.log("Amount:", amount);
    console.log("Remark:", remark);
    // Add your API call here
  };

  const handleWithdrawBalance = (amount: number, remark: string) => {
    console.log("Amount:", amount);
    console.log("Remark:", remark);
    // Add your API call here
  };

  const { username } = useParams();

  // Sample user data (replace with API call later)
  const user = {
    firstName: "Ajim",
    lastName: "Rawoot",
    email: "ajimrawoot86@gmail.com",
    balance: "INR 0.00",
    deposits: "INR 0.00",
    withdrawals: "INR 0.00",
    totalTrades: 1,
    winTrades: 1,
    lossTrades: 0,
    transactions: 4,
    drawTrades: 0,
    referralLink: `https://cryptostackonline.com?reference=${username}`,
    freezeAmount: "INR 0.00",
    score: "0",
    willWin: true,
    hasReferral: true,
    bank: {
      accountHolder: "Afzan Rawoot",
      bankName: "Bank of Maharashtra",
      accountNumber: "60258941968",
      ifsc: "MAHB0001668",
    },
  };

  const cards = [
    { title: "Balance", value: user.balance, icon: Wallet },
    { title: "Deposits", value: user.deposits, icon: ArrowDownCircle },
    { title: "Withdrawals", value: user.withdrawals, icon: ArrowUpCircle },
    { title: "Transactions", value: user.transactions, icon: Repeat },
    { title: "Total Trades", value: user.totalTrades, icon: LineChart },
    { title: "Win Trades", value: user.winTrades, icon: Trophy },
    { title: "Loss Trades", value: user.lossTrades, icon: XCircle },
    { title: "Draw Trades", value: user.drawTrades, icon: MinusCircle },
  ];

  return (
    <DashboardLayout>
      <div className="">
        <h2 className="text-2xl font-semibold text-slate-800 mb-6">
          User Detail –{" "}
          <span className="text-cyan-600 font-semibold">{user.firstName} {user.lastName}</span>
        </h2>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={i}
                className="bg-white shadow-sm border border-gray-200 rounded-xl p-5 flex flex-col items-center justify-center hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Icon className="text-cyan-600" size={20} />
                  <span className="text-sm text-gray-500">{card.title}</span>
                </div>
                <span className="text-lg font-semibold text-gray-800">
                  {card.value}
                </span>
              </div>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 mb-8">
          <button
            onClick={() => setIsBalanceModalOpen(true)}
            className="flex items-center gap-2 bg-[#28c76f] text-white px-9 py-2 rounded-sm text-sm shadow-xl hover:shadow-lg hover:bg-green-700 transition-all cursor-pointer"
          >
            <Wallet size={16} /> Balance
          </button>
          <BalanceModal
            isOpen={isBalanceModalOpen}
            onClose={() => setIsBalanceModalOpen(false)}
            onSubmit={handleAddBalance}
          />
          <button
            onClick={() => setIsWithdrawModalOpen(true)}
            className="flex items-center gap-2 bg-[#e7000b] text-white px-9 py-2 rounded-sm text-sm shadow-xl hover:shadow-lg hover:bg-red-700 transition-all cursor-pointer"
          >
            <ArrowUpCircle size={16} /> Withdraw
          </button>
          <WithdrawModal
            isOpen={isWithdrawModalOpen}
            onClose={() => setIsWithdrawModalOpen(false)}
            onSubmit={handleWithdrawBalance}
          />
          <button className="flex items-center gap-2 bg-[#4634ff] text-white px-9 py-2 rounded-sm text-sm shadow-xl hover:shadow-lg hover:bg-indigo-700 transition-all cursor-pointer">
            <RefreshCw size={16} /> Logins
          </button>
          <Link href={"/notifications"}>
            <button className="flex items-center gap-2 bg-[#45556c] text-white px-9 py-2 rounded-sm text-sm shadow-xl hover:shadow-lg hover:bg-slate-700 transition-all cursor-pointer">
              <Bell size={16} /> Notifications
            </button>
          </Link>
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2 bg-[#ff9f43] text-white px-9 py-2 rounded-sm text-sm shadow-xl hover:shadow-lg hover:bg-orange-600 transition-all cursor-pointer"
          >
            <Ban size={16} /> Ban User
          </button>
          {isOpen && (
            <BanUserModal
              onClose={() => setIsOpen(false)}
              onSubmit={handleBanSubmit}
            />
          )}
          <button
            onClick={() => setIsPasswordOpen(true)}
            className="flex items-center gap-2 bg-[#9810fa] text-white px-9 py-2 rounded text-sm shadow-xl hover:shadow-lg hover:bg-purple-700 transition-all cursor-pointer"
          >
            <Lock size={16} /> Change Password
          </button>
          {isPasswordOpen && (
            <ChangePasswordModal
              onClose={() => setIsPasswordOpen(false)}
              onSubmit={handlePasswordChange}
            />
          )}
        </div>

        {/* User Info */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 mb-8">
          <h3 className="text-lg font-semibold mb-4 text-slate-800">
            Information of {user.firstName} {user.lastName}
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-500 mb-1">
                First Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2 bg-gray-50"
                value={user.firstName}
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">
                Last Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2 bg-gray-50"
                value={user.lastName}
                readOnly
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm text-gray-500 mb-1">Email</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2 bg-gray-50"
                value={user.email}
                readOnly
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm text-gray-500 mb-1">
                Referral Link
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2 bg-gray-50"
                value={user.referralLink}
                readOnly
              />
            </div>

            {/* New Field: Freeze Amount */}
            <div>
              <label className="block text-sm text-gray-500 mb-1">
                Freeze Amount
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2 bg-gray-50"
                value={user.freezeAmount}
                readOnly
              />
            </div>

            {/* New Field: Score */}
            <div>
              <label className="block text-sm text-gray-500 mb-1">Score</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2 bg-gray-50"
                value={user.score}
                readOnly
              />
            </div>

            {/* New Checkboxes */}
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={user.willWin}
                readOnly
                className="h-4 w-4 border border-gray-400 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
              />
              <label className="text-sm text-gray-600">Will Win</label>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={user.hasReferral}
                readOnly
                className="h-4 w-4 border border-gray-400 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
              />
              <label className="text-sm text-gray-600">Has Referral</label>
            </div>
          </div>
        </div>

        {/* Bank Details */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4 text-slate-800 flex items-center gap-2">
            <DollarSign className="text-cyan-600" size={18} />
            Bank Detail
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-500 mb-1">
                Account Holder Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2 bg-gray-50"
                value={user.bank.accountHolder}
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">
                Bank Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2 bg-gray-50"
                value={user.bank.bankName}
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">
                Bank Account Number
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2 bg-gray-50"
                value={user.bank.accountNumber}
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">
                IFSC Number
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2 bg-gray-50"
                value={user.bank.ifsc}
                readOnly
              />
            </div>
          </div>

          <button className="mt-6 flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-md shadow-md hover:shadow-lg hover:bg-blue-700 transition-all cursor-pointer">
            <SaveIcon size={16} /> Submit
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

const SaveIcon = (props: any) => <Wallet {...props} />;

export default UserDetailPage;
