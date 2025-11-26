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
    { firstName: string; lastName: string; email: string; freezeAmount?: string; score?: string }
  > = {
    abhishekkumar: { firstName: "Abhishek", lastName: "Kumar", email: "abhishek.kumar@example.com", freezeAmount: "0", score: "100" },
    amoghkhairav: { firstName: "Amogh", lastName: "Khairav", email: "amogh.k@example.com", freezeAmount: "0", score: "100" },
    sivagnanavathisingh: { firstName: "Sivagnanavathi", lastName: "Singh", email: "sivagna@example.com", freezeAmount: "0", score: "100" },
  };

  const params = useParams(); // get all route params
  const username = params?.username as string | undefined; // dynamic route

  const userFromMock = username ? MOCK_USERS[username] : undefined;

  const [firstName, setFirstName] = useState(userFromMock?.firstName ?? "");
  const [lastName, setLastName] = useState(userFromMock?.lastName ?? "");
  const [email, setEmail] = useState(userFromMock?.email ?? "");
  // const [referralLink] = useState(
  //   `https://cryptostackonline.com?reference=${username}`
  // );
  const [freezeAmount, setFreezeAmount] = useState(userFromMock?.freezeAmount ?? "0");
  const [score, setScore] = useState(userFromMock?.score ?? "100");



  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-4 px-6 flex-wrap gap-3">
        <h1 className="text-2xl font-bold text-gray-800">
          {(firstName || lastName) ? `${firstName} ${lastName}`.trim() : (username || "USERNAME MISSING")}
        </h1>

        <div className="flex items-center gap-3 flex-wrap">
          <Link href="https://cryptu-three.vercel.app" target="_blank" passHref>
            <button className="border border-[#5e48e8] hover:bg-blue-500 text-[#5e48e8] hover:text-black cursor-pointer text-sm font-medium px-3 py-1.5 rounded-sm transition">
              🗒 Login as User
            </button>
          </Link>
        </div>
      </div>

      <div className="px-6 space-y-6">
        {/* === Top Stats Boxes === */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          <div className="border rounded-lg p-4 bg-white shadow-sm">
            <div className="flex justify-between">
              <div>
                <p className="text-sm text-gray-500">Balance</p>
                <h2 className="text-xl font-semibold">INR 4,200.00</h2>
              </div>
              <Wallet className="text-blue-600" size={30} />
            </div>
          </div>

          <div className="border rounded-lg p-4 bg-white shadow-sm">
            <div className="flex justify-between">
              <div>
                <p className="text-sm text-gray-500">Deposits</p>
                <h2 className="text-xl font-semibold">INR 0.00</h2>
              </div>
              <ArrowDownCircle className="text-green-600" size={30} />
            </div>
          </div>

          <div className="border rounded-lg p-4 bg-white shadow-sm">
            <div className="flex justify-between">
              <div>
                <p className="text-sm text-gray-500">Withdrawals</p>
                <h2 className="text-xl font-semibold">INR 0.00</h2>
              </div>
              <ArrowUpCircle className="text-red-600" size={30} />
            </div>
          </div>

          <div className="border rounded-lg p-4 bg-white shadow-sm">
            <div className="flex justify-between">
              <div>
                <p className="text-sm text-gray-500">Transactions</p>
                <h2 className="text-xl font-semibold">7</h2>
              </div>
              <TrendingUp className="text-indigo-600" size={30} />
            </div>
          </div>
        </div>

        {/* === Buttons Row === */}
        <div className="flex flex-wrap gap-3">
          <button className="px-4 py-2 rounded bg-green-600 text-white">
            💰 Balance
          </button>
          <button className="px-4 py-2 rounded bg-red-600 text-white">
            🧾 Balance
          </button>
          <button className="px-4 py-2 rounded bg-blue-600 text-white">
            🔐 Logins
          </button>
          <button className="px-4 py-2 rounded bg-gray-600 text-white">
            🔔 Notifications
          </button>
          <button className="px-4 py-2 rounded bg-orange-600 text-white">
            🚫 Ban User
          </button>
          <button className="px-4 py-2 rounded bg-purple-600 text-white">
            🔑 Change Password
          </button>
        </div>

        {/* === User Info Section === */}
        <div className="bg-white p-5 rounded-lg shadow-sm border">
          <h2 className="font-semibold text-lg mb-4">
            Information of {(firstName || lastName) ? `${firstName} ${lastName}`.trim() : username}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm">First Name</label>
              <input
                className="w-full border rounded p-2 mt-1"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            <div>
              <label className="text-sm">Last Name</label>
              <input
                className="w-full border rounded p-2 mt-1"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div>
              <label className="text-sm">Email</label>
              <input
                className="w-full border rounded p-2 mt-1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* <div>
              <label className="text-sm">Referral Link</label>
              <input
                className="w-full border rounded p-2 mt-1"
                value={referralLink}
                readOnly
              />
            </div> */}

            <div>
              <label className="text-sm">Freeze Amount</label>
              <input
                className="w-full border rounded p-2 mt-1"
                value={freezeAmount}
                onChange={(e) => setFreezeAmount(e.target.value)}
              />
            </div>

            <div>
              <label className="text-sm">Score</label>
              <input
                className="w-full border rounded p-2 mt-1"
                value={score}
                onChange={(e) => setScore(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* === Bank Detail Section === */}
        <div className="bg-white p-5 rounded-lg shadow-sm border">
          <h2 className="font-semibold text-lg mb-4">Bank Detail</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm">Account Holder Name</label>
              <input className="w-full border rounded p-2 mt-1" />
            </div>

            <div>
              <label className="text-sm">Bank Account Number</label>
              <input className="w-full border rounded p-2 mt-1" />
            </div>

            <div>
              <label className="text-sm">Bank Name</label>
              <input className="w-full border rounded p-2 mt-1" />
            </div>

            <div>
              <label className="text-sm">IFSC Number</label>
              <input className="w-full border rounded p-2 mt-1" />
            </div>
          </div>

          <button className="w-full mt-4 py-2 bg-blue-600 text-white rounded">
            Submit
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}
