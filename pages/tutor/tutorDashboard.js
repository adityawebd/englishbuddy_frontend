"use client";
import React, { useState } from "react";
import Layout from "../../components/Layout";
import Link from "next/link";
import { House } from "lucide-react";
import { TbLayoutDashboard } from "react-icons/tb";
import { PiStudentBold } from "react-icons/pi";
import { IoCalendarOutline } from "react-icons/io5";
import { ImProfile } from "react-icons/im";
import { GoBook } from "react-icons/go";
import { FaBullhorn } from "react-icons/fa6";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { MdGroups } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { IoMdHelpCircleOutline } from "react-icons/io";

const TutorDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <p>This is the Dashboard content.</p>;
      case "students":
        return <p>This is the Students content.</p>;
      case "calendar":
        return <p>This is the Calendar content.</p>;
      case "profile":
        return <p>This is the Profile content.</p>;
      default:
        return <p>Select a tab to see content.</p>;
    }
  };

  return (
    <Layout>
      <div className="mt-16 p-2 pt-4 pb-2 bg-secondary-lightest">
        <div className="flex flex-col md:flex-row h-screen">
          {/* Sidebar */}
          <aside className="w-full md:w-1/4 bg-gray-50 p-4 overflow-y-auto h-screen">
            <div className="">
              <div className="flex items-center mb-8 border-b border-gray-300 pb-10">
                <Link href="">
                  <img
                    src="https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg"
                    alt="Profile"
                    className="w-16 h-16 rounded-full border"
                  />
                </Link>
                <div className="ml-4">
                  <p className="text-xl font-semibold ">Aditya Raj Gupta</p>
                  <p className="text-sm text-secondary">Tutor</p>
                </div>
              </div>

              <nav>
                <ul>
                  <li className="">
                    <button
                      onClick={() => setActiveTab("dashboard")}
                      className={`flex gap-4 items-center text-lg w-full text-left px-2 py-2 transition duration-700 ${
                        activeTab === "dashboard"
                          ? "text-secondary font-semibold bg-secondary-lightest"
                          : "text-primary hover:text-secondary"
                      }`}
                    >
                      <TbLayoutDashboard size={20} />
                      Dashboard
                    </button>
                  </li>
                  <li className="">
                    <button
                      onClick={() => setActiveTab("students")}
                      className={`flex gap-4 items-center text-lg w-full text-left px-2 py-2 transition duration-700 ${
                        activeTab === "students"
                          ? "text-secondary font-semibold bg-secondary-lightest"
                          : "text-primary hover:text-secondary"
                      }`}
                    >
                      <PiStudentBold />
                      Students
                    </button>
                  </li>
                  <li className="">
                    <button
                      onClick={() => setActiveTab("calendar")}
                      className={`flex gap-4 items-center text-lg w-full text-left px-2 py-2 transition duration-700 ${
                        activeTab === "calendar"
                          ? "text-secondary font-semibold bg-secondary-lightest"
                          : "text-primary hover:text-secondary"
                      }`}
                    >
                      <IoCalendarOutline />
                      Calendar
                    </button>
                  </li>
                  <li className="">
                    <button
                      onClick={() => setActiveTab("profile")}
                      className={`flex gap-4 items-center text-lg w-full text-left px-2 py-2 transition duration-700 ${
                        activeTab === "profile"
                          ? "text-secondary font-semibold bg-secondary-lightest"
                          : "text-primary hover:text-secondary"
                      }`}
                    >
                      <ImProfile />
                      Profile
                    </button>
                  </li>
                  <li className="">
                    <button
                      onClick={() => setActiveTab("courses")}
                      className={`flex gap-4 items-center text-lg w-full text-left px-2 py-2 transition duration-700 ${
                        activeTab === "courses"
                          ? "text-secondary font-semibold bg-secondary-lightest"
                          : "text-primary hover:text-secondary"
                      }`}
                    >
                      <GoBook />
                      Courses
                    </button>
                  </li>
                  <li className="">
                    <button
                      onClick={() => setActiveTab("promote")}
                      className={`flex gap-4 items-center text-lg w-full text-left px-2 py-2 transition duration-700 ${
                        activeTab === "promote"
                          ? "text-secondary font-semibold bg-secondary-lightest"
                          : "text-primary hover:text-secondary"
                      }`}
                    >
                      <FaBullhorn />
                      Promote
                    </button>
                  </li>
                  <li className="">
                    <button
                      onClick={() => setActiveTab("referandearn")}
                      className={`flex gap-4 items-center text-lg w-full text-left px-2 py-2 transition duration-700 ${
                        activeTab === "referandearn"
                          ? "text-secondary font-semibold bg-secondary-lightest"
                          : "text-primary hover:text-secondary"
                      }`}
                    >
                      <FaHandHoldingDollar />
                      Refer & Earn
                    </button>
                  </li>
                  <li className="">
                    <button
                      onClick={() => setActiveTab("community")}
                      className={`flex gap-4 items-center text-lg w-full text-left px-2 py-2 transition duration-700 ${
                        activeTab === "community"
                          ? "text-secondary font-semibold bg-secondary-lightest"
                          : "text-primary hover:text-secondary"
                      }`}
                    >
                      <MdGroups />
                      Community
                    </button>
                  </li>
                  <li className="">
                    <button
                      onClick={() => setActiveTab("findtutorandclass")}
                      className={`flex gap-4 items-center text-lg w-full text-left px-2 py-2 transition duration-700 ${
                        activeTab === "findtutorandclass"
                          ? "text-secondary font-semibold bg-secondary-lightest"
                          : "text-primary hover:text-secondary"
                      }`}
                    >
                      <FaChalkboardTeacher />
                      Find Tutor or Class
                    </button>
                  </li>
                  <li className="">
                    <button
                      onClick={() => setActiveTab("account")}
                      className={`flex gap-4 items-center text-lg w-full text-left px-2 py-2 transition duration-700 ${
                        activeTab === "account"
                          ? "text-secondary font-semibold bg-secondary-lightest"
                          : "text-primary hover:text-secondary"
                      }`}
                    >
                      <MdManageAccounts />
                      Account
                    </button>
                  </li>
                  <li className="">
                    <button
                      onClick={() => setActiveTab("helpcenter")}
                      className={`flex gap-4 items-center text-lg w-full text-left px-2 py-2 transition duration-700 ${
                        activeTab === "helpcenter"
                          ? "text-secondary font-semibold bg-secondary-lightest"
                          : "text-primary hover:text-secondary"
                      }`}
                    >
                      <IoMdHelpCircleOutline />
                      Help Center
                    </button>
                  </li>
                  {/* Additional Items to Make Sidebar Scrollable */}
                  {/* {Array.from({ length: 20 }, (_, index) => (
                  <li key={index} className="py-2">
                    <button
                      className="flex items-center w-full text-left px-2 py-2 text-gray-600 hover:text-blue-500"
                    >
                      <span className="material-icons mr-2">folder</span>
                      Tab {index + 1}
                    </button>
                  </li>
                ))} */}
                </ul>
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="w-full md:w-3/4 p-4 bg-white">
            {renderContent()}
          </main>
        </div>
      </div>
    </Layout>
  );
};

export default TutorDashboard;
