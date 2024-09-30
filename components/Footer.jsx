import React from "react";
import Link from "next/link";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";

const Footer = () => {
  const date = new Date();

  return (
    <>
      <div className="bg-primary developedByAdityaRajGupta">
        <div className="container relative mx-auto px-4 sm:px-6 md:px-8 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 py-10 border-b border-white/50">
            <div className="">
              <img
                src="/assets/images/logo_white.png"
                alt="footer-logo"
                className="w-[50%] max-sm:w-full"
              />
              <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 ">
                <div className="">
                  <h3 className="text-secondary uppercase text-lg">
                    NEW DELHI
                  </h3>
                  <p className="text-white/70 mt-4">
                    # 308, Plot No. 2, Sector-5, Aggarwal Tower MLU Plaza,
                    Dwarka New Delhi-110075
                  </p>
                </div>
                <div className="max-sm:mt-5">
                  <h3 className="text-secondary uppercase text-lg">AMRITSAR</h3>
                  <p className="text-white/70 mt-4">
                    SCO-29, Upper 1st Floor, Kaushalaya Tower, District Shopping
                    Complex, Ranjit Avenue, B-Block Amritsar-143001
                  </p>
                </div>
              </div>
            </div>
            <div className=" p-10 max-sm:p-0 max-sm:pt-10">
              <h3 className="text-white uppercase text-xl font-semibold">
                subscribe our newsletter
              </h3>
              <div className="flex gap-4 items-center mt-5">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="p-2 px-5 outline-none rounded-3xl w-[60%]"
                />
                <Link
                  href="/register"
                  className="bg-gradient-to-t from-secondary via-secondary/80 to-secondary/90  text-white rounded-full px-5 py-3 text-xs transition duration-500 hover:bg-gradient-to-t hover:from-white hover:via-white hover:to-white hover:text-secondary hover:border-2 hover:border-secondary uppercase font-bold shadow-xl"
                >
                  subscribe
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 py-10 border-b border-white/50">
            <div>
              <h4 className="uppercase text-lg text-white font-bold">MENU</h4>
              <ul className="text-white/70 mt-5 ">
                <li className="mb-2">
                  <Link
                    href="/about-us"
                    prefetch={true}
                    className="transition duration-500 hover:border-b pb-1"
                  >
                    About
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href=""
                    prefetch={true}
                    className="transition duration-500 hover:border-b pb-1"
                  >
                    Services
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/blogs"
                    prefetch={true}
                    className="transition duration-500 hover:border-b pb-1"
                  >
                    Blog
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/contact-us"
                    prefetch={true}
                    className="transition duration-500 hover:border-b pb-1"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="uppercase text-lg text-white font-bold">
                useful links
              </h4>
              <ul className="text-white/70 mt-5 ">
                <li className="mb-2">
                  <Link
                    href="/tnc"
                    prefetch={true}
                    className="transition duration-500 hover:border-b pb-1"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/privacy-policy"
                    prefetch={true}
                    className="transition duration-500 hover:border-b pb-1"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href=""
                    prefetch={true}
                    className="transition duration-500 hover:border-b pb-1"
                  >
                    Tests
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href=""
                    prefetch={true}
                    className="transition duration-500 hover:border-b pb-1"
                  >
                    Sitemap
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="uppercase text-lg text-white font-bold">
                follow ups
              </h4>
              <ul className="text-white/70 mt-5 ">
                <li className="mb-2">
                  <Link
                    href="https://www.facebook.com/englishbuddyindia"
                    prefetch={true}
                    target="_blank"
                    className="transition duration-500 hover:border-b pb-1"
                  >
                    Facebook
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="https://twitter.com/EnglishBuddyInd"
                    prefetch={true}
                    target="_blank"
                    className="transition duration-500 hover:border-b pb-1"
                  >
                    Twitter
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="https://www.instagram.com/englishbuddyindia/"
                    prefetch={true}
                    target="_blank"
                    className="transition duration-500 hover:border-b pb-1"
                  >
                    Instagram
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="https://www.linkedin.com/company/englishbuddy"
                    prefetch={true}
                    target="_blank"
                    className="transition duration-500 hover:border-b pb-1"
                  >
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="uppercase text-lg text-white font-bold">
                contact us
              </h4>
              <div className="mt-5 flex gap-4">
                <div className="text-green-400 bg-white/30 p-2 px-3 rounded-lg flex justify-center items-center">
                  {" "}
                  <IoMdMail />{" "}
                </div>
                <div>
                  <div className="text-xs text-white/60">Email</div>
                  <Link
                    href="mailto:info@englishbuddy.co.in"
                    className="text-white"
                  >
                    info@englishbuddy.co.in
                  </Link>
                </div>
              </div>
              <div className="mt-5 flex gap-4">
                <div className="text-green-400 bg-white/30 p-2 px-3 rounded-lg flex justify-center items-center">
                  {" "}
                  <IoCall />{" "}
                </div>
                <div>
                  <div className="text-xs text-white/60">Phone</div>
                  <Link href="tel:+919625004114" className="text-white">
                    +91-9625004114
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className=" py-10 text-white/70">
            <div className="flex justify-between items-center max-sm:flex-col max-sm:items-start">
              <p><span className="font-semibold">English Buddy</span> | Design & Developed by <a href="https://rapiddigitalgrowth.com/" className="font-semibold hover:underline" target="_blank">Rapid Digital Growth</a></p>
              <p>Copyright &copy; {date.getFullYear()} All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
