import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

const prompt = Prompt({
  variable: "--font-prompt",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
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
    <html lang="th" className={`${prompt.variable}`}>
      <body className="antialiased min-h-screen flex flex-col font-sans">
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
