// import Image from "next/image";
// import Link from "next/link";
// import { notFound } from "next/navigation";

// const blogPosts: Record<
//   string,
//   {
//     title: string;
//     date: string;
//     image: string;
//     content: string;
//   }
// > = {
//   "fire-detection-systems": {
//     title: "Fire Detection Systems for Industrial Facilities",
//     date: "March 12, 2026",
//     image: "/fire-fighting1.avif",
//     content: `
// Industrial facilities face a high risk of fire due to complex machinery
// and continuous operations.
// `,
//   },
//   "fire-suppression-systems": {
//     title: "Choosing the Right Fire Suppression System",
//     date: "February 28, 2026",
//     image: "/the-hart.png",
//     content: `
// Fire suppression systems are designed to control or extinguish fires.
// `,
//   },
//   "oil-gas-fire-safety": {
//     title: "Fire Safety Compliance in Oil & Gas Facilities",
//     date: "February 10, 2026",
//     image: "/gasoil-facilities.jpg",
//     content: `
// Oil & gas facilities operate in high-risk environments.
// `,
//   },
// };

// export async function generateStaticParams() {
//   return Object.keys(blogPosts).map((slug) => ({ slug }));
// }

// export default function BlogDetails({
//   params,
// }: {
//   params: { slug: string };
// }) {
//   const post = blogPosts[params.slug];

//   if (!post) {
//     notFound();
//   }

//   return (
//     <section className="bg-white py-16">
//       <div className="mx-auto max-w-4xl px-4">
//         <Link href="/blog" className="mb-6 inline-block text-red-600">
//           ← Back to Blog
//         </Link>

//         <h1 className="mb-2 text-3xl font-bold">{post.title}</h1>
//         <p className="mb-6 text-gray-500">{post.date}</p>

//         <div className="relative mb-8 h-72 w-full overflow-hidden rounded-xl">
//           <Image src={post.image} alt={post.title} fill />
//         </div>

//         <div className="whitespace-pre-line text-gray-700">
//           {post.content}
//         </div>
//       </div>
//     </section>
//   );
// }
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const blogPosts: Record<
  string,
  {
    title: string;
    date: string;
    image: string;
    content: string;
  }
> = {
  "fire-detection-systems": {
    title: "Fire Detection Systems for Industrial Facilities",
    date: "March 12, 2026",
    image: "/fire-fighting1.avif",
    content: `
Industrial facilities face a high risk of fire due to complex machinery
and continuous operations.
`,
  },
  "fire-suppression-systems": {
    title: "Choosing the Right Fire Suppression System",
    date: "February 28, 2026",
    image: "/the-hart.png",
    content: `
Fire suppression systems are designed to control or extinguish fires.
`,
  },
  "oil-gas-fire-safety": {
    title: "Fire Safety Compliance in Oil & Gas Facilities",
    date: "February 10, 2026",
    image: "/gasoil-facilities.jpg",
    content: `
Oil & gas facilities operate in high-risk environments.
`,
  },
};

// Generate static params for SSG
export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }));
}

// Make component async to handle `params` as a Promise
export default async function BlogDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Unwrap the promise
  const { slug } = await params;

  const post = blogPosts[slug];

  if (!post) {
    notFound();
  }

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-4xl px-4">
        <Link href="/blog" className="mb-6 inline-block text-red-600">
          ← Back to Blog
        </Link>

        <h1 className="mb-2 text-3xl font-bold">{post.title}</h1>
        <p className="mb-6 text-gray-500">{post.date}</p>

        <div className="relative mb-8 h-72 w-full overflow-hidden rounded-xl">
          <Image src={post.image} alt={post.title} fill className="object-cover" />
        </div>

        <div className="whitespace-pre-line text-gray-700">{post.content}</div>
      </div>
    </section>
  );
}
