import React from 'react';
import { 
  ScanFace, 
  Radio, 
  Zap, 
  ShieldCheck, 
  Sparkles,
  CheckCircle,
  Microscope,
  Cpu
} from 'lucide-react';
import { CLINIC_TECHNOLOGY } from '../data/clinicData';
import { Language } from '../types';
import digitalScannerSuite from '../assets/images/digital_scanner_suite_1790087871128.jpg';

interface ClinicTechnologyProps {
  language: Language;
}

export const ClinicTechnology: React.FC<ClinicTechnologyProps> = ({ language }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'ScanFace': return <ScanFace className="w-6 h-6 text-cyan-600" />;
      case 'Radio': return <Radio className="w-6 h-6 text-teal-600" />;
      case 'Zap': return <Zap className="w-6 h-6 text-amber-600" />;
      case 'Shield': return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
      default: return <Cpu className="w-6 h-6 text-cyan-600" />;
    }
  };

  return (
    <section id="technology" className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      {/* Background Accent */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-teal-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-cyan-50 border border-cyan-200 px-3.5 py-1.5 rounded-full text-cyan-800 text-xs font-bold uppercase tracking-wider">
            <Microscope className="w-3.5 h-3.5 text-cyan-600" />
            <span>{language === 'en' ? 'Cutting-Edge Dental Equipment' : 'ዘመናዊ የህክምና መሳሪያዎች'}</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight">
            {language === 'en' ? 'State-of-the-Art Technology' : 'የላቀ የዲጂታል ቴክኖሎጂ'}
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            {language === 'en'
              ? 'We invest in modern digital scanners, 3D imaging, and hospital-grade sterilization to provide maximum comfort and clinical precision.'
              : 'ክሊኒካችን ፈጣን፣ ትክክለኛና ምቹ ህክምና ለመስጠት የሚያስችሉ ዘመናዊ የዲጂታል መሳሪያዎችን ታጥቋል።'}
          </p>
        </div>

        {/* Grid of Visual & Tech Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Tech Hero Image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl shadow-slate-200/80 aspect-[16/10]">
              <img
                src={digitalScannerSuite}
                alt="Dr. Abiy Specialty Dental Clinic Advanced Tech Suite"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />

              <div className="absolute bottom-6 inset-x-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-200 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-600 shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      {language === 'en' ? '100% Digital Workflow' : 'ሙሉ በሙሉ ዲጂታል አሰራር'}
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      {language === 'en' ? 'No uncomfortable putty trays, 3D CAD/CAM accuracy.' : 'ያለ ምንም ችግር በ3D ስካነር የሚከናወን።'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Key Technologies Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CLINIC_TECHNOLOGY.map((tech, idx) => (
              <div
                key={idx}
                className="bg-white hover:bg-slate-50/60 border border-slate-200 hover:border-cyan-300 p-5 rounded-2xl transition-all duration-200 space-y-3 shadow-xs"
              >
                <div className="w-11 h-11 rounded-xl bg-cyan-50/70 border border-cyan-100 flex items-center justify-center">
                  {getIcon(tech.icon)}
                </div>

                <div className="space-y-1">
                  <h4 className="font-bold text-slate-900 text-sm">
                    {language === 'en' ? tech.name : tech.nameAm}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {tech.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
