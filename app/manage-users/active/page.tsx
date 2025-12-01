"use client";

import React from "react";
import { useRouter } from "next/navigation";
import DashboardLayout from "@/components/latest-dashboardLayout/dashboardlayout";
import Table from "@/components/table/table";

type User = {
  name: string;
  username: string;
  email: string;
  mobile?: string;
  country?: string;
  joinedAt: string;
  timeAgo: string;
  balance: string;
};

const users: User[] = [
  {
    name: "Manjunath R",
    username: "manjunathr",
    email: "manja.manjunath1742@gmail.com",
    mobile: "91",
    country: "IN",
    joinedAt: "2025-11-10 11:59 AM",
    timeAgo: "5 hours ago",
    balance: "INR 0.00",
  },
  {
    name: "Praween Khatoon",
    username: "praweenkhatoon",
    email: "cutegamer609@gmail.com",
    mobile: "91",
    country: "IN",
    joinedAt: "2025-11-10 10:14 AM",
    timeAgo: "6 hours ago",
    balance: "INR 0.00",
  },
];

const ActiveUserPage = () => {
  const router = useRouter();

  return (
    <DashboardLayout>
      <div className="p-4">
        <div className="flex flex-col md:flex-row gap-3 items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-slate-800">All Users</h2>
        </div>

        <Table
          trades={users.map((u) => ({
            user: (
              <div className="flex flex-col">
                <span className="font-semibold text-gray-800">{u.name}</span>
                <span className="text-xs text-blue-600 font-semibold cursor-pointer">@{u.username}</span>
              </div>
            ),
            emailMobile: (
              <div className="flex flex-col text-xs text-gray-600">
                <span>{u.email}</span>
                <span>{u.mobile}</span>
              </div>
            ),
            country: u.country || "",
            joinedAt: (
              <div className="flex flex-col text-xs text-gray-600">
                <span>{u.joinedAt}</span>
                <span>{u.timeAgo}</span>
              </div>
            ),
            balance: u.balance,
          }))}
          actionRenderer={(_row, index) => (
            <button
              onClick={() =>
                router.push(`/manage-users/active/${users[index].username}`)
              }
              className="border border-indigo-600 text-indigo-600 px-3 py-1 rounded-md hover:bg-indigo-600 hover:text-white transition text-sm"
            >
              Details
            </button>
          )}
        />
      </div>
    </DashboardLayout>
  );
};

export default ActiveUserPage;
