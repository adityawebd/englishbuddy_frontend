import Link from "next/link";
import Logo from "./Logo";

export default function Nav({ show }) {
  return (
    <>
      <div className="border">
        <Logo />
        Navbar
      </div>
    </>
  );
}
