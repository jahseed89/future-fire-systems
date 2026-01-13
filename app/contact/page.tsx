import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative h-[40vh] w-full">
        <Image
          src="/fire-fighting8.jpg"
          alt="Contact Us"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 flex h-full items-center px-6">
          <div className="mx-auto max-w-7xl text-white">
            <h1 className="text-4xl font-extrabold">Contact Us</h1>
            <p className="mt-4 max-w-xl text-sm text-gray-200">
              Contact us today with your enquiries about our safety solutions
              and services, and we’ll get back to you promptly.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 grid gap-16 lg:grid-cols-2">
          {/* Left: Offices */}
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 mb-10">
              Our Offices
            </h2>

            <div className="grid gap-10 sm:grid-cols-2">
              <div>
                <h3 className="font-bold text-lg">Lagos</h3>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  3 Chris Efunyemi, Onanuga Street, by Babatunde Kuboye Street,
                  Lekki Phase 1, Lagos.
                </p>
                <p className="mt-4 text-sm font-semibold">07052629910</p>
              </div>

              <div>
                <h3 className="font-bold text-lg">Port Harcourt</h3>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  17, Road 21, A Close, Trans Amadi Gardens, Port Harcourt
                </p>
                <p className="mt-4 text-sm font-semibold">
                  0703 474 2958 <br />
                  0803 343 9329
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg">Warri</h3>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  Shell complex, Ejeba, Niger Close, Block 7, Warri
                </p>
                <p className="mt-4 text-sm font-semibold">
                  +234 806 068 2838
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg">Send us an email</h3>
                <p className="mt-3 text-sm text-gray-600">
                  support@futureconcerns.com
                </p>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="rounded-2xl bg-gradient-to-br from-blue-900 to-black p-10 text-white shadow-xl">
            <form className="space-y-6">
              <div>
                <label className="text-sm">Name</label>
                <input
                  type="text"
                  className="mt-2 w-full rounded-md bg-white px-4 py-3 text-black focus:outline-none"
                />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="text-sm">Email address</label>
                  <input
                    type="email"
                    className="mt-2 w-full rounded-md bg-white px-4 py-3 text-black focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm">Phone Number</label>
                  <input
                    type="tel"
                    className="mt-2 w-full rounded-md bg-white px-4 py-3 text-black focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm">Subject</label>
                <input
                  type="text"
                  className="mt-2 w-full rounded-md bg-white px-4 py-3 text-black focus:outline-none"
                />
              </div>

              <div>
                <label className="text-sm">Your Message</label>
                <textarea
                  rows={5}
                  className="mt-2 w-full rounded-md bg-white px-4 py-3 text-black focus:outline-none"
                />
              </div>

              <div className="flex items-start gap-3 text-sm">
                <input type="checkbox" className="mt-1" />
                <p className="text-gray-300">
                  I agree to allow FCNL to store and process the personal
                  information submitted.
                </p>
              </div>

              <button
                type="submit"
                className="rounded-md bg-red-600 px-8 py-3 font-semibold transition hover:bg-red-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-[450px] w-full">
        <iframe
          src="https://www.google.com/maps?q=Lekki%20Phase%201%20Lagos&output=embed"
          className="h-full w-full border-0"
          loading="lazy"
        />
      </section>
    </main>
  );
}
