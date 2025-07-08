"use client";

import { Gift, MessageCircle } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#2F2F2F] py-14 px-4 md:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Brand Section */}
        <div className="max-w-md">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-11 h-11 rounded-full flex items-center justify-center bg-[#E06E5A]">
              <Gift className="text-white" size={22} />
            </div>
            <div>
              <span className="text-xl font-bold text-white font-fredoka">
                Milan Gifts
              </span>
              <p className="text-sm text-[#A9C5A0] leading-tight mt-1">
                Something for everyone
              </p>
            </div>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Your trusted destination for the perfect gift. From jewelry to
            accessories, we help you celebrate every special moment.
          </p>
        </div>

        {/* Contact & Social */}
        <div className="space-y-6">
          {/* WhatsApp */}
          <div>
            <h3 className="font-semibold text-white text-base mb-3">
              Connect With Us
            </h3>
            <div className="space-y-3 text-sm">
              <a
                href="https://wa.me/6589688896"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <MessageCircle size={16} className="text-[#A9C5A0]" />
                <span className="text-gray-400">WhatsApp: +65 8968 8896</span>
              </a>
            </div>
          </div>

          {/* Social Links with Labels */}
          <div className="flex gap-4">
            {/* Facebook */}
            <div className="flex flex-col items-center space-y-1">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center bg-[#1877F2] hover:scale-110 transition-transform"
              >
                <FaFacebookF className="text-white text-[16px]" />
              </Link>
            </div>

            {/* Instagram */}
            <div className="flex flex-col items-center space-y-1">
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center bg-[#E4405F] hover:scale-110 transition-transform"
              >
                <FaInstagram className="text-white text-[16px]" />
              </Link>
            </div>

            {/* TikTok - Main */}
            <div className="flex flex-col items-center space-y-1">
              <Link
                href="https://tiktok.com/@mainaccount"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center bg-black hover:scale-110 transition-transform"
              >
                <SiTiktok className="text-white text-[16px]" />
              </Link>
              <span className="text-xs text-gray-400"> Main</span>
            </div>

            {/* TikTok - Events */}
            <div className="flex flex-col items-center space-y-1">
              <Link
                href="https://tiktok.com/@eventsaccount"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center bg-black hover:scale-110 transition-transform"
              >
                <SiTiktok className="text-white text-[16px]" />
              </Link>
              <span className="text-xs text-gray-400">Events</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-[#4F4F4F] mt-10 pt-5 text-center">
        <p className="text-gray-500 text-sm">
          © 2025 Milan Gifts. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
