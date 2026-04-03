import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronDown, 
  Heart, 
  LogIn, 
  Users, 
  BookOpen, 
  Menu, 
  Droplet, 
  TreeDeciduous, 
  Shirt,         
  Baby            
} from "lucide-react";
import klogo from "../assets/klogo.png";  
 
const Dropdown = ({ title, items, scrolled }) => {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <div 
      className="relative h-full flex items-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <button
        // CHANGED: Unified color logic for consistency
        className={`flex items-center gap-1 text-[1.05rem] font-medium transition-colors duration-300 ${
          scrolled || hovered ? "text-gray-800" : "text-orange-600"
        } hover:text-orange-700`}
      >
        {title}
        <ChevronDown 
          size={16} 
          className={`transition-transform duration-300 ${hovered ? "rotate-180" : "rotate-0"}`} 
        />
      </button>

      {/* Invisible bridge to prevent flickering */}
      <div className="absolute top-full left-0 w-full h-4 bg-transparent" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2 w-64 p-2 bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] border border-gray-100 ring-1 ring-black/5 overflow-hidden z-50"
          >
            <div className="flex flex-col gap-1">
              {items.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    navigate(item.path);
                    setHovered(false);
                  }}
                  className="group flex items-center gap-3 w-full px-4 py-3 text-left rounded-xl hover:bg-orange-50 transition-colors"
                >
                  <div className="p-2 bg-gray-50 text-gray-500 rounded-lg group-hover:bg-orange-100 group-hover:text-orange-600 transition-colors">
                    {item.icon || <BookOpen size={18} />}
                  </div>
                  <div>
                    <span className="block text-sm font-semibold text-gray-800 group-hover:text-orange-700">
                      {item.label}
                    </span>
                    {item.desc && <span className="block text-[10px] text-gray-400">{item.desc}</span>}
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
 
const Navbar = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const aboutItems = [
    { label: "Our Journey", path: "/about/journey", icon: <Users size={18} />, desc: "Since 2012" },
    { label: "Team & Alumni", path: "/about/team-alumni", icon: <Users size={18} />, desc: "The people behind it" },
  ];

  const donateItems = [
    { label: "Donate Funds", path: "/donate", icon: <Heart size={18} />, desc: "Secure transaction" },
    { label: "Educational Kit", path: "/donate/educational-kit", icon: <BookOpen size={18} />, desc: "Sponsor a child" },
    { label: "Blood Donation", path: "/donateblood", icon: <Droplet size={18} />, desc: "Save someone's life" }
  ];
 
  const domainItems = [
    { label: "Child Education", path: "/childeducation", icon: <BookOpen size={18} />, desc: "Empowering young minds" },
    { label: "Cloth Distribution", path: "/clothdonation", icon: <Shirt size={18} />, desc: "Providing warmth & dignity" },
    { label: "Plantation", path: "/plantation", icon: <TreeDeciduous size={18} />, desc: "Greening our future" },
    { label: "Orphanage Visits", path: "/orphanagevisit", icon: <Baby size={18} />, desc: "Sharing love and care" },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm py-3" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src={klogo}
            alt="Karwaan Logo"
            className={`transition-all duration-300 ${
              scrolled ? "h-12 drop-shadow-md filter-none" : "h-16 drop-shadow-[0_0_20px_rgba(251,191,36,0.8)] brightness-110"
            } w-auto`}
          /> 
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {/* CHANGED: Removed the arbitrary className prop that wasn't functioning */}
          <NavLink to="/" label="Home" scrolled={scrolled} />
          
          <Dropdown title="About Us" items={aboutItems} scrolled={scrolled} />
          <Dropdown title="Domain" items={domainItems} scrolled={scrolled} />
          <Dropdown title="Donate" items={donateItems} scrolled={scrolled} />
        </div>
 
        <div className="flex items-center gap-4">
          
          <Link to="/donate">
            <button className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold text-sm shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5 transition-all duration-300">
              <Heart size={16} className="fill-white" />
              Donate
            </button>
          </Link>

          {/* CHANGED: Mobile menu icon also defaults to orange instead of white so it doesn't disappear */}
          <button className={`md:hidden p-2 transition-colors ${scrolled ? "text-gray-800" : "text-orange-600"}`}>
            <Menu size={24} />
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

const NavLink = ({ to, label, scrolled }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(to)}
      className={`relative text-[1.05rem] font-medium transition-colors duration-300 group ${
        scrolled ? "text-gray-800 hover:text-orange-600" : "text-orange-600 hover:text-orange-700"
      }`}
    >
      {label}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
    </button>
  );
};

export default Navbar;