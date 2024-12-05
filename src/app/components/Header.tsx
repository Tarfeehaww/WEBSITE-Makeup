"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-pink-800 p-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <p className="text-yellow-50 font-bold text-2xl">MakeupShakeup</p>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden text-yellow-50 text-3xl focus:outline-none"
          aria-label="Toggle Menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>

        {/* Navigation Links */}
        <ul
          className={`${
            menuOpen ? "flex" : "hidden"
          } flex-col sm:flex-row sm:flex absolute sm:static top-16 left-0 w-full sm:w-auto bg-pink-800 sm:bg-transparent space-y-4 sm:space-y-0 sm:space-x-6 text-yellow-50 sm:items-center`}
        >
          <li>
            <Link
              href="/"
              className="block text-center hover:text-yellow-300 transition duration-300"
              onClick={() => setMenuOpen(false)} // Close menu on click
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="block text-center hover:text-yellow-300 transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/product"
              className="block text-center hover:text-yellow-300 transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Product
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="block text-center hover:text-yellow-300 transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
