import { useState } from "react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Send, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We'll respond soon.",
      });
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <Layout>
      <SEO 
        canonical="/contact"
        title="Contact Us"
        description="Get in touch with ARSHA STUDIO. Reach out for support, feedback, or inquiries about our mobile games."
      />
      {/* Hero */}
      <section className="hero-gradient text-hero-foreground section-padding relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-primary rounded-full blur-3xl animate-pulse-soft" />
        </div>
        <div className="container-narrow mx-auto text-center relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight opacity-0 animate-fade-in">
            Contact
          </h1>
          <p className="mt-4 text-hero-muted text-lg max-w-2xl mx-auto opacity-0 animate-fade-in stagger-1">
            Have questions or feedback? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Contact Info */}
            <AnimatedSection animation="slide-in-left">
              <div>
                <h2 className="text-xl font-bold mb-6">Studio Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <a
                        href="mailto:support@arshastudio.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        support@arshastudio.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-muted-foreground">India</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Response Time</p>
                      <p className="text-muted-foreground">2-3 business days</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-section-alt rounded-xl border border-border">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Note:</strong> For app-specific 
                    support, please include the game name and any relevant details 
                    about your inquiry.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection animation="slide-in-right">
              <div>
                <h2 className="text-xl font-bold mb-6">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      placeholder="Your name"
                      className="mt-1.5 input-animated"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="mt-1.5 input-animated"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      required
                      placeholder="What is this regarding?"
                      className="mt-1.5 input-animated"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Your message..."
                      className="mt-1.5 resize-none input-animated"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full group" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
