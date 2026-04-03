import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, BookOpen, PartyPopper, Calendar, Star, Users, MapPin, ChevronRight, Droplet, TreePine, Gift, Lightbulb, PenTool } from 'lucide-react';
import childstudying from '../asset/childstudorphanage.jpg';
import orph from '../asset/orph.jpg';
import holi1 from '../asset/holiceleb.jpeg'
import holi2 from '../asset/holiceleb2.jpg'
import holi3 from '../asset/holi3.jpg'
import Footer from '../components/Footer';
 
const heroImages = [
  orph, 
  holi2,
  holi3,
 
];

// Added more images for the themed collages
const holiImages = [
 holi1,
 holi2,
 holi3
];

 

export default function KaarwaanOrphanageVisits() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 overflow-hidden">
      
      
      <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center pt-20 pb-12">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-orange-200/40 rounded-full mix-blend-multiply blur-[100px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-rose-200/40 rounded-full mix-blend-multiply blur-[100px]"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-10"
          >
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-md px-5 py-2 rounded-full text-orange-600 font-semibold text-sm shadow-sm mb-6 border border-white/50">
              <Users className="w-4 h-4" />
              Kaarwaa.N - Youth for Change
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
              A Journey of <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-rose-500 to-purple-600">
                Love & Belonging.
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              We are Kaarwaa.N. We spend our weekends bridging the gap for children in local orphanages through education, mentorship, and unforgettable festive celebrations.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
              <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-slate-900/20 transition-all transform hover:-translate-y-1">
                Volunteer With Kaarwaa.N
              </button>
            </div>
          </motion.div>

          {/* Hero Carousel */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="w-full max-w-5xl h-[400px] md:h-[500px] relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-rose-900/10 border-4 border-white"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={currentSlide}
                src={heroImages[currentSlide]}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 w-full h-full object-cover"
                alt="Kaarwaan children moments"
              />
            </AnimatePresence>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex flex-col justify-end p-8">
              <div className="flex justify-center gap-3">
                {heroImages.map((_, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2 rounded-full transition-all duration-500 ${currentSlide === idx ? 'w-8 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- THEMED SECTIONS --- */}
      
      {/* 1. Holi Theme with Image Collage */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-yellow-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="w-16 h-16 bg-gradient-to-tr from-pink-500 to-yellow-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-pink-500/30 transform -rotate-6">
                <Droplet className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Rang-E-Kaarwaa.N:<br/>Holi at the Shelter</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                For children growing up in orphanages, festivals can feel quiet. Kaarwaa.N changes that. We arrive with pichkaris, organic gulal, and music, ensuring every child feels the vibrant joy of Holi. 
              </p>
              <ul className="space-y-4 mb-8">
                {['Safe, Organic Colors for the Kids', 'Gujiya & Festive Feasts', 'Water Balloon Fights & Dance'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <span className="w-2 h-2 rounded-full bg-pink-500"></span> {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Holi Image Collage */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="grid grid-cols-2 grid-rows-2 gap-4 h-[500px] relative"
            >
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-yellow-400 rounded-full mix-blend-multiply filter blur-2xl opacity-70 z-0"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-pink-500 rounded-full mix-blend-multiply filter blur-2xl opacity-70 z-0"></div>
              
              <img src={holiImages[0]} className="col-span-2 row-span-1 w-full h-full object-cover rounded-3xl shadow-lg relative z-10" alt="Holi Colors" />
              <img src={holiImages[1]} className="col-span-1 row-span-1 w-full h-full object-cover rounded-3xl shadow-lg relative z-10" alt="Kids playing Holi" />
              <img src={holiImages[2]} className="col-span-1 row-span-1 w-full h-full object-cover rounded-3xl shadow-lg relative z-10" alt="Holi joy" />
            </motion.div>
          </div>
        </div>
      </section>


      {/* 3. Workshops & Teaching */}
      <section className="py-24 relative bg-blue-50/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-600/30">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Building Futures:<br/>Kaarwaa.N Pathshala</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Beyond the festivities, consistency is our promise. Our dedicated teaching wing visits the orphanage every weekend to provide foundational academic support, helping the children dream bigger and achieve more.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-3">
                  <BookOpen className="w-5 h-5 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-800">Academics</h4>
                    <p className="text-sm text-slate-500">Math, English & Science</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-3">
                  <PenTool className="w-5 h-5 text-purple-500 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-800">Skill Building</h4>
                    <p className="text-sm text-slate-500">Arts, Crafts & Expression</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              className="relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white"
            >
              <img src={childstudying} className="w-full h-full object-cover" alt="Learning Workshop at Orphanage" />
            </motion.div>
          </div>
        </div>
      </section>
 <Footer/>
      
      
    </div>
  );
}