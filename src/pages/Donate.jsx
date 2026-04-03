import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Mail, ShieldCheck, Copy, Heart, Info } from 'lucide-react';
import Footer from '../components/Footer';

const DonateFinancial = () => {
 
  const upiNumber = "+91 91497 20731"; 
  const upiId = "charity@upi";

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-12 px-6">
      <div className="max-w-4xl mx-auto">
        
         
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase">
            Make a Difference
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mt-4 mb-6">
            Your Contribution <span className="text-orange-500 underline decoration-amber-300">Powers Change</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Every rupee you donate goes directly towards child education, plantation drives, and supporting those in need.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="md:col-span-3 bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-orange-500 rounded-2xl text-white">
                <Phone size={24} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-800">Direct UPI Payment</h2>
                <p className="text-sm text-gray-400">Scan or use the number below</p>
              </div>
            </div>

            {/* UPI Details Box */}
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-2xl border border-dashed border-gray-200 flex items-center justify-between group">
                <div>
                  <p className="text-[10px] uppercase font-bold text-gray-400 mb-1">UPI Phone Number</p>
                  <p className="text-lg font-mono font-bold text-gray-700">{upiNumber}</p>
                </div>
                <button 
                  onClick={() => copyToClipboard(upiNumber)}
                  className="p-2 hover:bg-white rounded-lg transition-colors text-gray-400 hover:text-orange-500 shadow-sm"
                >
                  <Copy size={18} />
                </button>
              </div>

              <div className="p-4 bg-gray-50 rounded-2xl border border-dashed border-gray-200 flex items-center justify-between group">
                <div>
                  <p className="text-[10px] uppercase font-bold text-gray-400 mb-1">UPI ID</p>
                  <p className="text-lg font-mono font-bold text-gray-700">{upiId}</p>
                </div>
                <button 
                   onClick={() => copyToClipboard(upiId)}
                   className="p-2 hover:bg-white rounded-lg transition-colors text-gray-400 hover:text-orange-500 shadow-sm"
                >
                  <Copy size={18} />
                </button>
              </div>
            </div>

            <div className="mt-8 p-4 bg-emerald-50 rounded-2xl flex items-start gap-3">
              <ShieldCheck className="text-emerald-600 mt-1" size={20} />
              <p className="text-sm text-emerald-800">
                All transactions are secure. We prioritize transparency and will provide receipts upon request.
              </p>
            </div>
          </motion.div>

          {/* Help & Support Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 space-y-6"
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="relative z-10">
                <div className="bg-white/10 w-fit p-3 rounded-2xl mb-4">
                  <Info className="text-orange-400" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Need Help?</h3>
                <p className="text-gray-400 text-sm mb-6">
                  If you face any issues while donating or need a receipt for your contribution, contact us.
                </p>
                
                <div className="space-y-4">
                  <a href="tel:+91XXXXXXXXXX" className="flex items-center gap-3 text-sm hover:text-orange-400 transition-colors">
                    <Phone size={16} /> +91 7091767625
                  </a>
                  <a href="https://wa.me/917091767625" className="flex items-center gap-3 text-sm hover:text-emerald-400 transition-colors">
                    <MessageCircle size={16} /> WhatsApp Support
                  </a>
                  <a href="mailto:support@kaarwaan.org" className="flex items-center gap-3 text-sm hover:text-orange-400 transition-colors">
                    <Mail size={16} /> kaarwaanjec@gmail.com
                  </a>
                </div>
              </div>
              
              {/* Decorative Circle */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl"></div>
            </div>

            {/* Impact Note */}
            <div className="bg-orange-50 rounded-3xl p-6 border border-orange-100">
               <div className="flex items-center gap-2 mb-2 text-orange-600">
                 <Heart size={18} className="fill-orange-600" />
                 <span className="font-bold">Your Impact</span>
               </div>
               <p className="text-xs text-orange-800 leading-relaxed">
                 "Kaarwaa.N... has served Jabalpur since 2012. Your trust is our greatest asset."
               </p>
            </div>
          </motion.div>

        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default DonateFinancial;