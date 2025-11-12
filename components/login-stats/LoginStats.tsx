"use client";
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

interface ChartData extends Record<string, any> {
  name: string;
  value: number;
  color: string;
}

interface ChartProps {
  title: string;
  data: ChartData[];
}

const ChartCard: React.FC<ChartProps> = ({ title, data }) => {
  return (
    <div className="bg-[#f9f9ff] rounded-md shadow-sm p-3 flex flex-col items-center justify-center w-full flex-1">
      <h3 className="text-sm text-gray-800 mb-2 font-semibold">{title}</h3>
      <div className="w-full md:w-80 h-66">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              innerRadius="40%"
              outerRadius="90%"
              paddingAngle={2}
              stroke="#fff"
              strokeWidth={2}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const LoginStats: React.FC = () => {
  const browserData: ChartData[] = [
    { name: "Chrome", value: 75, color: "#7b68ee" },
    { name: "Firefox", value: 20, color: "#ff6b6b" },
    { name: "Edge", value: 5, color: "#fcbf49" },
  ];

  const osData: ChartData[] = [
    { name: "Windows", value: 70, color: "#7b68ee" },
    { name: "MacOS", value: 15, color: "#ff6b6b" },
    { name: "Linux", value: 13, color: "#fcbf49" },
    { name: "Other", value: 2, color: "#f1faee" },
  ];

  const countryData: ChartData[] = [
    { name: "Pakistan", value: 100, color: "#ff6b6b" },
  ];

  return (
    <div className="w-full flex flex-col md:flex-row md:gap-4 gap-4">
      <ChartCard title="Login By Browser (Last 30 days)" data={browserData} />
      <ChartCard title="Login By OS (Last 30 days)" data={osData} />
      <ChartCard title="Login By Country (Last 30 days)" data={countryData} />
    </div>
  );
};

export default LoginStats;
