"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-black text-white px-6 py-4">
      <div className="mx-auto max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative h-10 sm:h-16 md:h-20 w-[160px] sm:w-[200px] md:w-[240px]">
            <Image
              src="/new-logo.png"
              alt="Future Concerns Fire Systems Ltd Logo"
              fill
              priority
              className="object-contain"
            />
          </div>
        </Link>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative w-8 h-8"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`absolute h-0.5 w-8 bg-white transition-all duration-300 ${
              isOpen ? "rotate-45 top-4" : "top-2"
            }`}
          />
          <span
            className={`absolute h-0.5 w-8 bg-white transition-all duration-300 top-4 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute h-0.5 w-8 bg-white transition-all duration-300 ${
              isOpen ? "-rotate-45 top-4" : "top-6"
            }`}
          />
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About Us" },
            { href: "/gallery", label: "Gallery" },
            { href: "/blog", label: "Our Blog" },
            { href: "/contact", label: "Contact Us" },
          ].map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="font-semibold hover:text-[#de192a] hover:border-[#de192a] transition"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-60 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-4">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About Us" },
            { href: "/gallery", label: "Gallery" },
            { href: "/contact", label: "Contact" },
          ].map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="font-semibold"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Header;

