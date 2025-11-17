"use client";

import React, { ReactNode } from "react";

type Props = {
  trades: Record<string, any>[];
  actionRenderer?: (row: Record<string, any>, index: number) => ReactNode;
};

const Table: React.FC<Props> = ({ trades, actionRenderer }) => {
  const headers = trades.length > 0 ? Object.keys(trades[0]) : [];

  // Badge styles
  const badgeClasses = (value: string) => {
    const v = value?.toLowerCase();

    if (v === "up" || v === "win" || v === "completed")
      return "bg-green-50 text-green-600 border border-green-400";

    if (v === "down" || v === "loss" || v === "incompleted")
      return "bg-red-50 text-red-600 border border-red-400";

    return "bg-gray-50 text-gray-600 border border-gray-400";
  };

  // Cell renderer (only styles, no structural change)
  const renderCell = (key: string, value: any, row: any) => {
    const v = String(value);

    // Username column UI
    if (key === "user") {
      return (
        <div>
          <div className="font-medium text-gray-900">{row.user}</div>
          <div className="text-blue-500 text-xs">{row.username}</div>
        </div>
      );
    }

    // Crypto column UI
    if (key === "crypto") {
      return (
        <div className="flex flex-col items-start">
          <span className="text-lg">฿</span>
          <span className="text-[11px] text-gray-500 mt-[-2px]">BTC</span>
        </div>
      );
    }

    // Badge fields
    if (["highLow", "result", "status"].includes(key)) {
      return (
        <span
          className={`px-3 py-[2px] rounded-full text-xs font-medium ${badgeClasses(
            v
          )}`}
        >
          {value}
        </span>
      );
    }

    return v;
  };

  return (
    <div className="bg-white rounded-md shadow-md overflow-hidden">
      <div className="overflow-x-auto hide-scrollbar">
        <table className="w-full text-sm md:text-[15px]">
          <thead>
            <tr className="bg-[#2d33ff] text-white text-left">
              {headers.map((header) => (
                <th
                  key={header}
                  className="p-3 capitalize whitespace-nowrap font-medium"
                >
                  {header.replace(/([A-Z])/g, " $1")}
                </th>
              ))}
              {actionRenderer && <th className="p-3 text-center">Action</th>}
            </tr>
          </thead>

          <tbody>
            {trades.length === 0 ? (
              <tr>
                <td
                  colSpan={headers.length + 1}
                  className="text-center text-gray-500 py-6"
                >
                  No data available
                </td>
              </tr>
            ) : (
              trades.map((trade, index) => (
                <tr
                  key={index}
                  className="hover:bg-orange-100 transition border-b border-gray-300 last:border-b-0"
                >
                  {headers.map((key) => (
                    <td key={key} className="px-3 py-3 whitespace-nowrap">
                      {renderCell(key, trade[key], trade)}
                    </td>
                  ))}

                  {actionRenderer && (
                    <td className="px-3 py-3 whitespace-nowrap">
                      {actionRenderer(trade, index)}
                    </td>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
