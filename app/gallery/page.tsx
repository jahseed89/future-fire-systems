import Image from "next/image";

const galleryImages = [
  {
    src: "/fire-alarm.avif",
    title: "Fire Alarm & Detection Systems",
  },
  {
    src: "/fire-suppresion.avif",
    title: "Fire Suppression Systems",
  },
  {
    src: "/fire-pump.jpeg",
    title: "Fire Pump Installation",
  },
  {
    src: "/fire-hose.jpeg",
    title: "Fire Hose Reel & Hydrant System",
  },
  {
    src: "/fire-control.jpg",
    title: "Fire Control Panels",
  },
  {
    src: "/fire-training.avif",
    title: "Fire Safety Training & Drills",
  },
];

export default function GalleryPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full">
        <Image
          src="/fire-fighting4.avif"
          alt="Fire Systems Gallery"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 flex h-full items-center px-6">
          <div className="mx-auto max-w-7xl text-white">
            <h1 className="text-4xl font-extrabold">Our Gallery</h1>
            <p className="mt-4 max-w-2xl text-sm text-gray-200">
              Explore our fire protection projects, showcasing advanced fire
              detection, suppression systems, installations, testing, and
              real-world operations across industrial and commercial facilities.
            </p>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Fire System Installations & Equipment
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-600">
              Our gallery highlights certified fire protection installations,
              equipment deployment, system testing, and commissioning activities
              designed to meet international fire safety standards.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((item, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-xl shadow-lg"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="bg-white p-4">
                  <h3 className="text-sm font-bold text-gray-900">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="bg-neutral-900 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl text-white">
            <h2 className="text-3xl font-extrabold">
              Fire Protection in Action
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-300">
              Watch our fire systems in operation—demonstrating system
              reliability, rapid response, professional execution, and compliance
              with fire safety regulations.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-2">
            {/* Video 1 */}
            <div className="overflow-hidden rounded-xl shadow-lg">
              <div className="relative aspect-video w-full">
                <iframe
                  src="https://www.youtube.com/embed/MhANtfG-5pA"
                  title="Fire Suppression System Demonstration"
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="bg-black p-4 text-white">
                <h3 className="text-sm font-semibold">
                  Fire Suppression System Demonstration
                </h3>
              </div>
            </div>

            {/* Video 2 */}
            <div className="overflow-hidden rounded-xl shadow-lg">
              <div className="relative aspect-video w-full">
                <iframe
                  src="https://www.youtube.com/embed/9q8XjYFJzjQ"
                  title="Fire Safety Testing & Commissioning"
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="bg-black p-4 text-white">
                <h3 className="text-sm font-semibold">
                  Fire Safety Testing & Commissioning
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Content */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-2xl font-extrabold text-gray-900">
            Trusted Fire Protection Solutions
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-600">
            From design and installation to testing and maintenance, our fire
            protection systems are engineered to safeguard lives, assets, and
            critical infrastructure across oil & gas, industrial, and commercial
            sectors.
          </p>
        </div>
      </section>
    </main>
  );
}
