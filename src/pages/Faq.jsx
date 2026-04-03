import { useState } from 'react';

const faqs = [
  {
    question: "How can Kaarwaa.N provide me a platform for social service?",
    answer: "Kaarwaa.N tries to prepare students for Navodaya/gyanodaya exam and organize various events. You can join with us to make a better society."
  },
  {
    question: "How can Kaarwaa.N help me to enhance my personality?",
    answer: "The yearlong schedule of Karwaa.N provides various exciting experiences and opportunities. The experiences of teaching students, nukkad natak, plantation and other big events overall helps a student to improve their leadership, interpersonal, communication and planning skills. So it can really be helpful for any student."
  },
  {
    question: "Will Kaarwaa.N affect my studies?",
    answer: "No, not at all this is only a myth in contrast meaning of our Alumini who joined Karwaa.N are today at very good positions. Believe me Karwaa.N will never affect your studies, on the other hand it will groom you and will make you a better personality."
  },
  {
    question: "What are the recent success of Kaarwaa.N?",
    answer: "Karwaa.N had set Many milestone in its short lifespan. We had established a Karwaa.N park in the college itself and have also given results in the Navodaya/gyanodaya examination."
  },
  {
    question: "Is there any annual fees/registration fees for becoming member of Kaarwaa.N?",
    answer: "Karwaa.N is a non proffitable organization and there is no fees for becoming a member of Kaarwaa.N."
  },
  {
    question: "What are the big events conducted by Kaarwaa.N?",
    answer: "Karwaa.N organizes various events such as plantation, cleanliness drive, nukad-natak clothe distribution, orphanage visit and overall year-long student program for preparation of 'Navodaya' examination."
  }
];

const FAQItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="w-full py-5 flex justify-between items-center text-left focus:outline-none transition-colors hover:text-blue-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-gray-900">{faq.question}</span>
        <span className="ml-6 flex-shrink-0">
          {isOpen ? (
            <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
            </svg>
          ) : (
            <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          )}
        </span>
      </button>
      
      {/* Smooth transition for the content dropdown */}
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-base text-gray-600 pr-12 leading-relaxed">
          {faq.answer}
        </p>
      </div>
    </div>
  );
};

export default function FAQComponent() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Everything you need to know about joining and volunteering with Kaarwaa.N
          </p>
        </div>
        
        <div className="bg-white shadow-md rounded-2xl border border-gray-100 px-6 py-2">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}