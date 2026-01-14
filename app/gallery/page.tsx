// import Image from "next/image";

// const galleryImages = [
//   {
//     src: "/fire-alarm.avif",
//     title: "Fire Alarm & Detection Systems",
//   },
//   {
//     src: "/fire-suppresion.avif",
//     title: "Fire Suppression Systems",
//   },
//   {
//     src: "/fire-pump.jpeg",
//     title: "Fire Pump Installation",
//   },
//   {
//     src: "/fire-hose.jpeg",
//     title: "Fire Hose Reel & Hydrant System",
//   },
//   {
//     src: "/fire-control.jpg",
//     title: "Fire Control Panels",
//   },
//   {
//     src: "/fire-training.avif",
//     title: "Fire Safety Training & Drills",
//   },
// ];

// export default function GalleryPage() {
//   return (
//     <main className="bg-white">
//       {/* Hero Section */}
//       <section className="relative h-[40vh] w-full">
//         <Image
//           src="/fire-fighting4.avif"
//           alt="Fire Systems Gallery"
//           fill
//           className="object-cover"
//         />
//         <div className="absolute inset-0 bg-black/60" />

//         <div className="relative z-10 flex h-full items-center px-6">
//           <div className="mx-auto max-w-7xl text-white">
//             <h1 className="text-4xl font-extrabold">Our Gallery</h1>
//             <p className="mt-4 max-w-2xl text-sm text-gray-200">
//               Explore our fire protection projects, showcasing advanced fire
//               detection, suppression systems, installations, testing, and
//               real-world operations across industrial and commercial facilities.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Image Gallery */}
//       <section className="py-20">
//         <div className="mx-auto max-w-7xl px-6">
//           <div className="mb-12 max-w-3xl">
//             <h2 className="text-3xl font-extrabold text-gray-900">
//               Fire System Installations & Equipment
//             </h2>
//             <p className="mt-4 text-sm leading-relaxed text-gray-600">
//               Our gallery highlights certified fire protection installations,
//               equipment deployment, system testing, and commissioning activities
//               designed to meet international fire safety standards.
//             </p>
//           </div>

//           <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//             {galleryImages.map((item, index) => (
//               <div
//                 key={index}
//                 className="group overflow-hidden rounded-xl shadow-lg"
//               >
//                 <div className="relative h-64 w-full">
//                   <Image
//                     src={item.src}
//                     alt={item.title}
//                     fill
//                     className="object-cover transition-transform duration-500 group-hover:scale-110"
//                   />
//                 </div>

//                 <div className="bg-white p-4">
//                   <h3 className="text-sm font-bold text-gray-900">
//                     {item.title}
//                   </h3>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Video Section */}
//       <section className="bg-neutral-900 py-20">
//         <div className="mx-auto max-w-7xl px-6">
//           <div className="mb-12 max-w-3xl text-white">
//             <h2 className="text-3xl font-extrabold">
//               Fire Protection in Action
//             </h2>
//             <p className="mt-4 text-sm leading-relaxed text-gray-300">
//               Watch our fire systems in operation—demonstrating system
//               reliability, rapid response, professional execution, and
//               compliance with fire safety regulations.
//             </p>
//           </div>

//           <div className="grid gap-10 lg:grid-cols-2">
//             {/* Video 1 */}
//             <div className="overflow-hidden rounded-xl shadow-lg">
//               <div className="relative aspect-video w-full">
//                 <iframe
//                   src="https://www.youtube.com/embed/Qvtec5CG0nA"
//                   title="Fire Safety Testing & Commissioning"
//                   className="absolute inset-0 h-full w-full"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                 />
//               </div>
//               <div className="bg-black p-4 text-white">
//                 <h3 className="text-sm font-semibold">
//                   Fire Safety Testing & Commissioning
//                 </h3>
//               </div>
//             </div>
//             {/* Video 2 */}
//             <div className="overflow-hidden rounded-xl shadow-lg">
//               <div className="relative aspect-video w-full">
//                 <iframe
//                   src="https://www.youtube.com/embed/MhANtfG-5pA"
//                   title="Fire Suppression System Demonstration"
//                   className="absolute inset-0 h-full w-full"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                 />
//               </div>
//               <div className="bg-black p-4 text-white">
//                 <h3 className="text-sm font-semibold">
//                   Fire Suppression System Demonstration
//                 </h3>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Closing Content */}
//       <section className="py-20">
//         <div className="mx-auto max-w-4xl px-6 text-center">
//           <h2 className="text-2xl font-extrabold text-gray-900">
//             Trusted Fire Protection Solutions
//           </h2>
//           <p className="mt-4 text-sm leading-relaxed text-gray-600">
//             From design and installation to testing and maintenance, our fire
//             protection systems are engineered to safeguard lives, assets, and
//             critical infrastructure across oil & gas, industrial, and commercial
//             sectors.
//           </p>
//         </div>
//       </section>
//     </main>
//   );
// }

import Image from "next/image";

/* ===============================
   PEOPLE-FOCUSED GALLERY CONTENT
================================ */
const galleryImages = [
  {
    src: "/team-installation-1.jpg",
    title: "System Installation Team on Site",
  },
  {
    src: "/team-inspection-1.jpg",
    title: "Fire System Inspection & Compliance Check",
  },
  { src: "/team-training-1.jpg", title: "Fire Safety Training Session" },
  {
    src: "/team-engineers-1.jpg",
    title: "Fire Engineers Reviewing System Design",
  },
  {
    src: "/team-alarm-testing.jpg",
    title: "Fire Alarm Testing & Commissioning",
  },
  { src: "/team-pump-room.jpg", title: "Fire Pump Room Installation Works" },
  {
    src: "/team-hose-reel.jpg",
    title: "Hose Reel & Hydrant Installation Team",
  },
  {
    src: "/team-suppression.jpg",
    title: "Suppression System Setup & Calibration",
  },
  { src: "/team-site-supervision.jpg", title: "On-Site Project Supervision" },
  { src: "/team-ppe.jpg", title: "Certified Technicians in Full PPE" },
  {
    src: "/team-control-panel.jpg",
    title: "Control Panel Configuration & Testing",
  },
  { src: "/team-maintenance.jpg", title: "Preventive Maintenance Activities" },
  {
    src: "/team-drill.jpg",
    title: "Emergency Response Drill with Client Team",
  },
  { src: "/team-collaboration.jpg", title: "Engineering Team Collaboration" },
  {
    src: "/team-site-walkthrough.jpg",
    title: "Client Site Walkthrough & Assessment",
  },
  {
    src: "/team-quality-check.jpg",
    title: "Final Quality & Safety Assurance Checks",
  },
  {
    src: "/team-quality-check.jpg",
    title: "Final Quality & Safety Assurance Checks",
  },
  {
    src: "/team-quality-check.jpg",
    title: "Final Quality & Safety Assurance Checks",
  },
];

export default function GalleryPage() {
  return (
    <main className="bg-white">
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[40vh] w-full">
        <Image
          src="/fire-fighting4.avif"
          alt="Our Team in Action"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 flex h-full items-center px-6">
          <div className="mx-auto max-w-7xl text-white">
            <h1 className="text-4xl font-extrabold">Our Gallery</h1>
            <p className="mt-4 max-w-2xl text-sm text-gray-200">
              Explore our fire protection projects, showcasing advance fire
              detection, suppression systems, installations, testing, and
              real-world operations accross industrial and commercial
              facilities.
            </p>
          </div>
        </div>
      </section>

      {/* ================= IMAGE GALLERY ================= */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Our People in Action
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-600">
              This gallery highlights the dedication, expertise, and teamwork of
              our engineers, technicians, inspectors, and trainers as they
              deliver certified fire protection systems across industrial,
              commercial, and high-risk environments.
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

      {/* ================= VIDEO SECTION ================= */}
      <section className="bg-neutral-900 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl text-white">
            <h2 className="text-3xl font-extrabold">
              Fire Protection in Action
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-300">
              Watch our teams execute fire system testing, commissioning, and
              suppression demonstrations—showcasing professionalism, safety
              compliance, and operational excellence.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-2">
            {/* VIDEO 1 */}
            <div className="overflow-hidden rounded-xl shadow-lg">
              <div className="relative aspect-video w-full">
                <iframe
                  src="https://www.youtube.com/embed/Qvtec5CG0nA"
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

            {/* VIDEO 2 */}
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
          </div>
        </div>
      </section>

      {/* ================= CLOSING SECTION ================= */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-2xl font-extrabold text-gray-900">
            Built by People. Trusted for Safety.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-600">
            Our people are our strength. With deep industry experience and a
            commitment to international fire safety standards, we deliver
            solutions that protect lives, assets, and mission-critical
            operations.
          </p>
        </div>
      </section>
    </main>
  );
}
