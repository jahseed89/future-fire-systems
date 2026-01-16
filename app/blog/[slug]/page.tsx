import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

const blogPosts: Record<
  string,
  {
    title: string;
    date: string;
    image: string;
    content: string;
  }
> = {
  "managing-fire-outbreaks": {
    title: "Managing Fire Outbreaks",
    date: "January 8, 2026",
    image: "/fire-outbreak.png",
    content: `**Introduction**
    
In recent weeks, Lagos has witnessed multiple fire outbreaks that have once again drawn attention to the critical importance of fire safety preparedness, infrastructure resilience, and proactive fire protection systems. Notable among these incidents are the fire outbreak at [Arena Market, Oshodi,](https://businessday.ng/news/article/breaking-fire-outbreak-reported-at-arena-market-oshodi/) and the inferno at the [25-storey Great Nigeria Insurance House](https://www.vanguardngr.com/2025/12/fire-guts-25-storey-great-nigeria-insurance-house-in-lagos/) on Lagos Island.
While investigations into the causes of these incidents are ongoing, the recurring nature of fire outbreaks across commercial hubs, markets, warehouses, and high-rise buildings points to a broader systemic challenge. These events reinforce the urgent need for improved fire prevention strategies, functional firefighting infrastructure, and professionally maintained fire protection systems.
At Future Concerns Fire Systems Nigeria Limited, we believe every fire incident must serve as a lesson, not just a headline.

**Overview of the Recent Fire Incidents**
The Arena Market fire reportedly spread rapidly through trading structures, putting traders, residents, and properties at significant risk. Eyewitness accounts highlighted challenges in firefighting efforts, including water supply constraints, which delayed effective containment.
Similarly, the fire at the Great Nigeria Insurance House affected multiple floors of a high-rise building used for warehousing and commercial activities. While emergency responders arrived promptly, the scale of the building and fire spread emphasised how complex fire incidents become when fire detection, suppression, and containment systems are either inadequate or compromised.
Though casualties were reportedly avoided in one incident and investigations are ongoing in others, the economic losses, business disruption, and psychological impact on occupants and communities remain substantial.

**Key Lessons from These Fire Outbreaks**
**1. Fire Prevention Is More Cost-Effective Than Firefighting**
Most large-scale fires begin as minor incidents. Electrical faults, improper storage of flammable materials, overloaded circuits, and lack of housekeeping controls are common triggers. Without early detection and suppression, small ignitions escalate rapidly.
Preventive fire safety measures significantly reduce both risk and loss.
**2. Early Detection Saves Lives and Property**
Functional smoke detectors, heat sensors, and automatic alarm systems provide critical early warnings. In high-traffic markets and multi-storey buildings, delayed detection often results in uncontrolled fire spread before emergency responders arrive.
**3. Firefighting Infrastructure Must Be Functional and Accessible**
Fire outbreaks repeatedly expose challenges such as insufficient water supply, blocked access routes, and poorly maintained fire hydrants. Fire safety infrastructure is only effective when it is operational, accessible, and regularly tested.
**4. Maintenance Is as Important as Installation**
Installing fire protection systems without routine inspection, testing, and maintenance creates a false sense of security. Fire extinguishers, hose reels, sprinklers, pumps, and suppression systems must be professionally maintained to perform when needed most.
**5. High-Risk Buildings Require Advanced Fire Protection Solutions**   
Warehouses, markets, factories, and high-rise buildings demand tailored fire protection designs. A one-size-fits-all approach is inadequate for environments with high fire loads and dense human activity.

**How Fire Outbreaks Can Be Prevented**
Fire safety is a shared responsibility between property owners, facility managers, regulators, and professional fire protection providers. Key preventive measures include:
• Comprehensive fire risk assessments
 • Proper electrical system design and load management
 • Installation of automatic fire detection and alarm systems
 • Deployment of appropriate fire suppression systems such as sprinklers, foam or gas systems
 • Clear emergency exits and evacuation signage
 • Regular fire drills and safety training
 • Routine inspection and maintenance of all fire safety equipment

**The Role of Professional Fire Protection Services**
At Future Concerns Fire Systems Nigeria Limited, our approach to fire safety is proactive, not reactive. We support organisations across commercial, industrial, oil and gas, and public sectors with end-to-end fire protection solutions, including:
• Fire system design and engineering
 • Supply and installation of certified fire protection equipment
 • Fire alarm and detection systems
 • Fire suppression and firefighting systems
 • Preventive maintenance and system audits
 • Fire safety training and compliance support
Our goal is simple. To help organisations protect lives, preserve assets, and maintain operational continuity.

**Protecting the Future Through Preparedness**
Every fire outbreak is a reminder that preparedness determines outcomes. While emergency response is vital, prevention, early detection, and system reliability remain the strongest defenses against fire disasters.
Markets, warehouses, office buildings, and high-rise structures are economic lifelines. Protecting them requires deliberate investment in fire safety systems, routine maintenance, and professional oversight.
At Future Concerns Fire Systems Nigeria Limited, we remain committed to building safer environments and supporting Nigeria’s fire safety resilience through innovation, expertise, and trusted partnerships.

**Call to Action**
Fire safety should never be an afterthought.
If your facility has not undergone a recent fire risk assessment or system maintenance audit, now is the time to act. Protect lives. Protect assets. Protect continuity.
Contact Future Concerns Fire Systems Nigeria Limited today to discuss fire protection solutions tailored to your environment.

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

        <div className="prose prose-gray max-w-none">
          <ReactMarkdown
            components={{
              a: ({ node, ...props }) => (
                <a
                  {...props}
                  className="text-red-600 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>

      </div>
    </section>
  );
}
