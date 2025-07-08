"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const links = [
    { name: "Home", href: "#home" },
    { name: "Our Stores", href: "#stores" },
    { name: "Social Wall", href: "#social" },
    { name: "Categories", href: "#categories" },
  ];

  // Smooth scroll function
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const navHeight = 80; // Adjust based on your nav height
      const targetPosition = targetElement.offsetTop - navHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    
    // Close mobile menu if open
    setIsOpen(false);
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map(link => link.href.replace('#', ''));
      const scrollPosition = window.scrollY + 100; // Offset for nav height
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial active section
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLinkClass = (href: string) => {
    const sectionId = href.replace('#', '');
    const isActive = activeSection === sectionId;
    
    return cn(
      "relative text-black px-1 py-1 transition-all duration-300",
      "after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:bg-black after:transition-all after:duration-300",
      isActive 
        ? "after:w-full font-medium" 
        : "after:w-0 hover:after:w-full"
    );
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex fixed top-0 left-0 right-0 z-50 bg-white/95 border-b border-gray-200 shadow-sm">
        <div className="w-full max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <Link
            href="/"
            className="text-3xl font-normal tracking-wide select-none"
            style={{
              fontFamily: "'Dancing Script', cursive",
              color: "#2C3643",
            }}
          >
            Milan Gifts
          </Link>

          {/* Links */}
          <div className="flex gap-x-6 text-sm font-light">
            {links.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className={getLinkClass(item.href)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white/95 border-b border-gray-200 shadow-sm">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-extrabold tracking-wide select-none"
            style={{
              fontFamily: "'Dancing Script', cursive",
              color: "#2C3643",
            }}
          >
            Milan Gifts
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="p-2 text-gray-800 hover:text-gray-600 transition-colors"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span
                className={cn(
                  "block h-0.5 w-full bg-current transition-transform duration-300",
                  isOpen && "rotate-45 translate-y-1"
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-full bg-current transition-opacity duration-300",
                  isOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-full bg-current transition-transform duration-300",
                  isOpen && "-rotate-45 -translate-y-1"
                )}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "transition-all duration-300 ease-in-out bg-white border-t border-gray-200 overflow-hidden",
            isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="flex flex-col px-4 py-3 gap-2 text-sm font-medium">
            {links.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className={getLinkClass(item.href)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
