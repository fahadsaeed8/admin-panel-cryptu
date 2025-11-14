import DashboardLayout from "@/components/latest-dashboardLayout/dashboardlayout";
import Table from "@/components/table/table";
import { MessageSquare, Search } from "lucide-react";
import React from "react";

interface Notification {
  user: string;
  username: string;
  sentAt: string;
  timeAgo: string;
  sender: string;
  method: string;
  subject: string;
}

const notifications: Notification[] = [
  {
    user: "adil4564 adil4564",
    username: "@adil4564adil4564972",
    sentAt: "2025-11-11 11:24 AM",
    timeAgo: "2 hours ago",
    sender: "Email",
    method: "via php",
    subject: "Withdraw Request has been Processed and your money is sent",
  },
  {
    user: "adil4564 adil4564",
    username: "@adil4564adil4564972",
    sentAt: "2025-11-11 11:19 AM",
    timeAgo: "2 hours ago",
    sender: "Email",
    method: "via php",
    subject: "Withdraw Request has been Processed and your money is sent",
  },
  {
    user: "adil4564 adil4564",
    username: "@adil4564adil4564972",
    sentAt: "2025-11-11 11:17 AM",
    timeAgo: "2 hours ago",
    sender: "Email",
    method: "via php",
    subject: "Withdraw Request has been Processed and your money is sent",
  },
  {
    user: "Prabhakar Prasad",
    username: "@prabhakarprasad",
    sentAt: "2025-11-11 11:13 AM",
    timeAgo: "2 hours ago",
    sender: "Email",
    method: "via php",
    subject:
      "Withdraw Request has been Rejected and your money is refunded to your account",
  },
  {
    user: "Prabhakar Prasad",
    username: "@prabhakarprasad",
    sentAt: "2025-11-11 11:05 AM",
    timeAgo: "2 hours ago",
    sender: "Email",
    method: "via php",
    subject: "Withdraw Request has been Processed and your money is sent",
  },
];

const NotificationHistoryTable: React.FC = () => {
  return (
    <DashboardLayout>
      {/* Header Section */}
      <div className="flex flex-col md:flex-row gap-3 items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            Notification History
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
      <Table trades={notifications} />
    </DashboardLayout>
  );
};

export default NotificationHistoryTable;
