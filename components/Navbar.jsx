"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Logo from "./Logo";
import {
  Menu,
  User,
  GraduationCap,
  X,
  ChevronDown,
  ChevronUp,
  Search,
  MapPin
} from "lucide-react";
import Image from "next/image";
import SearchBar from "./SearchBar";

const menuItems = [
  {
    name: "Home",
    href: "/",
  },
  // {
  //   name: "About us",
  //   href: "/about-us",
  // },
  {
    name: "Buy Study Material ",
    icon: <ChevronDown />,
    subMenu: [
      { name: "IELTS", href: "/buy-study-material/ielts" },
      { name: "PTE", href: "/buy-study-material/pte" },
      { name: "TOEFL", href: "/buy-study-material/toefl" },
      { name: "CELPIP", href: "/buy-study-material/celpip" },
      {
        name: "Preparation for Professionals",
        href: "/buy-study-material/celpip",
      },
    ],
  },
  // {
  //   name: "Tests",
  //   href: "#",
  // },
  // {
  //   name: "Band Calculator",
  //   href: "#",
  // },
  {
    name: "Book your test",
    icon: <ChevronDown />,
    subMenu: [
      { name: "IELTS", href: "/book-your-test/ielts" },
      { name: "PTE", href: "/book-your-test/pte" },
      { name: "TOEFL", href: "/book-your-test/toefl" },
    ],
  },
  // {
  //   name: "blog",
  //   href: "/blogs",
  // },
  {
    name: "Contact us",
    href: "/contact-us",
  },
  {
    name: "More",
    icon: <ChevronDown />,
    subMenu: [
      { name: "ABOUT US", href: "/about-us" },
      { name: "BLOGS", href: "/blogs" },
      { name: "TESTS", href: "#" },
      { name: "BAND CALCULATOR", href: "#" },
    ],
  },
];

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null); // For mobile accordion
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchBarRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubMenu = (menuItem) => {
    setActiveSubMenu(activeSubMenu === menuItem ? null : menuItem);
  };

  // Calculate the scroll progress
  const handleScroll = () => {
    const scrollTotal =
      document.documentElement.scrollHeight - window.innerHeight;
    const currentScroll = window.scrollY;

    if (scrollTotal > 0) {
      setScrollProgress((currentScroll / scrollTotal) * 100);
    } else {
      setScrollProgress(0);
    }
  };

  // Add event listener for scrolling
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
  };

  const handleClickOutside = (event) => {
    if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
      closeSearch();
    }
  };

  useEffect(() => {
    if (isSearchOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSearchOpen]);

  return (
    <div className="fixed top-0 left-0 w-full bg-white z-50 border-b">
      <div className="mx-auto flex items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2 responsive_css_logo">
          <Logo />
        </div>
        {/* Mega menu for desktop */}
        <div className="hidden grow items-start lg:flex">
          <ul className="ml-12 inline-flex space-x-8 responsive_css_ul">
            {menuItems.map((item) => (
              <li key={item.name} className="relative group">
                <a
                  href={item.href}
                  className="text-sm font-semibold text-gray-800 uppercase transition-all duration-500 hover:text-secondary hover:cursor-pointer flex items-center responsive_css"
                >
                  {item.name}
                  {item.icon && (
                      <span className="transform transition-transform duration-300 group-hover:rotate-180">
                        {item.icon}
                      </span>
                    )}
                </a>
                {/* Check if the menu item has a submenu */}
                {item.subMenu && (
                  <div className="absolute left-0 top-full mt-2 hidden w-56 bg-white shadow-xl rounded-lg opacity-0 transform translate-y-4 transition-transform duration-700 ease-in-out group-hover:opacity-100 group-hover:-translate-y-1 group-hover:block  z-50 border-2 border-t-secondary border-b-secondary border-l-primary border-r-primary">
                    <ul className="grid grid-cols-1 gap-4 p-4 navbar_megamenu_boxshadow">
                      {item.subMenu.map((subItem) => (
                        <li
                          key={subItem.name}
                          className="transition duration-500 rounded-lg"
                        >
                          <a
                            href={subItem.href}
                            className="text-sm font-semibold text-primary transition duration-500 hover:text-secondary"
                          >
                            {subItem.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:block">
          <div className="flex gap-8 items-center responsive_css_buttonDiv">
            <button
              onClick={toggleSearch}
              className="text-whiteClr transition-all duration-500 bg-primaryClr flex justify-center align-middle hover:text-secondary py-2 hover:bg-whiteClr hover:rounded-full hover:shadow-gray-900 hover:shadow-whiteClr"
            >
              <Search />
            </button>
            <Link
              href="/signup-tutor"
              className="rounded-3xl flex gap-2 justify-center items-center border-2 border-primary  bg-primary text-white px-5 py-2 text-xs uppercase font-semibold transition ease-in-out duration-500 hover:border-2 hover:border-primary hover:bg-white hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              <GraduationCap size={20} />
              <span>Signup as Tutor</span>
            </Link>
            <Link
              href="/login"
              className="rounded-3xl flex gap-2 justify-center items-center border-2 border-primary  bg-primary text-white px-5 py-2 text-xs uppercase font-semibold transition ease-in-out duration-500 hover:border-2 hover:border-primary hover:bg-white hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              <User size={16} />
              <span>Login</span>
            </Link>
          </div>
        </div>

        <div className="lg:hidden flex items-center gap-4">
          <button
            onClick={toggleSearch}
            className="text-primary transition-all duration-500 bg-white flex justify-center items-center hover:text-primaryClr hover:bg-whiteClr hover:rounded-full hover:text-secondary"
          >
            <Search />
          </button>
          <Link
            href="/login"
            className="rounded-3xl flex justify-center items-center border-2 border-primary  bg-primary text-white p-2 text-xs uppercase font-semibold transition ease-in-out duration-500 hover:border-2 hover:border-primary hover:bg-white hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            <User size={16} />
            {/* <span>Login</span> */}
          </Link>
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>

        {/* Mobile accordion menu */}
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <span>
                      <img
                        src="/assets/images/logo_dark.png"
                        alt="Logo"
                        height="100px"
                        width="200px"
                      />
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={toggleMenu}
                    className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                  >
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <div key={item.name}>
                        <a
                          href={item.href || "#"}
                          className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                          onClick={() =>
                            item.subMenu && toggleSubMenu(item.name)
                          }
                        >
                          <span className="ml-3 text-base font-medium text-gray-900">
                            {item.name}
                          </span>
                          {item.subMenu && (
                            <>
                              {activeSubMenu === item.name ? (
                                <ChevronUp className="ml-auto" />
                              ) : (
                                <ChevronDown className="ml-auto" />
                              )}
                            </>
                          )}
                        </a>
                        {item.subMenu && activeSubMenu === item.name && (
                          <ul className="ml-6 mt-2">
                            {item.subMenu.map((subItem) => (
                              <li key={subItem.name} className="py-2">
                                <a
                                  href={subItem.href}
                                  className="text-sm text-gray-700 hover:text-gray-900"
                                >
                                  {subItem.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </nav>
                </div>
                <div className="flex mt-4">
                  <Link
                    href="/signup-tutor"
                    className="rounded-3xl flex gap-2 justify-center items-center border-2 border-primary  bg-primary text-white px-5 py-2 text-xs uppercase font-semibold transition ease-in-out duration-500 hover:border-2 hover:border-primary hover:bg-white hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    <GraduationCap size={20} />
                    <span>Signup as Tutor</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Progress bar */}
      <div className="relative w-full h-[2px] bg-gray-200">
        <div
          style={{ width: `${scrollProgress}%` }}
          className="h-full bg-secondary transition-width duration-300"
        />
      </div>

      {/* Search Bar */}
      {isSearchOpen && (
        <div className="absolute inset-x-0 top-30 z-50 bg-black bg-opacity-70 backdrop-blur-md shadow-lg transition-transform duration-500 transform translate-y-0 h-[100vh]">
          <div
            ref={searchBarRef}
            className="bg-white py-10 sm:p-6 md:p-8 lg:px-48 max-sm:px-4"
          >
            <SearchBar />
            {/* <hr className="text-textClr mt-5 mb-4" /> */}
          </div>
        </div>
      )}
    </div>
  );
}
