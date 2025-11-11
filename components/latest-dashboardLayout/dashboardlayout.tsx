"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, UserCircle, ChevronDown, Menu, X } from "lucide-react";
import { sidebarRoutes } from "./sidebarRoutes";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Auto-open any dropdown that matches the current path
    sidebarRoutes.forEach((item) => {
      if (item.subItems?.some((sub) => pathname.startsWith(sub.href))) {
        setOpenMenus((prev) => ({ ...prev, [item.name]: true }));
      }
    });
  }, [pathname]);

  const toggleMenu = (menuName: string) => {
    setOpenMenus((prev) => ({ ...prev, [menuName]: !prev[menuName] }));
  };

  return (
    <div className="flex min-h-screen">
      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`bg-[#1c214e] text-white w-64 flex flex-col fixed md:static inset-y-0 left-0 z-40 transform md:translate-x-0 transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-[#2d336f]">
          <div className="flex items-center space-x-2">
            <img src="/cryptoo.png" alt="logo" className="h-8 w-auto" />
            <span className="font-semibold text-sm">Cryptostock</span>
          </div>
          {/* Close button (mobile) */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsSidebarOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-3 space-y-2 overflow-y-auto">
          {sidebarRoutes.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.subItems && pathname.startsWith(item.href));
            const isSubActive = item.subItems?.some(
              (sub) => pathname === sub.href
            );
            const isMenuOpen = openMenus[item.name] || false;

            if (item.subItems && item.subItems.length > 0) {
              return (
                <div key={item.name} className="space-y-1">
                  {/* Dropdown Toggle */}
                  <button
                    onClick={() => toggleMenu(item.name)}
                    className={`flex items-center justify-between w-full px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none ${
                      isActive || isSubActive
                        ? "bg-blue-500 text-white"
                        : "text-gray-200 hover:bg-[#2d336f] hover:text-white"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      {item.icon}
                      <span>{item.name}</span>
                    </div>
                    <ChevronDown
                      size={16}
                      className={`transform transition-transform duration-300 ${
                        isMenuOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>

                  {/* Submenu */}
                  <div
                    className={`pl-10 overflow-hidden transition-all duration-300 ${
                      isMenuOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    {item.subItems.map((sub) => {
                      const subActive = pathname === sub.href;
                      return (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className={`flex items-center space-x-2 py-1.5 px-2 text-sm rounded-md transition-colors ${
                            subActive
                              ? "bg-blue-400 text-white font-medium"
                              : "text-gray-300 hover:text-white hover:bg-[#2d336f]"
                          }`}
                          onClick={() => setIsSidebarOpen(false)}
                        >
                          {sub.icon}
                          <span>{sub.name}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-blue-500 text-white"
                    : "text-gray-200 hover:bg-[#2d336f] hover:text-white"
                }`}
                onClick={() => setIsSidebarOpen(false)}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col w-full overflow-x-hidden">
        {/* Header */}
        <header className="bg-[#1c214e] text-white flex items-center justify-between px-4 py-3 shadow">
          <div className="flex items-center space-x-3 w-full md:w-auto">
            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white mr-2"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu size={22} />
            </button>

            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="Search here..."
                className="w-full bg-[#2d336f] text-sm placeholder-gray-300 text-white py-2 pl-10 pr-3 rounded-md outline-none"
              />
              <Search
                size={18}
                className="absolute left-3 top-2.5 text-gray-400"
              />
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <UserCircle size={28} className="text-white" />
            <span className="text-sm font-medium hidden md:block">admin</span>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 p-4 bg-[#f4f4f4]">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
