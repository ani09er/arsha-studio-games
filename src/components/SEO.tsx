import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  type?: string;
  image?: string;
}

const SEO = ({
  title = "ARSHA STUDIO – Independent Game Studio",
  description = "ARSHA STUDIO develops original mobile games focused on logic, visual reasoning, and cognitive engagement. Offline-first, privacy-respecting educational games for Android.",
  canonical = "",
  type = "website",
  image = "/og-image.png",
}: SEOProps) => {
  const siteUrl = "https://arshastudio.com";
  const fullUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const fullTitle = title.includes("ARSHA STUDIO") ? title : `${title} | ARSHA STUDIO`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${image}`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
    </Helmet>
  );
};

export default SEO;
