import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Apex Solar Infra Pvt Ltd | Best Solar Panel Installation in Haryana",
  description:
    "Top-rated solar panel installation in Haryana. Apex Solar Infra Pvt Ltd provides professional solar energy solutions, maintenance, and rooftop solar for homes & businesses across Haryana.",
  keywords: [
    "Solar Panel Installation in Haryana",
    "Best Solar Company in Haryana",
    "Solar Rooftop Installation Haryana",
    "Solar Panel Price in Haryana",
    "Apex Solar Infra Haryana",
    "Renewable Energy Solutions Haryana",
    "Solar Subsidy Haryana",
  ],
  authors: [{ name: "Apex Solar Infra Pvt Ltd" }],
  openGraph: {
    title: "Apex Solar Infra Pvt Ltd | Leading Solar Installer in Haryana",
    description: "Expert solar panel installation and maintenance services in Haryana. Powering homes and businesses with clean energy.",
    url: "https://apexsolarinfra.com",
    siteName: "Apex Solar",
    images: [
      {
        url: "/solar-installation-hero.png",
        width: 1200,
        height: 630,
        alt: "Apex Solar Installation Haryana",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apex Solar Infra Pvt Ltd | Solar Energy Solutions Haryana",
    description: "Professional solar panel installation services across Haryana.",
    images: ["/solar-installation-hero.png"],
  },
  icons: {
    icon: "/Logo_Tp.png",
    apple: "/Logo_Tp.png",
  },
  metadataBase: new URL("https://apexsolarinfra.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <meta name="geo.region" content="IN-HR" />
        <meta name="geo.placename" content="Haryana" />
        <meta name="geo.position" content="29.0588;76.0856" />
        <meta name="ICBM" content="29.0588, 76.0856" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Apex Solar Infra Pvt Ltd",
              "image": "https://apexsolarinfra.com/Logo_Tp.png",
              "@id": "https://apexsolarinfra.com",
              "url": "https://apexsolarinfra.com",
              "telephone": "+917988449943",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Haryana, India",
                "addressLocality": "Haryana",
                "addressRegion": "HR",
                "postalCode": "",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 29.0588,
                "longitude": 76.0856
              },
              "areaServed": {
                "@type": "State",
                "name": "Haryana"
              },
              "description": "Expert solar panel installation, rooftop solar solutions, and maintenance services in Haryana, India.",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              }
            })
          }}
        />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
