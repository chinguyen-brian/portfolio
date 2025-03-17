import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer";
import { Baloo_Paaji_2 } from "next/font/google";
import LayoutProvider from "@/components/themeProvider";

const baloo = Baloo_Paaji_2({
  subsets: ['latin'],
  variable: "--font-baloo"
})

const jsonld = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Brian Nguyen",
  jobTitle: "Freelance Web Developer",
  url: "https://briancode.dev",
  image: "https://briancode.dev/images/home/bc.png",
  logo: "https://briancode.dev/images/home/bc.png",
  "sameAs": [
    "https://github.com/chinguyen-brian",
    "https://linkedin.com/in/NguyenBrianCode",
    "https://x.com/BrianCodeDev"
  ],
  worksFor: {
    "@type": "Organization",
    name: "Self-Employed",
  },
  knowsAbout: ["React", "Node.js", "JavaScript", "Web Development"],
  email: "mailto:hello@briancode.dev",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services",
    itemListElement: [
      {
        "@type": "Service",
        name: "UI/UX Design",
        description: "Creating user-friendly interfaces.",
      },
      {
        "@type": "Service",
        name: "Website Development",
        description: "Building high-performance websites.",
      },
      {
        "@type": "Service",
        name: "SEO Optimization",
        description: "Improving search engine rankings.",
      },
    ],
  },
};

export const metadata: Metadata = {
  title: "Portfolio - Web Developer | Brian Code",
  description:
    "Portfolio of a web developer showcasing projects, skills, and expertise in React, Node.js, and modern web technologies.",
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    url: "https://briancode.dev",
    title: "Portfolio - Web Developer | Brian Code",
    siteName: 'BrianCode',
    description:
      "Portfolio of a web developer showcasing projects, skills, and expertise in React, Node.js, and modern web technologies.",
    images: [
      {
        url: 'https://briancode.dev/images/home/bc.png',
        width: 700,
        height: 450,
        alt: 'BrianCode',
      },
    ],
    type:'website',
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={baloo.variable}>
      <head>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonld) }}
        />
      </head>
      <body >
        <LayoutProvider>
          {children}
          <Footer />
        </LayoutProvider>
      </body>
    </html>
  );
}
