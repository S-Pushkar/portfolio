import { getSiteUrl } from "@/lib/site-url";
import { site } from "@/content/site";

export function JsonLd() {
  const base = getSiteUrl();
  const sameAs = [
    site.profiles.linkedin.href,
    site.profiles.github.href,
    site.profiles.leetcode.href,
    base,
  ];

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: site.name,
        url: base,
        sameAs,
        jobTitle: "Full Stack Developer",
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "PES University",
        },
      },
      {
        "@type": "WebSite",
        name: `${site.name} — Portfolio`,
        url: base,
        description: site.description,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
