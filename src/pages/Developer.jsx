import React from 'react';

export default function DeveloperCredits() {
  return (
    <section className="bg-slate-900 py-12 px-4 sm:px-6 lg:px-8 rounded-2xl mx-auto max-w-5xl my-8 shadow-xl relative top-20">
      <div className="text-center">
        
        <div className="mb-6">
          <img 
            src="/img/mbr2023_27/KaranSahu.jpg" 
            alt="Developer Profile" 
            className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded object-cover border-4 border-slate-800 shadow-lg bg-slate-800"
          />
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-white tracking-tight sm:text-3xl">
          Built with ♥️ for Kaarwaa.N...
        </h2>
        
        {/* Core Message */}
        <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          This website was built entirely voluntarily and at no cost. If anyone has suggestions, feedback, or wants to contribute to the codebase, you are more than welcome to join us!
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="mailto:sahukaran@gmail.com" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
            </svg>
            Send a Suggestion
          </a>
          
          <a 
            href="https://github.com/iamkaran00" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 border border-slate-700 text-base font-medium rounded-lg text-slate-200 bg-slate-800 hover:bg-slate-700 hover:border-slate-600 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"></path>
            </svg>
            Contribute Code
          </a>
        </div>
      </div>
    </section>
  );
}