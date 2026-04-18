import Image from "next/image";
import { CheckCircle2, Award, Users, Target } from "lucide-react";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";

export default function AboutPage() {
  return (
    <div className="bg-surface min-h-screen">
      {/* Header */}
      <div className="bg-brand-blue text-white py-20 mt-[-20px]">
        <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">เกี่ยวกับเรา</h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            รู้จักกับ (ชื่อบริษัทลูกค้า) 
          </p>
        </div>
        </Reveal>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/images/hero_solar.png"
              alt="VoltTech Engineering Team"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-brand-blue mb-6">บริษัท (ชื่อบริษัทลูกค้า)</h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              เราคือบริษัทวิศวกรรมที่เชี่ยวชาญด้านระบบไฟฟ้า พลังงานทดแทน และระบบกักเก็บพลังงาน
              ด้วยประสบการณ์กว่า 10 ปีในวงการอุตสาหกรรม    เรามุ่งมั่นที่จะนำเสนอโซลูชันด้านพลังงานที่ดีที่สุดให้กับลูกค้า
              เพื่อลดต้นทุนค่าใช้จ่ายและส่งเสริมการใช้พลังงานสะอาดอย่างยั่งยืน
            </p>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              ทีมงานของเราประกอบด้วยวิศวกรผู้เชี่ยวชาญ (กว.) และช่างเทคนิคที่ผ่านการอบรมอย่างเข้มงวด
              ทำให้มั่นใจได้ว่าทุกโครงการที่เราดูแล จะมีความปลอดภัย ได้มาตรฐานสากล และสามารถใช้งานได้อย่างมีประสิทธิภาพสูงสุด
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <div className="text-4xl font-bold text-brand-blue mb-2">
                  <CountUp end={10} suffix="+" />
                </div>
                <div className="text-gray-600">ปีแห่งประสบการณ์</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <div className="text-4xl font-bold text-brand-blue mb-2">
                  <CountUp end={500} suffix="+" />
                </div>
                <div className="text-gray-600">โครงการที่สำเร็จ</div>
              </div>
            </div>
          </div>
        </div>
        </Reveal>

        {/* Vision & Mission */}
        <Reveal delayMs={120}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
            <div className="w-16 h-16 bg-blue-50 text-brand-blue rounded-full flex items-center justify-center mx-auto mb-6">
              <Target size={32} />
            </div>
            <h3 className="text-xl font-bold text-brand-blue mb-4">วิสัยทัศน์ (Vision)</h3>
            <p className="text-gray-600">
              เป็นผู้นำด้านวิศวกรรมพลังงานสะอาดที่ได้รับความไว้วางใจสูงสุดในประเทศไทย
              ด้วยมาตรฐานความปลอดภัยและคุณภาพที่เป็นเลิศ
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
            <div className="w-16 h-16 bg-blue-50 text-brand-blue rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={32} />
            </div>
            <h3 className="text-xl font-bold text-brand-blue mb-4">พันธกิจ (Mission)</h3>
            <p className="text-gray-600">
              ส่งมอบระบบพลังงานที่ช่วยลดต้นทุนให้ลูกค้าอย่างเป็นรูปธรรม พร้อมบริการหลังการขายที่รวดเร็วและจริงใจ
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
            <div className="w-16 h-16 bg-blue-50 text-brand-blue rounded-full flex items-center justify-center mx-auto mb-6">
              <Users size={32} />
            </div>
            <h3 className="text-xl font-bold text-brand-blue mb-4">ค่านิยม (Core Values)</h3>
            <p className="text-gray-600">
              ซื่อสัตย์ต่อลูกค้า พัฒนาความรู้อย่างต่อเนื่อง ทำงานเป็นทีม และยึดมั่นในความปลอดภัย
            </p>
          </div>
        </div>
        </Reveal>

        {/* Standards */}
        <Reveal delayMs={180}>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 md:p-16 text-center">
          <div className="w-20 h-20 bg-brand-blue text-white rounded-full flex items-center justify-center mx-auto mb-8">
            <Award size={40} />
          </div>
          <h2 className="text-3xl font-bold text-brand-blue mb-8">มาตรฐานและใบรับรอง</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-brand-green shrink-0" size={24} />
              <span className="text-gray-700 font-medium">ใบอนุญาตประกอบวิชาชีพวิศวกรรมควบคุม (กว.)</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-brand-green shrink-0" size={24} />
              <span className="text-gray-700 font-medium">จดทะเบียนนิติบุคคลถูกต้องตามกฎหมาย</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-brand-green shrink-0" size={24} />
              <span className="text-gray-700 font-medium">มาตรฐานการติดตั้งจากการไฟฟ้า (MEA/PEA)</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-brand-green shrink-0" size={24} />
              <span className="text-gray-700 font-medium">ใบรับรองความปลอดภัยในการทำงาน (จป.)</span>
            </div>
          </div>
        </div>
        </Reveal>
      </div>
    </div>
  );
}
