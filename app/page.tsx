"use client";
import React, { useMemo, useRef, useState } from "react";
import {
  Users,
  UserCheck,
  Mail,
  Phone,
  BarChart2,
  Trophy,
  TrendingDown,
  Scale,
  Gamepad2,
  FlagTriangleRight,
  DownloadCloud,
  CalendarDays,
  ChevronDown,
} from "lucide-react";
import DashboardLayout from "@/components/latest-dashboardLayout/dashboardlayout";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  Legend,
  Area,
  AreaChart,
} from "recharts";

import * as htmlToImage from "html-to-image";
import { saveAs } from "file-saver";
import LoginStats from "@/components/login-stats/LoginStats";
import CronJobModal from "@/components/modals/CronJobModal";

type RangeType = "week" | "month" | "year";

interface StatItem {
  title: string;
  value: number | string;
  icon: React.ReactNode;
}

interface DataItem {
  date: string;
  deposit: number;
  withdraw: number;
  plus: number;
  minus: number;
}

const DashboardPage: React.FC = () => {
  const [range, setRange] = useState<RangeType>("week");
  const [startDate, setStartDate] = useState<string>("2025-10-29");
  const [endDate, setEndDate] = useState<string>("2025-11-12");
  const [isCronModalOpen, setIsCronModalOpen] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);
  const areaRef = useRef<HTMLDivElement>(null);

  const stats: StatItem[] = [
    {
      title: "Total Users",
      value: 200,
      icon: <Users className="text-purple-600 w-6 h-6" />,
    },
    {
      title: "Active Users",
      value: 83,
      icon: <UserCheck className="text-green-600 w-6 h-6" />,
    },
    {
      title: "Email Unverified Users",
      value: 114,
      icon: <Mail className="text-orange-500 w-6 h-6" />,
    },
    {
      title: "Mobile Unverified Users",
      value: 114,
      icon: <Phone className="text-orange-500 w-6 h-6" />,
    },
    {
      title: "Total Trades",
      value: 381,
      icon: <BarChart2 className="text-blue-500 w-6 h-6" />,
    },
    {
      title: "Win Trades",
      value: 192,
      icon: <Trophy className="text-green-500 w-6 h-6" />,
    },
    {
      title: "Loss Trades",
      value: 429,
      icon: <TrendingDown className="text-red-500 w-6 h-6" />,
    },
    {
      title: "Draw Trades",
      value: 8,
      icon: <Scale className="text-orange-500 w-6 h-6" />,
    },
    {
      title: "Total Practice Trades",
      value: 0,
      icon: <Gamepad2 className="text-purple-600 w-6 h-6" />,
    },
    {
      title: "Win Practice Trades",
      value: 0,
      icon: <FlagTriangleRight className="text-green-500 w-6 h-6" />,
    },
    {
      title: "Loss Practice Trades",
      value: 0,
      icon: <TrendingDown className="text-red-500 w-6 h-6" />,
    },
    {
      title: "Draw Practice Trades",
      value: 0,
      icon: <Scale className="text-orange-500 w-6 h-6" />,
    },
  ];

  const fullData: DataItem[] = [
    {
      date: "2025-10-28",
      deposit: 0,
      withdraw: 0,
      plus: 500000,
      minus: 250000,
    },
    {
      date: "2025-10-29",
      deposit: 20000,
      withdraw: 0,
      plus: 800000,
      minus: 400000,
    },
    {
      date: "2025-10-30",
      deposit: 60000,
      withdraw: 10000,
      plus: 1500000,
      minus: 700000,
    },
    {
      date: "2025-10-31",
      deposit: 120000,
      withdraw: 20000,
      plus: 2500000,
      minus: 800000,
    },
    {
      date: "2025-11-01",
      deposit: 160000,
      withdraw: 30000,
      plus: 2700000,
      minus: 600000,
    },
    {
      date: "2025-11-02",
      deposit: 0,
      withdraw: 0,
      plus: 1000000,
      minus: 200000,
    },
    {
      date: "2025-11-03",
      deposit: 40000,
      withdraw: 60000,
      plus: 1500000,
      minus: 700000,
    },
    {
      date: "2025-11-04",
      deposit: 50000,
      withdraw: 10000,
      plus: 900000,
      minus: 200000,
    },
    {
      date: "2025-11-05",
      deposit: 70000,
      withdraw: 40000,
      plus: 1200000,
      minus: 600000,
    },
    {
      date: "2025-11-06",
      deposit: 90000,
      withdraw: 20000,
      plus: 1800000,
      minus: 300000,
    },
    {
      date: "2025-11-07",
      deposit: 110000,
      withdraw: 5000,
      plus: 2000000,
      minus: 400000,
    },
    {
      date: "2025-11-08",
      deposit: 140000,
      withdraw: 90000,
      plus: 2300000,
      minus: 900000,
    },
    {
      date: "2025-11-09",
      deposit: 180000,
      withdraw: 40000,
      plus: 2500000,
      minus: 700000,
    },
    {
      date: "2025-11-10",
      deposit: 130000,
      withdraw: 30000,
      plus: 2100000,
      minus: 500000,
    },
    {
      date: "2025-11-11",
      deposit: 160000,
      withdraw: 25000,
      plus: 2600000,
      minus: 800000,
    },
  ];

  const filteredData = useMemo(() => {
    let data = fullData;
    if (startDate && endDate) {
      data = data.filter(
        (item) => item.date >= startDate && item.date <= endDate
      );
    } else {
      if (range === "week") data = data.slice(-7);
      if (range === "month") data = data.slice(-30);
      if (range === "year") data = data;
    }
    return data;
  }, [range, startDate, endDate]);

  async function exportAsPNG(
    ref: React.RefObject<HTMLDivElement>,
    filename = "chart.png"
  ) {
    if (!ref.current) return;
    try {
      const dataUrl = await htmlToImage.toPng(ref.current, {
        backgroundColor: "#fff",
      });
      const res = await fetch(dataUrl);
      const blob = await res.blob();
      saveAs(blob, filename);
    } catch (err) {
      console.error("PNG export error:", err);
    }
  }

  async function exportAsSVG(
    ref: React.RefObject<HTMLDivElement>,
    filename = "chart.svg"
  ) {
    if (!ref.current) return;
    try {
      const svgDataUrl = await htmlToImage.toSvg(ref.current);
      const res = await fetch(svgDataUrl);
      const blob = await res.blob();
      saveAs(blob, filename);
    } catch (err) {
      console.error("SVG export error:", err);
    }
  }

  function exportAsCSV(dataArray: DataItem[], filename = "data.csv") {
    if (!dataArray.length) return;
    const keys = Object.keys(dataArray[0]);
    const csvRows = [
      keys.join(","),
      ...dataArray.map((row) =>
        keys
          .map((key) => {
            const value = row[key as keyof DataItem];
            if (typeof value === "string" && value.includes(",")) {
              return `"${value.replace(/"/g, '""')}"`;
            }
            return String(value ?? "");
          })
          .join(",")
      ),
    ];
    const csvString = csvRows.join("\n");
    const blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, filename);
  }

  const DownloadDropdown = ({
    targetRef,
    csvData,
    baseName,
  }: {
    targetRef: React.RefObject<HTMLDivElement | null>;
    csvData: DataItem[];
    baseName: string;
  }) => {
    const [open, setOpen] = useState(false);
    return (
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="p-2 border rounded bg-gray-50 hover:bg-gray-100"
        >
          <DownloadCloud className="w-4 h-4" />
        </button>
        {open && (
          <div className="absolute right-0 mt-2 bg-white border rounded shadow-md text-sm z-10">
            <button
              onClick={() =>
                targetRef.current &&
                exportAsSVG({ current: targetRef.current }, `${baseName}.svg`)
              }
              className="block w-full text-left px-4 py-2 hover:bg-gray-50"
            >
              Download SVG
            </button>
            <button
              onClick={() =>
                targetRef.current &&
                exportAsPNG({ current: targetRef.current }, `${baseName}.png`)
              }
              className="block w-full text-left px-4 py-2 hover:bg-gray-50"
            >
              Download PNG
            </button>
            <button
              onClick={() => exportAsCSV(csvData, `${baseName}.csv`)}
              className="block w-full text-left px-4 py-2 hover:bg-gray-50"
            >
              Download CSV
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-4 flex-wrap gap-3">
        <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
        <div className="flex items-center gap-3 flex-wrap">
          <button
            onClick={() => setIsCronModalOpen(true)}
            className="border border-[#5e48e8] hover:bg-blue-500 text-[#5e48e8] hover:text-black cursor-pointer text-xs font-medium px-3 py-1.5 rounded-sm transition"
          >
            🗒 Cron Setup
          </button>
        </div>
      </div>
      <div className="bg-[#ffa64d] mb-5 text-black text-sm px-4 py-3 rounded-sm">
        "symbol" should only include comma-separated alphanumeric cryptocurrency
        symbols
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {stats.map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-between bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all"
          >
            <div>
              <h2 className="text-sm font-medium text-gray-500">
                {item.title}
              </h2>
              <p className="text-2xl font-semibold text-gray-800 mt-1">
                {item.value}
              </p>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">{item.icon}</div>
          </div>
        ))}
      </div>

      {/* Deposits Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Deposits</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              icon: "💰",
              title: "Total Deposited",
              value: "INR 0.00",
              color: "bg-green-100",
            },
            {
              icon: "⏳",
              title: "Pending Deposits",
              value: "0",
              color: "bg-yellow-100",
            },
            {
              icon: "✕",
              title: "Rejected Deposits",
              value: "0",
              color: "bg-red-100",
            },
            {
              icon: "⚡",
              title: "Deposited Charge",
              value: "INR 0.00",
              color: "bg-purple-100",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-sm text-gray-500 mb-2">{item.title}</p>
                  <p className="text-xl font-semibold text-gray-800">
                    {item.value}
                  </p>
                </div>
                <div className={`${item.color} w-12 h-12 rounded-lg flex items-center justify-center text-xl`}>
                  {item.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Withdrawals Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Withdrawals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              icon: "💳",
              title: "Total Withdrawn",
              value: "INR 12,403,926.00",
              color: "bg-green-100",
            },
            {
              icon: "⏳",
              title: "Pending Withdrawals",
              value: "151",
              color: "bg-yellow-100",
            },
            {
              icon: "✕",
              title: "Rejected Withdrawals",
              value: "295",
              color: "bg-red-100",
            },
            {
              icon: "%",
              title: "Withdrawal Charge",
              value: "INR 0.00",
              color: "bg-purple-100",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-sm text-gray-500 mb-2">{item.title}</p>
                  <p className="text-xl font-semibold text-gray-800">
                    {item.value}
                  </p>
                </div>
                <div className={`${item.color} w-12 h-12 rounded-lg flex items-center justify-center text-xl`}>
                  {item.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Deposit & Withdraw Chart */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4">
          {/* Date Picker for Deposit & Withdraw */}
          <div className="flex items-center mb-4 p-2 rounded-lg">
            <CalendarDays className="w-5 h-5 text-gray-500 mr-2" />
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="outline-none border-none bg-transparent text-gray-700"
            />
          </div>

          <div className="flex justify-between items-start mb-3">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Deposit & Withdraw Report
              </h3>
              <p className="text-sm text-gray-500">Overview by date</p>
            </div>
            <DownloadDropdown
              targetRef={barRef}
              csvData={filteredData}
              baseName={`deposit-withdraw-${range}`}
            />
          </div>

          <div ref={barRef} className="w-full h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={filteredData}
                margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                <YAxis />
                <Tooltip
                  formatter={(value) =>
                    new Intl.NumberFormat().format(Number(value))
                  }
                />
                <Legend />
                <Bar dataKey="deposit" fill="#22c55e" name="Deposited" />
                <Bar dataKey="withdraw" fill="#ef4444" name="Withdrawn" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Transactions Chart */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4">
          {/* Date Picker for Transactions */}
          <div className="flex items-center mb-4 p-2 rounded-lg">
            <CalendarDays className="w-5 h-5 text-gray-500 mr-2" />
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="outline-none border-none bg-transparent text-gray-700"
            />
          </div>

          <div className="flex justify-between items-start mb-3">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Transactions Report
              </h3>
              <p className="text-sm text-gray-500">Plus & Minus transactions</p>
            </div>
            <DownloadDropdown
              targetRef={areaRef}
              csvData={filteredData}
              baseName={`transactions-${range}`}
            />
          </div>

          <div ref={areaRef} className="w-full h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={filteredData}
                margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                <YAxis />
                <Tooltip
                  formatter={(value) =>
                    new Intl.NumberFormat().format(Number(value))
                  }
                />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="plus"
                  stroke="#22c55e"
                  fillOpacity={0.2}
                  fill="#22c55e"
                  name="Plus Transactions"
                />
                <Area
                  type="monotone"
                  dataKey="minus"
                  stroke="#ef4444"
                  fillOpacity={0.2}
                  fill="#ef4444"
                  name="Minus Transactions"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        <LoginStats />
      </div>
      <CronJobModal isOpen={isCronModalOpen} onClose={() => setIsCronModalOpen(false)} />
    </DashboardLayout>
  );
};

export default DashboardPage;
