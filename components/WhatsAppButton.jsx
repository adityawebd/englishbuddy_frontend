"use client";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const BackToTop = () => {
  return (
    <>
      <div className="fixed bottom-8 left-8 whatappButton">
        <div
          className="p-3 bg-green-500 text-white rounded-full shadow-2xl hover:bg-green-400 transition duration-300"
          aria-label="WhatsApp Button"
        >
          <Link href="https://wa.me/+919587925026" target="_blank"><FaWhatsapp size={24} /></Link>
        </div>
      </div>
    </>
  );
};

export default BackToTop;
