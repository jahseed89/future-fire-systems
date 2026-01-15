import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    slug: "fire-detection-systems",
    title: "Fire Detection Systems for Industrial Facilities",
    excerpt:
      "Early fire detection is critical in industrial environments. Learn how modern fire alarm and detection systems help prevent catastrophic losses.",
    image: "/fire-fighting1.avif",
    date: "March 12, 2026",
  },
  {
    id: 2,
    slug: "fire-suppression-systems",
    title: "Choosing the Right Fire Suppression System",
    excerpt:
      "From sprinklers to gas suppression, selecting the right fire suppression system depends on your facility type and risk exposure.",
    image: "/the-hart.png",
    date: "February 28, 2026",
  },
  {
    id: 3,
    slug: "oil-gas-fire-safety",
    title: "Fire Safety Compliance in Oil & Gas Facilities",
    excerpt:
      "Oil & gas facilities require strict fire safety standards. Discover how compliance protects lives, assets, and operations.",
    image: "/gasoil-facilities.jpg",
    date: "February 10, 2026",
  },

];

export default function OurBlog() {

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Our <span className="text-red-600">Blog</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Insights, updates, and expert knowledge on fire detection,
            suppression systems, and industrial fire safety solutions.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="mb-2 text-sm text-gray-500">{post.date}</p>
                <h3 className="mb-3 text-lg font-semibold text-gray-900">
                  {post.title}
                </h3>
                <p className="mb-4 text-gray-600">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="inline-flex items-center font-medium text-red-600 hover:text-red-700">
                  Read More →
                </Link>


              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
