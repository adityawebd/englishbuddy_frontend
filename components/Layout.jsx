import React, { useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useState } from "react";

import AOS from "aos"; // for react aos animation
import "aos/dist/aos.css"; // for react aos animation
import BackToTop from "./BackToTop";
import WhatsAppButton from "./WhatsAppButton";

export default function Layout({ children }) {

  useEffect(() => {  // for react aos animation
    AOS.init({
      // disable: "phone",
      // duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      <div className="">
        <Navbar />
        <div>
          {children}
        </div>
        <Footer />
        <BackToTop />
        <WhatsAppButton />
      </div>
    </>
  );
}
