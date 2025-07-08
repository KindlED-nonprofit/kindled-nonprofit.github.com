import Link from "next/link"
import Image from "next/image";
import { Mail, MapPin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Mission */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/assets/logo.png"
                alt="Logo"
                width={1000}
                height={1000}
                className="w-10 h-auto"
              />
              <span className="text-2xl font-bold">KindlED</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              At KindlED, we believe every student carries a spark—of potential,
              of purpose, of possibility. Our mission is to ensure that spark is
              kindled through mentorship, connection, and shared experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-orange-500 transition duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="text-gray-400 hover:text-orange-500 transition duration-300"
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  className="text-gray-400 hover:text-orange-500 transition duration-300"
                >
                  Register
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-orange-500 transition duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-orange-500" />
                <span className="text-gray-400">kindled.team@gmail.com</span>
              </div>
              {/* <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-orange-500" />
                <span className="text-gray-400">(555) 123-4567</span>
              </div> */}
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-orange-500" />
                <span className="text-gray-400">Schaumburg, IL</span>
              </div>
              <div className="flex items-center space-x-2">
                <Link
                  className="flex items-center space-x-2"
                  href={"https://www.instagram.com/kindled.social/"}
                  target="_blank"
                >
                  <Instagram className="h-4 w-4 text-orange-500" />
                  <span className="text-gray-400">Instagram</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} KindlED. All rights reserved.
          </p>
          <p className="mt-1 text-xs text-gray-500">
            Fiscally sponsored by HCB
          </p>
        </div>
      </div>
    </footer>
  );
}
