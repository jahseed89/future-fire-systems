import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

export default function Footer() {
  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.instagram.com/futureconcernsgroup?igsh=MWFwemVsdzZtbnFnMQ%3D%3D&utm_source=qr",
      icon: FaFacebookF,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/futureconcernssafety?igsh=MXZiMzZ0b2Y1ZDNhYg%3D%3D&utm_source",
      icon: FaInstagram,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/future-concerns-nigeria-limited/posts/?feedView=all",
      icon: FaLinkedinIn,
    },
    {
      name: "X (Twitter)",
      href: "https://x.com/FCNL_Group",
      icon: FaXTwitter,
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/results?search_query=future+concerns",
      icon: FaYoutube,
    },
  ];

  return (
    <footer className="bg-black text-gray-400">
      {/* TOP SECTION */}
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-12">
        <div className="grid gap-12 md:grid-cols-4">
          {/* LOGO */}
          <div>
            <Image
              src="/fire-systems-logo.png"
              alt="Company Logo"
              width={200}
              height={50}
              className="mb-4"
            />
          </div>

          {/* SUBSIDIARIES */}
          <div>
            <h4 className="mb-5 text-sm font-semibold text-white">
              Our Subsidiaries
            </h4>
            <ul className="space-y-3 text-sm">
              <li>Fire Alarm & Control Systems</li>
              <li>Fire Suppression Solutions</li>
              <li>Inspection & Maintenance</li>
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="mb-5 text-sm font-semibold text-white">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/contact" className="hover:text-red-500">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/#" className="hover:text-red-500">
                  Meet The Team
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-red-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="blog" className="hover:text-red-500">
                  Our Blog
                </Link>
              </li>
              <li>
                <Link href="gallery" className="hover:text-red-500">
                  Our Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* SOCIAL ICONS */}
          {/* <div className="flex md:justify-end">
            <div className="flex gap-3">
              {[
                FaFacebookF,
                FaInstagram,
                FaLinkedinIn,
                FaXTwitter,
                FaYoutube,
              ].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-800 transition hover:bg-red-600"
                >
                  <Icon className="text-sm text-white" />
                </a>
              ))}
            </div>
          </div> */}
          {/* SOCIAL ICONS */}
          <div className="flex md:justify-end">
            <div className="flex gap-3">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-800 transition hover:bg-red-600"
                >
                  <Icon className="text-sm text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-white/10" />

      {/* BOTTOM SECTION */}
      <div className="mx-auto max-w-7xl px-6 py-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* COPYRIGHT */}
          <p className="text-sm">
            Copyright © {new Date().getFullYear()} – Future Fire Systems LTD
          </p>

          {/* TICKER BAR (STATIC MOCK LIKE IMAGE) */}
          <div className="flex items-center gap-4 rounded-md bg-neutral-900 px-4 py-2 text-xs text-gray-300">
            <span className="flex items-center gap-2">🔴 WTI Crude Oil</span>
            <span className="text-red-500">-1.60%</span>

            <span className="mx-2 h-4 w-px bg-white/20" />

            <span>Oando Plc</span>
            <span className="text-red-500">-1.60%</span>

            <span className="mx-2 h-4 w-px bg-white/20" />

            <span>Seplat</span>
            <span className="text-green-500">0.00%</span>
          </div>
        </div>
      </div>
    </footer>
  );
}