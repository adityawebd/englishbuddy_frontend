"use client";
import React, { useEffect, useState, lazy, Suspense } from "react";
import Layout from "../../components/Layout";
import Link from "next/link";
import { useRouter } from "next/router"; // Import useRouter from next/router
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
import Loader from "@/components/Loader"; // Import the Loader component


// Lazy load the content components
const DashboardContent = lazy(() =>
  import("@/components/tutorDasboardTabs/Dashboard")
);
const StudentsContent = lazy(() =>
  import("@/components/tutorDasboardTabs/Students")
);
const CalendarContent = lazy(() =>
  import("@/components/tutorDasboardTabs/Calendar")
);
const ProfileContent = lazy(() =>
  import("@/components/tutorDasboardTabs/Profile")
);
const CoursesContent = lazy(() =>
  import("@/components/tutorDasboardTabs/Courses")
);
const PromoteContent = lazy(() =>
  import("@/components/tutorDasboardTabs/Promote")
);
const ReferNEarnContent = lazy(() =>
  import("@/components/tutorDasboardTabs/ReferNEarn")
);
const CommunityContent = lazy(() =>
  import("@/components/tutorDasboardTabs/Community")
);
const FindTutorOrClassContent = lazy(() =>
  import("@/components/tutorDasboardTabs/FindTutorOrClass")
);
const AccountContent = lazy(() =>
  import("@/components/tutorDasboardTabs/Account")
);
const HelpCenterContent = lazy(() =>
  import("@/components/tutorDasboardTabs/HelpCenter")
);

const TutorDashboard = () => {
  const router = useRouter(); // Initialize the router
  const [activeTab, setActiveTab] = useState("dashboard");

  useEffect(() => {
    // Reading the active tab from the URL query parameter
    const { tab } = router.query;
    if (tab) {
      setActiveTab(tab);
    }
  }, [router.query]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    router.push(`?tab=${tab}`, undefined, { shallow: true }); // Updating the URL without reloading the page
  };

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <Suspense fallback={<Loader />}>
            <DashboardContent />
          </Suspense>
        );
      case "students":
        return (
          <Suspense fallback={<Loader />}>
            <StudentsContent />
          </Suspense>
        );
      case "calendar":
        return (
          <Suspense fallback={<Loader />}>
            <CalendarContent />
          </Suspense>
        );
      case "profile":
        return (
          <Suspense fallback={<Loader />}>
            <ProfileContent />
          </Suspense>
        );
      case "courses":
        return (
          <Suspense fallback={<Loader />}>
            <CoursesContent />
          </Suspense>
        );
      case "promote":
        return (
          <Suspense fallback={<Loader />}>
            <PromoteContent />
          </Suspense>
        );
      case "referandearn":
        return (
          <Suspense fallback={<Loader />}>
            <ReferNEarnContent />
          </Suspense>
        );
      case "community":
        return (
          <Suspense fallback={<Loader />}>
            <CommunityContent />
          </Suspense>
        );
      case "findtutorandclass":
        return (
          <Suspense fallback={<Loader />}>
            <FindTutorOrClassContent />
          </Suspense>
        );
      case "account":
        return (
          <Suspense fallback={<Loader />}>
            <AccountContent />
          </Suspense>
        );
      case "helpcenter":
        return (
          <Suspense fallback={<Loader />}>
            <HelpCenterContent />
          </Suspense>
        );
      default:
        return <p>Select a tab to see content.</p>;
    }
  };

  return (
    <Layout>
      <div className="mt-16 p-2 pt-4 pb-2 bg-secondary-lightest">
        <div className="flex flex-col md:flex-row h-screen bg-gray-200 p-2 rounded-xl">
          {/* Sidebar */}
          <aside className="w-full md:w-1/4 rounded-l-xl p-4 overflow-y-auto h-screen">
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
                  {[
                    {
                      label: "Dashboard",
                      icon: <TbLayoutDashboard size={20} />,
                      value: "dashboard",
                    },
                    {
                      label: "Students",
                      icon: <PiStudentBold size={20} />,
                      value: "students",
                    },
                    {
                      label: "Calendar",
                      icon: <IoCalendarOutline size={20} />,
                      value: "calendar",
                    },
                    {
                      label: "Profile",
                      icon: <ImProfile size={20} />,
                      value: "profile",
                    },
                    {
                      label: "Courses",
                      icon: <GoBook size={20} />,
                      value: "courses",
                    },
                    {
                      label: "Promote",
                      icon: <FaBullhorn size={20} />,
                      value: "promote",
                    },
                    {
                      label: "Refer & Earn",
                      icon: <FaHandHoldingDollar size={20} />,
                      value: "referandearn",
                    },
                    {
                      label: "Community",
                      icon: <MdGroups size={20} />,
                      value: "community",
                    },
                    {
                      label: "Find Tutor or Class",
                      icon: <FaChalkboardTeacher size={20} />,
                      value: "findtutorandclass",
                    },
                    {
                      label: "Account",
                      icon: <MdManageAccounts size={20} />,
                      value: "account",
                    },
                    {
                      label: "Help Center",
                      icon: <IoMdHelpCircleOutline size={20} />,
                      value: "helpcenter",
                    },
                  ].map((item) => (
                    <li key={item.value}>
                      <button
                        onClick={() => handleTabClick(item.value)}
                        className={`flex gap-4 items-center text-lg w-full text-left px-2 py-2 rounded-xl transition duration-700 ${
                          activeTab === item.value
                            ? "text-secondary font-semibold bg-secondary-lightest rounded-xl"
                            : "text-primary hover:text-secondary"
                        }`}
                      >
                        {item.icon}
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="w-full md:w-3/4 p-4 bg-white rounded-xl shadow-xl border">
            {renderContent()}
          </main>
        </div>
      </div>
    </Layout>
  );
};

export default TutorDashboard;
