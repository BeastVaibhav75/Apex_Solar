import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Apex Solar Infra Pvt Ltd | Solar Panel Installation & Energy Solutions",
  description:
    "Apex Solar Infra Pvt Ltd provides professional solar panel installation, maintenance, and renewable energy solutions. Powering a brighter, sustainable future.",
  keywords: [
    "Solar Panel Installation",
    "Renewable Energy Solutions",
    "Apex Solar Infra",
    "Solar Maintenance",
    "Sustainable Energy",
    "Solar Power India",
  ],
  authors: [{ name: "Apex Solar Infra Pvt Ltd" }],
  openGraph: {
    title: "Apex Solar Infra Pvt Ltd | Solar Energy Solutions",
    description: "Professional solar panel installation and renewable energy services.",
    url: "https://apexsolarinfra.com",
    siteName: "Apex Solar",
    images: [
      {
        url: "/solar-installation-hero.png",
        width: 1200,
        height: 630,
        alt: "Apex Solar Installation",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apex Solar Infra Pvt Ltd | Solar Energy Solutions",
    description: "Professional solar panel installation and renewable energy services.",
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
                "streetAddress": "",
                "addressLocality": "",
                "addressRegion": "",
                "postalCode": "",
                "addressCountry": "IN"
              },
              "description": "Professional solar panel installation, maintenance, and renewable energy solutions.",
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
