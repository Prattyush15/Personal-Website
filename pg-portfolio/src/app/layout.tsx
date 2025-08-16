import type { Metadata } from "next";

import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prattyush Giriraj — Portfolio",
  description: "Product and data-minded builder who ships clear value with simple UX. Product Manager and Data Engineer with experience at GE Aerospace and Fifth Third Bank.",
  metadataBase: new URL('https://prattyush.dev'),
  keywords: [
    "Product Manager",
    "Data Engineer", 
    "Portfolio",
    "UX",
    "Product Development",
    "Data Analytics",
    "Prattyush Giriraj"
  ],
  authors: [{ name: "Prattyush Giriraj" }],
  creator: "Prattyush Giriraj",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://prattyush.dev",
    siteName: "Prattyush Giriraj — Portfolio",
    title: "Prattyush Giriraj — Portfolio",
    description: "Product and data-minded builder who ships clear value with simple UX.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Prattyush Giriraj Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prattyush Giriraj — Portfolio",
    description: "Product and data-minded builder who ships clear value with simple UX.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark" style={{ fontFamily: "Inter, Lato, Poppins, sans-serif" }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  if (theme === 'light') {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
