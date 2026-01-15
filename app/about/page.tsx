"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <main className="bg-white">
      {/* HERO SECTION */}
      <section className="relative h-[50vh] w-full md:h-[60vh]">
        <Image
          src="/fire-fighting3.avif"
          alt="Fire Safety Operations"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto max-w-7xl px-6 text-white">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-red-500">
              About Us
            </p>
            <h1 className="max-w-2xl text-3xl font-extrabold sm:text-4xl md:text-5xl">
              Comprehensive Fire & HSE Solutions You Can Trust
            </h1>
            <p className="mt-6 max-w-2xl text-sm text-gray-200 sm:text-base">
              We design, install, and maintain advanced fire protection and life
              safety systems for industrial, commercial, and high-risk
              environments.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center rounded-md bg-red-600 px-8 py-3 text-sm font-semibold transition hover:bg-red-700"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* CORE SOLUTIONS */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Comprehensive <span className="text-red-600">Fire System</span>
                <br /> Solutions
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {[{
                title: "Fire Safety Expertise",
                text: "Certified professionals delivering end-to-end fire system solutions compliant with NFPA and international standards.",
              }, {
                title: "Maintenance & Local Support",
                text: "Routine inspection, testing, and maintenance to ensure systems remain fully operational.",
              }, {
                title: "24/7 Emergency Response",
                text: "Rapid response teams ready to support critical fire safety needs at any time.",
              }, {
                title: "Risk-Driven Engineering",
                text: "Custom-designed systems based on hazard analysis and operational requirements.",
              }].map((item, i) => (
                <div key={i} className="rounded-lg bg-gray-50 p-6 shadow">
                  <h3 className="mb-2 text-lg font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="relative bg-neutral-900 py-20 md:py-28">
        <Image
          src="/fire-truck.avif"
          alt="Firefighter in action"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/80" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-xl bg-white p-8 shadow-lg">
              <h3 className="mb-4 text-xl font-bold text-gray-900">
                Our Mission
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                To protect lives, assets, and infrastructure by delivering
                reliable, innovative, and compliant fire protection solutions
                tailored to high-risk environments.
              </p>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-lg">
              <h3 className="mb-4 text-xl font-bold text-gray-900">
                Our Vision
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                To be a trusted leader in fire safety engineering across Africa
                by setting the benchmark for quality, reliability, and
                professionalism.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMMITMENT SECTION */}
      <section className="bg-gray-100 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-6 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Passionate About <span className="text-red-600">Safety & Excellence</span>
          </h2>
          <p className="max-w-4xl text-sm leading-relaxed text-gray-700 sm:text-base">
            Our commitment to excellence is driven by strict quality control,
            continuous training, and adherence to global fire safety standards.
            Every project we execute reflects our dedication to operational
            integrity, system reliability, and client satisfaction.
          </p>
        </div>
      </section>

      {/* VALUE PROPOSITION */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <Image
              src="/fire-system-equip.avif"
              alt="Fire system equipment"
              width={600}
              height={400}
              className="rounded-lg object-cover shadow"
            />

            <div>
              <h3 className="mb-6 text-2xl font-extrabold text-gray-900">
                Our Value Proposition
              </h3>
              <ul className="space-y-4 text-sm text-gray-600">
                <li>✔ Certified fire protection systems</li>
                <li>✔ End-to-end project delivery</li>
                <li>✔ Compliance with NFPA & local codes</li>
                <li>✔ Reliable maintenance & support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* END OF YEAR TEAM CELEBRATION + VIDEO */}
      <section className="bg-neutral-700 py-20">
        <div className="mx-auto max-w-7xl px-6">

          {/* TEXT CONTENT */}
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-red-500">
              Our People
            </p>
            <h2 className="mb-6 text-3xl font-extrabold text-white sm:text-4xl">
              Celebrating Our Team & Safety Culture
            </h2>
            <p className="text-sm leading-relaxed text-gray-300 sm:text-base">
              Beyond projects and systems, our greatest strength lies in our people.
              Our End-of-Year Party is an opportunity to recognize the dedication,
              teamwork, and professionalism that drive our fire safety and HSE
              operations throughout the year. From design and installation to
              inspection, testing, and maintenance, every team member plays a vital
              role in delivering reliable, compliant, and life-saving fire protection
              solutions.
              <br /><br />
              This celebration reflects our commitment to building a strong safety
              culture—one founded on collaboration, continuous improvement, and shared
              responsibility. As we move forward, we remain focused on protecting
              lives, assets, and infrastructure while fostering an environment where
              our people can grow, perform, and excel.
            </p>
          </div>
          {/* VIDEO */}
          <div className="mx-auto max-w-5xl overflow-hidden rounded-xl shadow-2xl">
            <div className="relative aspect-video w-full">
              <iframe
                src="https://www.youtube.com/embed/MBvPy3Le168"
                title="End of Year Party Celebration"
                className="absolute inset-0 h-full w-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="relative bg-black py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="mb-6 text-3xl font-extrabold text-white sm:text-4xl">
            Protect What Matters Most
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-md bg-red-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
