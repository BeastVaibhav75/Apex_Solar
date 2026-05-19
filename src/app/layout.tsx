import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Apex Solar | Coming Soon",
  description:
    "Professional solar panel installation and renewable energy services. Our new website is under construction — we will be back soon.",
  icons: {
    icon: "/Logo_Tp.png",
    apple: "/Logo_Tp.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
