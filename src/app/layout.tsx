// app/layout.tsx or src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bulls Logistics",
  description: "Bulls Logistics",
  icons: {
    icon: [
      {
        url: "/favicon.ico", // ✅ ye line required hai
        type: "image/x-icon",
        sizes: "any",
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
    <html lang="en" className={inter.variable}>
      <body className="antialiased font-sans">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
