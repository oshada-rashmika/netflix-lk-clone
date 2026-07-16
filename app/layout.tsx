import type { Metadata } from "next";
//Fallback to Inter since Netflix Sans is proprietary
import { Inter } from "next/font/google";
import "./globals.css";

//Setup Inter font as the primary sans-serif typeface fallback
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

//Netflix Sri Lanka Branding
export const metadata: Metadata = {
  title: "Netflix Sri Lanka - Watch TV Shows Online, Watch Movies Online",
  description: "Watch Netflix movies & TV shows online or stream right to your smart TV, game console, PC, Mac, mobile, tablet and more.",
  icons: {
    icon: "https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      {/* 
        Apply Inter font globally, true black background, white text, and 
        smooth antialiasing to lay down the Netflix-style branding foundations.
      */}
      <body className={`${inter.className} bg-black antialiased text-white min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
