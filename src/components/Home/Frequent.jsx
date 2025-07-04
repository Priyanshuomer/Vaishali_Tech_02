import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  "How does it work?",
  "Which plan should I choose?",
  "What markets are supported?",
  "Does it work on MetaTrader 4/5?",
  "Can I win every trade using this?",
  "How do discounts work?",
  "Is this friendly for beginners?",
  "Can I change my plan anytime?",
];

const Frequent = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#040A1C] text-white pt-6 pb-20 px-4 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
        Frequent <span className="text-cyan-400">questions</span>
      </h2>

      <div className="w-full max-w-[1013px] flex flex-col items-center space-y-4">
        {faqs.map((question, index) => (
          <div
            key={index}
            className="w-full rounded-xl overflow-hidden bg-gradient-to-r from-[#1A1E61] to-[#0639A7] shadow-[0px_10px_20px_0px_#00000040]"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-4 sm:px-6 py-4 flex justify-between items-center font-semibold text-left text-white focus:outline-none"
            >
              <span className="text-sm sm:text-base">{question}</span>
              <ChevronDown
                className={`h-5 w-5 transform transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>

            {openIndex === index && (
              <div className="px-4 sm:px-6 pb-4 text-sm text-white opacity-80 bg-[#0d172b]">
                This is a placeholder answer for: <strong>{question}</strong>. Replace with actual content.
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Frequent;
