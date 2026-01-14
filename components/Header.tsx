// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";

// function Header() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="sticky top-0 z-50 bg-black text-white px-6 py-4">
//       <div className="mx-auto max-w-7xl flex items-center justify-between">
//         {/* Logo */}
//         <Link href="/" className="flex items-center">
//           <div className="relative h-10 sm:h-16 md:h-20 w-[160px] sm:w-[200px] md:w-[240px]">
//             <Image
//               src="/fire-systems-logo.png"
//               alt="Future Concerns Fire Systems Ltd Logo"
//               width={200}
//               height={50}
//               className="object-contain"
//             />
//           </div>
//         </Link>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden relative w-8 h-8"
//           onClick={() => setIsOpen(!isOpen)}
//           aria-label="Toggle menu"
//         >
//           <span
//             className={`absolute h-0.5 w-8 bg-white transition-all duration-300 ${
//               isOpen ? "rotate-45 top-4" : "top-2"
//             }`}
//           />
//           <span
//             className={`absolute h-0.5 w-8 bg-white transition-all duration-300 top-4 ${
//               isOpen ? "opacity-0" : "opacity-100"
//             }`}
//           />
//           <span
//             className={`absolute h-0.5 w-8 bg-white transition-all duration-300 ${
//               isOpen ? "-rotate-45 top-4" : "top-6"
//             }`}
//           />
//         </button>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex gap-8">
//           {[
//             { href: "/", label: "Home" },
//             { href: "/about", label: "About Us" },
//             { href: "/gallery", label: "Gallery" },
//             { href: "/blog", label: "Our Blog" },
//             { href: "/contact", label: "Contact Us" },
//           ].map((item) => (
//             <li key={item.href}>
//               <Link
//                 href={item.href}
//                 className="font-semibold hover:text-[#de192a] hover:border-[#de192a] transition"
//               >
//                 {item.label}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`md:hidden overflow-hidden transition-all duration-300 ${
//           isOpen ? "max-h-60 opacity-100 mt-4" : "max-h-0 opacity-0"
//         }`}
//       >
//         <ul className="flex flex-col gap-4">
//           {[
//             { href: "/", label: "Home" },
//             { href: "/about", label: "About Us" },
//             { href: "/gallery", label: "Gallery" },
//             { href: "/contact", label: "Contact" },
//           ].map((item) => (
//             <li key={item.href}>
//               <Link
//                 href={item.href}
//                 className="font-semibold"
//                 onClick={() => setIsOpen(false)}
//               >
//                 {item.label}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Header;

"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-black text-white px-4 py-2 md:py-4">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <div className="relative h-22 w-[300px] sm:h-24 sm:w-[280px] md:h-24 md:w-[300px]">
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
