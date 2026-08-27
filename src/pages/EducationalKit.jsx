// import React from 'react';
// import { motion } from 'framer-motion';
// import { BookOpen, Pencil, GraduationCap, Backpack, Heart, Sparkles, CheckCircle2, Phone } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import Footer from '../components/Footer';
// const EducationalKitDonation = () => {
//   const kitItems = [
//     { item: "School Bag", icon: <Backpack size={20} /> },
//     { item: "Notebooks & Registers", icon: <BookOpen size={20} /> },
//     { item: "Stationery Set", icon: <Pencil size={20} /> },
//     { item: "Geometry Box", icon: <Sparkles size={20} /> },
//     { item: "Reference Books", icon: <GraduationCap size={20} /> },
//     { item: "Water Bottle & Lunchbox", icon: <CheckCircle2 size={20} /> },
//   ];

//   return (
//     <div className="min-h-screen bg-white pt-28 pb-16 px-6">
//       <div className="max-w-6xl mx-auto">
        
//         <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
//           <motion.div 
//             initial={{ opacity: 0, x: -30 }}
//             animate={{ opacity: 1, x: 0 }}
//           >
//             <span className="text-orange-600 font-bold tracking-widest uppercase text-sm">Empower a Student</span>
//             <h1 className="text-4xl md:text-6xl font-black text-gray-900 mt-4 leading-tight">
//               Sponsor an <br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
//                 Educational Kit
//               </span>
//             </h1>
//             <p className="text-gray-600 mt-6 text-lg leading-relaxed">
//               For many children, basic school supplies are a luxury they cannot afford. By donating a kit, 
//               you aren't just giving them tools; you're giving them the confidence to dream big and stay in school.
//             </p>
            
//             <div className="mt-8 flex flex-wrap gap-4">
//               <button className="px-8 py-4 bg-orange-500 text-white rounded-2xl font-bold shadow-lg shadow-orange-200 hover:bg-orange-600 transition-all flex items-center gap-2">
//                 <Heart size={20} fill="white" />
//                 <Link to = "/donate" >
//                 Sponsor a Kit Now
//                 </Link>
//               </button>
//               <button className="px-8 py-4 border-2 border-gray-100 text-gray-700 rounded-2xl font-bold hover:bg-gray-50 transition-all">
//                 View Distribution Gallery
//               </button>
//             </div>
//           </motion.div>

//           <motion.div 
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             className="relative"
//           >
//             <div className="bg-orange-50 rounded-[3rem] p-8 md:p-12">
//               <h3 className="text-2xl font-black text-gray-800 mb-6">What's inside the kit?</h3>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 {kitItems.map((kit, index) => (
//                   <motion.div 
//                     key={index}
//                     whileHover={{ scale: 1.02 }}
//                     className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-orange-100"
//                   >
//                     <div className="text-orange-500">
//                       {kit.icon}
//                     </div>
//                     <span className="font-semibold text-gray-700">{kit.item}</span>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//             <div className="absolute -top-6 -right-6 w-24 h-24 bg-amber-400 rounded-full flex items-center justify-center text-white font-black text-center text-sm rotate-12 shadow-xl border-4 border-white">
//               ₹500 <br /> Only
//             </div>
//           </motion.div>
//         </div>

//         <motion.div 
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="bg-gray-900 rounded-[2.5rem] p-8 md:p-12 text-white overflow-hidden relative"
//         >
//           <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
//             <div className="max-w-xl">
//               <h2 className="text-3xl font-bold mb-4">Want to donate physical kits?</h2>
//               <p className="text-gray-400">
//                 If you have new or gently used school bags, books, or uniforms that you'd like to drop off 
//                 at our center in Jabalpur, we'd be happy to coordinate with you.
//               </p>
//             </div>
//             <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
//               <a 
//                 href="tel:+91 70917 67625" 
//                 className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-gray-900 rounded-2xl font-bold hover:bg-orange-50 transition-colors"
//               >
//                 <Phone size={20} />
//                 Call Coordinator
//               </a>
//               <button className="flex items-center justify-center gap-3 px-8 py-4 bg-white/10 border border-white/20 text-white rounded-2xl font-bold hover:bg-white/20 transition-colors">
//                 Drop-off Location - JEC Canteen Area
//               </button>
//             </div>
//           </div>
//           <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px]"></div>
//         </motion.div>

//         <div className="mt-16 text-center">
//           <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
//             <CheckCircle2 size={16} className="text-emerald-500" />
//             100% Transparency: You will receive photos of the distribution on your registered email.
//           </p>
//         </div>

//       </div>
//       <Footer/>
//     </div>
//   );
// };

// export default EducationalKitDonation;



















import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Pencil, GraduationCap, Backpack, Heart, Sparkles, CheckCircle2, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const EducationalKitDonation = () => {
  const kitItems = [
    { item: "School Bag", icon: <Backpack size={20} /> },
    { item: "Notebooks & Registers", icon: <BookOpen size={20} /> },
    { item: "Stationery Set", icon: <Pencil size={20} /> },
    { item: "Geometry Box", icon: <Sparkles size={20} /> },
    { item: "Reference Books", icon: <GraduationCap size={20} /> },
    { item: "Water Bottle & Lunchbox", icon: <CheckCircle2 size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-white pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 overflow-x-hidden font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- HERO SECTION --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center mb-12 sm:mb-16">
          
          {/* Left Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-orange-50 text-orange-600 font-bold tracking-widest uppercase text-xs sm:text-sm">
              Empower a Student
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-gray-900 mt-3 sm:mt-4 leading-tight tracking-tight">
              Sponsor an <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
                Educational Kit
              </span>
            </h1>
            <p className="text-gray-600 mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl">
              For many children, basic school supplies are a luxury they cannot afford. By donating a kit, 
              you aren't just giving them tools; you're giving them the confidence to dream big and stay in school.
            </p>
            
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link to="/donate" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-7 py-3.5 sm:py-4 bg-orange-500 text-white rounded-xl sm:rounded-2xl font-bold shadow-lg shadow-orange-500/20 hover:bg-orange-600 active:scale-95 transition-all flex items-center justify-center gap-2 text-sm sm:text-base">
                  <Heart size={18} fill="white" className="shrink-0" />
                  Sponsor a Kit Now
                </button>
              </Link>
              <button className="w-full sm:w-auto px-7 py-3.5 sm:py-4 border-2 border-gray-200 text-gray-700 rounded-xl sm:rounded-2xl font-bold hover:bg-gray-50 active:scale-95 transition-all text-sm sm:text-base">
                View Distribution Gallery
              </button>
            </div>
          </motion.div>

          {/* Right Kit Items Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mt-4 lg:mt-0"
          >
            <div className="bg-orange-50/80 rounded-2xl sm:rounded-3xl lg:rounded-[3rem] p-5 sm:p-8 md:p-10 border border-orange-100">
              <h3 className="text-lg sm:text-2xl font-black text-gray-800 mb-4 sm:mb-6">What's inside the kit?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5">
                {kitItems.map((kit, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-3 p-3 sm:p-3.5 bg-white rounded-xl sm:rounded-2xl shadow-sm border border-orange-100"
                  >
                    <div className="text-orange-500 shrink-0">
                      {kit.icon}
                    </div>
                    <span className="font-semibold text-gray-700 text-xs sm:text-sm">{kit.item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Price Badge */}
            <div className="absolute -top-3 -right-3 sm:-top-5 sm:-right-5 w-18 h-18 sm:w-22 sm:h-22 p-2 bg-amber-400 rounded-full flex items-center justify-center text-white font-black text-center text-xs sm:text-sm rotate-12 shadow-xl border-4 border-white">
              <span>₹500 <br /> Only</span>
            </div>
          </motion.div>
        </div>

        {/* --- PHYSICAL DONATION SECTION --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-900 rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem] p-6 sm:p-10 lg:p-12 text-white overflow-hidden relative shadow-2xl"
        >
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8">
            <div className="max-w-xl">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4 tracking-tight">Want to donate physical kits?</h2>
              <p className="text-gray-400 text-xs sm:text-sm lg:text-base leading-relaxed">
                If you have new or gently used school bags, books, or uniforms that you'd like to drop off 
                at our center in Jabalpur, we'd be happy to coordinate with you.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full lg:w-auto">
              <a 
                href="tel:+917091767625" 
                className="w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-gray-900 rounded-xl sm:rounded-2xl font-bold hover:bg-orange-50 active:scale-95 transition-all text-xs sm:text-sm shrink-0 shadow-md"
              >
                <Phone size={18} className="shrink-0 text-orange-600" />
                Call Coordinator
              </a>
              <div className="w-full sm:w-auto flex items-center justify-center text-center px-4 sm:px-6 py-3.5 sm:py-4 bg-white/10 border border-white/15 text-slate-200 rounded-xl sm:rounded-2xl font-medium text-xs sm:text-sm">
                Drop-off: JEC Canteen Area
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px] pointer-events-none"></div>
        </motion.div>

        {/* --- TRANSPARENCY NOTE --- */}
        <div className="mt-10 sm:mt-16 text-center px-2">
          <p className="text-gray-500 text-xs sm:text-sm inline-flex items-center justify-center gap-2 leading-relaxed">
            <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
            <span><strong>100% Transparency:</strong> You will receive photos of the distribution on your registered contact.</span>
          </p>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default EducationalKitDonation;