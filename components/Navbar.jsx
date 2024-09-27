'use client'
import React from 'react';
import Link from "next/link";
import Logo from "./Logo";
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { Ticket } from 'lucide-react'

const menuItems = [
  {
    name: "Home",
    href: "#",
  },
  {
    name: "About us",
    href: "#",
  },
  {
    name: "Schedules",
    href: "#",
  },
  {
    name: "pages",
    href: "#",
  },
  {
    name: "blog",
    href: "#",
  },
];

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen)
    }
  
    return (
      <div className="relative w-full bg-white">
        <div className="mx-auto flex items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <div className="inline-flex items-center space-x-2">
            <Logo />
          </div>
          <div className="hidden grow items-start lg:flex">
            <ul className="ml-12 inline-flex space-x-8">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm font-semibold text-gray-800 hover:text-gray-900 uppercase"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:block">
            <button
              type="button"
              className="rounded-3xl flex justify-center align-middle border-2 border-primary  bg-primary text-white px-5 py-2 text-xs uppercase font-semibold transition ease-in-out duration-500 hover:border-2 hover:border-primary hover:bg-white hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              <Ticket /><span className='ml-2 pt-1'>Buy Ticket</span>
            </button>
          </div>
  
  
          <div className="lg:hidden">
            <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
          </div>

          {isMenuOpen && (
            <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform transition lg:hidden">
              <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="px-5 pb-6 pt-5">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center space-x-2">
                      <span>
                        <img src="/assets/images/logo_dark.png" alt="English Buddy Logo" height="100px" width="200px" />
                      </span>
                    </div>
                    <div className="-mr-2">
                      <button
                        type="button"
                        onClick={toggleMenu}
                        className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        <span className="sr-only">Close menu</span>
                        <X className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-4">
                      {menuItems.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                        >
                          <span className="ml-3 text-base font-medium text-gray-900">
                            {item.name}
                          </span>
                        </a>
                      ))}
                    </nav>
                  </div>
                  <button
                    type="button"
                    className="mt-4 rounded-3xl flex justify-center align-middle border border-primary  bg-primary text-white px-5 py-2 text-xs uppercase font-semibold transition ease-in-out duration-500 hover:border hover:border-primary hover:bg-white hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    <Ticket /><span className='ml-2 pt-1'>Buy Ticket</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
  