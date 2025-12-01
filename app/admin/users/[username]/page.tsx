"use client";

import React, { useState } from "react";
import {
  Wallet,
  ArrowDownCircle,
  ArrowUpCircle,
  TrendingUp,
} from "lucide-react";
import DashboardLayout from "@/components/latest-dashboardLayout/dashboardlayout";
import { useParams } from "next/navigation";
import Link from "next/link";

interface Props {
  username: string;
}

export default function UserDetailPageClient() {
  // Small mock lookup so profile page can show the correct fields
  const MOCK_USERS: Record<
    string,
    {
      firstName: string;
      lastName: string;
      email: string;
      freezeAmount?: string;
      score?: string;
    }
  > = {
    abhishekkumar: {
      firstName: "Abhishek",
      lastName: "Kumar",
      email: "abhishek.kumar@example.com",
      freezeAmount: "0",
      score: "100",
    },
    amoghkhairav: {
      firstName: "Amogh",
      lastName: "Khairav",
      email: "amogh.k@example.com",
      freezeAmount: "0",
      score: "100",
    },
    sivagnanavathisingh: {
      firstName: "Sivagnanavathi",
      lastName: "Singh",
      email: "sivagna@example.com",
      freezeAmount: "0",
      score: "100",
    },
  };

  const params = useParams(); // get all route params
  const username = params?.username as string | undefined; // dynamic route

  const userFromMock = username ? MOCK_USERS[username] : undefined;

  const [firstName, setFirstName] = useState(userFromMock?.firstName ?? "");
  const [lastName, setLastName] = useState(userFromMock?.lastName ?? "");
  const [email, setEmail] = useState(userFromMock?.email ?? "");
  const [willWin, setWillWin] = useState(true);
  const [hasReferral, setHasReferral] = useState(false);
  // const [referralLink] = useState(
  //   `https://cryptostackonline.com?reference=${username}`
  // );
  const [freezeAmount, setFreezeAmount] = useState(
    userFromMock?.freezeAmount ?? "0"
  );
  const [score, setScore] = useState(userFromMock?.score ?? "100");

  const referralLink = `https://cryptostockonline.com?reference=${username}`;

  return (
    <DashboardLayout>
      <div className="px-6 space-y-6">
        {/* ===== PAGE HEADER ===== */}
        <div className="flex justify-between items-center flex-wrap gap-3">
          <h1 className="text-xl font-semibold text-gray-700">
            {firstName || lastName
              ? `${firstName} ${lastName}`
              : username || "USERNAME MISSING"}
          </h1>

          <Link href="https://cryptu-three.vercel.app" target="_blank">
            <button className="border hover:bg-[#5e48e8] border-[#5e48e8] text-[#5e48e8] hover:text-white cursor-pointer text-sm font-medium px-3 py-1.5 rounded transition">
              Login as User
            </button>
          </Link>
        </div>

        {/* ===== TOP 4 STATS ===== */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Balance */}
          <div className="bg-white rounded-lg  p-4 shadow-sm">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs text-gray-500">Balance</p>
                <h2 className="text-xl font-bold text-gray-800">
                  INR 80,892.00
                </h2>
              </div>
              <Wallet className="text-[#4c53ff]" size={32} />
            </div>
          </div>

          {/* Deposits */}
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs text-gray-500">Deposits</p>
                <h2 className="text-xl font-bold">INR 0.00</h2>
              </div>
              <ArrowDownCircle className="text-green-500" size={32} />
            </div>
          </div>

          {/* Withdrawals */}
          <div className="bg-white rounded-lg  p-4 shadow-sm">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs text-gray-500">Withdrawals</p>
                <h2 className="text-xl font-bold">INR 0.00</h2>
              </div>
              <ArrowUpCircle className="text-red-500" size={32} />
            </div>
          </div>

          {/* Transactions */}
          <div className="bg-white rounded-lg  p-4 shadow-sm">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs text-gray-500">Transactions</p>
                <h2 className="text-xl font-bold">15</h2>
              </div>
              <TrendingUp className="text-indigo-500" size={32} />
            </div>
          </div>
        </div>

        {/* ===== NEXT ROW 3 BOXES ===== */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg  p-4 shadow-sm">
            <p className="text-xs text-gray-500">Total Trades</p>
            <h2 className="text-xl font-bold">2</h2>
          </div>

          <div className="bg-white rounded-lg  p-4 shadow-sm">
            <p className="text-xs text-gray-500">Win Trades</p>
            <h2 className="text-xl font-bold">2</h2>
          </div>

          <div className="bg-white rounded-lg  p-4 shadow-sm">
            <p className="text-xs text-gray-500">Loss Trades</p>
            <h2 className="text-xl font-bold">0</h2>
          </div>

          <div className="bg-white rounded-lg  p-4 shadow-sm">
            <p className="text-xs text-gray-500">Draw Trades</p>
            <h2 className="text-xl font-bold">0</h2>
          </div>
        </div>

        {/* ===== BUTTON ROW ===== */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-3">
          <button className="bg-[#20bf6b] text-white py-2 rounded">
            Balance
          </button>
          <button className="bg-[#eb3b5a] text-white py-2 rounded">
            Balance
          </button>
          <button className="bg-[#3867d6] text-white py-2 rounded">
            Logins
          </button>
          <button className="bg-[#4b6584] text-white py-2 rounded">
            Notifications
          </button>
          <button className="bg-[#fa8231] text-white py-2 rounded">
            Ban User
          </button>
          <button className="bg-[#8854d0] text-white py-2 rounded">
            Change Password
          </button>
        </div>

        {/* ========== INFORMATION FORM (YOUR SCREENSHOT EXACT MATCH) ========== */}
        <div className="bg-white  rounded-lg p-6 space-y-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-700">
            Information of {firstName} {lastName}
          </h2>

          {/* First / Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">First Name</label>
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Last Name</label>
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          {/* Will Win / Has Referral */}
          <div className="flex items-center gap-6">
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={willWin}
                onChange={(e) => setWillWin(e.target.checked)}
              />
              Will Win
            </label>

            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={hasReferral}
                onChange={(e) => setHasReferral(e.target.checked)}
              />
              Has Referral
            </label>
          </div>

          {/* Referral Link */}
          <div>
            <label className="block text-sm font-medium">Referral Link</label>
            <input
              value={referralLink}
              readOnly
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 bg-gray-100"
            />
          </div>

          {/* Freeze Amount + Score */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Freeze Amount</label>
              <input
                value={freezeAmount}
                onChange={(e) => setFreezeAmount(e.target.value)}
                className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Score</label>
              <input
                value={score}
                onChange={(e) => setScore(e.target.value)}
                className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
          </div>
        </div>

        {/* ===== BANK DETAILS ===== */}
        <div className="bg-white border border-gray-300 rounded-lg shadow-sm p-6 mb-10">
          <h2 className="font-semibold text-lg mb-4">Bank Detail</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-medium">Account Holder Name</label>
              <input className="w-full border border-gray-300 p-2 rounded mt-1" />
            </div>

            <div>
              <label className="text-xs font-medium">Bank Account Number</label>
              <input className="w-full border border-gray-300 p-2 rounded mt-1" />
            </div>

            <div>
              <label className="text-xs font-medium">Bank Name</label>
              <input className="w-full border border-gray-300 p-2 rounded mt-1" />
            </div>

            <div>
              <label className="text-xs font-medium">IFSC Number</label>
              <input className="w-full border border-gray-300 p-2 rounded mt-1" />
            </div>
          </div>

          <button className="w-full cursor-pointer mt-4 bg-[#3867d6] hover:bg-blue-500 text-white py-2 rounded">
            Submit
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}
