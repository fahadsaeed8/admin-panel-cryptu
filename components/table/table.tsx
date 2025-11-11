"use client";

import React, { ReactNode } from "react";

type Props = {
  trades: Record<string, any>[];
  actionRenderer?: (row: Record<string, any>, index: number) => ReactNode;
};

const Table: React.FC<Props> = ({ trades, actionRenderer }) => {
  const headers = trades.length > 0 ? Object.keys(trades[0]) : [];

  // ✅ Function to conditionally style status-like text
  const renderCellValue = (value: any) => {
    if (typeof value !== "string") return String(value);

    const val = value.toLowerCase();

    // --- Define styles for specific keywords ---
    const styles: Record<string, { bg: string; text: string; border: string }> =
      {
        up: {
          bg: "bg-green-50",
          text: "text-green-600",
          border: "border-green-400",
        },
        win: {
          bg: "bg-green-50",
          text: "text-green-600",
          border: "border-green-400",
        },
        completed: {
          bg: "bg-green-50",
          text: "text-green-600",
          border: "border-green-400",
        },
        down: {
          bg: "bg-red-50",
          text: "text-red-600",
          border: "border-red-400",
        },
        loss: {
          bg: "bg-red-50",
          text: "text-red-600",
          border: "border-red-400",
        },
        incompleted: {
          bg: "bg-red-50",
          text: "text-red-600",
          border: "border-red-400",
        },
        draw: {
          bg: "bg-gray-50",
          text: "text-gray-600",
          border: "border-gray-400",
        },
      };

    const matched = Object.keys(styles).find((key) => val === key);

    if (matched) {
      const s = styles[matched];
      return (
        <span
          className={`px-3 rounded-full text-xs font-medium border ${s.bg} ${s.text} ${s.border}`}
        >
          {value}
        </span>
      );
    }

    // Default return (normal text)
    return value;
  };

  return (
    <div className="bg-white rounded-md shadow-md rounded-t-md">
      {/* Responsive Table Container */}
      <div className="overflow-x-auto hide-scrollbar w-full rounded-t-md">
        <table className="w-full text-sm md:text-[15px]">
          <thead className="">
            <tr className="bg-[#2d33ff] text-white text-left">
              {headers.map((header) => (
                <th key={header} className="p-3 capitalize whitespace-nowrap">
                  {header.replace(/([A-Z])/g, " $1")}
                </th>
              ))}
              {actionRenderer && (
                <th className="p-3 text-center whitespace-nowrap">Action</th>
              )}
            </tr>
          </thead>

          <tbody className="">
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
                    <td key={key} className="px-3 py-2 whitespace-nowrap">
                      {renderCellValue(trade[key])}
                    </td>
                  ))}

                  {actionRenderer && (
                    <td className="whitespace-nowrap">
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
