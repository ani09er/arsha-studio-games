import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { FileText } from "lucide-react";

const sections = [
  {
    title: "Overview",
    content: "At ARSHA STUDIO, we are committed to protecting your privacy. This policy explains how we handle information in our games and services. In short: we collect no personal data.",
  },
  {
    title: "Data Collection",
    content: "Our games are designed with privacy as a core principle:",
    list: [
      "We do not collect any personal information",
      "We do not track your location or device identifiers",
      "We do not use analytics or tracking services",
      "We do not share any data with third parties",
    ],
  },
  {
    title: "Offline Functionality",
    content: "All ARSHA STUDIO games are designed to work completely offline. No internet connection is required to play, and no data is transmitted from your device during gameplay.",
  },
  {
    title: "Local Storage",
    content: "Game progress and settings are stored locally on your device only. This data never leaves your device and is not accessible to us or any third party.",
  },
  {
    title: "Children's Privacy",
    content: "Our games are suitable for all ages. Since we do not collect any personal information, there is no risk to children's privacy when using our games.",
  },
  {
    title: "Third-Party Services",
    content: "Our games do not integrate with third-party advertising networks, analytics platforms, or social media services. There are no external connections that could compromise your privacy.",
  },
  {
    title: "Policy Changes",
    content: "If we make any changes to this privacy policy, we will update this page and the \"Last updated\" date above. We encourage you to review this policy periodically.",
  },
  {
    title: "Contact",
    content: "If you have any questions about this privacy policy or our practices, please contact us through our Contact page.",
  },
];

const Privacy = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient text-hero-foreground section-padding relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-teal-500 rounded-full blur-3xl animate-pulse-soft" />
        </div>
        <div className="container-narrow mx-auto text-center relative z-10">
          <FileText className="h-12 w-12 mx-auto mb-6 text-primary opacity-0 animate-fade-in" />
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight opacity-0 animate-fade-in stagger-1">
            Privacy Policy
          </h1>
          <p className="mt-4 text-hero-muted text-lg opacity-0 animate-fade-in stagger-2">
            Last updated: January 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-10">
              {sections.map((section, index) => (
                <AnimatedSection key={section.title} delay={index * 50}>
                  <div>
                    <h2 className="text-xl font-bold mb-4">{section.title}</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {section.content}
                    </p>
                    {section.list && (
                      <ul className="mt-4 space-y-2">
                        {section.list.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-muted-foreground">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  {index < sections.length - 1 && (
                    <div className="w-full h-px bg-border mt-10" />
                  )}
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
