import React from 'react';
import { 
  Sparkles, 
  MapPin, 
  Phone, 
  Clock, 
  ExternalLink, 
  ShieldCheck, 
  Calendar,
  Heart,
  MessageCircle,
  Send
} from 'lucide-react';
import { CLINIC_INFO, CLINIC_SERVICES } from '../data/clinicData';
import { Language } from '../types';
import { ClinicLogo } from './ClinicLogo';

interface FooterProps {
  language: Language;
  onOpenBooking: (serviceId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ language, onOpenBooking }) => {
  return (
    <footer className="bg-white border-t border-slate-200 text-slate-600 text-xs relative overflow-hidden">
      
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-4">
            <ClinicLogo size="md" language={language} variant="light" />

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              {language === 'en'
                ? 'Addis Ababa’s premier dental center dedicated to painless cosmetic smile transformations, advanced titanium implants, and hospital-grade sterile precision.'
                : 'በአዲስ አበባ ዘመናዊ፣ አስተማማኝና ጥራት ያለው የጥርስ ህክምና አገልግሎት የሚሰጥ ግንባር ቀደም ስፔሻሊቲ ክሊኒክ።'}
            </p>

            {/* Direct Connect Buttons */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-1.5 rounded-xl border border-emerald-500/40 transition-all font-bold shadow-xs text-xs"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-100" />
                <span>WhatsApp: 0911893924</span>
              </a>

              <a
                href={CLINIC_INFO.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-sky-500 hover:bg-sky-400 text-white px-3 py-1.5 rounded-xl border border-sky-400/40 transition-all font-bold shadow-xs text-xs"
              >
                <Send className="w-3.5 h-3.5 text-sky-100" />
                <span>Telegram: {CLINIC_INFO.telegramHandle}</span>
              </a>

              <a
                href={CLINIC_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 px-3 py-1.5 rounded-xl border border-blue-200 transition-all font-semibold text-xs"
              >
                <span className="w-3.5 h-3.5 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-[9px]">f</span>
                <span>Facebook</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>
          </div>

          {/* Col 2: Treatments Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-slate-950 uppercase text-xs tracking-wider">
              {language === 'en' ? 'Specialized Treatments' : 'ዋና ዋና ህክምናዎች'}
            </h4>
            <ul className="space-y-2">
              {CLINIC_SERVICES.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <button
                    type="button"
                    onClick={() => onOpenBooking(service.id)}
                    className="hover:text-cyan-700 text-left transition-colors truncate max-w-full text-slate-600 font-medium"
                  >
                    {language === 'en' ? service.title : service.titleAm}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Clinic Contact & Hours */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="font-bold text-slate-950 uppercase text-xs tracking-wider">
              {language === 'en' ? 'Addis Ababa Clinic & Inquiries' : 'የክሊኒኩ አድራሻ እና ስልኮች'}
            </h4>

            <div className="space-y-2.5 text-xs text-slate-700">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                <span>{CLINIC_INFO.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cyan-600 shrink-0" />
                <div className="flex items-center gap-3">
                  <a href={`tel:${CLINIC_INFO.phone1.replace(/\s+/g, '')}`} className="hover:text-cyan-700 font-bold text-slate-900">
                    {CLINIC_INFO.phone1}
                  </a>
                  <span>/</span>
                  <a href={`tel:${CLINIC_INFO.phone2.replace(/\s+/g, '')}`} className="hover:text-cyan-700 font-bold text-slate-900">
                    {CLINIC_INFO.phone2}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                <span>Mon – Sat: 8:30 AM – 6:30 PM (Emergency by Appointment)</span>
              </div>
            </div>

            {/* Hospital-Grade Safety Assurance */}
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 flex items-center gap-3 text-xs text-slate-700 shadow-xs">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>100% Class-B Autoclave Sterilization & Clean Air Filtration</span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-200 bg-slate-50 py-6 text-center text-slate-500 text-[11px]">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Dr. Abiy Specialty Dental Clinic. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            <span>Crafted with dental precision in Addis Ababa, Ethiopia</span>
          </p>
        </div>
      </div>

    </footer>
  );
};
