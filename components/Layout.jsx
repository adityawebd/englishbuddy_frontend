import Navbar from "./Navbar";
import { useState } from "react";

export default function Layout({ children }) {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <div className="">
        <Navbar />
        <div>
          {children}
        </div>
      </div>
    </>
  );
}
