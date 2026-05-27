import type { Metadata, Viewport } from "next";
import "./globals.css";
import { profile } from "@/lib/profile";

export const metadata: Metadata = {
  metadataBase: new URL("https://abhisheksain.dev"),
  title: {
    default: `${profile.name} | Software Developer Portfolio`,
    template: `%s | ${profile.name}`
  },
  description: profile.tagline,
  keywords: [
    "Abhishek Sain",
    "Software Engineer",
    "Full Stack Developer",
    "Cloud Engineer",
    "AI Portfolio",
    "Next.js Developer",
    "Startup Builder"
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    title: `${profile.name} | ${profile.role}`,
    description: profile.tagline,
    type: "website",
    url: "/",
    images: [
      {
        url: "/images/portfolio-hero.jpg",
        width: 1672,
        height: 941,
        alt: `${profile.name} portfolio banner`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | ${profile.role}`,
    description: profile.tagline,
    images: ["/images/portfolio-hero.jpg"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#070914" },
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" }
  ]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
