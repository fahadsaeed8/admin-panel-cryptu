"use client";

import { useState } from "react";
import { Copy, X, Zap, Settings } from "lucide-react";
import Link from "next/link";

export default function CronJobModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [copied, setCopied] = useState(false);
  const [lastRun, setLastRun] = useState(12); // seconds ago

  const cronCommand = "curl -s https://cryptostockonline.com/cron";

  if (!isOpen) return null;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(cronCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRunManually = () => {
    alert("Running cron manually...");
    // You can trigger your API call here
    setLastRun(0);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-3xl mx-4 relative animate-fadeIn border border-gray-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition cursor-pointer"
        >
          <X size={20} />
        </button>

        {/* Modal Content */}
        <div className="p-6 text-center">
          <h2 className="text-lg font-semibold text-gray-800 mb-1">
            Please Set Cron Job
          </h2>
          <p className="text-sm text-gray-500 mb-5">
            Once per 5–10 minutes is ideal while once every minute is the best
            option
          </p>

          {/* Cron Command Box */}
          <div className="border border-gray-200 rounded-md bg-gray-50 p-3 text-left flex items-center justify-between">
            <code className="text-sm text-gray-800 font-mono truncate">
              {cronCommand}
            </code>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1 text-indigo-600 hover:text-indigo-800 transition text-sm font-medium cursor-pointer"
            >
              <Copy size={14} />
              {copied ? "Copied" : "Copy"}
            </button>
          </div>

          <div className="flex justify-between items-center text-xs text-gray-500 mt-2 mb-6">
            <span>Cron Command</span>
            <span>Last Cron Run: {lastRun} seconds ago</span>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            {/* Cron Job Setting Button (linked to /cron-page) */}
            <Link
              href="/cron-page"
              className="flex items-center justify-center gap-2 w-1/2 border border-indigo-600 text-indigo-600 py-2.5 rounded-md font-medium text-sm hover:bg-indigo-600 hover:text-white transition-all cursor-pointer"
            >
              <Settings size={16} /> Cron Job Setting
            </Link>

            {/* Run Manually Button */}
            <button
              onClick={handleRunManually}
              className="flex items-center justify-center gap-2 w-1/2 border border-orange-500 text-orange-500 py-2.5 rounded-md font-medium text-sm hover:bg-orange-500 hover:text-white transition-all cursor-pointer"
            >
              <Zap size={16} /> Run Manually
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
