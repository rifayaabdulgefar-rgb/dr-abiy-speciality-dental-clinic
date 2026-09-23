import React from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Mail, 
  Navigation, 
  ExternalLink, 
  CheckCircle2,
  Calendar,
  Building,
  Car,
  ShieldCheck,
  MessageCircle,
  Send
} from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { Language } from '../types';

interface LocationContactProps {
  language: Language;
  onOpenBooking: () => void;
}

export const LocationContact: React.FC<LocationContactProps> = ({
  language,
  onOpenBooking,
}) => {
  return (
    <section id="location" className="py-24 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 bg-cyan-50 border border-cyan-200 px-3.5 py-1.5 rounded-full text-cyan-800 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-cyan-600" />
            <span>{language === 'en' ? 'Visit Our Practice in Addis Ababa' : 'የክሊኒኩ አድራሻና መገኛ'}</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight">
            {language === 'en' ? 'Convenient Central Location' : 'መገናኛ፡ ማራኪ ታወር 3ኛ ፎቅ'}
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            {language === 'en'
              ? 'Easily accessible in Megenagna with secure parking, elevator access, and a calm, spa-like dental suite.'
              : 'ከዘፍመሽ ወደ ሾላ መብራት በሚወስደው መንገድ ላይ በሚገኘው ማራኪ ታወር 3ኛ ፎቅ ላይ ያገኙናል።'}
          </p>
        </div>

        {/* Location & Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Contact Details & Hours */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs">
              <h3 className="font-cinzel text-xl font-bold text-slate-950 flex items-center gap-2">
                <Building className="w-5 h-5 text-cyan-600" />
                <span>{language === 'en' ? 'Clinic Headquarters' : 'የክሊኒኩ መረጃ'}</span>
              </h3>

              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-600 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    {language === 'en' ? 'Physical Address' : 'ትክክለኛ አድራሻ'}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {language === 'en' ? CLINIC_INFO.address : CLINIC_INFO.addressAm}
                  </p>
                  <div className="mt-2 text-[11px] text-cyan-800 font-semibold flex items-center gap-1.5">
                    <Navigation className="w-3 h-3 text-cyan-600" />
                    <span>Landmark: Near Zefmesh Grand Mall towards Shola Traffic Light</span>
                  </div>
                </div>
              </div>

              {/* Direct Phone Numbers, Telegram & WhatsApp */}
              <div className="flex items-start gap-3.5 pt-4 border-t border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-600 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1.5 w-full">
                  <h4 className="text-sm font-bold text-slate-900">
                    {language === 'en' ? 'Direct Phone, WhatsApp & Telegram' : 'ስልክ ቁጥሮች፣ ዋትስአፕ እና ቴሌግራም'}
                  </h4>
                  <div className="flex flex-col gap-1.5 pt-1">
                    <a
                      href={CLINIC_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-emerald-800 hover:text-emerald-900 flex items-center justify-between p-2 rounded-xl bg-emerald-50 border border-emerald-200 transition-colors shadow-xs"
                    >
                      <span className="flex items-center gap-1.5">
                        <MessageCircle className="w-4 h-4 text-emerald-600" />
                        <span>WhatsApp: 0911893924</span>
                      </span>
                      <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">Direct Chat</span>
                    </a>

                    {/* Telegram Direct Link */}
                    <a
                      href={CLINIC_INFO.telegramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-sky-800 hover:text-sky-900 flex items-center justify-between p-2 rounded-xl bg-sky-50 border border-sky-200 transition-colors shadow-xs"
                    >
                      <span className="flex items-center gap-1.5">
                        <Send className="w-4 h-4 text-sky-500" />
                        <span>Telegram: {CLINIC_INFO.telegramHandle}</span>
                      </span>
                      <span className="text-[10px] bg-sky-100 text-sky-800 px-2 py-0.5 rounded-full font-bold">Direct Message</span>
                    </a>

                    <a
                      href={`tel:${CLINIC_INFO.phone1.replace(/\s+/g, '')}`}
                      className="text-sm font-bold text-slate-800 hover:text-cyan-700 flex items-center justify-between p-2 rounded-xl bg-white border border-slate-200 transition-colors shadow-xs"
                    >
                      <span>📞 {CLINIC_INFO.phone1}</span>
                      <span className="text-[10px] bg-cyan-50 text-cyan-800 px-2 py-0.5 rounded-full font-bold border border-cyan-100">Voice Call</span>
                    </a>

                    <a
                      href={`tel:${CLINIC_INFO.phone2.replace(/\s+/g, '')}`}
                      className="text-sm font-bold text-slate-700 hover:text-cyan-700 flex items-center justify-between p-2 rounded-xl bg-white border border-slate-200 transition-colors shadow-xs"
                    >
                      <span>📞 {CLINIC_INFO.phone2}</span>
                      <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full font-medium">Secondary</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-3.5 pt-4 border-t border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-600 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-slate-900">
                    {language === 'en' ? 'Clinical Hours' : 'የስራ ሰዓት'}
                  </h4>
                  {CLINIC_INFO.workingHours.map((wh, i) => (
                    <div key={i} className="text-xs text-slate-600 flex items-center justify-between gap-4">
                      <span className="font-medium text-slate-500">
                        {language === 'en' ? wh.days : wh.daysAm}:
                      </span>
                      <span className="font-semibold text-slate-900">{wh.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Accessibility badges */}
              <div className="grid grid-cols-2 gap-2.5 pt-3 border-t border-slate-200 text-xs text-slate-700 font-medium">
                <div className="flex items-center gap-1.5 bg-white p-2.5 rounded-xl border border-slate-200 shadow-xs">
                  <Car className="w-3.5 h-3.5 text-cyan-600" />
                  <span>Secure Parking</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white p-2.5 rounded-xl border border-slate-200 shadow-xs">
                  <Building className="w-3.5 h-3.5 text-cyan-600" />
                  <span>Elevator to 3rd Fl.</span>
                </div>
              </div>

            </div>

            {/* Consultation & WhatsApp Actions */}
            <div className="space-y-3">
              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 text-white font-bold text-sm shadow-md shadow-cyan-900/15 transition-all flex items-center justify-center gap-2 active:scale-[0.99]"
              >
                <Calendar className="w-4 h-4" />
                <span>{language === 'en' ? 'Schedule Consultation Online' : 'የቀጠሮ ቅጽ ይሙሉ'}</span>
              </button>

              <a
                href="https://wa.me/251911893924?text=Hello%20Dr.%20Abiy%20Specialty%20Dental%20Clinic,%20I%20would%20like%20to%20book%20an%20appointment%20or%20ask%20a%20question."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md shadow-emerald-950/20 border border-emerald-500/40 flex items-center justify-center gap-2 transition-all active:scale-[0.99]"
              >
                <MessageCircle className="w-4 h-4 text-emerald-100" />
                <span>{language === 'en' ? 'Chat Directly on WhatsApp: 0911893924' : 'በዋትስአፕ ያናግሩን (0911893924)'}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Map Simulation & Facility Preview */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-xs">
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-cinzel text-xl font-bold text-slate-950">
                  {language === 'en' ? 'Megenagna Hub Location' : 'የካርታ እና የመንገድ መመሪያ'}
                </h3>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent('Megenagna Maraki Tower Addis Ababa')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-cyan-800 hover:text-cyan-900 flex items-center gap-1 bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-xs"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-cyan-600" />
                </a>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {language === 'en' 
                  ? 'Centrally located at Maraki Tower with seamless transport access from Bole, CMC, Kazanchis, and 22 Mazoria.'
                  : 'ከቦሌ፣ ከሲኤምሲ፣ ከካዛንቺስ እና ከ22 ማዞሪያ በቀላሉ የሚደረስበት ምቹ ስፍራ።'}
              </p>
            </div>

            {/* Visual Simulated Interactive Map Card */}
            <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 flex items-center justify-center shadow-inner">
              {/* Map Graphic Simulation */}
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:16px_16px]" />
              
              {/* Simulated Road Lines */}
              <div className="absolute top-1/2 left-0 right-0 h-4 bg-slate-200 -translate-y-1/2 transform -rotate-6 shadow-xs" />
              <div className="absolute top-0 bottom-0 left-1/3 w-4 bg-slate-200 transform rotate-12 shadow-xs" />

              {/* Landmark Pins */}
              <div className="absolute top-1/4 left-1/4 bg-white/95 border border-slate-200 px-2.5 py-1 rounded-lg text-[10px] text-slate-800 font-semibold flex items-center gap-1 shadow-md">
                <span>🏬 Zefmesh Grand Mall</span>
              </div>
              <div className="absolute bottom-1/4 right-1/4 bg-white/95 border border-slate-200 px-2.5 py-1 rounded-lg text-[10px] text-slate-800 font-semibold flex items-center gap-1 shadow-md">
                <span>🚦 Shola Traffic Light</span>
              </div>

              {/* Center Highlight Pin: Dr. Abiy Clinic */}
              <div className="relative z-10 bg-white border-2 border-cyan-500 p-4 rounded-2xl shadow-xl flex flex-col items-center text-center space-y-1.5 max-w-xs animate-bounce duration-1000">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-600 to-teal-500 flex items-center justify-center text-white font-bold shadow-md">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-950 text-xs sm:text-sm">Dr. Abiy Specialty Dental</h4>
                  <p className="text-[11px] text-cyan-800 font-semibold">3rd Floor, Maraki Tower</p>
                </div>
              </div>
            </div>

            {/* Official Facebook Community Connection */}
            <div className="bg-blue-50/70 border border-blue-200 p-4 sm:p-5 rounded-2xl flex flex-wrap items-center justify-between gap-4 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-md">
                  f
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-950">
                    {language === 'en' ? 'Official Facebook Page' : 'የክሊኒካችን ይፋዊ የፌስቡክ ገጽ'}
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    {language === 'en' ? 'Daily before & after smile updates & dental tips' : 'ተጨማሪ የፈገግታ ህክምና ፎቶዎችን እና መረጃዎችን ይመልከቱ'}
                  </p>
                </div>
              </div>

              <a
                href={CLINIC_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors shadow-md"
              >
                <span>Visit Facebook</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
