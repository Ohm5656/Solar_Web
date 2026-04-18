import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-blue text-white pt-10 md:pt-16 pb-24 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 md:gap-10 lg:gap-12 mb-10 md:mb-12">
          {/* Company Info */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4 md:mb-6">
              <div className="font-en w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-blue font-bold text-lg">
                DM
              </div>
              <span className="font-bold text-xl">(ชื่อบริษัทลูกค้า)</span>
            </div>
            <p className="text-blue-200 text-sm leading-7 mb-5 md:mb-6 max-w-md">
              บริษัท (ชื่อบริษัทลูกค้า)
              ให้บริการออกแบบ <br/>ติดตั้งงานระบบไฟฟ้าโรงงาน โซล่าเซลล์ <br/>และระบบแบตเตอรี่ลิเธียมครบวงจร
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://line.me/ti/p/~" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#00B900] flex items-center justify-center text-white hover:bg-[#009900] transition-colors shadow-sm hover:scale-110" title="LINE">
                <span className="font-en font-bold text-[10px]" lang="en">LINE</span>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:bg-[#166FE5] transition-colors shadow-sm hover:scale-110" title="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="mailto:info@volttech.co.th" className="w-10 h-10 rounded-full bg-[#EA4335] flex items-center justify-center text-white hover:bg-[#D33C30] transition-colors shadow-sm hover:scale-110" title="Email">
                <Mail size={18} />
              </a>
              <a href="tel:02-XXX-XXXX" className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center text-white hover:bg-gray-700 transition-colors shadow-sm hover:scale-110" title="Phone">
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-blue-800 pb-2 inline-block">เมนูลัด</h3>
            <ul className="space-y-2.5 md:space-y-3">
              <li><Link href="/" className="text-blue-200 hover:text-white transition-colors">หน้าแรก</Link></li>
              <li><Link href="/#about" className="text-blue-200 hover:text-white transition-colors">เกี่ยวกับเรา</Link></li>
              <li><Link href="/#services" className="text-blue-200 hover:text-white transition-colors">บริการของเรา</Link></li>
              <li><Link href="/#projects" className="text-blue-200 hover:text-white transition-colors">ผลงาน</Link></li>
              <li><Link href="/#clients" className="text-blue-200 hover:text-white transition-colors">ลูกค้าของเรา</Link></li>
              <li><Link href="/contact" className="text-blue-200 hover:text-white transition-colors">ติดต่อเรา</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-blue-800 pb-2 inline-block">บริการหลัก</h3>
            <ul className="space-y-2.5 md:space-y-3">
              <li className="text-blue-200">ติดตั้งระบบโซล่าเซลล์สำหรับบ้าน</li>
              <li className="text-blue-200">ติดตั้งระบบโซล่าเซลล์สำหรับโรงงาน</li>
              <li className="text-blue-200">ระบบแบตเตอรี่ลิเธียม (ESS)</li>
              <li className="text-blue-200">ออกแบบและประกอบตู้ MDB</li>
              <li className="text-blue-200">งานระบบไฟฟ้าห้องเย็น</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6 border-b border-blue-800 pb-2 inline-block">ติดต่อเรา</h3>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 text-brand-red shrink-0 mt-1" size={20} />
                <span className="text-blue-200 text-sm leading-6">
                  123/45 ถนนพัฒนาการ แขวงประเวศ เขตประเวศ กรุงเทพมหานคร 10250
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-brand-red shrink-0" size={20} />
                <span className="text-blue-200 text-sm">02-XXX-XXXX, 081-XXX-XXXX</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-brand-red shrink-0" size={20} />
                <span className="text-blue-200 text-sm">info@volttech.co.th</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-blue-300 text-sm text-left max-w-md">
            &copy; <span className="font-en" lang="en">{new Date().getFullYear()} VoltTech Engineering Co., Ltd. All rights reserved.</span>
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 text-sm text-blue-300 text-left">
            <Link href="#" className="hover:text-white transition-colors">นโยบายความเป็นส่วนตัว</Link>
            <Link href="#" className="hover:text-white transition-colors">เงื่อนไขการใช้บริการ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
