import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Heart, ChevronDown } from "lucide-react"; // install: npm i lucide-react

// Import your images normally
import img1 from "../asset/img1.jpg";
import img2 from "../asset/img2.jpg";
import img3 from "../asset/img3.jpg";
import img4 from "../asset/img4.jpg";
import img5 from "../asset/img5.jpg";
import img6 from "../asset/img6.jpg";
import img7 from "../asset/img7.jpg";
import img8 from "../asset/img8.jpg";
import img9 from "../asset/img9.jpg";
import { Link } from "react-router-dom";
const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Framer Motion Variants for Staggered Text
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delays each child animation
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* --- BACKGROUND SLIDER --- */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={current}
            src={images[current]}
            alt="Kaarwaa.N Social Impact"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          />
        </AnimatePresence>

       
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent opacity-60" />
        {/* Bottom gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      {/* --- HERO CONTENT --- */}
      <motion.div
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 md:px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-xs md:text-sm font-semibold tracking-widest text-white uppercase">
            Est. 2012 • Jabalpur Engineering College
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1 variants={itemVariants} className="max-w-5xl mx-auto">
          <span className="block text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.1] drop-shadow-2xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">
              Another
            </span>{" "}
            India
          </span>
          <span className="block text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.1] drop-shadow-2xl">
            <span className="text-emerald-400">Exists</span>.
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="mt-8 max-w-2xl text-lg md:text-xl text-gray-200 font-light leading-relaxed"
        >
          We don't just dream of a better future. We build it. <br className="hidden md:block" />
          Empowering underprivileged children through education, awareness, and action.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-5 mt-10 w-full sm:w-auto"
        >
          {/* Primary Button */}
       <Link to = '/donate'>   <button className="group relative px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-lg rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] flex items-center justify-center gap-3 overflow-hidden">
            <span className="relative z-10">Join the Movement</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
          </button>
          </Link>
          

<Link to = '/donate'>
          {/* Secondary Button */}
          <button className="group px-8 py-4 bg-white/10 hover:bg-white text-white hover:text-black font-bold text-lg rounded-full backdrop-blur-sm border border-white/30 transition-all duration-300 flex items-center justify-center gap-3">
            <Heart className="w-5 h-5 text-red-500 fill-current group-hover:scale-110 transition-transform" />
            <span>Support Us</span>
          </button>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 text-white/50 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
      >
        <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}