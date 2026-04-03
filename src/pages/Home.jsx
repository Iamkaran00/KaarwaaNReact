import React from "react";
import Hero from "../section/Hero";
import ZigZagCarousel from "../components/carousel";
import clothimg from '../asset/img2.jpg';
import plantingtree from '../asset/img7.jpg';
import jeclogo from '../asset/jeclogo.png'
import kevent from '../asset/kevent.jpg';
import bg from "../asset/bg1.jpg";
import teaching from "../asset/teachingpics.jpeg";
import grpimg from '../asset/img1.jpg'
import nukkad from '../asset/nukkad2oct24.jpg';
import { CheckCircle2 } from "lucide-react";  
import { Link } from "react-router-dom";
 import Footer from "../components/Footer";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Link as LinkIcon, 
  HeartHandshake, 
  Facebook, 
  Instagram, 
  Youtube 
} from 'lucide-react';
const EffortSection = ({ img, title, text, reverse, badge, buttonText }) => (
  <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 py-16 border-b border-gray-100 last:border-0`}>
    {/* Image Side */}
    <div className="w-full lg:w-1/2 group overflow-hidden rounded-3xl shadow-2xl relative">
      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-500 z-10"></div>
      <img 
        src={img} 
        alt={title} 
        className="w-full h-[400px] object-cover transform group-hover:scale-110 transition-transform duration-700" 
      />
    </div>

    {/* Text Side */}
    <div className="w-full lg:w-1/2 flex flex-col items-start space-y-6">
      <h3 className="text-3xl font-bold text-gray-900 border-l-4 border-emerald-600 pl-4">
        {title}
      </h3>
      <p className="text-lg text-gray-600 leading-relaxed text-justify">
        {text}
      </p>
      
      <div className="flex flex-wrap items-center gap-4 mt-2">
        {badge && (
          <span className="bg-emerald-100 text-emerald-800 px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider shadow-sm">
            {badge}
          </span>
        )}
        <button className="px-8 py-3 bg-gray-900 text-white rounded-full font-semibold hover:bg-emerald-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          {buttonText || "See More Pics"}
        </button>
      </div>
    </div>
  </div>
);

const Home = () => {
  
  const commonText = "We are a group of students committed to teaching and supporting underprivileged children, helping them prepare for Navodaya, Gyanodaya, and similar entrance exams. Our goal is simple: to make quality education accessible, build strong academic foundations, and give every child a fair chance to succeed through guidance, consistency, and care. From filling their entrance exam registration form to preparing them every single day and taking them to exam center we did it all the way so that they did not feel lack in any aspect.";

  return (
    <div className="w-full bg-white overflow-x-hidden font-sans">
      <Hero />

      {/* --- ABOUT SECTION (Parallax) --- */}
    <section className="relative py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
  
  {/* Decorative Background Blob (Lightweight) */}
  <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-emerald-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

  <div className="container mx-auto px-6 lg:px-12 relative z-10">
    <div className="flex flex-col lg:flex-row items-center gap-16">
      
      {/* 1. IMAGE SIDE (Visual Anchor) */}
      <div className="w-full lg:w-1/2 relative group">
        {/* Colored Backdrop Effect */}
        <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-600 to-amber-500 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition duration-500"></div>
        
       
        <img 
          src={grpimg} 
          alt="Kaarwaa.N Team" 
          className="relative w-full h-[500px] object-cover rounded-2xl shadow-2xl border border-gray-100 transform transition duration-700 hover:scale-[1.01]" 
        />
        
        {/* Floating Badge (Optional) */}
        <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 hidden md:block">
          <p className="text-emerald-800 font-bold text-lg">Since 2012</p>
          <p className="text-gray-500 text-xs">Serving Society</p>
        </div>
      </div>

      {/* 2. TEXT SIDE (Readable & Clean) */}
      <div className="w-full lg:w-1/2 space-y-8">
        <div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400">Kaarwaa.N...</span>
          </h2>
          <div className="h-1.5 w-24 bg-amber-500 mt-4 rounded-full"></div>
        </div>

        <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light">
          <p>
            <strong className="text-emerald-700 font-semibold">Kaarwaa.N...</strong> is a social welfare society of 
            <span className="text-gray-900 font-medium"> Jabalpur Engineering College</span> established in 2012. 
            We are dedicated to uplifting underprivileged children and spreading social awareness through action.
          </p>

          <p>
            Our core mission is education. We relentlessly work to provide resources and coaching for children aspiring to crack 
            <span className="text-amber-600 font-bold"> JNV and Gyanodaya</span> entrance exams, bridging the gap between talent and opportunity.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {[
              { label: "Nukkad Natak", color: "text-amber-600" },
              { label: "Tree Plantation", color: "text-green-600" },
              { label: "Blood Donation", color: "text-red-600" },
              { label: "Cloth Drives", color: "text-purple-600" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className={`w-2 h-2 rounded-full ${item.color.replace('text', 'bg')}`}></div>
                <span className={`font-bold ${item.color}`}>{item.label}</span>
              </div>
            ))}
          </div>

          <p className="text-sm text-gray-400 italic pt-4 border-t border-gray-100">
            "Regular visits to orphanages, celebrating Holi, Christmas, and Republic Day—we strive to put a smile on every face."
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* --- OUR EFFORTS TITLE --- */}
      <div className="py-16 text-center bg-gray-50">
        <p className="text-sm font-bold text-emerald-600 uppercase tracking-[0.2em] mb-2">What We Do</p>
        <h2 className="text-5xl font-black text-gray-900">Our Efforts</h2>
        <div className="w-20 h-1.5 bg-emerald-500 mx-auto mt-6 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-20">
        
        {/* 1. Teaching */}
        <EffortSection 
          img={teaching}
          title="Education & Teaching"
          text={commonText}
          reverse={false}
          badge="1500+ Students Taught"
          buttonText="lightning the future"
        />

        {/* 2. Cloth Donation */}
        <EffortSection 
          img={clothimg}
          title="Cloth Donation Drives"
          text={commonText}
          reverse={true}
          buttonText="Warming Society"
        />

        {/* 3. Plantation */}
        <EffortSection 
          img={plantingtree}
          title="Tree Plantation"
          text={commonText}
          reverse={false}
          buttonText="Green Initiatives"
        />

        {/* 4. Events */}
        <EffortSection 
          img={kevent}
          title="Social Events & Celebrations"
          text={commonText}
          reverse={true}
          buttonText="View Event Gallery"
        />
      </div>

      {/* --- RECENT ACTIVITY --- */}
      <div className="w-full bg-gray-900 text-white py-24 relative overflow-hidden">
        {/* Background decorative blob */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-600 rounded-full blur-[120px] opacity-20"></div>

        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">Recent Activity</h2>
          <div className="flex items-center gap-4 mb-12">
             <span className="w-12 h-1 bg-amber-500"></span>
             <p className="text-2xl text-amber-500 font-mono">2 October 2024</p>
             <span className="w-12 h-1 bg-amber-500"></span>
          </div>

          <div className="relative group w-full max-w-4xl">
             <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500 to-amber-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
             <img
              src={nukkad}
              alt="Nukkad Natak"
              className="relative w-full rounded-xl shadow-2xl border border-gray-700"
            />
          </div>
        </div>
      </div>

      {/* --- MENTORS --- */}
      <div className="py-24 bg-white flex flex-col items-center overflow-hidden">
        <h2 className="text-5xl font-bold text-amber-800 mb-16 text-center">Our Mentors</h2>
        <div className="w-full">
           <ZigZagCarousel />
        </div>
      </div>

      <div>
        <section class="max-w-6xl mx-auto px-4 py-20 font-sans">
        <div class="flex flex-col md:flex-row bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            
            <div class="w-full md:w-7/12 p-10 md:p-16 flex flex-col justify-center">
                <span class="text-orange-600 font-bold tracking-widest text-xs uppercase mb-4">Support Our Cause</span>
                
                <h2 class="text-4xl font-extrabold text-gray-900 mb-6">
                    Your Donation will help.
                </h2>
                
                <p class="text-gray-600 text-lg mb-8 leading-relaxed">
                    <span class="font-bold text-emerald-700">Kaarwaa.N...</span> relies only on donations. 
                    Every penny is spent directly on child education and awareness programmes.
                    You can donate to various causes:
                </p>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 font-semibold text-gray-700">
                    <div class="flex items-center gap-3">
                        <span class="w-2 h-2 bg-emerald-500 rounded-full"></span> Child Education
                    </div>
                    <div class="flex items-center gap-3">
                        <span class="w-2 h-2 bg-emerald-500 rounded-full"></span> Cloth Distribution
                    </div>
                    <div class="flex items-center gap-3">
                        <span class="w-2 h-2 bg-emerald-500 rounded-full"></span> Tree Plantation
                    </div>
                    <div class="flex items-center gap-3">
                        <span class="w-2 h-2 bg-emerald-500 rounded-full"></span> Education Kit
                    </div>
                </div>
         <Link to = '/donate' >
                <button class="w-fit bg-emerald-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-800 transition shadow-lg">
                    Donate Now!
                </button>
                </Link>
            </div>

            <div class="w-full md:w-5/12 bg-emerald-900 text-white p-12 flex flex-col items-center justify-center text-center relative">
                
                <div class="bg-white/10 p-6 rounded-full mb-6 border border-white/20">
                     <img src= {jeclogo} alt="College Logo" class="w-32 h-32 object-contain drop-shadow-md"/>
                </div>

                <h3 class="font-serif text-3xl font-bold text-amber-400 mb-2 tracking-wide font-['Cinzel']">
                    Kaarwaa.N...
                </h3>
                
                <div class="w-12 h-1 bg-white/30 rounded-full my-4"></div>

                <p class="text-emerald-100 uppercase tracking-widest text-xs font-bold mb-1">
                    The Social & Welfare Society of
                </p>
                <p class="text-xl font-semibold">
                    Jabalpur Engineering College
                </p>
            </div>

        </div>
    </section>
      </div>













<Footer/>

    </div>
  );
};

export default Home;