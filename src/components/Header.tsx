import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Menu, 
  X, 
  Calendar, 
  Globe, 
  Sparkles,
  ExternalLink,
  ShieldCheck,
  MessageCircle,
  Send
} from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { Language } from '../types';
import { ClinicLogo } from './ClinicLogo';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  onOpenBooking: (serviceId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  setLanguage,
  onOpenBooking,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: language === 'en' ? 'Treatments' : 'አገልግሎቶች', href: '#services' },
    { label: language === 'en' ? 'Smile Gallery' : 'ውጤቶች', href: '#transformations' },
    { label: language === 'en' ? 'Dr. Abiy' : 'ዶ/ር አብይ', href: '#doctor' },
    { label: language === 'en' ? 'Our Team' : 'የህክምና ቡድን', href: '#team' },
    { label: language === 'en' ? 'Smile Triage' : 'የህመም ምርመራ', href: '#triage' },
    { label: language === 'en' ? 'Technology' : 'ቴክኖሎጂ', href: '#technology' },
    { label: language === 'en' ? 'Reviews' : 'ምስክርነቶች', href: '#reviews' },
    { label: language === 'en' ? 'Location' : 'አድራሻ', href: '#location' },
    { label: language === 'en' ? 'FAQ' : 'ጥያቄዎች', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Emergency & Info Banner - Clean Bright Style */}
      <div className="bg-slate-50/95 backdrop-blur-md border-b border-slate-200/90 text-xs text-slate-600 px-4 py-2">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Location & Hours */}
          <div className="flex items-center flex-wrap gap-4 sm:gap-6">
            <a 
              href="#location" 
              className="flex items-center gap-1.5 hover:text-cyan-700 font-medium transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
              <span className="truncate max-w-[240px] sm:max-w-none">
                {language === 'en' ? 'Maraki Tower 3rd Floor, Megenagna, Addis Ababa' : 'መገናኛ፡ ማራኪ ታወር 3ኛ ፎቅ፡ አዲስ አበባ'}
              </span>
            </a>
            <div className="hidden md:flex items-center gap-1.5 text-slate-500 font-medium">
              <Clock className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
              <span>{language === 'en' ? 'Mon - Sat: 8:30 AM - 6:30 PM' : 'ሰኞ - ቅዳሜ፡ 2:30 - 12:30'}</span>
            </div>
          </div>

          {/* Contact Numbers & Telegram & WhatsApp & Facebook & Language Toggle */}
          <div className="flex items-center gap-2.5 sm:gap-3 ml-auto">
            {/* WhatsApp Quick Link */}
            <a
              href={CLINIC_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-bold text-emerald-700 hover:text-emerald-800 transition-colors text-xs bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200"
              title="WhatsApp: 0911893924"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            {/* Telegram Quick Link beside WhatsApp */}
            <a
              href={CLINIC_INFO.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-bold text-sky-700 hover:text-sky-800 transition-colors text-xs bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-200"
              title="Telegram: @drabiyspecialitydentalclinic1"
            >
              <Send className="w-3 h-3 text-sky-500" />
              <span>Telegram</span>
            </a>

            <span className="text-slate-300 hidden sm:inline">|</span>

            <a
              href={`tel:${CLINIC_INFO.phone1.replace(/\s+/g, '')}`}
              className="hidden md:flex items-center gap-1.5 font-semibold text-slate-700 hover:text-cyan-700 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-600" />
              <span>{CLINIC_INFO.phone1}</span>
            </a>

            <a
              href={CLINIC_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-1 bg-blue-50 hover:bg-blue-100 text-blue-700 px-2 py-0.5 rounded-md border border-blue-200 transition-all text-[11px] font-semibold"
              title="Visit Dr. Abiy Facebook Page"
            >
              <span className="font-bold">f</span>
              <span>Facebook</span>
              <ExternalLink className="w-2.5 h-2.5 ml-0.5" />
            </a>

            {/* Language Switcher */}
            <div className="flex items-center bg-slate-200/80 rounded-full p-0.5 border border-slate-300">
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold transition-all ${
                  language === 'en'
                    ? 'bg-white text-cyan-800 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage('am')}
                className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold transition-all ${
                  language === 'am'
                    ? 'bg-white text-cyan-800 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                አማ
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - Crisp Pure White */}
      <div className="bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Clinic Brand Identity with Official 3D Logo */}
          <a href="#" className="group flex items-center">
            <ClinicLogo size="md" language={language} variant="light" />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-700 hover:text-cyan-700 hover:bg-cyan-50/60 px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* WhatsApp Direct Appointment Link */}
            <a
              href="https://wa.me/251911893924?text=Hello%20Dr.%20Abiy%20Dental%20Clinic,%20I%20would%20like%20to%20inquire%20about%20booking%20an%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-2 text-emerald-800 hover:text-emerald-900 bg-emerald-50 hover:bg-emerald-100 px-3 py-2 rounded-xl text-xs font-bold border border-emerald-300 transition-all shadow-xs"
              title="Chat on WhatsApp: 0911893924"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            {/* Telegram Direct Link */}
            <a
              href={CLINIC_INFO.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1.5 text-sky-800 hover:text-sky-900 bg-sky-50 hover:bg-sky-100 px-3 py-2 rounded-xl text-xs font-bold border border-sky-300 transition-all shadow-xs"
              title="Chat on Telegram: @drabiyspecialitydentalclinic1"
            >
              <Send className="w-3.5 h-3.5 text-sky-500" />
              <span>Telegram</span>
            </a>

            <button
              type="button"
              onClick={() => onOpenBooking()}
              className="py-2.5 px-5 rounded-xl bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 text-white font-bold text-sm shadow-md shadow-cyan-900/10 active:scale-95 transition-all flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>{language === 'en' ? 'Book Appointment' : 'ቀጠሮ ያስይዙ'}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-slate-700 hover:text-slate-950 hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu - Pure White Style */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white/98 border-b border-slate-200 backdrop-blur-2xl px-5 pt-3 pb-6 animate-in slide-in-from-top-4 duration-200 shadow-xl">
          <div className="space-y-1 mb-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-slate-800 hover:text-cyan-700 hover:bg-slate-50 px-3 py-2.5 rounded-lg text-base font-semibold transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-200 space-y-3">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 text-white font-bold text-base flex items-center justify-center gap-2 shadow-md shadow-cyan-900/10"
            >
              <Calendar className="w-5 h-5" />
              <span>{language === 'en' ? 'Book Appointment' : 'ቀጠሮ ያስይዙ'}</span>
            </button>

            {/* Mobile WhatsApp Button */}
            <a
              href="https://wa.me/251911893924?text=Hello%20Dr.%20Abiy%20Dental%20Clinic,%20I%20would%20like%20to%20inquire%20about%20an%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-emerald-950/20"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp: 0911893924 ({language === 'en' ? 'Direct Chat' : 'ቀጥታ መልእክት'})</span>
            </a>

            {/* Mobile Telegram Button */}
            <a
              href={CLINIC_INFO.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-sky-900/20"
            >
              <Send className="w-4 h-4" />
              <span>Telegram: {CLINIC_INFO.telegramHandle}</span>
            </a>

            <a
              href={`tel:${CLINIC_INFO.phone1.replace(/\s+/g, '')}`}
              className="w-full py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm flex items-center justify-center gap-2 border border-slate-200"
            >
              <Phone className="w-4 h-4 text-cyan-600" />
              <span>{CLINIC_INFO.phone1} ({language === 'en' ? 'Call Directly' : 'ደውለው ያማክሩ'})</span>
            </a>

            <a
              href={CLINIC_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold text-sm flex items-center justify-center gap-2 border border-blue-200"
            >
              <span className="font-bold">f</span>
              <span>Facebook Page</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
