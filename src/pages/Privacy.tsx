import Layout from "@/components/Layout";

const Privacy = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-hero text-hero-foreground section-padding">
        <div className="container-narrow mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-4 text-hero-muted text-lg">
            Last updated: January 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <div className="max-w-3xl mx-auto prose prose-gray">
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold mb-4">Overview</h2>
                <p className="text-muted-foreground leading-relaxed">
                  At ARSHA STUDIO, we are committed to protecting your privacy. This policy 
                  explains how we handle information in our games and services. In short: 
                  we collect no personal data.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4">Data Collection</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our games are designed with privacy as a core principle:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>We do not collect any personal information</li>
                  <li>We do not track your location or device identifiers</li>
                  <li>We do not use analytics or tracking services</li>
                  <li>We do not share any data with third parties</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4">Offline Functionality</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All ARSHA STUDIO games are designed to work completely offline. 
                  No internet connection is required to play, and no data is transmitted 
                  from your device during gameplay.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4">Local Storage</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Game progress and settings are stored locally on your device only. 
                  This data never leaves your device and is not accessible to us or 
                  any third party.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4">Children's Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our games are suitable for all ages. Since we do not collect any personal 
                  information, there is no risk to children's privacy when using our games.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4">Third-Party Services</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our games do not integrate with third-party advertising networks, 
                  analytics platforms, or social media services. There are no external 
                  connections that could compromise your privacy.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4">Policy Changes</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If we make any changes to this privacy policy, we will update this page 
                  and the "Last updated" date above. We encourage you to review this policy 
                  periodically.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4">Contact</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this privacy policy or our practices, 
                  please contact us through our Contact page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
