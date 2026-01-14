import Image from "next/image";
import Link from "next/link";

const images = [
  "/fire-fighting1.avif",
  "/fire-fighting2.avif",
  "/fire-fighting3.avif",
  "/fire-fighting4.avif",
  "/fire-fighting8.jpg",
  "/fire-fighting6.avif",
  "/fire-fighting7.avif",
  "/fire-fighting8.jpg",
  "/fire-fighting9.avif",
  "/fire-fighting10.avif",
];

const fireEquipment = [
  {
    title: "Fire Extinguishers",
    description:
      "Portable and fixed fire extinguishers including water, foam, dry powder, CO₂, and clean agent types designed for Class A, B, C, D, and electrical fire hazards.",
    image: "/fire-equ1.jpeg",
  },
  {
    title: "Fire Hose & Hydrant Systems",
    description:
      "Fire hoses, hose reels, landing valves, and hydrant systems engineered to deliver reliable water supply for manual fire fighting operations.",
    image: "/fire-hose.jpeg",
  },
  {
    title: "Fire Fighter PPE & Tools",
    description:
      "Protective fire suits, helmets, gloves, boots, breathing apparatus, and rescue tools designed to protect responders during fire suppression activities.",
    image: "/fire-ppe.jpeg",
  },
  {
    title: "Fire Pumps & Accessories",
    description:
      "Diesel, electric, and jockey fire pumps with controllers and valves to ensure adequate pressure and flow across fire protection networks.",
    image: "/fire-pump.jpeg",
  },
  {
    title: "Emergency & Safety Signage",
    description:
      "Fire safety signs, evacuation maps, and photoluminescent signage to support safe evacuation and regulatory compliance.",
    image: "/fire-emergency.jpeg",
  },
  {
    title: "Inspection & Testing Equipment",
    description:
      "Specialized inspection and testing tools used for commissioning, routine inspection, and maintenance of fire protection systems.",
    image: "/fire-inspection.jpeg",
  },
];

export default function Home() {
  return (
    <main>
      <section className="relative h-[50vh] w-full md:h-[60vh]">
        {/* Sliding Background */}
        <div className="absolute inset-0">
          <div className="flex h-full w-[500vw] hero-slider">
            {images.map((src, index) => (
              <div
                key={index}
                className="relative h-full w-screen flex-shrink-0"
              >
                <Image
                  src={src}
                  alt={`Hero background ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex h-full items-center justify-center px-6">
          <div className="max-w-4xl text-center text-white">
            <h1 className="text-3xl font-extrabold sm:text-4xl md:text-5xl">
              Intelligent <span className="text-red-500">Fire Fighting</span>
              Solutions
              <br className="hidden sm:block" />
              <span> for High-Risk Industries</span>
            </h1>

            <p className="mt-6 text-sm text-gray-200 sm:text-base md:text-lg leading-relaxed">
              From detection to suppression, our fire fighting systems are
              designed to safeguard personnel and infrastructure in oil & gas,
              industrial, and commercial facilities.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-md bg-red-600 px-8 py-3 text-sm font-semibold transition hover:bg-red-700"
              >
                Learn More
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-white/70 px-8 py-3 text-sm font-semibold text-white transition hover:border-red-500 hover:text-red-400"
              >
                Contact Us →
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Fire System Solution Section */}
      <section className="relative bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* Text Content */}
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Fire System <span className="text-red-600">Solutions</span>
              </h2>

              <p className="mt-6 text-sm leading-relaxed text-gray-600 sm:text-base">
                Our fire system solutions are engineered to deliver rapid
                detection, intelligent control, and reliable suppression across
                high-risk environments. We design and integrate advanced fire
                protection systems that minimize downtime, protect critical
                assets, and ensure full compliance with international safety
                standards.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
                From fire alarms and gas suppression to water-based and foam
                systems, our solutions are tailored for industrial plants, oil &
                gas facilities, commercial buildings, and mission-critical
                infrastructure.
              </p>

              <div className="mt-8">
                <Link
                  href="#"
                  className="inline-flex items-center rounded-md bg-red-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Image Content */}
            <div className="relative">
              {/* Blue Background Accent */}
              <div className="absolute -right-6 -bottom-6 hidden h-full w-full rounded-lg bg-blue-900 md:block" />

              {/* Image */}
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/fire-fighting1.avif"
                  alt="Fire System Solution"
                  width={600}
                  height={450}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Fire Systems Services Section */}
      <section className="bg-black py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          {/* Header */}
          <div className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-red-600">
                What We Do
              </p>
              <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
                Our Fire System Services
              </h2>
            </div>

            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-md bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
            >
              All Services
            </Link>
          </div>

          {/* Services Grid */}
          <div className="grid gap-8 sm:grid-cols-2">
            {/* Card 1 */}
            <div className="rounded-xl bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
              <h3 className="text-xl font-bold text-gray-900">
                Fire Detection & Alarm Systems
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-gray-600">
                We design, supply, and commission advanced fire detection and
                alarm systems that provide early warning and rapid response. Our
                solutions include smoke, heat, and flame detection integrated
                with control panels and emergency notification systems.
              </p>

              <a
                href="#"
                className="mt-6 inline-flex items-center text-sm font-semibold text-red-600 hover:underline"
              >
                Learn More →
              </a>
            </div>

            {/* Card 2 */}
            <div className="rounded-xl bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
              <h3 className="text-xl font-bold text-gray-900">
                Fire Suppression Systems
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-gray-600">
                Our fire suppression solutions are engineered to control and
                extinguish fires quickly while minimizing damage. We deliver
                water-based, foam, clean agent, and gas suppression systems
                tailored to site-specific hazards.
              </p>

              <a
                href="#"
                className="mt-6 inline-flex items-center text-sm font-semibold text-red-600 hover:underline"
              >
                Learn More →
              </a>
            </div>

            {/* Card 3 */}
            <div className="rounded-xl bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
              <h3 className="text-xl font-bold text-gray-900">
                Fire System Design & Engineering
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-gray-600">
                We provide complete fire system engineering services, including
                hazard analysis, system design, hydraulic calculations, and
                compliance with NFPA, FM, and local fire codes to ensure safe
                and efficient operation.
              </p>

              <a
                href="#"
                className="mt-6 inline-flex items-center text-sm font-semibold text-red-600 hover:underline"
              >
                Learn More →
              </a>
            </div>

            {/* Card 4 */}
            <div className="rounded-xl bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
              <h3 className="text-xl font-bold text-gray-900">
                Inspection, Testing & Maintenance
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-gray-600">
                Our inspection and maintenance programs ensure fire systems
                remain fully operational at all times. We conduct routine
                testing, system audits, fault diagnostics, and lifecycle
                maintenance to reduce risk and downtime.
              </p>

              <a
                href="#"
                className="mt-6 inline-flex items-center text-sm font-semibold text-red-600 hover:underline"
              >
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Fire Fighting Video Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
            AGPC & FCG
          </h2>

          <div className="mt-10 overflow-hidden rounded-xl shadow-lg">
            <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/YUua3KhMt4A"
                className="absolute inset-0 h-full w-full"
                title="NAFFCO in Action"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <p className="mx-auto mt-6 max-w-3xl text-sm leading-relaxed text-gray-600 sm:text-base">
            Watch our fire fighting operations in action, demonstrating rapid
            response, professional execution, and reliable fire protection
            solutions.
          </p>
        </div>
      </section>

      <section className="bg-neutral-700 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          {/* Header */}
          <div className="mb-14 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-red-600">
              Fire Safety Assets
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
              Fire Equipment & Tools
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-gray-400 sm:text-base">
              We provide certified fire fighting equipment and operational tools
              that support effective fire response, asset protection, and
              personnel safety across industrial, commercial, and high-risk
              environments.
            </p>
          </div>

          {/* Equipment Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {fireEquipment.map((item, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative h-48 w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}