import React, { useState } from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  Sun, 
  Activity, 
  Crown, 
  Crosshair, 
  HeartHandshake, 
  ArrowRight, 
  Clock, 
  Check, 
  Info,
  X,
  Calendar,
  ShieldAlert
} from 'lucide-react';
import { CLINIC_SERVICES } from '../data/clinicData';
import { DentalService, ServiceCategory, Language } from '../types';

interface ServicesProps {
  language: Language;
  onOpenBooking: (serviceId?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ language, onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('all');
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<DentalService | null>(null);

  const categories: { id: ServiceCategory; label: string; labelAm: string }[] = [
    { id: 'all', label: 'All Treatments', labelAm: 'ሁሉም ህክምናዎች' },
    { id: 'cosmetic', label: 'Cosmetic & Veneers', labelAm: 'ኮስሜቲክ እና ቬኒየርስ' },
    { id: 'implants', label: 'Dental Implants', labelAm: 'የጥርስ መተከል' },
    { id: 'orthodontics', label: 'Aligners & Braces', labelAm: 'ኦርቶዶንቲክስ' },
    { id: 'endodontics', label: 'Root Canal & Restorative', labelAm: 'የስር ህክምና' },
    { id: 'pediatric', label: 'Pediatric Care', labelAm: 'የህጻናት ጥርስ' },
    { id: 'surgery', label: 'Oral Surgery & Wisdom', labelAm: 'የቀዶ ህክምና' },
  ];

  const filteredServices = activeCategory === 'all'
    ? CLINIC_SERVICES
    : CLINIC_SERVICES.filter((s) => s.category === activeCategory);

  const renderIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6 text-cyan-600' };
    switch (iconName) {
      case 'Sparkles': return <Sparkles {...props} />;
      case 'ShieldCheck': return <ShieldCheck {...props} />;
      case 'Layers': return <Layers {...props} />;
      case 'Sun': return <Sun {...props} />;
      case 'Activity': return <Activity {...props} />;
      case 'Crown': return <Crown {...props} />;
      case 'Crosshair': return <Crosshair {...props} />;
      case 'HeartHandshake': return <HeartHandshake {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  return (
    <section id="services" className="py-24 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 bg-cyan-50 border border-cyan-200 px-3.5 py-1.5 rounded-full text-cyan-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            <span>{language === 'en' ? 'Specialized Dental Portfolio' : 'ስፔሻላይዝድ የጥርስ ህክምና አገልግሎቶች'}</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight">
            {language === 'en' ? 'Advanced Care for Every Smile' : 'የተሟላና ዘመናዊ የጥርስ ህክምና'}
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            {language === 'en'
              ? 'Dr. Abiy combines hospital-grade sterilization, digital 3D planning, and gentle microscopic execution for unparalleled results.'
              : 'በዶ/ር አብይ ስፔሻሊቲ የጥርስ ክሊኒክ አለም አቀፍ ደረጃቸውን የጠበቁ የህክምና አገልግሎቶችን ያገኛሉ።'}
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-cyan-600 to-teal-600 text-white shadow-md shadow-cyan-900/15 font-bold'
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-950 border border-slate-200 shadow-xs'
              }`}
            >
              {language === 'en' ? cat.label : cat.labelAm}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group relative bg-white hover:bg-slate-50/50 border border-slate-200 hover:border-cyan-400/80 rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-cyan-950/5"
            >
              {service.featured && (
                <div className="absolute top-4 right-4 bg-cyan-50 border border-cyan-200 text-cyan-800 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Featured
                </div>
              )}

              <div className="space-y-4">
                {/* Icon */}
                <div className="w-12 h-12 rounded-2xl bg-cyan-50 border border-cyan-100 group-hover:border-cyan-300 flex items-center justify-center transition-colors">
                  {renderIcon(service.iconName)}
                </div>

                {/* Title & Tagline */}
                <div className="space-y-1.5">
                  <h3 className="text-xl font-bold text-slate-950 group-hover:text-cyan-700 transition-colors">
                    {language === 'en' ? service.title : service.titleAm}
                  </h3>
                  <p className="text-xs font-semibold text-cyan-700">
                    {service.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                  {language === 'en' ? service.description : service.descriptionAm}
                </p>

                {/* Benefits List */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  {(language === 'en' ? service.benefits : service.benefitsAm).slice(0, 3).map((b, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                      <span className="truncate font-medium">{b}</span>
                    </div>
                  ))}
                </div>

                {/* Duration info */}
                <div className="flex items-center gap-2 text-xs text-slate-600 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
                  <Clock className="w-3.5 h-3.5 text-cyan-600" />
                  <span className="font-medium">{service.duration}</span>
                </div>
              </div>

              {/* Card Bottom Actions */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedServiceForModal(service)}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold flex items-center justify-center gap-1.5 border border-slate-200 transition-colors"
                >
                  <Info className="w-3.5 h-3.5 text-cyan-700" />
                  <span>{language === 'en' ? 'Protocol Details' : 'የህክምና ዝርዝር'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => onOpenBooking(service.id)}
                  className="py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-md shadow-cyan-900/15 transition-all active:scale-95"
                >
                  <Calendar className="w-3.5 h-3.5 text-white" />
                  <span>{language === 'en' ? 'Book' : 'ቀጠሮ'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Service Protocol Modal Popup */}
      {selectedServiceForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto space-y-6">
            
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedServiceForModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3.5 pr-8">
              <div className="w-12 h-12 rounded-2xl bg-cyan-50 border border-cyan-200 flex items-center justify-center">
                {renderIcon(selectedServiceForModal.iconName)}
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-950">
                  {language === 'en' ? selectedServiceForModal.title : selectedServiceForModal.titleAm}
                </h3>
                <p className="text-xs sm:text-sm text-cyan-700 font-semibold">
                  {selectedServiceForModal.tagline}
                </p>
              </div>
            </div>

            {/* Modal Description */}
            <p className="text-sm text-slate-600 leading-relaxed">
              {language === 'en' ? selectedServiceForModal.description : selectedServiceForModal.descriptionAm}
            </p>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs">
              <div>
                <span className="text-slate-500 block font-medium">{language === 'en' ? 'Duration' : 'የሚፈጀው ጊዜ'}</span>
                <span className="font-bold text-slate-900">{selectedServiceForModal.duration}</span>
              </div>
              <div>
                <span className="text-slate-500 block font-medium">{language === 'en' ? 'Anesthesia' : 'ማደንዘዣ'}</span>
                <span className="font-bold text-slate-900">{selectedServiceForModal.anesthesia}</span>
              </div>
              <div>
                <span className="text-slate-500 block font-medium">{language === 'en' ? 'Recovery' : 'ማገገሚያ'}</span>
                <span className="font-bold text-slate-900">{selectedServiceForModal.recovery}</span>
              </div>
            </div>

            {/* Step by Step Clinical Protocol */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-cyan-800 uppercase tracking-wider flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-600" />
                <span>{language === 'en' ? 'Step-by-Step Treatment Protocol' : 'የህክምናው ቅደም ተከተል'}</span>
              </h4>
              <div className="space-y-2.5">
                {selectedServiceForModal.procedureSteps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-slate-50 p-3 rounded-xl border border-slate-200">
                    <span className="w-6 h-6 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <span className="text-xs sm:text-sm text-slate-800 font-medium">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Bottom CTA */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-slate-500 font-medium">
                {language === 'en' 
                  ? 'All treatments include complimentary digital follow-up care.' 
                  : 'ክሊኒኩ የህክምና ክትትልን ያካትታል።'}
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedServiceForModal(null)}
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-950"
                >
                  {language === 'en' ? 'Close' : 'ዝጋ'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const id = selectedServiceForModal.id;
                    setSelectedServiceForModal(null);
                    onOpenBooking(id);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-bold text-xs flex items-center gap-2 shadow-md shadow-cyan-900/15"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{language === 'en' ? 'Book for This Procedure' : 'ለዚህ ህክምና ቀጠሮ ያስይዙ'}</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
