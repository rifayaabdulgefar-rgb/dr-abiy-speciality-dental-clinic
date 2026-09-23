import React from 'react';
import { 
  Calendar, 
  Sparkles, 
  ShieldCheck, 
  Star, 
  ArrowRight, 
  PhoneCall, 
  Award, 
  MapPin, 
  CheckCircle2,
  ExternalLink,
  MessageCircle,
  Send
} from 'lucide-react';
import { CLINIC_INFO, CLINIC_STATS } from '../data/clinicData';
import { Language } from '../types';
import heroBgImage from '../assets/images/hero_dental_luxury_1786872748836.jpg';
import clinicLogo from '../assets/images/abiy_clinic_logo_1789643645470.jpg';

interface HeroProps {
  language: Language;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ language, onOpenBooking }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white">
      {/* Breathtaking Front Background Image with Clean Medical Light Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBgImage}
          alt="Dr. Abiy Specialty Dental Clinic Luxury Operatory"
          className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000 ease-out opacity-25"
          referrerPolicy="no-referrer"
        />
        {/* Layered crisp light clinical overlays for razor-sharp contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-sky-50/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/70" />
      </div>

      {/* Decorative ambient subtle soft blue/teal glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Narrative & Actions */}
          <div className="lg:col-span-8 space-y-7">
            
            {/* Top Doctor & Quality Certification Badge */}
            <div className="inline-flex items-center gap-2.5 bg-white border border-cyan-200/90 px-4 py-2 rounded-full shadow-sm shadow-cyan-900/5">
              <span className="flex h-2.5 w-2.5 rounded-full bg-cyan-500 animate-ping" />
              <span className="text-xs sm:text-sm font-bold text-cyan-800">
                {language === 'en' 
                  ? '✨ Addis Ababa’s Premier Specialty Dental Center' 
                  : '✨ በአዲስ አበባ ግንባር ቀደም የጥርስ ስፔሻሊቲ ክሊኒክ'}
              </span>
              <span className="hidden sm:inline-block text-slate-300">|</span>
              <span className="hidden sm:inline-flex items-center text-xs text-slate-700 font-bold">
                <Award className="w-3.5 h-3.5 text-amber-500 mr-1" />
                {language === 'en' ? CLINIC_INFO.doctorName : 'ዶ/ር አብይ ድሪባ'}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-950 leading-[1.15]">
                {language === 'en' ? (
                  <>
                    Where <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600">Artistry</span> Meets{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">Precision</span> Dentistry
                  </>
                ) : (
                  <>
                    ውበትና <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600">ዘመናዊ ጥበብ</span> የተዋሃደበት የጥርስ ህክምና
                  </>
                )}
              </h1>
              <p className="text-base sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl">
                {language === 'en'
                  ? 'Experience painless, world-class cosmetic veneers, precision dental implants, clear aligners, and restorative excellence in our state-of-the-art Megenagna clinic.'
                  : 'የተሟላ የፖርሲሊን ቬኒየርስ፣ የጥርስ መተከል (Implants)፣ የጥርስ ማስተካከል (Aligners) እና አጠቃላይ የጥርስ ህክምና አገልግሎቶችን በከፍተኛ ጥራት ያግኙ።'}
              </p>
            </div>

            {/* Key Clinical Guarantees */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
              <div className="flex items-center gap-2 text-slate-800 text-xs sm:text-sm bg-white/90 backdrop-blur-sm px-3.5 py-2.5 rounded-xl border border-slate-200 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                <span className="font-semibold">{language === 'en' ? '100% Painless Care' : 'ህመም አልባ ህክምና'}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-800 text-xs sm:text-sm bg-white/90 backdrop-blur-sm px-3.5 py-2.5 rounded-xl border border-slate-200 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                <span className="font-semibold">{language === 'en' ? '3D Digital Scanners' : '3D ዲጂታል ስካነር'}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-800 text-xs sm:text-sm bg-white/90 backdrop-blur-sm px-3.5 py-2.5 rounded-xl border border-slate-200 shadow-xs col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                <span className="font-semibold">{language === 'en' ? 'Swiss Titanium Implants' : 'ስዊስ ቲታኒየም ኢምፕላንት'}</span>
              </div>
            </div>

            {/* CTAs Action Cluster */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {/* Book Appointment CTA */}
              <button
                type="button"
                onClick={onOpenBooking}
                className="relative group px-7 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 shadow-lg shadow-cyan-900/15 transition-all duration-300 flex items-center gap-3 active:scale-95 text-base"
              >
                <Calendar className="w-5 h-5 text-white" />
                <span>{language === 'en' ? 'Book VIP Consultation' : 'ቀጠሮ ያስይዙ'}</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Direct WhatsApp CTA */}
              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-4 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-500 border border-emerald-500/40 shadow-lg shadow-emerald-950/20 transition-all duration-200 flex items-center gap-2 text-sm sm:text-base active:scale-95"
              >
                <MessageCircle className="w-5 h-5 text-emerald-100" />
                <span>WhatsApp: 0911893924</span>
              </a>

              {/* Direct Telegram CTA beside WhatsApp */}
              <a
                href={CLINIC_INFO.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-4 rounded-xl font-bold text-white bg-sky-500 hover:bg-sky-400 border border-sky-400/40 shadow-lg shadow-sky-950/20 transition-all duration-200 flex items-center gap-2 text-sm sm:text-base active:scale-95"
              >
                <Send className="w-5 h-5 text-sky-100" />
                <span>Telegram: @drabiyspecialitydentalclinic1</span>
              </a>

              {/* Direct Phone CTA */}
              <a
                href={`tel:${CLINIC_INFO.phone1.replace(/\s+/g, '')}`}
                className="px-5 py-4 rounded-xl font-bold text-slate-800 hover:text-cyan-700 bg-white hover:bg-slate-50 border border-slate-300 hover:border-cyan-400 transition-all duration-200 flex items-center gap-2 shadow-xs text-sm"
              >
                <PhoneCall className="w-4 h-4 text-cyan-600" />
                <span>{CLINIC_INFO.phone1}</span>
              </a>
            </div>

            {/* Location Reference Banner */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 pt-1 font-medium">
              <MapPin className="w-4 h-4 text-cyan-600 shrink-0" />
              <span>
                {language === 'en' 
                  ? '3rd Floor, Maraki Tower, Megenagna, Addis Ababa' 
                  : 'ማራኪ ታወር 3ኛ ፎቅ፡ መገናኛ፡ አዲስ አበባ'}
              </span>
            </div>
          </div>

          {/* Right Column: Floating Luxury Feature Card */}
          <div className="lg:col-span-4">
            <div className="relative bg-white border border-slate-200 p-6 sm:p-7 rounded-3xl shadow-xl shadow-slate-200/80 space-y-6 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-100/50 rounded-full blur-2xl pointer-events-none" />
              
              {/* Doctor Header Pill with Official 3D Clinic Logo */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-13 h-13 rounded-2xl bg-white p-1 shadow-md shadow-slate-200 ring-1 ring-slate-200/90 shrink-0">
                    <img
                      src={clinicLogo}
                      alt="Dr. Abiy Specialty Dental Clinic Emblem"
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">{CLINIC_INFO.doctorName}</h3>
                    <p className="text-xs text-cyan-700 font-semibold">{language === 'en' ? CLINIC_INFO.doctorTitle : CLINIC_INFO.doctorTitleAm}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full text-amber-700 text-xs font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  <span>5.0</span>
                </div>
              </div>

              {/* Quick Clinic Highlights */}
              <div className="space-y-3.5 text-xs text-slate-700">
                <div className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
                  <Sparkles className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-bold">
                      {language === 'en' ? 'Digital Smile Design' : 'ዲጂታል የፈገግታ ዲዛይን'}
                    </strong>
                    <span>{language === 'en' ? 'Preview your new smile before beginning treatment.' : 'ህክምናውን ከመጀመርዎ በፊት ውጤቱን አስቀድመው ይመልከቱ።'}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-bold">
                      {language === 'en' ? 'Permanent Implants' : 'ዘላቂ የጥርስ መተከል'}
                    </strong>
                    <span>{language === 'en' ? 'Swiss & German bio-compatible titanium fixtures.' : 'አለም አቀፍ ደረጃቸውን የጠበቁ አስተማማኝ እቃዎች።'}</span>
                  </div>
                </div>
              </div>

              {/* Facebook Page Quick Link */}
              <div className="pt-2 border-t border-slate-100">
                <a
                  href={CLINIC_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-xl text-blue-700 text-xs font-bold flex items-center justify-between transition-colors group"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-[11px]">f</span>
                    <span>{language === 'en' ? 'Follow on Facebook for Patient Cases' : 'የህክምና ፎቶዎችን በፌስቡክ ይመልከቱ'}</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Trust Statistics Strip */}
        <div className="mt-14 sm:mt-16 pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {CLINIC_STATS.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="font-cinzel text-2xl sm:text-4xl font-bold text-slate-950">
                {stat.value}
              </div>
              <p className="text-xs sm:text-sm text-slate-600 font-semibold">
                {language === 'en' ? stat.label : stat.labelAm}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
