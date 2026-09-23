import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowLeftRight, 
  CheckCircle, 
  Calendar, 
  Clock, 
  User, 
  FileText,
  Award,
  MessageCircle
} from 'lucide-react';
import { BEFORE_AFTER_CASES } from '../data/clinicData';
import { Language, BeforeAfterCase } from '../types';
import macroVeneersBefore from '../assets/images/macro_veneers_before_1790078493667.jpg';
import macroVeneersAfter from '../assets/images/macro_veneers_after_1790078508826.jpg';
import macroImplantBefore from '../assets/images/macro_implant_before_1790078522332.jpg';
import macroImplantAfter from '../assets/images/macro_implant_after_1790078537534.jpg';
import macroAlignerBefore from '../assets/images/macro_aligner_before_1790078551657.jpg';
import macroAlignerAfter from '../assets/images/macro_aligner_after_1790078563819.jpg';

interface BeforeAfterSliderProps {
  language: Language;
  onOpenBooking: (serviceId?: string) => void;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  language,
  onOpenBooking,
}) => {
  const [selectedCaseIndex, setSelectedCaseIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const activeCase: BeforeAfterCase = BEFORE_AFTER_CASES[selectedCaseIndex];

  const getCaseImages = (idx: number) => {
    if (idx === 0) {
      return {
        before: macroVeneersBefore,
        after: macroVeneersAfter,
      };
    }
    if (idx === 1) {
      return {
        before: macroImplantBefore,
        after: macroImplantAfter,
      };
    }
    return {
      before: macroAlignerBefore,
      after: macroAlignerAfter,
    };
  };

  const currentImages = getCaseImages(selectedCaseIndex);

  const handleSliderMove = (clientX: number, rect: DOMRect) => {
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleSliderMove(e.clientX, rect);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    if (e.touches[0]) {
      handleSliderMove(e.touches[0].clientX, rect);
    }
  };

  return (
    <section id="transformations" className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-teal-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 bg-cyan-50 border border-cyan-200 px-3.5 py-1.5 rounded-full text-cyan-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            <span>{language === 'en' ? 'Clinical Transformation Gallery' : 'የተሳኩ የፈገግታ ለውጦች'}</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight">
            {language === 'en' ? 'Real Smiles, Real Confidence' : 'ተጨባጭ የፈገግታ ለውጦች በዶ/ር አብይ'}
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            {language === 'en'
              ? 'Slide across to see how Dr. Abiy combines digital smile aesthetics with biological longevity.'
              : 'የታካሚዎቻችንን የህክምና ለውጥ ለማየት መሃሉን ወደ ግራ እና ቀኝ ያንሸራትቱ።'}
          </p>
        </div>

        {/* Case Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {BEFORE_AFTER_CASES.map((caseItem, idx) => (
            <button
              key={caseItem.id}
              type="button"
              onClick={() => {
                setSelectedCaseIndex(idx);
                setSliderPosition(50);
              }}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                selectedCaseIndex === idx
                  ? 'bg-gradient-to-r from-cyan-600 to-teal-600 text-white shadow-md shadow-cyan-900/15 font-bold'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-xs'
              }`}
            >
              <span>{caseItem.title}</span>
            </button>
          ))}
        </div>

        {/* Interactive Comparison & Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200 shadow-xl shadow-slate-200/70">
          
          {/* Left Column: Interactive Comparison Canvas */}
          <div className="lg:col-span-7">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-500 px-1 font-semibold">
                <span className="text-slate-700">
                  {language === 'en' ? 'BEFORE (Initial State)' : 'ከህክምናው በፊት'}
                </span>
                <span className="flex items-center gap-1 text-cyan-700">
                  <ArrowLeftRight className="w-3.5 h-3.5" />
                  {language === 'en' ? 'Drag handle to compare' : 'ለማነጻጸር ያንሸራትቱ'}
                </span>
                <span className="text-cyan-800">
                  {language === 'en' ? 'AFTER (Dr. Abiy Result)' : 'ከህክምናው በኋላ'}
                </span>
              </div>

              {/* Slider Wrapper */}
              <div
                className="relative h-72 sm:h-96 md:h-[420px] rounded-2xl overflow-hidden cursor-ew-resize select-none border border-slate-200 shadow-lg"
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
              >
                {/* AFTER Image (Full Background) */}
                <img
                  src={currentImages.after}
                  alt={`${activeCase.title} After`}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-cyan-800 text-xs font-bold px-3 py-1.5 rounded-full border border-cyan-200 shadow-sm">
                  {language === 'en' ? 'AFTER RESULT' : 'ከህክምና በኋላ'}
                </div>

                {/* BEFORE Image (Clipped Left Layer) */}
                <div
                  className="absolute inset-y-0 left-0 overflow-hidden"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img
                    src={currentImages.before}
                    alt={`${activeCase.title} Before`}
                    className="absolute inset-0 w-full h-full object-cover object-center max-w-none"
                    style={{ width: '100%', height: '100%' }}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-amber-700 text-xs font-bold px-3 py-1.5 rounded-full border border-amber-200 shadow-sm">
                    {language === 'en' ? 'BEFORE' : 'ከህክምና በፊት'}
                  </div>
                </div>

                {/* Draggable Divider Line & Knob */}
                <div
                  className="absolute inset-y-0 w-1 bg-white shadow-xl"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white border-2 border-cyan-600 flex items-center justify-center text-cyan-700 shadow-lg">
                    <ArrowLeftRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              <div className="text-center text-xs text-slate-500 font-medium">
                {language === 'en' 
                  ? 'All cases performed in-clinic by Dr. Abiy Diriba at Maraki Tower, Addis Ababa.'
                  : 'ሁሉም ህክምናዎች በዶ/ር አብይ ድሪባ ክሊኒክ የተከናወኑ ናቸው።'}
              </div>
            </div>
          </div>

          {/* Right Column: Case Case Studies & Clinical Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <div className="text-xs font-bold text-cyan-700 uppercase tracking-wider">
                {language === 'en' ? 'Clinical Case Study' : 'የህክምናው ዝርዝር'}
              </div>
              <h3 className="text-2xl font-bold text-slate-950">
                {language === 'en' ? activeCase.treatment : activeCase.treatmentAm}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {activeCase.description}
              </p>
            </div>

            {/* Metrics Chips */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold">
                  <Clock className="w-3.5 h-3.5 text-cyan-600" />
                  <span>{language === 'en' ? 'Treatment Duration' : 'የፈጀው ጊዜ'}</span>
                </div>
                <div className="text-sm font-bold text-slate-900">{activeCase.duration}</div>
              </div>

              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold">
                  <User className="w-3.5 h-3.5 text-cyan-600" />
                  <span>{language === 'en' ? 'Patient Profile' : 'የታካሚው እድሜ'}</span>
                </div>
                <div className="text-sm font-bold text-slate-900">{activeCase.patientAge}</div>
              </div>
            </div>

            {/* Doctor Note Box */}
            <div className="bg-cyan-50/70 border border-cyan-200 p-4 rounded-2xl space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-cyan-900">
                <Award className="w-4 h-4 text-cyan-600" />
                <span>{language === 'en' ? 'Dr. Abiy’s Clinical Assessment' : 'የዶ/ር አብይ አስተያየት'}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                "{activeCase.doctorNotes}"
              </p>
            </div>

            {/* Call to Action for this treatment */}
            <div className="pt-2 space-y-2.5">
              <button
                type="button"
                onClick={() => onOpenBooking()}
                className="w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 text-white font-bold text-sm shadow-md shadow-cyan-900/10 flex items-center justify-center gap-2 transition-all active:scale-[0.99]"
              >
                <Calendar className="w-4 h-4" />
                <span>{language === 'en' ? 'Get Your Smile Consultation' : 'የፈገግታ ህክምና ቀጠሮ ያስይዙ'}</span>
              </button>

              <a
                href="https://wa.me/251911893924?text=Hello%20Dr.%20Abiy%20Specialty%20Dental%20Clinic,%20I%20saw%20your%20smile%20makeover%20cases%20and%20would%20like%20to%20consult%20on%20WhatsApp."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md shadow-emerald-950/20 border border-emerald-500/40 flex items-center justify-center gap-2 transition-all active:scale-[0.99]"
              >
                <MessageCircle className="w-4 h-4 text-emerald-100" />
                <span>{language === 'en' ? 'Inquire via WhatsApp: 0911893924' : 'በዋትስአፕ ይጠይቁ (0911893924)'}</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
