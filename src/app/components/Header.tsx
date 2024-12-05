"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-pink-800 p-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <p className="text-yellow-50 font-semibold text-2xl">
                    MakeupShakeup
                </p>

                {/* Hamburger Menu */}
                <button
                    className="sm:hidden text-yellow-50 focus:outline-none"
                    aria-label="Toggle Menu"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? "✖" : "☰"}
                </button>

                {/* Navigation Links */}
                <ul
                    className={`${
                        menuOpen ? "flex" : "hidden"
                    } flex-col sm:flex-row sm:flex absolute sm:static top-16 left-0 w-full sm:w-auto bg-pink-800 sm:bg-transparent space-y-4 sm:space-y-0 sm:space-x-6 text-white sm:items-center`}
                >
                    <li className="text-center">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="text-center">
                        <Link href="/about">About</Link>
                    </li>
                    <li className="text-center">
                        <Link href="/product">Product</Link>
                    </li>
                    <li className="text-center">
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
