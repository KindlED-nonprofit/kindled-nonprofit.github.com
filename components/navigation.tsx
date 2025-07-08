"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/programs", label: "Programs" },
    { href: "/register", label: "Register" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/assets/logo.png"
              alt="Logo"
              width={1000}
              height={1000}
              className="w-10 h-auto"
            />
            <span className="text-2xl font-bold text-gray-800">KindlED</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition duration-300 relative ${
                  isActive(link.href)
                    ? "text-orange-500"
                    : "text-gray-800 hover:text-orange-500"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-500 rounded-full"></span>
                )}
              </Link>
            ))}
            <div className="flex space-x-4">
              <Link
                href="/register?tab=mentee"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300"
              >
                Become a Mentee
              </Link>
              <Link
                href="/register?tab=mentor"
                className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold py-2 px-4 rounded-full transition duration-300"
              >
                Become a Mentor
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-gray-800" />
            ) : (
              <Menu className="h-6 w-6 text-gray-800" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-medium transition duration-300 py-2 px-4 rounded-lg relative ${
                    isActive(link.href)
                      ? "text-orange-500 bg-orange-50"
                      : "text-gray-800 hover:text-orange-500 hover:bg-orange-50"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <span className="absolute left-0 top-0 bottom-0 w-1 bg-orange-500 rounded-r-full"></span>
                  )}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Link
                  href="/register?type=mentor"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300 text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Become a Mentor
                </Link>
                <Link
                  href="/register?type=mentee"
                  className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold py-3 px-6 rounded-full transition duration-300 text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Find a Mentor
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
