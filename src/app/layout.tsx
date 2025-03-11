import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";
import Footer from "@/components/footer";
import { Baloo_Paaji_2 } from "next/font/google";
import LayoutProvider from "@/components/themeProvider";

const baloo = Baloo_Paaji_2({
  subsets: ['latin'],
  variable: "--font-baloo"
})

export const metadata: Metadata = {
  title: "Brian Nguyen - Website Developer",
  description:
    "Portfolio of a web developer showcasing projects, skills, and expertise in React, Node.js, and modern web technologies.",
  openGraph: {
    url: "https://briancode.dev",
    title: "Brian Nguyen - Website Developer",
    description:
      "Portfolio of a web developer showcasing projects, skills, and expertise in React, Node.js, and modern web technologies.",
    images: "https://briancode.dev/images/home/bc.png",
  },
};

const jsonld = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Brian Nguyen",
  jobTitle: "Freelance Web Developer",
  url: "https://briancode.dev",
  image: "https://briancode.dev/images/home/bc.jpg",
  // "sameAs": [
  //   "https://github.com/yourusername",
  //   "https://linkedin.com/in/yourusername",
  //   "https://twitter.com/yourusername"
  // ],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={baloo.variable}>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonld) }}
        />
      </Head>
      <body >
        <LayoutProvider>
          {children}
          <Footer />
        </LayoutProvider>
      </body>
    </html>
  );
}
