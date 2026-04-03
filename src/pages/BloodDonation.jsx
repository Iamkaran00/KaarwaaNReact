import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Heart, Phone, MapPin, Clock } from 'lucide-react';
import b1 from '../asset/blood1.jpeg';
import b2 from '../asset/blood2.jpeg';
import b3 from '../asset/blood3.jpeg';
import b4 from '../asset/blood4.jpeg'
import Footer from '../components/Footer'
const BloodDonation = () => {
  // Curated high-quality placeholder images for the visual section
  const images = [
b1,b2,b3,b4
  ];

  return (
    <div className="min-h-screen bg-white pt-28 pb-16 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* --- HERO SECTION --- */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20 items-center">
          
          {/* Left Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 text-red-600 font-bold tracking-widest uppercase text-sm mb-4">
              <Activity size={18} />
              Emergency Response
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight">
              Be the <span className="text-red-600">Reason</span> <br />
              Someone Smiles.
            </h1>
            <p className="text-gray-600 mt-6 text-lg leading-relaxed max-w-lg">
              Kaarwaa.N connects voluntary blood donors with patients in Jabalpur. 
              One unit of your blood can save up to three lives. Join our life-saving network today.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-red-600 text-white rounded-2xl font-bold shadow-lg shadow-red-200 hover:bg-red-700 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-1">
                <Heart size={20} fill="white" />
                Contact As Donor
              </button>
            </div>
          </motion.div>

          {/* Right 4-Image Grid Layout */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Decorative Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-red-100/50 rounded-full blur-3xl -z-10"></div>
            
            <div className="grid grid-cols-2 gap-4 md:gap-6 items-center">
              {/* Left Column (Shifted up slightly) */}
              <div className="flex flex-col gap-4 md:gap-6">
                <motion.img 
                  whileHover={{ scale: 1.03 }}
                  src={images[0]} 
                  alt="Medical care" 
                  className="w-full h-40 md:h-56 object-cover rounded-[2rem] shadow-lg border-4 border-white"
                />
                <motion.img 
                  whileHover={{ scale: 1.03 }}
                  src={images[1]} 
                  alt="Healthcare support" 
                  className="w-full h-48 md:h-64 object-cover rounded-[2rem] shadow-lg border-4 border-white"
                />
              </div>
              
              {/* Right Column (Shifted down for a masonry feel) */}
              <div className="flex flex-col gap-4 md:gap-6 mt-16 md:mt-20">
                <motion.img 
                  whileHover={{ scale: 1.03 }}
                  src={images[2]} 
                  alt="Community unity" 
                  className="w-full h-48 md:h-64 object-cover rounded-[2rem] shadow-lg border-4 border-white"
                />
                <motion.img 
                  whileHover={{ scale: 1.03 }}
                  src={images[3]} 
                  alt="Medical staff" 
                  className="w-full h-40 md:h-56 object-cover rounded-[2rem] shadow-lg border-4 border-white"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* --- INFO CARDS --- */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <motion.div whileHover={{ y: -5 }} className="p-8 bg-gray-50 rounded-3xl border border-gray-100 shadow-sm">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-red-600 mb-6">
              <Clock size={24} />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">Quick Process</h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              Donation takes less than 15 minutes. Our team ensures a safe and comfortable experience.
            </p>
          </motion.div>
          
          <motion.div whileHover={{ y: -5 }} className="p-8 bg-gray-50 rounded-3xl border border-gray-100 shadow-sm">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-red-600 mb-6">
              <MapPin size={24} />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">Local Network</h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              Serving major hospitals across Jabalpur including Medical College and private centers.
            </p>
          </motion.div>
          
          <motion.div whileHover={{ y: -5 }} className="p-8 bg-red-600 rounded-3xl text-white shadow-lg shadow-red-600/20">
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
              <Phone size={24} />
            </div>
            <h4 className="text-xl font-bold mb-2">Emergency?</h4>
            <p className="text-sm text-red-100 mb-6">
              Contact our 24/7 blood coordinator for immediate requirements.
            </p>
            <a 
              href="tel:+91 91497 20731" 
              className="inline-block w-full py-3 bg-white text-red-600 text-center rounded-xl font-bold hover:bg-red-50 transition-colors"
            >
              Call Coordinator
            </a>
          </motion.div>
        </div>
  

      </div>
      <Footer/>
    </div>
  );
};

export default BloodDonation;