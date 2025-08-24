import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "GlorifyDesign - Premium Digital Assets Marketplace",
  description: "Discover premium graphics, templates, fonts, and themes from talented creators worldwide. Find the perfect digital assets for your creative projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased min-h-screen bg-gray-50`}>
        <main className="min-h-screen w-full bg-white">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
