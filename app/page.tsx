import { PortfolioExperience } from "@/components/PortfolioExperience";
import { profile, projects, skills } from "@/lib/profile";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: "https://abhisheksain.dev",
    sameAs: [profile.linkedinUrl],
    jobTitle: profile.role,
    knowsAbout: skills.map((skill) => skill.name),
    hasCredential: projects.map((project) => project.title)
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <PortfolioExperience />
    </>
  );
}
