import type { Metadata } from "next";
import { Inter, Sarabun } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import RouteScrollTop from "@/components/RouteScrollTop";

const sarabun = Sarabun({
  variable: "--font-th",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-en",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VoltTech - โซล่าเซลล์และแบตเตอรี่ลิเธียม",
  description: "บริการรับติดตั้งระบบโซล่าเซลล์และแบตเตอรี่ลิเธียมสำหรับบ้านและธุรกิจ พร้อมให้คำปรึกษาและออกแบบระบบโดยทีมวิศวกรผู้เชี่ยวชาญ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" data-scroll-behavior="smooth" className={`${sarabun.variable} ${inter.variable}`}>
      <body className="antialiased min-h-screen flex flex-col font-sans">
        <RouteScrollTop />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
