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
    content: `
## Introduction

In recent weeks, Lagos has witnessed multiple fire outbreaks that have once again drawn attention to the critical importance of fire safety preparedness, infrastructure resilience, and proactive fire protection systems.

Notable among these incidents are the fire outbreak at
[Arena Market, Oshodi](https://businessday.ng/news/article/breaking-fire-outbreak-reported-at-arena-market-oshodi/)
and the inferno at the
[25-storey Great Nigeria Insurance House](https://www.vanguardngr.com/2025/12/fire-guts-25-storey-great-nigeria-insurance-house-in-lagos/)
on Lagos Island.

At **Future Concerns Fire Systems Nigeria Limited**, we believe every fire incident must serve as a lesson, not just a headline.

---

## Overview of the Recent Fire Incidents

The Arena Market fire reportedly spread rapidly through trading structures, putting traders, residents, and properties at significant risk.

Similarly, the fire at the Great Nigeria Insurance House affected multiple floors of a high-rise building used for warehousing and commercial activities.

---

## Key Lessons from These Fire Outbreaks

1. **Fire Prevention Is More Cost-Effective Than Firefighting**  
   Most large-scale fires begin as minor incidents. Electrical faults, improper storage of flammable materials, overloaded circuits, and poor housekeeping are common triggers.

2. **Early Detection Saves Lives and Property**  
   Functional smoke detectors, heat sensors, and automatic alarm systems provide critical early warnings, preventing uncontrolled fire spread.

3. **Firefighting Infrastructure Must Be Functional and Accessible**  
   Insufficient water supply, blocked access routes, and poorly maintained hydrants repeatedly undermine firefighting efforts.

4. **Maintenance Is as Important as Installation**  
   Installing systems without routine inspection and maintenance creates a false sense of security.

5. **High-Risk Buildings Require Advanced Fire Protection Solutions**  
   Warehouses, markets, factories, and high-rise buildings require tailored fire protection designs.

---

## How Fire Outbreaks Can Be Prevented

Fire safety is a shared responsibility. Key preventive measures include:

- Comprehensive fire risk assessments
- Proper electrical system design and load management
- Installation of automatic fire detection and alarm systems
- Deployment of appropriate fire suppression systems
- Clear emergency exits and evacuation signage
- Regular fire drills and safety training
- Routine inspection and maintenance of all fire safety equipment

---

## The Role of Professional Fire Protection Services

At **Future Concerns Fire Systems Nigeria Limited**, we provide:

- Fire system design and engineering
- Supply and installation of certified fire protection equipment
- Fire alarm and detection systems
- Fire suppression and firefighting systems
- Preventive maintenance and system audits
- Fire safety training and compliance support

Our goal is simple: **protect lives, preserve assets, and ensure operational continuity.**

---

## Call to Action

**Fire safety should never be an afterthought.**

If your facility has not undergone a recent fire risk assessment or maintenance audit, now is the time to act.

**Contact Future Concerns Fire Systems Nigeria Limited**
to discuss fire protection solutions tailored to your environment.
`,
  },
  "fire-suppression-systems": {
    title: "Choosing the Right Fire Suppression System",
    date: "February 28, 2026",
    image: "/the-hart.png",
    content: `
## Introduction

Fire suppression systems are designed to control or extinguish fires before they escalate into major disasters. Selecting the right system is critical to protecting lives, assets, and operational continuity.

---

## Common Types of Fire Suppression Systems

1. **Water-Based Systems (Sprinklers)**  
   Ideal for offices, residential buildings, and warehouses with low electrical risk.

2. **Foam Suppression Systems**  
   Effective for flammable liquid fires common in fuel storage and industrial facilities.

3. **Gas Suppression Systems**  
   Suitable for data centres, control rooms, and sensitive equipment areas.

4. **Dry Chemical Systems**  
   Commonly used in kitchens, workshops, and industrial applications.

---

## Factors to Consider When Choosing a System

- Type of fire risk
- Nature of assets being protected
- Occupancy and evacuation requirements
- Regulatory and insurance compliance
- Maintenance and lifecycle costs

---

## Conclusion

Choosing the right fire suppression system requires professional assessment and engineering expertise.

At **Future Concerns Fire Systems Nigeria Limited**, we design and install fire suppression solutions tailored to your specific environment.
`,
  },

  "oil-gas-fire-safety": {
    title: "Fire Safety Compliance in Oil & Gas Facilities",
    date: "February 10, 2026",
    image: "/gasoil-facilities.jpg",
    content: `
## Introduction

Oil and gas facilities operate in some of the most hazardous environments, where fire and explosion risks are ever-present. Fire safety compliance is therefore a regulatory, operational, and moral necessity.

---

## Key Fire Risks in Oil & Gas Facilities

- Flammable hydrocarbons and gases
- High-pressure processing equipment
- Hot work activities
- Electrical and mechanical failures

---

## Regulatory and Compliance Requirements

1. **Fire Risk Assessments**  
   Regular assessments identify hazards and mitigation measures.

2. **Fire Detection and Alarm Systems**  
   Early detection is critical for rapid response.

3. **Fire Suppression and Protection Systems**  
   Foam, gas, and deluge systems are commonly required.

4. **Emergency Response Planning**  
   Evacuation procedures and trained response teams are mandatory.

---

## The Importance of Professional Support

Compliance goes beyond installation. Systems must be inspected, tested, and maintained to international standards.

At **Future Concerns Fire Systems Nigeria Limited**, we support oil and gas operators with compliant fire protection solutions aligned with industry best practices.
`,
  },
};

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }));
}

export default async function BlogDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) notFound();

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-4xl px-4">
        <Link href="/blog" className="mb-6 inline-block text-red-600">
          ← Back to Blog
        </Link>

        <h1 className="mb-2 text-3xl font-bold">{post.title}</h1>
        <p className="mb-6 text-gray-500">{post.date}</p>

        <div className="relative mb-8 h-72 w-full overflow-hidden rounded-xl">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-gray max-w-none prose-ol:list-decimal prose-ol:pl-6 prose-li:my-2">
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
