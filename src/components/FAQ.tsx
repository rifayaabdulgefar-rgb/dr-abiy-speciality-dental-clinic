import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles, PhoneCall } from 'lucide-react';
import { FAQS, CLINIC_INFO } from '../data/clinicData';
import { Language } from '../types';

interface FAQProps {
  language: Language;
}

export const FAQ: React.FC<FAQProps> = ({ language }) => {
  const [openIndices, setOpenIndices] = useState<number[]>([0, 1]);

  const toggleFAQ = (index: number) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  return (
    <section id="faq" className="py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 bg-cyan-50 border border-cyan-200 px-3.5 py-1.5 rounded-full text-cyan-800 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-600" />
            <span>{language === 'en' ? 'Frequently Asked Questions' : 'ተደጋግመው የሚነሱ ጥያቄዎች'}</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight">
            {language === 'en' ? 'Everything You Need to Know' : 'የሚፈልጓቸው ተጨማሪ መረጃዎች'}
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            {language === 'en'
              ? 'Find answers regarding appointment bookings, payment methods in Ethiopia, and Dr. Abiy’s painless clinical procedures.'
              : 'ስለ ቀጠሮ አሰጣጥ፣ ክፍያ እና የህክምና ሂደቶች የተዘጋጁ ምላሾች።'}
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndices.includes(idx);
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200 shadow-xs hover:border-cyan-300"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-slate-50 transition-colors"
                >
                  <span className="font-bold text-sm sm:text-base text-slate-950">
                    {language === 'en' ? faq.question : faq.questionAm}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? 'bg-cyan-600 text-white' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                    <p>{language === 'en' ? faq.answer : faq.answerAm}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Contact Prompt */}
        <div className="mt-12 text-center p-6 bg-white rounded-3xl border border-slate-200 shadow-lg shadow-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left space-y-1">
            <h4 className="font-bold text-slate-950 text-sm sm:text-base">
              {language === 'en' ? 'Have a specific dental question?' : 'ሌላ ጥያቄ አለዎት?'}
            </h4>
            <p className="text-xs text-slate-600">
              {language === 'en' ? 'Our friendly dental coordination team is ready to assist you.' : 'በስልክ ደውለው ወዲያውኑ መልስ ያግኙ።'}
            </p>
          </div>

          <a
            href={`tel:${CLINIC_INFO.phone1.replace(/\s+/g, '')}`}
            className="px-5 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs flex items-center gap-2 transition-all shadow-md shadow-cyan-900/15 shrink-0"
          >
            <PhoneCall className="w-4 h-4" />
            <span>{CLINIC_INFO.phone1}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
