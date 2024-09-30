import Footer from "./Footer";
import Navbar from "./Navbar";
import { useState } from "react";

export default function Layout({ children }) {

  return (
    <>
      <div className="">
        <Navbar />
        <div>
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
}
