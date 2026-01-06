"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-6 py-4">
      <div className="flex items-center justify-between">
        {/* <Link href="/" className="flex items-center">
          <div className="relative h-14 sm:h-16 md:h-20 lg:h-24 w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px]">
            <Image
              src="/ff-logo-new.png"
              alt="Future Concerns Fire Systems Ltd Logo"
              fill
              priority
              className="object-contain"
            />
          </div>
        </Link> */}
        <Link href="/" className="flex items-center">
          <div className="relative h-10 sm:h-16 md:h-20 lg:h-18 w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px]">
            <Image
              src="/ff-logo-new.png"
              alt="Future Concerns Fire Systems Ltd Logo"
              fill
              priority
              className="object-contain"
            />
          </div>
        </Link>

        {/* Animated Menu Button */}
        <button
          className="md:hidden relative w-8 h-8"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`absolute h-0.5 w-8 bg-white transition-all duration-300
            ${isOpen ? "rotate-45 top-4" : "top-2"}`}
          />
          <span
            className={`absolute h-0.5 w-8 bg-white transition-all duration-300 top-4
            ${isOpen ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className={`absolute h-0.5 w-8 bg-white transition-all duration-300
            ${isOpen ? "-rotate-45 top-4" : "top-6"}`}
          />
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          <li>
            <Link href="/" className="hover:text-gray-300 w-bold">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-300 w-bold">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/gallery" className="hover:text-gray-300 w-bold">
              Gallery
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-300 w-bold">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300
          ${isOpen ? "max-h-60 opacity-100 mt-4" : "max-h-0 opacity-0"}
        `}
      >
        <ul className="flex flex-col gap-4">
          <li>
            <Link href="/" className="w-bold" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="w-bold" onClick={() => setIsOpen(false)}>
              About Us
            </Link>
          </li>
          <li>
            <Link href="/gallery" className="w-bold" onClick={() => setIsOpen(false)}>
              Gallery
            </Link>
          </li>
          <li>
            <Link href="/contact" className="w-bold" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
