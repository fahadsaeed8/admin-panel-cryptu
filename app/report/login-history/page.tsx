// components/LoginHistoryTable.tsx
import DashboardLayout from "@/components/latest-dashboardLayout/dashboardlayout";
import Table from "@/components/table/table";
import { Search } from "lucide-react";
import React from "react";

interface LoginHistory {
  user: string;
  loginAt: string;
  ip: string;
  location: string;
  browser: string;
  os: string;
}

const loginHistoryData: LoginHistory[] = [
  {
    user: "farhan atif",
    loginAt: "2025-06-13 07:24 PM",
    ip: "72.255.3.232",
    location: "Lahore, Pakistan",
    browser: "Chrome",
    os: "Windows 10",
  },
  {
    user: "fareatif khan",
    loginAt: "2025-06-22 08:27 AM",
    ip: "223.123.20.182",
    location: "Pakistan",
    browser: "Chrome",
    os: "Windows 10",
  },
  {
    user: "Admin Admin",
    loginAt: "2025-06-26 09:08 AM",
    ip: "36.37.164.66",
    location: "Phnom Penh, Cambodia",
    browser: "Handheld Browser",
    os: "iPhone",
  },
  {
    user: "M Azeem aslam",
    loginAt: "2025-06-26 09:56 AM",
    ip: "58.27.207.214",
    location: "Lahore, Pakistan",
    browser: "Chrome",
    os: "Windows 10",
  },
  {
    user: "Test Test1",
    loginAt: "2025-06-26 11:46 AM",
    ip: "182.213.215.73",
    location: "Goyang-si, South Korea",
    browser: "Handheld Browser",
    os: "Android",
  },
  {
    user: "Naveen kumar",
    loginAt: "2025-06-26 11:49 AM",
    ip: "2a09:bac:55043:25d7:3c5:27",
    location: "Lahore, Pakistan",
    browser: "Chrome",
    os: "Windows 10",
  },
  {
    user: "Naveen kumar",
    loginAt: "2025-06-26 12:13 PM",
    ip: "57.129.73.213",
    location: "Frankfurt am Main, Germany",
    browser: "Handheld Browser",
    os: "iPhone",
  },
];

const LoginHistoryTable: React.FC = () => {
  return (
    <DashboardLayout>
      <div>
        {/* Header Section */}
        <div className="flex flex-col md:flex-row gap-3 items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              Login History
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-stretch border border-gray-300 rounded-md bg-white w-full md:w-72 overflow-hidden">
              <input
                type="text"
                placeholder="Username / TRX ID..."
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
        <Table trades={loginHistoryData} />
      </div>
    </DashboardLayout>
  );
};

export default LoginHistoryTable;
