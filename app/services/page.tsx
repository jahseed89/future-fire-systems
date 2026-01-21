"use client";

import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Fire Detection & Alarm Systems",
    slug: "fire-detection",
    description:
      "Design, installation, and commissioning of intelligent fire detection and alarm systems.",
  },
  {
    title: "Fire Suppression Systems",
    slug: "fire-suppression",
    description:
      "Water, foam, clean agent, and gaseous suppression systems for critical facilities.",
  },
  {
    title: "Gas & Flame Detection Systems",
    slug: "gas-detection",
    description:
      "Fixed gas and flame detection systems for hazardous and high-risk environments.",
  },
  {
    title: "Fire System Design & Engineering",
    slug: "fire-engineering",
    description:
      "Fire protection engineering, hazard analysis, and NFPA-compliant system design.",
  },
  {
    title: "Inspection, Testing & Maintenance (ITM)",
    slug: "inspection-maintenance",
    description:
      "Routine inspection, testing, and maintenance to keep fire systems fully operational.",
  },
  {
    title: "Fire Fighting Equipment & Emergency Systems",
    slug: "firefighting-equipment",
    description:
      "Supply and maintenance of fire extinguishers, hydrants, pumps, and emergency equipment.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-neutral-800 py-24 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-red-600">
          What We Do
        </p>
        <h1 className="mt-3 text-4xl font-extrabold text-white">
          Our Services
        </h1>
      </section>

      {/* SERVICES GRID */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="rounded-xl bg-neutral-900 p-8 text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="text-lg font-bold">{service.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-gray-300">
                  {service.description}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-6 inline-block text-red-500"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-black py-24">
        <div className="absolute inset-0">
          <Image
            src="/fire-fighting1.avif"
            alt="Fire Safety"
            fill
            className="object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center text-white">
          <h2 className="text-3xl font-extrabold">Protect What Matters</h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-200">
            From fire detection to personal protective equipment and confined
            space solutions, we deliver trusted safety systems designed to
            protect lives and critical assets.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-md bg-red-600 px-8 py-3 text-sm font-semibold transition hover:bg-red-700"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
