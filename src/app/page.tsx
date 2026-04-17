import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Factory, Home, ShieldCheck, Zap, Battery, Wrench } from "lucide-react";

export default function HomePage() {
  return (
    <div>
      {/* 1. Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_solar.png"
            alt="Solar Panel Installation"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-brand-blue/85 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/90 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              โซล่าเซลล์และแบตเตอรี่ลิเธียม <br />
              <span className="text-blue-300">เพื่อพลังงานที่คุ้มค่าและมั่นคง</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl leading-relaxed">
              ให้บริการออกแบบ ติดตั้ง และให้คำปรึกษาระบบโซล่าเซลล์ ระบบแบตเตอรี่สำรองไฟ (ESS)
              สำหรับบ้านพักอาศัยและโรงงานอุตสาหกรรม โดยทีมวิศวกรผู้เชี่ยวชาญ
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/services"
                className="bg-brand-red text-white px-8 py-4 rounded-md text-center font-semibold text-lg hover:bg-red-700 transition-all shadow-lg flex items-center justify-center gap-2"
              >
                ดูบริการของเรา <ArrowRight size={20} />
              </Link>
              <Link
                href="/contact"
                className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-md text-center font-semibold text-lg hover:bg-white/20 transition-all flex items-center justify-center"
              >
                ขอคำปรึกษาฟรี
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. About Preview */}
      <section id="about" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-6">
                ความเป็นเลิศด้านวิศวกรรมไฟฟ้า<br />ในทุกโครงการ
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                บริษัท (ชื่อบริษัทลูกค้า) ดำเนินกิจการด้านวิศวกรรมไฟฟ้ามาอย่างยาวนาน
                <br/>เรามุ่งมั่นส่งมอบระบบพลังงานแสงอาทิตย์และแบตเตอรี่ลิเธียมที่ได้มาตรฐานสากล ปลอดภัย และตอบโจทย์การใช้งานจริง
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle2 className="text-brand-green mr-3 shrink-0 mt-1" size={24} />
                  <span className="text-gray-700">ดำเนินงานโดยวิศวกรที่ได้รับใบอนุญาต (กว.)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-brand-green mr-3 shrink-0 mt-1" size={24} />
                  <span className="text-gray-700">ใช้อุปกรณ์ที่ได้มาตรฐานสากล Tier 1</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-brand-green mr-3 shrink-0 mt-1" size={24} />
                  <span className="text-gray-700">บริการหลังการขายที่รวดเร็วและไว้ใจได้</span>
                </li>
              </ul>
              <Link href="/about" className="text-brand-red font-semibold flex items-center gap-2 hover:text-red-800 transition-colors">
                อ่านเพิ่มเติมเกี่ยวกับเรา <ArrowRight size={20} />
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/service_battery.png"
                alt="Engineering Work"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services Overview */}
      <section id="services" className="py-20 bg-surface scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-6">บริการของเรา</h2>
            <p className="text-gray-600 text-lg">
              ให้บริการออกแบบและติดตั้งระบบไฟฟ้า พลังงานทดแทน และระบบสำรองไฟครบวงจร
              โดยคำนึงถึงมาตรฐานความปลอดภัยและความคุ้มค่าในการลงทุน
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-50 text-brand-blue rounded-lg flex items-center justify-center mb-6">
                <Zap size={32} />
              </div>
              <h3 className="text-xl font-bold text-brand-blue mb-3">ติดตั้งโซล่าเซลล์ (บ้าน/ธุรกิจ)</h3>
              <p className="text-gray-600 mb-6">
                ออกแบบและติดตั้งระบบ On-grid, Off-grid และ Hybrid ช่วยลดค่าไฟรายเดือนได้อย่างมีประสิทธิภาพ
              </p>
            </div>
            {/* Service Card 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-50 text-brand-blue rounded-lg flex items-center justify-center mb-6">
                <Battery size={32} />
              </div>
              <h3 className="text-xl font-bold text-brand-blue mb-3">ระบบแบตเตอรี่ลิเธียม (ESS)</h3>
              <p className="text-gray-600 mb-6">
                ระบบกักเก็บพลังงานประสิทธิภาพสูง สำหรับสำรองไฟและจัดการการใช้พลังงานให้คุ้มค่าที่สุด
              </p>
            </div>
            {/* Service Card 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-50 text-brand-blue rounded-lg flex items-center justify-center mb-6">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold text-brand-blue mb-3">งานบำรุงรักษา (PM)</h3>
              <p className="text-gray-600 mb-6">
                บริการล้างแผงโซล่าเซลล์ ตรวจเช็กระบบไฟฟ้าและแบตเตอรี่ เพื่อยืดอายุการใช้งานและรักษาประสิทธิภาพ
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/services" className="inline-flex items-center gap-2 bg-brand-blue text-white px-8 py-3 rounded-md font-medium hover:bg-blue-900 transition-colors">
              ดูบริการทั้งหมด <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Who we serve & 5. Why choose us */}
      <section id="clients" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-brand-blue mb-8">กลุ่มลูกค้าของเรา</h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-4 p-4 bg-surface rounded-lg border border-gray-100">
                  <div className="text-brand-blue"><Home size={32} /></div>
                  <span className="font-semibold text-gray-800">บ้านพักอาศัย</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-surface rounded-lg border border-gray-100">
                  <div className="text-brand-blue"><Factory size={32} /></div>
                  <span className="font-semibold text-gray-800">โรงงานอุตสาหกรรม</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-surface rounded-lg border border-gray-100">
                  <div className="text-brand-blue"><Zap size={32} /></div>
                  <span className="font-semibold text-gray-800">อาคารสำนักงาน</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-surface rounded-lg border border-gray-100">
                  <div className="text-brand-blue"><Wrench size={32} /></div>
                  <span className="font-semibold text-gray-800">ฟาร์มและการเกษตร</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-brand-blue mb-8">ทำไมต้องเลือก VoltTech</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-50 text-brand-blue rounded-full flex items-center justify-center shrink-0">
                    <span className="font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-1">ออกแบบตามการใช้งานจริง</h4>
                    <p className="text-gray-600">วิเคราะห์พฤติกรรมการใช้ไฟเพื่อเลือกระบบที่คุ้มทุนที่สุด</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-50 text-brand-blue rounded-full flex items-center justify-center shrink-0">
                    <span className="font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-1">ประสบการณ์ติดตั้งจริง</h4>
                    <p className="text-gray-600">ทีมช่างและวิศวกรมีประสบการณ์ในภาคอุตสาหกรรมกว่า 10 ปี</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-50 text-brand-blue rounded-full flex items-center justify-center shrink-0">
                    <span className="font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-1">ดูแลครบวงจร (Turnkey)</h4>
                    <p className="text-gray-600">ตั้งแต่สำรวจ ขออนุญาตการไฟฟ้า ติดตั้ง และดูแลหลังการขาย</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5.5 Our Clients */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-brand-blue mb-4">ความไว้วางใจจากลูกค้าชั้นนำ</h2>
          <p className="text-gray-600 mb-12">ส่วนหนึ่งของบริษัทและองค์กรที่เลือกใช้บริการจากเรา</p>

          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center justify-center w-32 h-16">
              <span className="text-2xl font-black tracking-tighter text-gray-800">COMPANY A</span>
            </div>
            <div className="flex items-center justify-center w-32 h-16">
              <span className="text-2xl font-bold italic text-gray-800">Brand B</span>
            </div>
            <div className="flex items-center justify-center w-32 h-16">
              <span className="text-2xl font-serif text-gray-800">GLOBAL INC.</span>
            </div>
            <div className="flex items-center justify-center w-32 h-16">
              <span className="text-2xl font-black text-gray-800">TECH<span className="text-brand-blue">CORP</span></span>
            </div>
            <div className="flex items-center justify-center w-32 h-16">
              <span className="text-2xl font-medium tracking-widest text-gray-800">INDUSTRY</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Projects Preview */}
      <section id="projects" className="py-20 bg-brand-blue text-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">ผลงานความไว้วางใจ</h2>
              <p className="text-blue-200">
                ตัวอย่างโครงการติดตั้งระบบโซล่าเซลล์และแบตเตอรี่ ให้กับบ้านพักอาศัยและโรงงานชั้นนำ
              </p>
            </div>
            <Link href="/projects" className="mt-6 md:mt-0 inline-flex items-center gap-2 text-white hover:text-blue-200 transition-colors">
              ดูผลงานทั้งหมด <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-xl bg-blue-900">
              <div className="relative h-72 w-full">
                <Image src="/images/project_house.png" alt="Residential Solar" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 w-full p-6">
                <h3 className="text-xl font-bold text-white mb-2">โครงการติดตั้งบ้านพักอาศัย 10kW</h3>
                <p className="text-blue-200 text-sm">ระบบ Hybrid พร้อมแบตเตอรี่สำรองไฟ</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl bg-blue-900">
              <div className="relative h-72 w-full">
                <Image src="/images/hero_solar.png" alt="Industrial Solar" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 w-full p-6">
                <h3 className="text-xl font-bold text-white mb-2">โรงงานอุตสาหกรรมขนาดใหญ่ 150kW</h3>
                <p className="text-blue-200 text-sm">ระบบ On-grid เพื่อลดค่าไฟในเวลากลางวัน</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Work Process */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-blue mb-4">ขั้นตอนการทำงาน</h2>
            <p className="text-gray-600">กระบวนการทำงานที่ชัดเจน เพื่อให้คุณได้รับระบบที่ดีที่สุด</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-blue-200 -translate-y-1/2 z-0"></div>

            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-brand-blue text-white flex items-center justify-center text-2xl font-bold mb-4 shadow-lg ring-4 ring-white">1</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">สำรวจ & ให้คำปรึกษา</h3>
              <p className="text-gray-600 text-sm">ประเมินพื้นที่และพฤติกรรมการใช้ไฟ</p>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-brand-blue text-white flex items-center justify-center text-2xl font-bold mb-4 shadow-lg ring-4 ring-white">2</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">ออกแบบระบบ</h3>
              <p className="text-gray-600 text-sm">จัดทำแบบวิศวกรรมและเลือกอุปกรณ์ที่เหมาะสม</p>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-brand-blue text-white flex items-center justify-center text-2xl font-bold mb-4 shadow-lg ring-4 ring-white">3</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">ติดตั้ง & ทดสอบ</h3>
              <p className="text-gray-600 text-sm">ดำเนินการติดตั้งตามมาตรฐานและทดสอบระบบ</p>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-brand-red text-white flex items-center justify-center text-2xl font-bold mb-4 shadow-lg ring-4 ring-white">4</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">ส่งมอบ & ดูแล</h3>
              <p className="text-gray-600 text-sm">ส่งมอบงาน สอนการใช้งาน และบริการหลังการขาย</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Contact CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 bg-brand-blue rounded-2xl overflow-hidden relative shadow-2xl">
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-blue-600 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-blue-400 rounded-full opacity-20 blur-3xl"></div>

          <div className="relative z-10 p-12 text-center md:text-left md:flex items-center justify-between">
            <div className="mb-8 md:mb-0 max-w-2xl">
              <h2 className="text-3xl font-bold text-white mb-4">พร้อมที่จะประหยัดพลังงานแล้วหรือยัง?</h2>
              <p className="text-blue-100 text-lg">
                ติดต่อเราวันนี้เพื่อรับคำปรึกษาและประเมินราคาฟรี ไม่มีค่าใช้จ่ายเบื้องต้น
                <br/>ทีมวิศวกรของเราพร้อมดูแลคุณ
              </p>
            </div>
            <div className="shrink-0 flex flex-col gap-4 md:flex-row">
              <Link href="/contact" className="bg-brand-red text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-red-700 transition-colors shadow-lg text-center">
                ติดต่อสอบถาม
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
