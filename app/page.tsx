import Image from "next/image";
import Link from "next/link";

const images = [
  "/fire-fighting1.avif",
  "/fire-fighting2.avif",
  "/fire-fighting3.avif",
  "/fire-fighting4.avif",
  "/fire-fighting5.avif",
  "/fire-fighting6.avif",
  "/fire-fighting7.avif",
  "/fire-fighting8.avif",
  "/fire-fighting9.avif",
  "/fire-fighting10.avif",
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      <section className="relative h-[50vh] w-full md:h-[60vh]">
        {/* Sliding Background */}
        <div className="absolute inset-0 overflow-hidden">
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
              Intelligent <span className="text-red-500">Fire Fighting</span>{" "}
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
    </main>
  );
}
