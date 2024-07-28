"use client";

import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-end sm:block sm:w-full sm:justify-normal">
      {isMobile && (
        <button
          onClick={toggleMenu}
          className="flex items-center text-2xl text-neutral-4 sm:hidden"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      )}

      <div
        className={`w-10/12 items-center justify-between p-4 sm:flex sm:w-full ${
          isMenuOpen && isMobile
            ? "absolute left-1/2 top-24 flex h-max w-72 -translate-x-1/2 flex-col gap-5 divide-y-2 divide-neutral-1 divide-opacity-35 rounded-2xl bg-primary-2"
            : ""
        }`}
      >
        <ul
          className={`flex flex-col gap-3 text-center sm:flex-row sm:items-center sm:gap-5 ${isMobile && !isMenuOpen ? "hidden" : ""}`}
        >
          <li>
            <Link
              className="text-sm font-semibold text-white transition-colors hover:text-primary-1 sm:text-neutral-2 sm:hover:text-neutral-3"
              href="#"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              className="text-sm font-semibold text-white transition-colors hover:text-primary-1 sm:text-neutral-2 sm:hover:text-neutral-3"
              href="#"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              className="text-sm font-semibold text-white transition-colors hover:text-primary-1 sm:text-neutral-2 sm:hover:text-neutral-3"
              href="#"
            >
              Resources
            </Link>
          </li>
        </ul>
        <ul
          className={`flex flex-col gap-3 text-center sm:flex-row sm:items-center sm:gap-5 ${isMobile && !isMenuOpen ? "hidden" : ""}`}
        >
          <li className="mt-3 sm:mt-0">
            <Link
              className="text-sm font-semibold text-white transition-colors hover:text-primary-1 sm:text-neutral-2 sm:hover:text-neutral-3"
              href="#"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              className="block w-60 rounded-full bg-primary-1 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-opacity-70 sm:w-auto"
              href="#"
            >
              Signup
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
