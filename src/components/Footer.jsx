import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Link as LinkIcon, 
 
   
} from 'lucide-react';
import { HeartHandshake } from 'lucide-react';

import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="relative pt-10 overflow-hidden bg-gradient-to-b from-[#101828] to-[#05080f] text-slate-300 font-sans">
      
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-600 via-amber-500 to-emerald-600"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          
          {/* Column 1: Quick Links */}
          <div className="text-left">
            <h6 className="text-white text-lg font-bold mb-4 relative inline-block tracking-wide">
              <span className="flex items-center gap-2">
                <LinkIcon className="text-amber-500 w-4 h-4" /> Quick Links
              </span>
              <span className="absolute left-0 -bottom-2 w-8 h-1 bg-amber-500 rounded-full"></span>
            </h6>
            <ul className="space-y-2">
              {['FAQ', 'Privacy Policy', 'Certificate Verification', 'Feedback', 'Developers'].map((item) => (
                <li key={item}>
                  <a href={`/${item.toLowerCase().replace(/ /g, '_')}`} className="hover:text-amber-400 hover:translate-x-2 transition-all duration-300 inline-block text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Initiatives */}
          <div className="text-left">
            <h6 className="text-white text-lg font-bold mb-4 relative inline-block tracking-wide">
              <span className="flex items-center gap-2">
                <HeartHandshake className="text-amber-500 w-5 h-5" /> Our Initiatives
              </span>
              <span className="absolute left-0 -bottom-2 w-8 h-1 bg-amber-500 rounded-full"></span>
            </h6>
            <ul className="space-y-2">
              {['Child Education', 'Orphanage Visit', 'Plantation Drives', 'Cloth Distribution'].map((item) => (
                <li key={item}>
                  <a href={`/${item.toLowerCase().replace(/ /g, '_')}`} className="hover:text-amber-400 hover:translate-x-2 transition-all duration-300 inline-block text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Socials */}
          <div className="text-left">
            <h6 className="text-white text-lg font-bold mb-4 relative inline-block tracking-wide">
              <span className="flex items-center gap-2">
                <MapPin className="text-amber-500 w-4 h-4" /> Contact Us
              </span>
              <span className="absolute left-0 -bottom-2 w-8 h-1 bg-amber-500 rounded-full"></span>
            </h6>
            
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="text-amber-500 w-4 h-4 mr-3 mt-1 shrink-0" />
                <span className="text-sm">Jabalpur Engineering College<br/><span className="text-slate-500">Gokalpur, Jabalpur (M.P.)</span></span>
              </li>
              <li className="flex items-center">
                <Phone className="text-amber-500 w-4 h-4 mr-3 shrink-0" />
                <span className="text-sm">+91 91497 20731(Saurabh Patel 2023-27)</span>
              </li>
              <li className="flex items-center">
                <Mail className="text-amber-500 w-4 h-4 mr-3 shrink-0" />
                <a href="mailto:kaarwaanjec@gmail.com" className="text-sm hover:text-amber-400 transition-colors">kaarwaanjec@gmail.com</a>
              </li>
            </ul>

            <div className="mt-6">
              <p className="mb-2 text-slate-500 text-xs uppercase tracking-widest font-semibold">Connect with us:</p>
              <div className="flex space-x-3">
                <a href="https://www.instagram.com/kaarwaa.n?igsh=ZDF0c3Nham1rOWZk" target="_blank" rel="noreferrer"
                   className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:bg-[#d62976] hover:border-[#d62976] hover:-translate-y-1 shadow-lg">
                  <FaInstagram className="w-5 h-5" />
                </a>
                {/* Facebook */}
                <a href="https://www.facebook.com/kaarwaanjec?mibextid=rS40aB7S9Ucbxw6v" target="_blank" rel="noreferrer"
                   className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:bg-[#1877F2] hover:border-[#1877F2] hover:-translate-y-1 shadow-lg">
                  <FaFacebook className="w-5 h-5" />
                </a>
                <a href="http://www.youtube.com/@kaarwaanjec9417" target="_blank" rel="noreferrer"
                   className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:bg-[#FF0000] hover:border-[#FF0000] hover:-translate-y-1 shadow-lg">
                  <FaYoutube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[80vw] text-center mt-8 pb-4 select-none pointer-events-none relative z-0">
        <h1 
          className="font-black text-[12vw] uppercase leading-none tracking-widest opacity-100"
          style={{
            WebkitTextStroke: '1px rgba(255, 255, 255, 0.05)',
            color: 'transparent'
          }}
        >
          KAARWAA.N...
        </h1>
      </div>

      {/* Bottom Copyright */}
      <div className="bg-[#020305] py-4 border-t border-white/5 relative z-20">
        <div className="container mx-auto text-center px-4">
          <p className="text-[10px] md:text-xs text-slate-500">
            &copy; 2025 <span className="text-amber-500">JEC KAARWAA.N...</span>. Social Welfare Society. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;