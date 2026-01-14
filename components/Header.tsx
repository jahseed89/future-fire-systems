"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-black text-white px-4 py-2 md:py-4">
      <div className="mx-auto max-w-7xl">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="relative h-22 w-[350px] -ml-16 sm:w-[300px] md:h-24 md:w-[300px]">
              <Image
                src="/fire-systems-logo.png"
                alt="Future Concerns Fire Systems Ltd Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden relative h-8 w-8"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`absolute left-0 h-0.5 w-8 bg-white transition-all duration-300 ${
                isOpen ? "top-4 rotate-45" : "top-2"
              }`}
            />
            <span
              className={`absolute left-0 top-4 h-0.5 w-8 bg-white transition-all duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-0.5 w-8 bg-white transition-all duration-300 ${
                isOpen ? "top-4 -rotate-45" : "top-6"
              }`}
            />
          </button>

          {/* DESKTOP MENU */}
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
                  className="font-semibold transition hover:text-[#de192a]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-4 py-4">
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
      </div>
    </nav>
  );
}

export default Header;
