import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Compass, Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 relative overflow-hidden">
      
      {/* Background Decorative Blur Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-rose-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000 pointer-events-none"></div>

      <div className="max-w-2xl w-full text-center relative z-10">
        
        {/* Animated Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
          className="mx-auto w-32 h-32 bg-white rounded-[2.5rem] shadow-xl shadow-orange-500/10 flex items-center justify-center mb-8 border border-slate-100"
        >
          <Compass className="w-16 h-16 text-orange-500" strokeWidth={1.5} />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-7xl md:text-9xl font-black text-slate-900 mb-4 tracking-tighter">
            4<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500">0</span>4
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            Oops! You've wandered off the path.
          </h2>
          <p className="text-lg text-slate-600 mb-10 max-w-lg mx-auto leading-relaxed">
            The page you are looking for might have been moved, deleted, or perhaps it never existed. Let's get you back to the journey.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/">
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-rose-500 text-white rounded-full font-bold shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-1 transition-all duration-300">
                <Home size={20} />
                Back to Home
              </button>
            </Link>
            
            <button 
              onClick={() => window.history.back()}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-bold shadow-sm hover:bg-slate-50 hover:-translate-y-1 transition-all duration-300"
            >
              <ArrowLeft size={20} />
              Go Back
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;