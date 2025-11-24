"use client";

import React, { useState } from "react";
import Image from "next/image";
import DashboardLayout from "@/components/latest-dashboardLayout/dashboardlayout";
import { Pencil, Search, X, Upload } from "lucide-react";

type Crypto = {
  id: number;
  name: string;
  icon: string;
  symbol: string;
  status: "Enabled" | "Disabled";
};

const cryptosData: Crypto[] = [
  {
    id: 1,
    name: "BTC",
    icon: "/icons/bitcoin.png",
    symbol: "₿",
    status: "Enabled",
  },
  {
    id: 2,
    name: "ETH",
    icon: "/icons/eth.png",
    symbol: "Ξ",
    status: "Enabled",
  },
  {
    id: 3,
    name: "XRP",
    icon: "/icons/xrp.png",
    symbol: "XRP",
    status: "Enabled",
  },
  {
    id: 4,
    name: "Tether",
    icon: "/icons/tether.png",
    symbol: "₮",
    status: "Enabled",
  },
  {
    id: 5,
    name: "SOL",
    icon: "/icons/sol.png",
    symbol: "SOL",
    status: "Enabled",
  },
  {
    id: 6,
    name: "TON",
    icon: "/icons/ton.png",
    symbol: "TON",
    status: "Enabled",
  },
  {
    id: 7,
    name: "USDC",
    icon: "/icons/usdc.png",
    symbol: "USDC",
    status: "Enabled",
  },
];

  // Add missing coins from mock site
  cryptosData.push(
    {
      id: 8,
      name: "ADA",
      icon: "/icons/ada.png", // Use actual icon if available
      symbol: "ADA",
      status: "Enabled",
    },
    {
      id: 9,
      name: "SUI",
      icon: "/icons/sui.png", // Use actual icon if available
      symbol: "SUI",
      status: "Enabled",
    },
    {
      id: 10,
      name: "LTC",
      icon: "/icons/ltc.png", // Use actual icon if available
      symbol: "Ł",
      status: "Enabled",
    },
    {
      id: 11,
      name: "ETC",
      icon: "/icons/etc.png", // Use actual icon if available
      symbol: "ETC",
      status: "Enabled",
    },
    {
      id: 12,
      name: "BNB",
      icon: "/icons/bnb.png", // Use actual icon if available
      symbol: "BNB",
      status: "Enabled",
    },
    {
      id: 13,
      name: "BTS",
      icon: "/icons/bts.png", // Use actual icon if available
      symbol: "BTS",
      status: "Enabled",
    }
  );

const CryptoCurrencyManagement = () => {
  const [cryptos, setCryptos] = useState<Crypto[]>(cryptosData);
  const [selectedCrypto, setSelectedCrypto] = useState<Crypto | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // --- Edit Modal ---
  const handleEditClick = (crypto: Crypto) => {
    setIsEditing(true);
    setSelectedCrypto({ ...crypto });
    setPreviewImage(crypto.icon);
    setIsModalOpen(true);
  };

  // --- Add New Modal ---
  const handleAddNew = () => {
    setIsEditing(false);
    setSelectedCrypto({
      id: Date.now(),
      name: "",
      icon: "",
      symbol: "",
      status: "Enabled",
    });
    setPreviewImage(null);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCrypto(null);
    setPreviewImage(null);
  };

  const handleInputChange = (field: keyof Crypto, value: string) => {
    setSelectedCrypto((prev) => (prev ? { ...prev, [field]: value } : prev));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => setPreviewImage(ev.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCrypto) return;

    if (isEditing) {
      // Update existing crypto
      setCryptos((prev) =>
        prev.map((c) =>
          c.id === selectedCrypto.id
            ? { ...selectedCrypto, icon: previewImage || c.icon }
            : c
        )
      );
    } else {
      // Add new crypto
      setCryptos((prev) => [
        ...prev,
        { ...selectedCrypto, icon: previewImage || "/icons/placeholder.png" },
      ]);
    }

    handleCloseModal();
  };

  // --- Toggle Enable/Disable ---
  const handleToggleStatus = (id: number) => {
    setCryptos((prev) =>
      prev.map((crypto) =>
        crypto.id === id
          ? {
              ...crypto,
              status: crypto.status === "Enabled" ? "Disabled" : "Enabled",
            }
          : crypto
      )
    );
  };

  // --- Filter cryptos based on search ---
  const filteredCryptos = cryptos.filter((crypto) =>
    crypto.name.toLowerCase().startsWith(searchTerm.toLowerCase()) ||
    crypto.symbol.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div>
        {/* Header Section */}
        <div className="flex items-center justify-between my-5">
          <h2 className="text-xl font-semibold text-gray-900">
            Crypto Currency List
          </h2>
          <div className="flex items-center gap-2">
            <div className="flex items-stretch border border-gray-300 rounded-md bg-white w-full md:w-72 overflow-hidden">
              <input
                type="text"
                placeholder="Search Crypto, Network..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full text-sm outline-none py-3 px-2"
              />
              <div className="bg-[#2d33ff] flex items-center justify-center px-4">
                <Search size={16} className="text-white" />
              </div>
            </div>
            <button
              onClick={handleAddNew}
              className="w-[110px] border border-[#2d33ff] text-[#2d33ff] py-2.5 rounded-md cursor-pointer hover:bg-[#2d33ff] hover:text-white transition-all duration-300 ease-in-out"
            >
              + Add New
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-[#2d33ff] text-white text-left">
                <th className="py-3 px-4 font-semibold">Crypto</th>
                <th className="py-3 px-4 font-semibold">Symbol</th>
                <th className="py-3 px-4 font-semibold">Status</th>
                <th className="py-3 px-4 font-semibold text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredCryptos.map((crypto, idx) => (
                <tr
                  key={crypto.id}
                  className={`border-b border-gray-200 ${
                    idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  {/* Crypto Column */}
                  <td className="py-3 px-4 flex items-center gap-3">
                    <Image
                      src={crypto.icon}
                      alt={crypto.name}
                      width={28}
                      height={28}
                      className="rounded-full shadow-[0_0_10px_5px_rgba(0,0,0,0.1)]"
                    />
                    <span className="font-medium text-gray-800">
                      {crypto.name}
                    </span>
                  </td>

                  {/* Symbol */}
                  <td className="py-3 px-4 text-gray-700">{crypto.symbol}</td>

                  {/* Status */}
                  <td className="py-3 px-4">
                    <span
                      className={`${
                        crypto.status === "Enabled"
                          ? "text-green-600 border border-green-400 bg-green-50"
                          : "text-red-600 border border-red-400 bg-red-50"
                      } px-3 py-1 rounded-full text-xs font-medium`}
                    >
                      {crypto.status}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="py-3 px-4 text-right">
                    <div className="flex justify-end gap-3">
                      <button
                        onClick={() => handleEditClick(crypto)}
                        className="flex items-center gap-1 text-[#2d33ff] border border-[#2d33ff] px-3 py-1.5 rounded-md text-xs font-medium hover:bg-[#2d33ff] hover:text-white transition cursor-pointer"
                      >
                        <Pencil size={14} /> Edit
                      </button>
                      <button
                        onClick={() => handleToggleStatus(crypto.id)}
                        className={`flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-medium border transition cursor-pointer ${
                          crypto.status === "Enabled"
                            ? "text-red-500 border-red-500 hover:bg-red-500 hover:text-white"
                            : "text-green-600 border-green-600 hover:bg-green-600 hover:text-white"
                        }`}
                      >
                        <X size={14} />
                        {crypto.status === "Enabled" ? "Disable" : "Enable"}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* No Results Message */}
        {filteredCryptos.length === 0 && (
          <div className="text-center py-8 bg-white border border-gray-200 rounded-lg mt-4">
            <p className="text-gray-500 text-lg font-medium">
              Currency not found
            </p>
            <p className="text-gray-400 text-sm mt-1">
              No cryptocurrencies match your search "{searchTerm}"
            </p>
          </div>
        )}

        {/* Modal */}
        {isModalOpen && selectedCrypto && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg w-[450px] shadow-lg relative">
              {/* Header */}
              <div className="flex justify-between items-center border-b px-5 py-3">
                <h3 className="font-semibold text-gray-800 text-lg">
                  {isEditing ? "Update Crypto Currency" : "Add New Crypto"}
                </h3>
                <button onClick={handleCloseModal}>
                  <X size={20} className="text-gray-600 hover:text-red-500" />
                </button>
              </div>

              {/* Body */}
              <form onSubmit={handleSubmit} className="p-5 space-y-4">
                {/* Image Upload */}
                <div className="flex flex-col items-center">
                  <div className="relative w-[180px] h-[180px] rounded-md border border-gray-300 flex items-center justify-center overflow-hidden bg-gray-50">
                    {previewImage ? (
                      <Image
                        src={previewImage}
                        alt="Preview"
                        fill
                        className="object-contain"
                      />
                    ) : (
                      <span className="text-gray-400 text-sm">No Image</span>
                    )}
                    <label
                      htmlFor="file-upload"
                      className="absolute bottom-2 right-2 bg-[#2d33ff] p-1.5 rounded-full cursor-pointer hover:bg-[#4449ff] transition"
                    >
                      <Upload size={16} className="text-white" />
                    </label>
                    <input
                      id="file-upload"
                      type="file"
                      accept=".png,.jpg,.jpeg"
                      className="hidden"
                      onChange={handleImageUpload}
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-2 text-center">
                    Supported Files: <strong>.png, .jpg, .jpeg</strong>. Image
                    will be resized into <strong>400x400px</strong>
                  </p>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={selectedCrypto.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                    className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-[#2d33ff]"
                  />
                </div>

                {/* Symbol */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Symbol<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={selectedCrypto.symbol}
                    onChange={(e) =>
                      handleInputChange("symbol", e.target.value)
                    }
                    required
                    className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-[#2d33ff]"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-[#2d33ff] text-white py-2.5 rounded-md font-medium hover:bg-[#1e26d9] transition"
                >
                  {isEditing ? "Update" : "Add Crypto"}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default CryptoCurrencyManagement;
