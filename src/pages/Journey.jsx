 import React from 'react';
import { BookOpen, Heart, Sprout, Users, MapPin, Gift } from 'lucide-react';
import Footer from '../components/Footer';
import team from '../asset/team.jpg'
const AboutKaarwaan = () => {
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-800">
      
      {/* --- HERO SECTION --- */}
      <section className="relative bg-emerald-900 text-white py-20 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-orange-400 font-bold tracking-widest uppercase mb-4 text-sm">
            Est. 2012 • JEC Jabalpur
          </h2>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            KAARWAA.N...
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed opacity-90">
            "A journey towards social reform."
          </p>
          <div className="mt-8 w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </div>
      </section>

      <section className="py-20 container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Side */}
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-100 rounded-full z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-emerald-100 rounded-full z-0"></div>
              <img 
                src={team} 
                alt="Students learning" 
                className="relative z-10 rounded-2xl shadow-xl w-full object-cover h-[400px]"
              />
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full md:w-1/2 space-y-6">
            <h3 className="text-3xl font-bold text-emerald-900">
              Why We Give Back
            </h3>
            <p className="text-slate-600 leading-relaxed text-lg">
              Every person dreams of becoming their best self. But as youth, we realize that our ambition is hollow if it doesn't lift others up. 
            </p>
            <blockquote className="border-l-4 border-orange-500 pl-4 italic text-slate-700 font-medium my-4">
              "What good is the glory of life if not used for the upliftment of others?"
            </blockquote>
            <p className="text-slate-600 leading-relaxed">
              We believe that our ambitious lives aren't worth it if we do not give back to those who cannot afford a decent life. This philosophy birthed our initiative to create a future that caters not just to our desires, but to the needs of society.
            </p>
          </div>
        </div>
      </section>

      {/* --- CORE MISSION --- */}
      <section className="bg-white py-16 shadow-inner">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <span className="bg-emerald-100 text-emerald-800 px-4 py-1 rounded-full text-sm font-semibold">
              Our Core Mission
            </span>
            <h3 className="text-3xl font-bold mt-4 mb-8 text-slate-800">
              Educating the Future
            </h3>
            <p className="text-slate-600 mb-10 text-lg">
              The primary aim of Kaarwaa.N is to educate underprivileged students and prepare them for competitive entrance exams, opening doors to quality education at institutions like:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                "Jawahar Navodaya Vidyalaya",
                "Gyanodaya Vidyalaya",
                "Shramodaya Vidyalaya"
              ].map((school, index) => (
                <div key={index} className="bg-slate-50 border border-slate-200 p-6 rounded-xl hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                    {index + 1}
                  </div>
                  <h4 className="font-bold text-slate-700">{school}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- IMPACT AREAS (Grid) --- */}
      <section className="py-20 container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-slate-900">Spreading Smiles Beyond Books</h3>
          <p className="text-slate-500 mt-2">Our social reform extends to six key domains.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-emerald-500 group">
            <Sprout className="w-10 h-10 text-emerald-500 mb-4 group-hover:scale-110 transition-transform" />
            <h4 className="text-xl font-bold mb-2">Plantation Drives</h4>
            <p className="text-slate-600 text-sm">Changing the world starts with saving the planet. We actively organize tree plantation drives to create a greener future.</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-orange-500 group">
            <Users className="w-10 h-10 text-orange-500 mb-4 group-hover:scale-110 transition-transform" />
            <h4 className="text-xl font-bold mb-2">Orphanage Visits</h4>
            <p className="text-slate-600 text-sm">Making children feel loved and valued. We spend quality time spreading joy to those who need it most.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-emerald-500 group">
            <BookOpen className="w-10 h-10 text-emerald-500 mb-4 group-hover:scale-110 transition-transform" />
            <h4 className="text-xl font-bold mb-2">Teaching Kids</h4>
            <p className="text-slate-600 text-sm">Beyond exam prep, we provide basic education to poor children to pave the way for better standards of living.</p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-orange-500 group">
            <Gift className="w-10 h-10 text-orange-500 mb-4 group-hover:scale-110 transition-transform" />
            <h4 className="text-xl font-bold mb-2">Cloth Distribution</h4>
            <p className="text-slate-600 text-sm">Providing essentials to the needy, ensuring dignity and comfort for the underprivileged sections of society.</p>
          </div>

          {/* Card 5 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-emerald-500 group">
            <Heart className="w-10 h-10 text-emerald-500 mb-4 group-hover:scale-110 transition-transform" />
            <h4 className="text-xl font-bold mb-2">Awareness Programs</h4>
            <p className="text-slate-600 text-sm">Raising informed individuals by spreading awareness about critical social and environmental domains.</p>
          </div>

          {/* Card 6 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-orange-500 group">
            <MapPin className="w-10 h-10 text-orange-500 mb-4 group-hover:scale-110 transition-transform" />
            <h4 className="text-xl font-bold mb-2">Study Material</h4>
            <p className="text-slate-600 text-sm">Donating books and stationery to ensure that a lack of resources never stops a child from learning.</p>
          </div>
        </div>
      </section>

      {/* --- CTA / FOOTER SNIPPET --- */}
      <section className=" text-green-500 py-16 text-center ">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Be Part of the Kaarwaa.N...</h2>
          <p className="max-w-2xl mx-auto text-orange-500 mb-8">
            Changing the world starts with raising informed individuals. Join us in this journey of spreading smiles and creating futures.
          </p>
          <Link to = '/donate' >
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-colors">
            Get Involved
          </button>
          </Link>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default AboutKaarwaan;