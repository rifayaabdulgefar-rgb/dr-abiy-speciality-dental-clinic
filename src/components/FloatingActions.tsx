import React, { useState, useEffect } from 'react';
import { Phone, Calendar, ArrowUp, MessageCircle, Send } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { Language } from '../types';

interface FloatingActionsProps {
  language: Language;
  onOpenBooking: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({
  language,
  onOpenBooking,
}) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-2.5">
      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center shadow-lg transition-all hover:scale-105"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Telegram Quick Chat */}
      <a
        href={CLINIC_INFO.telegramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white px-3.5 py-2.5 rounded-full shadow-xl shadow-sky-950/20 text-xs font-bold transition-all hover:scale-105 border border-sky-400"
        title="Chat on Telegram (@drabiyspecialitydentalclinic1)"
      >
        <Send className="w-4 h-4 text-sky-100" />
        <span className="hidden sm:inline">Telegram: @drabiyspecialitydentalclinic1</span>
      </a>

      {/* WhatsApp Quick Chat */}
      <a
        href="https://wa.me/251911893924?text=Hello%20Dr.%20Abiy%20Specialty%20Dental%20Clinic,%20I%20would%20like%20to%20book%20an%20appointment."
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-3.5 py-2.5 rounded-full shadow-xl shadow-emerald-950/20 text-xs font-bold transition-all hover:scale-105 border border-emerald-500"
        title="Chat on WhatsApp (0911893924)"
      >
        <MessageCircle className="w-4 h-4 text-emerald-100" />
        <span className="hidden sm:inline">WhatsApp: 0911893924</span>
      </a>

      {/* Direct Call Button */}
      <a
        href={`tel:${CLINIC_INFO.phone1.replace(/\s+/g, '')}`}
        className="flex items-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 hover:text-cyan-700 px-3.5 py-2.5 rounded-full shadow-xl text-xs font-bold transition-all hover:scale-105"
        title={`Call ${CLINIC_INFO.phone1}`}
      >
        <Phone className="w-4 h-4 text-cyan-600" />
        <span className="hidden sm:inline">{CLINIC_INFO.phone1}</span>
      </a>

      {/* Floating Book Appointment Pill */}
      <button
        type="button"
        onClick={onOpenBooking}
        className="flex items-center gap-2 bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-full shadow-xl shadow-cyan-900/20 transition-all hover:scale-105 active:scale-95"
      >
        <Calendar className="w-4 h-4 text-white" />
        <span>{language === 'en' ? 'Book Visit' : 'ቀጠሮ ያስይዙ'}</span>
      </button>
    </div>
  );
};
