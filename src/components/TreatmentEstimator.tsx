import React, { useState } from 'react';
import { 
  Stethoscope, 
  Sparkles, 
  AlertCircle, 
  Clock, 
  CheckCircle, 
  Calendar, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { DENTAL_SYMPTOMS_TRIAGE, CLINIC_SERVICES } from '../data/clinicData';
import { Language } from '../types';

interface TreatmentEstimatorProps {
  language: Language;
  onOpenBooking: (serviceId?: string) => void;
}

export const TreatmentEstimator: React.FC<TreatmentEstimatorProps> = ({
  language,
  onOpenBooking,
}) => {
  const [selectedSymptomId, setSelectedSymptomId] = useState(DENTAL_SYMPTOMS_TRIAGE[0].id);

  const activeSymptom = DENTAL_SYMPTOMS_TRIAGE.find((s) => s.id === selectedSymptomId) || DENTAL_SYMPTOMS_TRIAGE[0];

  // Match corresponding service if applicable
  const matchedService = CLINIC_SERVICES.find((srv) => 
    activeSymptom.recommended.toLowerCase().includes(srv.title.toLowerCase().slice(0, 8))
  ) || CLINIC_SERVICES[0];

  return (
    <section id="triage" className="py-24 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 bg-cyan-50 border border-cyan-200 px-3.5 py-1.5 rounded-full text-cyan-800 text-xs font-bold uppercase tracking-wider">
            <Stethoscope className="w-3.5 h-3.5 text-cyan-600" />
            <span>{language === 'en' ? 'Interactive Smile Assessment & Triage' : 'ፈጣን የጥርስ ምርመራ እና መፍትሄዎች'}</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight">
            {language === 'en' ? 'Find the Ideal Treatment for You' : 'ለጥርስዎ ትክክለኛውን ህክምና ይምረጡ'}
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            {language === 'en'
              ? 'Select your current dental concern below to review Dr. Abiy’s clinical recommendations, visit roadmap, and next steps.'
              : 'ያለዎትን የጥርስ ሁኔታ በመምረጥ የተመከረውን ህክምናና መፍትሄ ይመልከቱ።'}
          </p>
        </div>

        {/* Triage Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Symptom Selection List */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider px-1">
              {language === 'en' ? '1. Select Your Dental Concern' : '1. ያለዎትን ሁኔታ ይምረጡ'}
            </h3>

            <div className="space-y-2.5">
              {DENTAL_SYMPTOMS_TRIAGE.map((symptom) => (
                <button
                  key={symptom.id}
                  type="button"
                  onClick={() => setSelectedSymptomId(symptom.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between gap-3 ${
                    selectedSymptomId === symptom.id
                      ? 'bg-cyan-50/80 border-cyan-400 text-slate-950 shadow-sm ring-1 ring-cyan-400 font-bold'
                      : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700 shadow-xs'
                  }`}
                >
                  <div className="space-y-1">
                    <span className="font-semibold text-sm block">
                      {language === 'en' ? symptom.label : symptom.labelAm}
                    </span>
                    <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full inline-block ${
                      symptom.urgency.includes('High')
                        ? 'bg-rose-50 text-rose-700 border border-rose-200'
                        : symptom.urgency.includes('Medium') || symptom.urgency.includes('Moderate')
                        ? 'bg-amber-50 text-amber-800 border border-amber-200'
                        : 'bg-cyan-50 text-cyan-800 border border-cyan-200'
                    }`}>
                      {symptom.urgency}
                    </span>
                  </div>

                  <ArrowRight className={`w-4 h-4 shrink-0 transition-transform ${
                    selectedSymptomId === symptom.id ? 'text-cyan-700 translate-x-1' : 'text-slate-400'
                  }`} />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Dynamic Diagnosis & Recommendation Box */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/80 space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-cyan-700 uppercase tracking-wider">
                    {language === 'en' ? '2. Clinical Recommendation' : '2. የተመከረ የህክምና እቅድ'}
                  </span>
                  <h4 className="text-xl sm:text-2xl font-bold text-slate-950">
                    {activeSymptom.recommended}
                  </h4>
                </div>

                <div className="p-3 bg-cyan-50 rounded-2xl border border-cyan-200 text-cyan-700">
                  <Sparkles className="w-6 h-6" />
                </div>
              </div>

              {/* Assessment Explanation */}
              <div className="space-y-2">
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {activeSymptom.description}
                </p>
              </div>

              {/* Key Roadmap Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1">
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-semibold">
                    <Clock className="w-4 h-4 text-cyan-600" />
                    <span>{language === 'en' ? 'Estimated Visits' : 'የሚወስደው የቀጠሮ ብዛት'}</span>
                  </div>
                  <div className="text-base font-bold text-slate-950">
                    {activeSymptom.estimatedVisits}
                  </div>
                </div>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1">
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-semibold">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>{language === 'en' ? 'Comfort Level' : 'የህክምና ምቾት'}</span>
                  </div>
                  <div className="text-base font-bold text-emerald-700">
                    100% Painless Anesthesia
                  </div>
                </div>
              </div>

              {/* Treatment What to Expect Box */}
              <div className="bg-cyan-50/60 border border-cyan-200 p-4 rounded-2xl space-y-2">
                <h5 className="text-xs font-bold text-cyan-900 uppercase tracking-wider">
                  {language === 'en' ? 'What to Expect at Dr. Abiy Clinic' : 'በክሊኒካችን ምን ይጠብቃሉ?'}
                </h5>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan-600 shrink-0" />
                    <span>High-definition 3D digital diagnosis & customized treatment cost estimate</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan-600 shrink-0" />
                    <span>Strict sterilization protocols and gentle modern techniques</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan-600 shrink-0" />
                    <span>Detailed post-care instructions and continuous support</span>
                  </li>
                </ul>
              </div>

              {/* Fast Action CTA */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onOpenBooking(matchedService.id)}
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 text-white font-bold text-base shadow-lg shadow-cyan-900/15 transition-all flex items-center justify-center gap-3 active:scale-95"
                >
                  <Calendar className="w-5 h-5 text-white" />
                  <span>{language === 'en' ? `Book Priority Consultation for This Case` : 'ለዚህ ሁኔታ ቀጠሮ ያስይዙ'}</span>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
