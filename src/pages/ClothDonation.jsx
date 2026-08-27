// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronLeft, ChevronRight, Heart, MapPin, Map } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import img1 from '../asset/img2.jpg'
// import img2 from '../asset/img3.jpg'
// import img3 from '../asset/img5.jpg';
// import img4 from '../asset/img6.jpg';
// import img5 from '../assets/cloth1.jpg';
// import img6 from '../assets/cloth2.jpg';
// import img7 from '../assets/cloth3.jpg';
// import img8 from '../assets/cloth4.jpg';
// import img9 from '../assets/cloth5.jpg';
// import img10 from '../assets/cloth6.jpg';
// import img11 from '../assets/cloth7.jpg';
// import img12 from '../assets/cloth8.jpg';
// import img13 from '../assets/cloth9.jpg';
// import Footer from '../components/Footer';
// const carouselImages = [
//   img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13
// ];

// const distributionLocations = [
//   {
//     id: 1,
//     title: "Gwarighat",
//     description: "Distributing warm blankets to those residing near the Narmada riverbanks.",
//     image: img9
//   },
//   {
//     id: 2,
//     title: "Railway Station",
//     description: "Reaching out to stranded travelers and the homeless seeking shelter.",
//     image: img5
//   },
//   {
//     id: 3,
//     title: "High Court Area",
//     description: "Providing essential clothing to daily wage workers in the vicinity.",
//     image: img8
//   },
//   {
//     id: 4,
//     title: "Local Shelters & Streets",
//     description: "Night drives across various under-resourced neighborhoods to provide warmth.",
//     image:  img12
//   }
// ];

// export default function ClothDistribution() {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   // Auto-advance carousel
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   const nextSlide = () => {
//     setCurrentSlide(currentSlide === carouselImages.length - 1 ? 0 : currentSlide + 1);
//   };

//   const prevSlide = () => {
//     setCurrentSlide(currentSlide === 0 ? carouselImages.length - 1 : currentSlide - 1);
//   };

//   return (
//     <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
//       {/* --- HERO CAROUSEL SECTION --- */}
//       <section className="relative w-full h-[80vh] overflow-hidden bg-sky-100">
//         <AnimatePresence mode="wait">
//           <motion.img
//             key={currentSlide}
//             src={carouselImages[currentSlide]}
//             initial={{ opacity: 0, scale: 1.05 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.8, ease: "easeInOut" }}
//             className="absolute inset-0 w-full h-full object-cover"
//             alt={`Cloth Distribution Slide ${currentSlide + 1}`}
//           />
//         </AnimatePresence>

//         <div className="absolute inset-0 bg-gradient-to-t from-sky-900/60 via-sky-800/30 to-transparent" />

        

//         <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/30 hover:bg-white/50 backdrop-blur-md rounded-full text-white transition-all">
//           <ChevronLeft className="w-6 h-6" />
//         </button>
//         <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/30 hover:bg-white/50 backdrop-blur-md rounded-full text-white transition-all">
//           <ChevronRight className="w-6 h-6" />
//         </button>
//       </section>

//       {/* --- INSPIRATIONAL MESSAGE SECTION --- */}
//       <section className="max-w-4xl mx-auto px-6 py-20 text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="text-3xl font-bold text-sky-800 mb-6">The Power of a Simple Thread</h2>
//           <div className="w-24 h-1 bg-teal-300 mx-auto mb-8 rounded-full"></div>
//           <p className="text-lg text-slate-600 leading-relaxed">
//             Clothing is more than just fabric; it's dignity, protection, and comfort. 
//             Through our distribution drives across the city, we aim to ensure that no one has to brave the harsh 
//             winters or blazing summers without proper attire. By passing on clothes you no longer wear, 
//             you are wrapping someone else in kindness and hope.
//           </p>
//         </motion.div>
//       </section>

//       {/* --- LOCATION-BASED IMAGE GALLERY SECTION --- */}
//       <section className="bg-teal-50 py-20">
//         <div className="max-w-6xl mx-auto px-6">
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-3xl font-bold text-teal-800 mb-4">Our Drive Locations</h2>
//             <p className="text-teal-600">Reaching out to those who need it most, across the city.</p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
//             {distributionLocations.map((location, index) => (
//               <motion.div
//                 key={location.id}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: index * 0.2 }}
//                 className="group flex flex-col bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
//               >
//                 <div className="relative h-64 overflow-hidden">
//                   <img src={location.image} alt={location.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
//                   <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 shadow-sm text-teal-800 font-semibold text-sm">
//                     <MapPin className="w-4 h-4 text-teal-500" />
//                     {location.title}
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold text-slate-800 mb-2">{location.title}</h3>
//                   <p className="text-slate-600">{location.description}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- JEC COLLEGE MAP SECTION --- */}
//       <section className="bg-white py-20 border-t border-slate-100">
//         <div className="max-w-5xl mx-auto px-6">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-12"
//           >
//             <div className="flex justify-center items-center gap-3 mb-4">
//               <Map className="w-8 h-8 text-sky-600" />
//               <h2 className="text-3xl font-bold text-sky-800">Our Current Base</h2>
//             </div>
//             <p className="text-slate-600 max-w-2xl mx-auto">
//               We are currently organizing our collection and distribution efforts from Jabalpur Engineering College (JEC). Drop by to donate or volunteer!
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2, duration: 0.6 }}
//             className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg border border-slate-200"
//           >
//             <iframe
//               title="JEC College Location Map"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.6836750796347!2d79.98447107590895!3d23.181734979062365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981a8daaaaaaaab%3A0x7d0ff70fceb7d30!2sJabalpur%20Engineering%20College!5e0!3m2!1sen!2sin!4v1714000000000!5m2!1sen!2sin"
//               width="100%"
//               height="100%"
//               style={{ border: 0 }}
//               allowFullScreen=""
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             ></iframe>
//           </motion.div>
//         </div>
//       </section>

//       {/* --- SOOTHING FOOTER/CTA --- */}
//       <section className="bg-slate-50 py-16 text-center border-t border-slate-200">
//         <motion.div
//           initial={{ scale: 0.9, opacity: 0 }}
//           whileInView={{ scale: 1, opacity: 1 }}
//           viewport={{ once: true }}
//           className="max-w-2xl mx-auto px-6"
//         >
//           <h3 className="text-2xl font-semibold text-slate-800 mb-4">Have clothes to spare?</h3>
//           <p className="text-slate-500 mb-8">Drop them off at JEC or schedule a pickup.</p>
//           <Link to = '/donate' >
//         <button className="bg-teal-500 hover:bg-teal-400 text-white px-8 py-3 rounded-full font-medium transition-colors shadow-md">
//             Join the Next Drive
//           </button>
//           </Link>
//         </motion.div>
//       </section>
// <Footer/>
//     </div>
//   );
// }







import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, MapPin, Map } from 'lucide-react';
import { Link } from 'react-router-dom';
import img1 from '../asset/img2.jpg';
import img2 from '../asset/img3.jpg';
import img3 from '../asset/img5.jpg';
import img4 from '../asset/img6.jpg';
import img5 from '../assets/cloth1.jpg';
import img6 from '../assets/cloth2.jpg';
import img7 from '../assets/cloth3.jpg';
import img8 from '../assets/cloth4.jpg';
import img9 from '../assets/cloth5.jpg';
import img10 from '../assets/cloth6.jpg';
import img11 from '../assets/cloth7.jpg';
import img12 from '../assets/cloth8.jpg';
import img13 from '../assets/cloth9.jpg';
import Footer from '../components/Footer';

const carouselImages = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13
];

const distributionLocations = [
  {
    id: 1,
    title: "Gwarighat",
    description: "Distributing warm blankets to those residing near the Narmada riverbanks.",
    image: img9
  },
  {
    id: 2,
    title: "Railway Station",
    description: "Reaching out to stranded travelers and the homeless seeking shelter.",
    image: img5
  },
  {
    id: 3,
    title: "High Court Area",
    description: "Providing essential clothing to daily wage workers in the vicinity.",
    image: img8
  },
  {
    id: 4,
    title: "Local Shelters & Streets",
    description: "Night drives across various under-resourced neighborhoods to provide warmth.",
    image: img12
  }
];

export default function ClothDistribution() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === carouselImages.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? carouselImages.length - 1 : currentSlide - 1);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 overflow-x-hidden">
      
      {/* --- HERO CAROUSEL SECTION --- */}
      <section className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] overflow-hidden bg-sky-100">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentSlide}
            src={carouselImages[currentSlide]}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
            alt={`Cloth Distribution Slide ${currentSlide + 1}`}
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-t from-sky-950/70 via-sky-900/30 to-transparent" />

        {/* Navigation Buttons */}
        <button 
          onClick={prevSlide} 
          aria-label="Previous Slide"
          className="absolute left-2.5 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 bg-white/30 hover:bg-white/50 backdrop-blur-md rounded-full text-white transition-all shadow-md active:scale-95"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <button 
          onClick={nextSlide} 
          aria-label="Next Slide"
          className="absolute right-2.5 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 bg-white/30 hover:bg-white/50 backdrop-blur-md rounded-full text-white transition-all shadow-md active:scale-95"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-full bg-black/20 backdrop-blur-sm">
          {carouselImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentSlide === idx ? "w-6 bg-teal-400" : "w-1.5 bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* --- INSPIRATIONAL MESSAGE SECTION --- */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-sky-800 mb-3 sm:mb-4 tracking-tight">
            The Power of a Simple Thread
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-teal-400 mx-auto mb-6 sm:mb-8 rounded-full"></div>
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Clothing is more than just fabric; it's dignity, protection, and comfort. 
            Through our distribution drives across the city, we aim to ensure that no one has to brave the harsh 
            winters or blazing summers without proper attire. By passing on clothes you no longer wear, 
            you are wrapping someone else in kindness and hope.
          </p>
        </motion.div>
      </section>

      {/* --- LOCATION-BASED IMAGE GALLERY SECTION --- */}
      <section className="bg-teal-50/70 py-12 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-14"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-900 mb-2 sm:mb-3">
              Our Drive Locations
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-teal-700">
              Reaching out to those who need it most, across the city.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
            {distributionLocations.map((location, index) => (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group flex flex-col bg-white rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-teal-100/50"
              >
                <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                  <img 
                    src={location.image} 
                    alt={location.title} 
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                  />
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-white/95 backdrop-blur-md px-3 sm:px-4 py-1.5 rounded-full flex items-center gap-1.5 sm:gap-2 shadow-sm text-teal-800 font-semibold text-xs sm:text-sm">
                    <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-600 shrink-0" />
                    <span>{location.title}</span>
                  </div>
                </div>
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-1.5 sm:mb-2">
                      {location.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {location.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- JEC COLLEGE MAP SECTION --- */}
      <section className="bg-white py-12 sm:py-16 lg:py-20 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <div className="flex justify-center items-center gap-2 sm:gap-3 mb-3">
              <Map className="w-6 h-6 sm:w-8 sm:h-8 text-sky-600 shrink-0" />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-sky-800">
                Our Current Base
              </h2>
            </div>
            <p className="text-xs sm:text-sm lg:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              We are currently organizing our collection and distribution efforts from Jabalpur Engineering College (JEC). Drop by to donate or volunteer!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="w-full h-[280px] sm:h-[350px] lg:h-[420px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-md sm:shadow-lg border border-slate-200"
          >
            <iframe
              title="JEC College Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.6836750796347!2d79.98447107590895!3d23.181734979062365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981a8daaaaaaaab%3A0x7d0ff70fceb7d30!2sJabalpur%20Engineering%20College!5e0!3m2!1sen!2sin!4v1714000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* --- SOOTHING FOOTER/CTA --- */}
      <section className="bg-slate-50 py-12 sm:py-16 text-center border-t border-slate-200">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto px-4 sm:px-6"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-slate-800 mb-2 sm:mb-3">
            Have clothes to spare?
          </h3>
          <p className="text-xs sm:text-sm lg:text-base text-slate-500 mb-6 sm:mb-8">
            Drop them off at JEC or schedule a pickup.
          </p>
          <Link to="/donate">
            <button className="w-full sm:w-auto bg-teal-500 hover:bg-teal-600 active:bg-teal-700 text-white px-7 py-3 rounded-full font-medium transition-all duration-300 shadow-md shadow-teal-500/20 text-sm sm:text-base">
              Join the Next Drive
            </button>
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}