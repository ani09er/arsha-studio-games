import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-hero text-hero-foreground py-12">
      <div className="container-narrow mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold">ARSHA STUDIO</p>
            <p className="text-hero-muted text-sm mt-1">
              Independent Game Studio
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <Link
              to="/"
              className="text-hero-muted hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              to="/games"
              className="text-hero-muted hover:text-primary transition-colors"
            >
              Games
            </Link>
            <Link
              to="/privacy"
              className="text-hero-muted hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/contact"
              className="text-hero-muted hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-hero-muted text-sm">
            © {currentYear} ARSHA STUDIO – All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
