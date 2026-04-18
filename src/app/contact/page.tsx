import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-surface min-h-screen">
      {/* Header */}
      <div className="bg-brand-blue text-white py-20 mt-[-20px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">ติดต่อเรา</h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
          เราพร้อมให้คำปรึกษาและประเมินราคาฟรี
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-brand-blue mb-8">ข้อมูลการติดต่อ</h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 text-brand-blue rounded-full flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">ที่ตั้งสำนักงาน</h3>
                  <p className="text-gray-600 leading-relaxed">
                    บริษัท (ชื่อบริษัทของคุณ)<br />
                    123/45 ถนนพัฒนาการ แขวงประเวศ<br />
                    เขตประเวศ กรุงเทพมหานคร 10250
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 text-brand-blue rounded-full flex items-center justify-center shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">เบอร์โทรศัพท์</h3>
                  <p className="text-gray-600">02-XXX-XXXX</p>
                  <p className="text-gray-600">081-XXX-XXXX (สายด่วน)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 text-brand-blue rounded-full flex items-center justify-center shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">อีเมล</h3>
                  <p className="text-gray-600">info@volttech.co.th</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#00B900]/10 text-[#00B900] rounded-full flex items-center justify-center shrink-0">
                  <span className="font-bold text-sm">LINE</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">LINE Official</h3>
                  <p className="text-gray-600">@volttech</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#1877F2]/10 text-[#1877F2] rounded-full flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Facebook</h3>
                  <p className="text-gray-600">VoltTech Engineering</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">เวลาทำการ</h3>
              <p className="text-gray-600">วันจันทร์ - วันเสาร์: 08:30 - 17:30 น.</p>
              <p className="text-gray-600">หยุดวันอาทิตย์และวันหยุดนักขัตฤกษ์</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 md:p-10">
            <h2 className="text-2xl font-bold text-brand-blue mb-6">ส่งข้อความถึงเรา</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">ชื่อ</label>
                  <input type="text" id="firstName" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent" placeholder="ชื่อของคุณ" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">นามสกุล</label>
                  <input type="text" id="lastName" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent" placeholder="นามสกุล" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">เบอร์โทรศัพท์</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent" placeholder="08X-XXX-XXXX" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">อีเมล</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent" placeholder="example@email.com" />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">หัวข้อที่ต้องการติดต่อ</label>
                <select id="subject" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent bg-white">
                  <option>สนใจติดตั้งโซล่าเซลล์บ้าน</option>
                  <option>สนใจติดตั้งโซล่าเซลล์ธุรกิจ</option>
                  <option>สอบถามเรื่องแบตเตอรี่ (ESS)</option>
                  <option>งานระบบไฟฟ้าอื่นๆ</option>
                  <option>อื่นๆ</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">รายละเอียด</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent resize-none" placeholder="รายละเอียดเพิ่มเติมที่ต้องการสอบถาม..."></textarea>
              </div>

              <button type="button" className="w-full bg-brand-red text-white font-bold py-4 rounded-md hover:bg-red-700 transition-colors">
                ส่งข้อความ
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
