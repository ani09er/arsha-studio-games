import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";
import { FileText, ShieldOff, Database, Globe, Ban, Baby, Lock, Clock, Scale, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const noCollectItems = [
  "Personal information (name, email, phone number, address)",
  "Device identifiers or unique IDs",
  "Location data",
  "Usage analytics or behavioral data",
  "Crash reports or diagnostic data",
  "Advertising identifiers",
  "Financial or payment information",
  "Photos, media, or files from your device",
  "Contacts or calendar information",
  "Health or fitness data",
  "Any other personal or sensitive data",
];

const localDataItems = [
  "Remains entirely on your device",
  "Is never transmitted to any server",
  "Is never shared with us or any third party",
  "Is under your complete control",
  "Can be deleted by uninstalling the app or clearing app data",
];

const localDataTypes = [
  { type: "Game Progress", purpose: "Track completed puzzles and unlocked levels", location: "Device only" },
  { type: "Player Statistics", purpose: "Display your cognitive scores and performance", location: "Device only" },
  { type: "Session History", purpose: "Show your recent game sessions", location: "Device only" },
  { type: "App Settings", purpose: "Remember your preferences", location: "Device only" },
];

const noThirdParty = [
  "No analytics services (Google Analytics, Firebase, etc.)",
  "No advertising networks or ad SDKs",
  "No social media integrations",
  "No cloud storage services",
  "No crash reporting services",
  "No user authentication services",
  "No in-app purchase services",
  "No push notification services",
];

const offlineFeatures = [
  "The App does not require an internet connection",
  "The App does not make any network requests",
  "The App does not communicate with any servers",
  "All features work without connectivity",
];

const noAds = [
  "No banner ads",
  "No interstitial ads",
  "No video ads",
  "No rewarded ads",
  "No native ads",
  "No advertising SDKs or tracking",
];

const dataSafetyResponses = [
  { question: "Does your app collect or share any user data?", answer: "No" },
  { question: "Does your app collect user location?", answer: "No" },
  { question: "Does your app collect personal info?", answer: "No" },
  { question: "Does your app collect financial info?", answer: "No" },
  { question: "Does your app collect health and fitness info?", answer: "No" },
  { question: "Does your app collect messages?", answer: "No" },
  { question: "Does your app collect photos and videos?", answer: "No" },
  { question: "Does your app collect audio files?", answer: "No" },
  { question: "Does your app collect files and docs?", answer: "No" },
  { question: "Does your app collect calendar events?", answer: "No" },
  { question: "Does your app collect contacts?", answer: "No" },
  { question: "Does your app collect app activity?", answer: "No" },
  { question: "Does your app collect web browsing history?", answer: "No" },
  { question: "Does your app collect app info and performance?", answer: "No" },
  { question: "Does your app collect device or other IDs?", answer: "No" },
  { question: "Is data encrypted in transit?", answer: "N/A - No data transmitted" },
  { question: "Can users request data deletion?", answer: "Yes - Uninstall app" },
];

interface SectionProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
  delay?: number;
}

const PolicySection = ({ icon: Icon, title, children, delay = 0 }: SectionProps) => (
  <AnimatedSection delay={delay}>
    <Card className="border-border bg-card">
      <CardContent className="p-6 md:p-8">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <Icon className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-xl font-bold mb-4">{title}</h2>
            {children}
          </div>
        </div>
      </CardContent>
    </Card>
  </AnimatedSection>
);

const CheckList = ({ items, variant = "negative" }: { items: string[]; variant?: "negative" | "positive" }) => (
  <ul className="space-y-2">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-2 text-muted-foreground text-sm">
        <span className={`mt-0.5 flex-shrink-0 ${variant === "negative" ? "text-destructive" : "text-primary"}`}>
          {variant === "negative" ? "✗" : "✓"}
        </span>
        {item}
      </li>
    ))}
  </ul>
);

const Privacy = () => {
  return (
    <Layout>
      <SEO 
        canonical="/privacy"
        title="Privacy Policy – Puzzle Mind"
        description="Privacy Policy for Puzzle Mind. We collect no personal data, operate 100% offline, with no ads, no tracking, and no third-party services. Your privacy is protected by design."
      />
      
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
            Puzzle Mind – Last updated: January 2026
          </p>
        </div>
      </section>

      {/* Summary Banner */}
      <section className="bg-primary/5 border-y border-border py-8">
        <div className="container-narrow mx-auto">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <p className="text-center text-base md:text-lg font-medium leading-relaxed">
                <span className="text-primary font-bold">Puzzle Mind</span> does not collect, store, transmit, or share any personal or non-personal user data including advertising IDs, analytics, or sensor information. The app functions fully offline and all game progress and settings are stored locally on the user's device. Puzzle Mind does not contain advertisements, does not use third-party SDKs for tracking, and does not use health or fitness data. This app is suitable for all ages and complies with applicable privacy laws, including COPPA and GDPR.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <div className="max-w-4xl mx-auto space-y-6">
            
            {/* Information We Collect */}
            <PolicySection icon={ShieldOff} title="Information We Collect" delay={0}>
              <h3 className="font-semibold mb-3 text-foreground">We Do NOT Collect Any Data</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Puzzle Mind is designed with privacy as a core principle. We do not collect:
              </p>
              <CheckList items={noCollectItems} variant="negative" />
            </PolicySection>

            {/* Local Data Storage */}
            <PolicySection icon={Database} title="Local Data Storage" delay={50}>
              <h3 className="font-semibold mb-3 text-foreground">How the App Works</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Puzzle Mind stores game progress and settings <strong>locally on your device only</strong>. This data:
              </p>
              <CheckList items={localDataItems} variant="positive" />
              
              <h3 className="font-semibold mt-6 mb-3 text-foreground">Types of Local Data</h3>
              <p className="text-muted-foreground text-sm mb-4">
                The following data is stored locally on your device for app functionality:
              </p>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Data Type</TableHead>
                      <TableHead>Purpose</TableHead>
                      <TableHead>Storage Location</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {localDataTypes.map((item) => (
                      <TableRow key={item.type}>
                        <TableCell className="font-medium">{item.type}</TableCell>
                        <TableCell className="text-muted-foreground">{item.purpose}</TableCell>
                        <TableCell className="text-primary">{item.location}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <p className="text-muted-foreground text-sm mt-4">
                This local data is stored using industry-standard secure storage mechanisms provided by your device's operating system.
              </p>
            </PolicySection>

            {/* Third-Party Services */}
            <PolicySection icon={Globe} title="Third-Party Services" delay={100}>
              <h3 className="font-semibold mb-3 text-foreground">No Third-Party Services</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Puzzle Mind does <strong>NOT</strong> integrate with any third-party services:
              </p>
              <CheckList items={noThirdParty} variant="negative" />
            </PolicySection>

            {/* Internet & Network Access */}
            <PolicySection icon={Globe} title="Internet & Network Access" delay={150}>
              <h3 className="font-semibold mb-3 text-foreground">Offline Operation</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Puzzle Mind operates <strong>100% offline</strong>:
              </p>
              <CheckList items={offlineFeatures} variant="positive" />
            </PolicySection>

            {/* Advertising */}
            <PolicySection icon={Ban} title="Advertising" delay={200}>
              <h3 className="font-semibold mb-3 text-foreground">No Advertisements</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Puzzle Mind is <strong>completely ad-free</strong>:
              </p>
              <CheckList items={noAds} variant="negative" />
            </PolicySection>

            {/* Children's Privacy */}
            <PolicySection icon={Baby} title="Children's Privacy" delay={250}>
              <h3 className="font-semibold mb-3 text-foreground">Safe for All Ages</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Since Puzzle Mind does not collect any personal information from any user, the App is safe for users of all ages, including children under 13 years of age. We comply with:
              </p>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  Children's Online Privacy Protection Act (COPPA)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  General Data Protection Regulation (GDPR) provisions for children
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  Other applicable children's privacy laws worldwide
                </li>
              </ul>
              <p className="text-muted-foreground text-sm mt-4">
                Parents and guardians can feel confident that their children's privacy is protected when using Puzzle Mind.
              </p>
            </PolicySection>

            {/* Data Security */}
            <PolicySection icon={Lock} title="Data Security" delay={300}>
              <h3 className="font-semibold mb-3 text-foreground">Your Data is Secure</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Although we do not collect or transmit any data, the local data stored on your device is protected by:
              </p>
              <ul className="space-y-2 text-muted-foreground text-sm mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  Your device's built-in security features
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  Operating system-level data isolation
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  App sandboxing provided by Android
                </li>
              </ul>
              
              <h3 className="font-semibold mb-3 text-foreground">Your Control</h3>
              <p className="text-muted-foreground text-sm mb-4">
                You have complete control over your local data:
              </p>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <strong>View:</strong> Your game progress is visible within the app
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <strong>Delete:</strong> Uninstall the app or clear app data to remove all local data
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <strong>Export:</strong> Local data remains on your device only
                </li>
              </ul>
            </PolicySection>

            {/* Data Retention */}
            <PolicySection icon={Clock} title="Data Retention" delay={350}>
              <h3 className="font-semibold mb-3 text-foreground">No Server-Side Retention</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Since we do not collect any data, there is no server-side data retention.
              </p>
              
              <h3 className="font-semibold mb-3 text-foreground">Local Data Retention</h3>
              <p className="text-muted-foreground text-sm mb-2">
                Local data on your device persists until:
              </p>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  You uninstall the application
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  You clear the app's data through device settings
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  You reset your device
                </li>
              </ul>
            </PolicySection>

            {/* Your Rights */}
            <PolicySection icon={Scale} title="Your Rights" delay={400}>
              <h3 className="font-semibold mb-3 text-foreground">Under GDPR (European Users)</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Even though we do not collect personal data, we acknowledge your rights under GDPR:
              </p>
              <ul className="space-y-1 text-muted-foreground text-sm mb-4">
                <li>• Right to access</li>
                <li>• Right to rectification</li>
                <li>• Right to erasure</li>
                <li>• Right to data portability</li>
                <li>• Right to object</li>
              </ul>
              <p className="text-muted-foreground text-sm mb-6">
                Since no personal data is collected, these rights are automatically fulfilled.
              </p>
              
              <h3 className="font-semibold mb-3 text-foreground">Under CCPA (California Users)</h3>
              <p className="text-muted-foreground text-sm mb-2">
                Under the California Consumer Privacy Act:
              </p>
              <ul className="space-y-1 text-muted-foreground text-sm">
                <li>• We do not sell personal information</li>
                <li>• We do not share personal information for targeted advertising</li>
                <li>• We do not collect personal information</li>
              </ul>
            </PolicySection>

            {/* Policy Changes */}
            <PolicySection icon={FileText} title="Changes to This Privacy Policy" delay={450}>
              <p className="text-muted-foreground text-sm mb-4">
                We may update this Privacy Policy from time to time. Any changes will be reflected in the "Last Updated" date at the top of this policy. We encourage you to review this Privacy Policy periodically.
              </p>
              <p className="text-muted-foreground text-sm">
                If we make material changes that affect user privacy, we will provide notice through the App or by other means.
              </p>
            </PolicySection>

            {/* Contact */}
            <PolicySection icon={Mail} title="Contact Us" delay={500}>
              <p className="text-muted-foreground text-sm mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="bg-muted/50 rounded-lg p-4">
                <p className="text-sm">
                  <strong>Developer:</strong> ARSHA STUDIO
                </p>
                <p className="text-sm mt-1">
                  <strong>Contact:</strong>{" "}
                  <a href="/contact" className="text-primary hover:underline">
                    Contact Page
                  </a>
                </p>
              </div>
            </PolicySection>

            {/* Consent */}
            <AnimatedSection delay={550}>
              <div className="bg-primary/5 border border-border rounded-xl p-6 text-center">
                <h2 className="text-lg font-semibold mb-2">Consent</h2>
                <p className="text-muted-foreground text-sm">
                  By downloading, installing, and using Puzzle Mind, you acknowledge that you have read and understood this Privacy Policy.
                </p>
              </div>
            </AnimatedSection>

            {/* Google Play Data Safety Section */}
            <AnimatedSection delay={600}>
              <Card className="border-border bg-card">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <ShieldOff className="h-5 w-5 text-primary" />
                    </div>
                    <h2 className="text-xl font-bold">Google Play Data Safety Declaration</h2>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    For the Google Play Store Data Safety section, here are our accurate responses:
                  </p>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Question</TableHead>
                          <TableHead className="text-right">Answer</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {dataSafetyResponses.map((item) => (
                          <TableRow key={item.question}>
                            <TableCell className="text-muted-foreground">{item.question}</TableCell>
                            <TableCell className="text-right font-medium text-primary">{item.answer}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Effective Date */}
            <AnimatedSection delay={650}>
              <p className="text-center text-sm text-muted-foreground italic">
                This privacy policy is effective as of January 27, 2026.
              </p>
            </AnimatedSection>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
