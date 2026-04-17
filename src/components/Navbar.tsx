"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "หน้าแรก", href: "/" },
  { name: "เกี่ยวกับเรา", href: "/#about" },
  { name: "บริการ", href: "/#services" },
  { name: "ลูกค้า", href: "/#clients" },
  { name: "ผลงาน", href: "/#projects" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold text-xl">
                DM
              </div>
              <span className="font-bold text-brand-blue text-xl hidden sm:block">
                (ชื่อและโลโก้บริษัทลูกค้า)
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-brand-blue ${pathname === link.href ? "text-brand-blue font-semibold" : "text-gray-600"
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-brand-red text-white px-6 py-2.5 rounded-md text-sm font-medium hover:bg-red-700 transition-colors shadow-sm"
            >
              ติดต่อเรา
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-brand-blue focus:outline-none p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 rounded-md text-base font-medium ${pathname === link.href
                  ? "bg-blue-50 text-brand-blue"
                  : "text-gray-700 hover:bg-gray-50 hover:text-brand-blue"
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 px-3">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-brand-red text-white px-4 py-3 rounded-md font-medium hover:bg-red-700 transition-colors"
              >
                ติดต่อเรา
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
