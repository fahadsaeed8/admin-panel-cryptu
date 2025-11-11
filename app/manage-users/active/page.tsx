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
    mobile: "",
    country: "",
    joinedAt: "2025-11-10 10:14 AM",
    timeAgo: "6 hours ago",
    balance: "INR 0.00",
  },
  {
    name: "999999 9999",
    username: "ggggggggggg",
    email: "afdafdsf234@gmail.com",
    mobile: "",
    country: "",
    joinedAt: "2025-11-10 08:26 AM",
    timeAgo: "8 hours ago",
    balance: "INR 0.00",
  },
];

const ActiveUserPage = () => {
  const router = useRouter();

  const handleDetails = (username: string) => {
    router.push(`/manage-users/active/${username}`);
  };

  return (
    <DashboardLayout>
      <div>
        {/* Header Section */}
        <div className="flex flex-col md:flex-row gap-3 items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">All Users</h2>
          </div>
        </div>

        {/* Table Component */}
        <Table
          trades={users}
          actionRenderer={(active: Record<string, any>, index: number) => (
            <button
              onClick={() => handleDetails(active.username)}
              className="border border-[#2d33ff] text-[#2d33ff] px-3 py-1 rounded-md hover:bg-[#2d33ff] hover:text-white transition text-sm"
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
