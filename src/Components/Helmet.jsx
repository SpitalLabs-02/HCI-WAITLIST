import { Helmet } from "react-helmet";

export function Helmet() {
  return (
    <Helmet>
      <title>HUMMINGBIRDS CARE INITIATIVE - Quality Caregiving Services</title>
      <meta
        name="description"
        content="We connect qualified, compassionate caregivers with care recipients - allowing care recipients and their families enjoy peace of mind and convenience."
      />
      <meta
        name="keywords"
        content="caregivers, care recipients, compassionate, qualified, elderly care"
      />
      <meta name="author" content="Spital Labs" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="UTF-8" />
      <meta name="language" content="English" />

      {/* Open Graph Tags (Social Media Sharing) */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="HUMMINGBIRDS CARE INITIATIVE" />
      <meta
        property="og:description"
        content="We connect qualified, compassionate caregivers with care recipients"
      />
      <meta property="og:url" content="https://www.hbcareinitiative.org/" />
      <meta property="og:image" content="https://www.hbcareinitiative.org/og-image.png" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.hbcareinitiative.org/" /> 
      <meta name="twitter:title" content="HUMMINGBIRDS CARE INITIATIVE" />
      <meta
        name="twitter:description"
        content="We connect qualified, compassionate caregivers with care recipients"
      />
      <meta name="twitter:image" content="https://www.hbcareinitiative.org/twitter-image.png" />

      {/* Favicon */}
      <link rel="favicon" href="/favicon.ico" />

      {/* Canonical URL */}
      <link rel="canonical" href="https://www.hbcareinitiative.org/" />
    </Helmet>
  );
}