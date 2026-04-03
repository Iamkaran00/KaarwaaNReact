import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Quote, Heart, Sprout, ArrowRight, 
  CloudRain, TreeDeciduous, MapPin, Sun,
  Leaf, Flower2, Shovel
} from "lucide-react";
import imgHero1 from '../asset/plantcover.jpeg'
import imgHero2 from '../asset/img7.jpg';
import imgHero3 from '../asset/img8.jpg'
import gallery1 from '../asset/plant1.jpg';
import gallery2 from '../asset/plant2.jpg';
import gallery3 from '../asset/plantcover.jpeg';
import gallery4 from '../asset/img10.jpg';
import gallery5 from '../asset/plant1.jpg';
import gallery6 from '../asset/plant3.jpg';
import Footer from "../components/Footer";

const TreePlantation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselImages = [imgHero1, imgHero2, imgHero3];

  const cards = [
    {
      id: 1,
      title: "New Beginnings",
      subtitle: "Sapling Drive",
      src: gallery1,
      className: "md:col-span-2 md:row-span-2", 
    },
    {
      id: 2,
      title: "The Green Lungs",
      subtitle: "Forest View",
      src: gallery2,
      className: "md:col-span-2 md:row-span-1",
    },
    {
      id: 3,
      title: "Texture",
      subtitle: "Life Details",
      src: gallery3,
      className: "md:col-span-1 md:row-span-1",
    },
    {
      id: 4,
      title: "Tall Hopes",
      subtitle: "Growth",
      src: gallery4,
      className: "md:col-span-1 md:row-span-2",
    },
    {
      id: 5,
      title: "Roots",
      subtitle: "Foundation",
      src: gallery5,
      className: "md:col-span-1 md:row-span-1",
    },
    {
      id: 6,
      title: "Community",
      subtitle: "Teamwork",
      src: gallery6,
      className: "md:col-span-2 md:row-span-1"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  return (
    <div className="min-h-screen bg-[#F8FAF9] text-slate-900 font-sans selection:bg-emerald-200">
      
      {/* --- HERO CAROUSEL --- */}
      <section className="relative w-full h-[85vh] overflow-hidden bg-emerald-950">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <img 
              src={carouselImages[currentSlide]} 
              className="w-full h-full object-cover opacity-50" 
              alt="Nature" 
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-800/40 border border-emerald-400/30 text-emerald-300 text-xs md:text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-md shadow-xl">
              <Leaf size={14} className="animate-pulse" /> Kaarwaa.N Green Initiative
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tight drop-shadow-lg">
              Roots of <span className="text-emerald-400">Tomorrow</span>
            </h1>
            <p className="text-lg md:text-2xl text-emerald-100 max-w-2xl mx-auto font-light leading-relaxed">
              "The best time to plant a tree was 20 years ago. The second best time is now."
            </p>
          </motion.div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {carouselImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 transition-all duration-700 rounded-full shadow-lg ${
                currentSlide === idx ? "w-16 bg-emerald-400" : "w-3 bg-white/20 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
        
        {/* Decorative Wave Bottom */}
        <div className="absolute bottom-0 left-0 right-0">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="fill-[#F8FAF9] h-16 md:h-24 w-full block">
                <path fillOpacity="1" d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,144C672,139,768,181,864,197.3C960,213,1056,203,1152,181.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
             </svg>
        </div>
      </section>

      {/* --- QUICK STATS / MISSION GRID --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto relative">
         {/* Floating Leaf Decoration */}
         <div className="absolute top-10 right-10 text-emerald-200 opacity-20 rotate-45 hidden md:block">
            <Leaf size={120} />
         </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-white rounded-[2rem] border border-emerald-50 shadow-sm hover:shadow-2xl hover:shadow-emerald-100/50 transition-all duration-300 group hover:-translate-y-2">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform">
              <Sprout size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-800">Afforestation</h3>
            <p className="text-slate-600 leading-relaxed">Turning barren patches into breathing micro-forests. We plant native species to restore the ecological balance.</p>
          </div>
          
          <div className="p-8 bg-white rounded-[2rem] border border-emerald-50 shadow-sm hover:shadow-2xl hover:shadow-emerald-100/50 transition-all duration-300 group hover:-translate-y-2">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 mb-6 group-hover:scale-110 transition-transform">
              <CloudRain size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-800">Water Conservation</h3>
            <p className="text-slate-600 leading-relaxed">Plants are natural dams. Our tree drives are strategically planned to prevent soil erosion and improve groundwater.</p>
          </div>

          <div className="p-8 bg-white rounded-[2rem] border border-emerald-50 shadow-sm hover:shadow-2xl hover:shadow-emerald-100/50 transition-all duration-300 group hover:-translate-y-2">
            <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center text-lime-600 mb-6 group-hover:scale-110 transition-transform">
              <Sun size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-800">Climate Action</h3>
            <p className="text-slate-600 leading-relaxed">Fighting the rising temperatures of our cities by creating green canopies that provide shade and oxygen.</p>
          </div>
        </div>
      </section>

      {/* --- BENTO GRID GALLERY --- */}
      <section className="w-full px-6 py-10 max-w-[1600px] mx-auto">
        <div className="mb-10 pl-4 border-l-4 border-emerald-500">
            <h2 className="text-3xl font-bold text-slate-800">Nature's Gallery</h2>
            <p className="text-slate-500">Snapshots from our recent plantation drives.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[300px] gap-4">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`
                group relative overflow-hidden rounded-3xl cursor-pointer 
                ${card.className}
              `}
            >
              {/* Image */}
              <img
                src={card.src}
                alt={card.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-900/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 p-6 translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                  {card.subtitle}
                </span>
                <h3 className="text-2xl font-semibold text-white mt-1 font-serif">
                  {card.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- THE SUCCESS STORY (TRANSFORMATION) --- */}
      <section className="py-24 px-6 bg-emerald-950 text-white overflow-hidden relative mt-12">
        {/* Background Patterns */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#10b981 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Abstract blobs */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-60 h-60 bg-lime-500/10 rounded-full blur-3xl" />
            
            <img 
              src={imgHero1}
              className="rounded-[3rem] relative z-10 shadow-2xl border-4 border-emerald-900/50"
              alt="Deep Forest"
            />
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -right-4 md:-right-8 bg-white text-emerald-900 p-8 rounded-3xl z-20 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <div className="flex items-center gap-3 mb-2">
                <TreeDeciduous className="text-emerald-600" />
                <span className="text-sm font-bold uppercase tracking-widest text-emerald-400">Total Impact</span>
              </div>
              <p className="text-5xl font-black">5,000+</p>
              <p className="text-slate-500 font-medium mt-1">Trees Planted</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-emerald-400 font-bold tracking-widest uppercase text-sm mb-4">Project: Green Shield</h2>
            <h3 className="text-4xl md:text-5xl font-black mb-8 leading-tight font-serif">
              From Dust to <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-lime-400">Dense Canopy</span>
            </h3>
            <div className="space-y-6 text-emerald-100/80 text-lg leading-relaxed">
              <p>
                What started as a barren patch of land near the industrial bypass is now a thriving micro-ecosystem. 
              </p>
              <p>
                It wasn't just about digging holes. It was about specific soil treatment, selecting the right native saplings like <span className="text-white font-bold italic">Neem, Peepal, and Banyan</span>, and months of watering schedules maintained by students.
              </p>
              
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- THE NARRATIVE (PAPER TEXTURE) --- */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <Flower2 className="mx-auto text-emerald-600 mb-4 animate-spin-slow" size={40} />
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-slate-800">The Story of a Single Seed</h2>
          <div className="h-1.5 w-24 bg-emerald-500 mx-auto rounded-full" />
        </div>

        {/* Paper Card */}
        <div className="bg-[#FDFCF0] rounded-[3rem] p-8 md:p-16 shadow-xl border border-stone-200 relative overflow-hidden">
          {/* Subtle Watermark */}
          <Leaf className="absolute -right-10 -bottom-10 text-stone-900/5 rotate-[-20deg]" size={400} />
          
          <div className="relative z-10 prose prose-lg max-w-none text-stone-700">
            <p className="text-2xl font-serif italic text-emerald-900 mb-12 border-l-4 border-emerald-500 pl-8">
              "When you plant a tree, you don't just plant a seed. You plant shade for the weary, fruit for the hungry, and breath for the living."
            </p>
            
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <p>
                In the heat of May, the temperatures in Jabalpur soar. But walk into the Kaarwaa.N... grove, and the temperature drops by 4 degrees. This isn't magic; it's biology working its miracle.
              </p>
              <p>
                We remember planting the first row of Gulmohar trees. They were fragile, barely knee-high. Today, they are giants that paint the sky red every summer, sheltering birds that had long left the city.
              </p>
            </div>

            <div className="bg-emerald-100/50 p-8 rounded-3xl mb-12 border border-emerald-200">
              <h4 className="text-emerald-900 font-bold mb-4 flex items-center gap-2">
                <Heart size={20} className="fill-emerald-600 text-emerald-600" /> A Volunteer's Note
              </h4>
              <p className="text-emerald-900 leading-relaxed italic">
                "I used to think climate change was too big for me to solve. Then I held a sapling. It was small, but it was alive. Putting it in the earth felt like a promise to the future."
              </p>
              <p className="mt-4 font-bold text-emerald-800 text-sm uppercase">— Karan Sahu, 3rd Year Student</p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-stone-200 gap-6">
              <div>
                <p className="text-sm text-stone-400 uppercase tracking-widest font-bold">Initiative By</p>
                <p className="text-lg font-bold text-stone-800">Kaarwaa.N... Green Team</p>
              </div>
              <Link to="/donate">
                <button className="flex items-center gap-2 px-8 py-4 bg-emerald-900 text-white rounded-full font-bold hover:bg-emerald-700 transition-colors group shadow-lg">
                  Adopt a Sapling <Shovel size={18} className="group-hover:-translate-y-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      
      
    <Footer/>
    </div>
  );
};

export default TreePlantation;