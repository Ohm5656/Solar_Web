"use client";

import { useState } from "react";
import { MessageCircle, Phone, Mail, X } from "lucide-react";

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Menu items */}
      <div 
        className={`flex flex-col gap-3 transition-all duration-300 origin-bottom ${
          isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-90 translate-y-8 pointer-events-none"
        }`}
      >
        <a 
          href="https://line.me/ti/p/~" 
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-[#00B900] rounded-full flex items-center justify-center text-white shadow-lg hover:bg-[#009900] hover:scale-110 transition-all flex-shrink-0"
          title="ติดต่อผ่าน LINE"
        >
          <span className="font-bold text-xs">LINE</span>
        </a>
        <a 
          href="https://facebook.com" 
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-[#1877F2] rounded-full flex items-center justify-center text-white shadow-lg hover:bg-[#166FE5] hover:scale-110 transition-all flex-shrink-0"
          title="ติดต่อผ่าน Facebook"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
        </a>
        <a 
          href="mailto:info@volttech.co.th" 
          className="w-12 h-12 bg-[#EA4335] rounded-full flex items-center justify-center text-white shadow-lg hover:bg-[#D33C30] hover:scale-110 transition-all flex-shrink-0"
          title="ติดต่อผ่าน Email (Gmail)"
        >
          <Mail size={20} />
        </a>
        <a 
          href="tel:02-XXX-XXXX" 
          className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-gray-800 hover:scale-110 transition-all flex-shrink-0"
          title="โทรหาเรา"
        >
          <Phone size={20} />
        </a>
      </div>

      {/* Main Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-brand-red rounded-full flex items-center justify-center text-white shadow-xl hover:bg-red-700 transition-all hover:scale-110 z-10"
        title="ติดต่อเรา"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </button>
    </div>
  );
}
