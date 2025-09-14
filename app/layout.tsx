import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// Initialize SDK immediately on app load with ultimate solution
import "@/lib/sdk-ultimate";
import { Navbar } from "@/components/navigation/Navbar";
import { LayoutWrapper } from "@/components/layout/LayoutWrapper";
import { FarcasterSDK } from "@/components/FarcasterSDK";
import { FarcasterProvider } from "@/contexts/FarcasterContext";
import { SDKProvider } from "@/contexts/SDKContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://kateyarter.com'),
  title: "Kate Yarter - Music Producer & Visual Artist",
  description: "Kate Yarter is an independent music producer and visual artist. CEO of Honey High Records. Original music, canvas paintings, watercolors, and creative collaborations.",
  keywords: "Kate Yarter, music producer, visual artist, Honey High Records, canvas art, watercolor, music composition",
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Kate Yarter',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: "Kate Yarter - Music Producer & Visual Artist",
    description: "Independent music producer and visual artist. CEO of Honey High Records. Original music, canvas paintings, watercolors.",
    type: "website",
    url: "https://kateyarter.com",
    siteName: "Kate Yarter",
    images: [
      {
        url: "https://kateyarter.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kate Yarter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kate Yarter - Music Producer & Visual Artist",
    description: "Independent music producer and visual artist. CEO of Honey High Records.",
    images: ["https://kateyarter.com/og-image.jpg"],
  },
  other: {
    'fc:miniapp': JSON.stringify({
      version: "1",
      imageUrl: "https://kateyarter.com/og-image.jpg",
      button: {
        title: "Kate Yarter",
        action: {
          type: "launch_miniapp",
          name: "Kate Yarter",
          url: "https://kateyarter.com",
          splashImageUrl: "https://kateyarter.com/splash.jpg",
          splashBackgroundColor: "#000000"
        }
      }
    }),
    'fc:frame': JSON.stringify({
      version: "1",
      imageUrl: "https://kateyarter.com/og-image.jpg",
      button: {
        title: "Kate Yarter",
        action: {
          type: "launch_miniapp",
          name: "Kate Yarter",
          url: "https://kateyarter.com",
          splashImageUrl: "https://kateyarter.com/splash.jpg",
          splashBackgroundColor: "#000000"
        }
      }
    }),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white min-h-screen antialiased`}>
        <SDKProvider>
          <FarcasterSDK />
          <FarcasterProvider>
            <LayoutWrapper>
              <Navbar />
              <main className="flex-1">
                {children}
              </main>
            </LayoutWrapper>
          </FarcasterProvider>
        </SDKProvider>
      </body>
    </html>
  );
}
