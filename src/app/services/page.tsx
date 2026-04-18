import { ArrowRight, Battery, CheckCircle2, Factory, Home, Settings, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function ServicesPage() {
  const services = [
    {
      id: "residential-solar",
      title: "ติดตั้งระบบโซล่าเซลล์สำหรับบ้านพักอาศัย",
      description: "บริการออกแบบและติดตั้งระบบโซล่าเซลล์สำหรับบ้าน เพื่อลดค่าไฟรายเดือน ด้วยระบบ On-grid ที่เชื่อมต่อกับการไฟฟ้านครหลวง (MEA) หรือ การไฟฟ้าส่วนภูมิภาค (PEA) อย่างถูกต้องตามกฎหมาย",
      icon: <Home className="w-8 h-8" />,
      features: ["ลดค่าไฟได้สูงสุด 30-60%", "ดำเนินการขออนุญาตฟรี", "รับประกันแผง 25 ปี อินเวอร์เตอร์ 10 ปี", "ตรวจสอบและล้างแผงฟรี 2 ปี"]
    },
    {
      id: "commercial-solar",
      title: "ติดตั้งระบบโซล่าเซลล์สำหรับโรงงานและธุรกิจ",
      description: "ระบบโซล่าเซลล์ขนาดใหญ่สำหรับโรงงานอุตสาหกรรม โกดัง และอาคารพาณิชย์ ออกแบบให้เหมาะสมกับพฤติกรรมการใช้ไฟ (Load Profile) เพื่อจุดคุ้มทุนที่รวดเร็วที่สุด",
      icon: <Factory className="w-8 h-8" />,
      features: ["คืนทุนเร็วภายใน 3-5 ปี", "รองรับการขอ BOI", "มีระบบมอนิเตอร์ออนไลน์", "ไม่กระทบโครงสร้างหลังคาโรงงาน"]
    },
    {
      id: "battery-storage",
      title: "ระบบแบตเตอรี่กักเก็บพลังงาน (ESS)",
      description: "ระบบแบตเตอรี่ลิเธียมความจุสูง สำหรับเก็บกระแสไฟฟ้าที่ผลิตได้จากโซล่าเซลล์ไว้ใช้งานในเวลากลางคืน หรือใช้เป็นระบบสำรองไฟ (UPS) เมื่อไฟดับ",
      icon: <Battery className="w-8 h-8" />,
      features: ["ลดค่าไฟช่วง Peak", "จ่ายไฟต่อเนื่องไม่สะดุด", "ใช้แบตเตอรี่มาตรฐานสากล (LiFePO4)", "ออกแบบขนาดความจุตามความต้องการ"]
    },
    {
      id: "electrical-system",
      title: "ออกแบบและติดตั้งระบบไฟฟ้าอุตสาหกรรม",
      description: "รับเหมาติดตั้งระบบไฟฟ้าสำหรับโรงงาน อาคาร ประกอบตู้ MDB, DB, Control Panel และงานลากสายไฟด้วยมาตรฐานวิศวกรรม",
      icon: <Zap className="w-8 h-8" />,
      features: ["ควบคุมงานโดยวิศวกรไฟฟ้า (กว.)", "ใช้อุปกรณ์แบรนด์ชั้นนำ", "ตรวจรับรองความปลอดภัย", "ทดสอบระบบก่อนส่งมอบ"]
    },
    {
      id: "automation",
      title: "ระบบควบคุมอัตโนมัติ (PLC & Automation)",
      description: "เขียนโปรแกรม PLC และระบบ Automation สำหรับเครื่องจักรและไลน์ผลิต เพื่อเพิ่มประสิทธิภาพและลดการใช้พลังงาน",
      icon: <Settings className="w-8 h-8" />,
      features: ["ออกแบบระบบ Control ใหม่", "เชื่อมต่อเซนเซอร์และอินเวอร์เตอร์", "ระบบ SCADA แสดงผลแบบเรียลไทม์", "ปรับปรุงระบบเดิม (Retrofit)"]
    },
    {
      id: "maintenance",
      title: "บริการบำรุงรักษาเชิงป้องกัน (PM)",
      description: "ตรวจสอบ แก้ไข และบำรุงรักษาระบบโซล่าเซลล์ ระบบไฟฟ้า และแบตเตอรี่ เพื่อให้ทำงานได้อย่างเต็มประสิทธิภาพและยืดอายุการใช้งาน",
      icon: <ShieldCheck className="w-8 h-8" />,
      features: ["บริการล้างทำความสะอาดแผง", "ตรวจเช็กจุดต่อด้วยกล้องถ่ายภาพความร้อน (Thermo Scan)", "ตรวจสอบค่าทางไฟฟ้า", "จัดทำรายงานการบำรุงรักษา"]
    }
  ];

  return (
    <div className="bg-surface min-h-screen">
      {/* Header */}
      <div className="bg-brand-blue text-white py-20 mt-[-20px]">
        <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">บริการของเรา</h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            ให้บริการออกแบบและติดตั้งระบบไฟฟ้าสำหรับอุตสาหกรรมและระบบโซล่าเซลล์ <br/>โดยคำนึงถึงมาตรฐาน ความปลอดภัย และความเหมาะสม
          </p>
        </div>
        </Reveal>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Reveal key={service.id} delayMs={(index % 3) * 110}>
            <div id={service.id} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-blue-50 text-brand-blue rounded-xl flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h2 className="text-2xl font-bold text-brand-blue mb-4">{service.title}</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="text-brand-green mr-2 shrink-0 mt-0.5" size={20} />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-20 border-t border-gray-100">
        <Reveal className="max-w-4xl mx-auto px-4 text-center" delayMs={120}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-brand-blue mb-4">ให้เราช่วยคุณเลือกระบบที่เหมาะสมที่สุด</h2>
          <p className="text-gray-600 text-lg mb-8">
            ทีมวิศวกรของเราพร้อมให้คำปรึกษา สำรวจหน้างาน และประเมินราคาฟรี ไม่มีค่าใช้จ่ายเบื้องต้น
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-brand-red text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-red-700 transition-colors shadow-lg">
            ติดต่อสอบถามรายละเอียด <ArrowRight size={20} />
          </Link>
        </div>
        </Reveal>
      </div>
    </div>
  );
}
