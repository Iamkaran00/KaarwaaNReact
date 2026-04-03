import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";


import { 
  Quote, Heart, GraduationCap, ArrowRight, 
  Coffee, BookOpen, MapPin, Sparkles,
  ChevronLeft, ChevronRight 
} from "lucide-react";
import storyimg from '../asset/successstoryedu.jpg';
// Assuming your assets are in the same place
import ed1 from "../asset/edu1.jpg";
import ed2 from "../asset/edu2.jpg";
import ed6 from '../asset/ed4.jpeg';
import ed4 from '../asset/examcenter.jpeg'
import ed5 from '../asset/coverimage.jpeg'
import img1 from '../assets/k2.png';
import img2 from '../asset/teachingpics.jpeg';

import img3 from '../assets/examcenter.png';
import img4 from '../assets/kanyashala1.png';
import img5 from '../assets/teaching.png'
import img6 from '../assets/bagdist.png'
import Footer from "../components/footer";
const ChildEducation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselImages = [ed1, ed2,img2,ed4,ed5];

 const cards = [
    {
      id: 1,
      src: ed6,
   
      className: "md:col-span-2 md:row-span-2", 
    },
    {
      id: 2,
  
      src: img2,
      // Wide Landscape (Spans 2 cols, 1 row)
      className: "md:col-span-2 md:row-span-1",
    },
    {
      id: 3,
   
     src : img3,
      className: "md:col-span-1 md:row-span-1",
    },
    {
      id: 4,
     
      src: img4,
      className: "md:col-span-1 md:row-span-2",
    },
    {
      id: 5,
      src: img5,
     
      className: "md:col-span-1 md:row-span-1",
    },
    {
      id : 6 ,
      
      src : img6,
      className : 'md:col-span-2 md:row-span-1'
    },
    
  ];









  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-900 font-sans selection:bg-orange-100">
      
      {/* --- HERO CAROUSEL --- */}
      <section className="relative w-full h-[85vh] overflow-hidden bg-black">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <img 
              src={carouselImages[currentSlide]} 
              className="w-full h-full object-cover opacity-60" 
              alt="Education" 
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
              Kaarwaa.N Child Education
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tight">
              Lighting the <span className="text-orange-500">Fire</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
              “Education is not the filling of a pail, but the lighting of a fire.” 
              <span className="block mt-2 font-serif italic text-orange-200">— William Butler Yeats</span>
            </p>
          </motion.div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {carouselImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                currentSlide === idx ? "w-12 bg-orange-500" : "w-4 bg-white/30"
              }`}
            />
          ))}
        </div>
      </section>

      {/* --- QUICK STATS / MISSION GRID --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-shadow group">
            <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-6 group-hover:rotate-6 transition-transform">
              <GraduationCap size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3">Exam Preparation</h3>
            <p className="text-slate-600 leading-relaxed">Preparation for Navodaya, Gyanodaya & Samodaya examinations for underprivileged stars.</p>
          </div>
          <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-shadow group">
            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:rotate-6 transition-transform">
              <BookOpen size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3">Material Support</h3>
            <p className="text-slate-600 leading-relaxed">Study material and stationery provided by the tireless organizers and alumni of Kaarwaan.</p>
          </div>
          <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-shadow group">
            <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 group-hover:rotate-6 transition-transform">
              <Sparkles size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3">Holistic Growth</h3>
            <p className="text-slate-600 leading-relaxed">From sports events to Independence Day celebrations, we nourish the spirit.</p>
          </div>
        </div>
      </section>

 <section className = 'w-full p-15'>
  <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[300px] gap-4">
        
        {cards.map((card) => (
          <div
            key={card.id}
            className={`
              group relative overflow-hidden rounded-3xl cursor-pointer 
              ${card.className}
            `}
          >
            {/* Background Image with Zoom Effect */}
            <img
              src={card.src}
              alt={card.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />

            {/* Dark Gradient Overlay (Visibility on Hover or Always) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />

            {/* Content Positioned at Bottom */}
            <div className="absolute bottom-0 left-0 p-6 translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                {card.subtitle}
              </span>
              <h3 className="text-2xl font-semibold text-white mt-1">
                {card.title}
              </h3>
            </div>
          </div>
        ))}
        
      </div>

</section>

      <section className="py-24 px-6 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-500/20 rounded-full blur-3xl" />
            <img 
              src= {storyimg} 
              className="rounded-[3rem] relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
              alt="Success Story"
            />
            <div className="absolute -bottom-6 -right-6 bg-orange-500 p-8 rounded-3xl z-20 shadow-2xl">
              <p className="text-4xl font-black">100%</p>
              <p className="text-orange-100 text-sm uppercase tracking-widest font-bold">Willpower</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-4">Success Story</h2>
            <h3 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Roopmati: Defeating Barriers</h3>
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>Every child has a dream of education, but for Roopmati, the dream had to fight against a background of poverty.</p>
              <p>With parents who sat for hours during her studies to encourage her, Roopmati’s will was strong enough to break every barrier. She was selected for <span className="text-white font-bold italic">Gyanodaya</span>, a milestone on her path to becoming whoever she wants to be.</p>
              <div className="pt-6 border-t border-slate-800">
                <p className="italic text-slate-300">"Kaarwaa.N always works for children like Roopmati and their success."</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- THE CHAIWALA NARRATIVE --- */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <Coffee className="mx-auto text-orange-500 mb-4" size={40} />
          <h2 className="text-4xl md:text-5xl font-black mb-4">The Story of a Chaiwala</h2>
          <div className="h-1.5 w-24 bg-orange-500 mx-auto rounded-full" />
        </div>

        <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-xl border border-slate-50 relative overflow-hidden">
          {/* Subtle Watermark */}
          <MapPin className="absolute -right-10 -bottom-10 text-slate-50" size={300} />
          
          <div className="relative z-10 prose prose-lg max-w-none text-slate-700">
            <p className="text-2xl font-serif italic text-slate-900 mb-12 border-l-4 border-orange-500 pl-8">
              "Sir, I could have bought coaching classes, but I could never buy the goodness involved in you teaching my children."
            </p>
            
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <p>Outside the JEC, Jabalpur, sits a man whose wisdom outweighs his wealth. A 10th-pass tea vendor, he lives in a 5m x 4m room with mud walls, yet his eyes hold the vast aspirations of a father who wants his son, Anuj, to have the life he never did.</p>
              <p>He hasn't bought a pair of shoes for himself since his wedding in 1992. "Can't you get married without shoes?" he had asked. Since then, every rupee has been a seed for his children's future.</p>
            </div>

            <div className="bg-orange-50 p-8 rounded-3xl mb-12 border border-orange-100">
              <h4 className="text-orange-800 font-bold mb-4 flex items-center gap-2">
                <Heart size={20} /> Lessons in Inadequacy
              </h4>
              <p className="text-orange-900 leading-relaxed italic">
                When an ice-cream vendor came by, 8-year-old Anuj didn't budge. Later, he told his father: "No baba, Ma told us business is not going well... we will buy a new T-shirt in March if you have money."
              </p>
              <p className="mt-4 font-bold text-orange-800 text-sm uppercase">— A lesson in priority management no textbook can teach.</p>
            </div>

            <p className="text-xl font-medium text-slate-900 mb-8 text-center">
              "Only those who live for others are truly alive."
            </p>

            <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-100 gap-6">
              <div>
                <p className="text-sm text-slate-400 uppercase tracking-widest font-bold">Story By</p>
                <p className="text-lg font-bold text-slate-900">Mr. Shourav Kumar Deb</p>
              </div>
              <Link to = '/donate' >
               <button className="flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-orange-600 transition-colors group">
                Support Kids Like Anuj <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </button></Link>
            </div>
          </div>
        </div>
      </section>

    
  <Footer/>
    </div>
  );
};

export default ChildEducation;