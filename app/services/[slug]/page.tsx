import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import BackButton from "@/components/BackButton";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ServiceDetail({ params }: Props) {
  const { slug } = await params;

  const filePath = path.join(
    process.cwd(),
    "app/services/contents",
    `${slug}.md`
  );

  if (!fs.existsSync(filePath)) {
    return (
      <main className="py-24 text-center">
        <h1 className="text-2xl font-bold">Service Not Found</h1>
      </main>
    );
  }

  const content = fs.readFileSync(filePath, "utf8");

  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="bg-neutral-900 py-24 text-center">
        <h1 className="text-4xl font-extrabold text-white">
          {slug.replace(/-/g, " ").toUpperCase()}
        </h1>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <BackButton fallbackHref="/services" />

        <article className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700">
          <ReactMarkdown>{content}</ReactMarkdown>
        </article>
      </section>
    </main>
  );
}
