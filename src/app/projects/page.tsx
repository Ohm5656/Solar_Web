import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "โครงการติดตั้งโรงงานผลิตชิ้นส่วนยานยนต์",
      type: "ระบบ On-grid 150kW",
      location: "นิคมอุตสาหกรรมอมตะนคร ชลบุรี",
      image: "/images/hero_solar.png",
      description: "ติดตั้งระบบโซล่าเซลล์ขนาด 150kW เพื่อช่วยลดค่าไฟฟ้าในช่วงเวลากลางวัน พร้อมระบบมอนิเตอร์ออนไลน์"
    },
    {
      id: 2,
      title: "โครงการบ้านพักอาศัย พุทธมณฑลสาย 3",
      type: "ระบบ Hybrid 10kW พร้อมแบตเตอรี่",
      location: "กรุงเทพมหานคร",
      image: "/images/project_house.png",
      description: "ระบบโซล่าเซลล์พร้อมแบตเตอรี่ลิเธียมสำหรับใช้งานกลางคืนและใช้เป็นไฟสำรองเมื่อเกิดเหตุไฟตก"
    },
    {
      id: 3,
      title: "ติดตั้งระบบแบตเตอรี่สำหรับฟาร์มเกษตร",
      type: "ระบบ Off-grid พร้อมแบตเตอรี่ (ESS)",
      location: "นครราชสีมา",
      image: "/images/service_battery.png",
      description: "ระบบกักเก็บพลังงานสำหรับฟาร์มเกษตรที่กระแสไฟฟ้าเข้าไม่ถึง เพื่อใช้ในการปั๊มน้ำและระบบให้แสงสว่าง"
    },
    {
      id: 4,
      title: "โครงการปรับปรุงระบบไฟฟ้าโรงงานห้องเย็น",
      type: "งานระบบไฟฟ้า (MDB & Wiring)",
      location: "สมุทรสาคร",
      image: "/images/hero_solar.png",
      description: "รับเหมาปรับปรุงตู้ MDB และเดินสายไฟใหม่ทั้งหมดเพื่อรองรับการขยายกำลังการผลิตของโรงงาน"
    },
    {
      id: 5,
      title: "ติดตั้งโซล่าเซลล์โครงการหมู่บ้านจัดสรร",
      type: "ระบบ On-grid 5kW (จำนวน 20 หลัง)",
      location: "นนทบุรี",
      image: "/images/project_house.png",
      description: "โครงการร่วมกับผู้พัฒนาอสังหาริมทรัพย์เพื่อติดตั้งระบบโซล่าเซลล์เป็นมาตรฐานของบ้านทุกหลังในโครงการ"
    },
    {
      id: 6,
      title: "ระบบควบคุมอัตโนมัติสำหรับไลน์ผลิตอาหาร",
      type: "ระบบ PLC & Automation",
      location: "ปทุมธานี",
      image: "/images/service_battery.png",
      description: "ออกแบบและเขียนโปรแกรมควบคุมระบบสายพานลำเลียงและเครื่องบรรจุภัณฑ์เพื่อลดความผิดพลาด"
    }
  ];

  return (
    <div className="bg-surface min-h-screen">
      {/* Header */}
      <div className="bg-brand-blue text-white py-20 mt-[-20px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">ผลงานของเรา</h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            ความไว้วางใจจากลูกค้ากว่า 500 โครงการ 
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 group">
              <div className="relative h-64 w-full overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute top-4 left-4 bg-brand-blue text-white text-xs font-bold px-3 py-1.5 rounded-full z-10 shadow-md">
                  {project.type}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <MapPin size={16} className="text-brand-red" />
                  <span>{project.location}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-brand-blue transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="border-t border-gray-100 pt-4 mt-4">
                  <Link href="/contact" className="text-brand-blue font-semibold text-sm flex items-center gap-2 hover:text-blue-800 transition-colors">
                    สนใจติดตั้งแบบโครงการนี้ <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
