import React from 'react';
import { 
  Award, 
  CheckCircle2, 
  Sparkles, 
  GraduationCap, 
  Heart, 
  Phone, 
  Calendar, 
  ExternalLink,
  ShieldCheck,
  MessageCircle,
  Send,
  Building,
  Star,
  Stethoscope
} from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { Language } from '../types';
import clinicLogo from '../assets/images/abiy_clinic_logo_1789643645470.jpg';

interface DoctorProfileProps {
  language: Language;
  onOpenBooking: () => void;
}

export const DoctorProfile: React.FC<DoctorProfileProps> = ({
  language,
  onOpenBooking,
}) => {
  const credentials = [
    {
      title: language === 'en' ? 'Expert Dental Surgeon' : 'ኤክስፐርት የጥርስ ቀዶ ህክምና ስፔሻሊስት',
      desc: language === 'en' ? 'Advanced surgical mastery in Oral Implantology, Complex Extractions & Cosmetic Restorations.' : 'በጥርስ ቀዶ ህክምና፣ ኢምፕላንት እና ኮስሜቲክ ፈገግታ ዲዛይን ከፍተኛ ልምድ ያላቸው።'
    },
    {
      title: language === 'en' ? 'Active Member, Ethiopian Dental Association' : 'የኢትዮጵያ የጥርስ ህክምና ማህበር አባል',
      desc: language === 'en' ? 'Committed to evidence-based practice and international clinical protocols.' : 'አለም አቀፍ የህክምና ደረጃዎችን በጥብቅ የሚከተሉ።'
    },
    {
      title: language === 'en' ? 'Painless Clinical Mastery' : 'ህመም አልባ ህክምና ልምድ',
      desc: language === 'en' ? 'Over 12 years perfecting gentle, anxiety-free dental techniques in Addis Ababa.' : 'ከ12 አመታት በላይ ፍርሃትና ህመም አልባ የጥርስ ህክምና የሰጡ።'
    }
  ];

  return (
    <section id="doctor" className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Doctor Credentials & Accreditation Card (No Photo) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Luxury Clinical Accreditation Frame */}
              <div className="relative rounded-3xl p-1 bg-gradient-to-b from-cyan-500 via-teal-500 to-slate-300 shadow-xl shadow-slate-200/80">
                <div className="relative rounded-[22px] overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-cyan-950 p-6 sm:p-8 text-white space-y-6">
                  
                  {/* Top Seal & Crest Header */}
                  <div className="flex items-center justify-between border-b border-cyan-800/40 pb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-16 h-16 rounded-2xl bg-white p-1.5 shadow-lg shadow-cyan-950/50 ring-2 ring-cyan-400/40 shrink-0">
                        <img
                          src={clinicLogo}
                          alt="Dr. Abiy Specialty Dental Clinic Official Crest"
                          className="w-full h-full object-contain"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div>
                        <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-cyan-400">
                          <ShieldCheck className="w-3.5 h-3.5" />
                          <span>{language === 'en' ? 'Verified Specialist' : 'የተረጋገጠ ስፔሻሊስት'}</span>
                        </div>
                        <h3 className="font-cinzel text-xl font-bold text-white tracking-wide">
                          {language === 'en' ? CLINIC_INFO.doctorName : 'ዶ/ር አብይ ድሪባ'}
                        </h3>
                        <p className="text-xs text-cyan-200 font-medium">
                          {language === 'en' ? CLINIC_INFO.doctorTitle : CLINIC_INFO.doctorTitleAm}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Clinical Accreditation Highlights */}
                  <div className="space-y-3">
                    <div className="bg-white/5 border border-cyan-500/20 rounded-xl p-3.5 flex items-start gap-3">
                      <Award className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold text-white">
                          {language === 'en' ? 'Expert Dental Surgeon & Clinical Director' : 'ኤክስፐርት የጥርስ ቀዶ ህክምና ስፔሻሊስት'}
                        </h4>
                        <p className="text-[11px] text-slate-300 mt-0.5">
                          {language === 'en'
                            ? 'Senior practitioner leading advanced surgical, implantology, and cosmetic restorative treatments.'
                            : 'በተወሳሰበ የጥርስ ቀዶ ጥገና እና ኢምፕላንት ህክምና ከፍተኛ ልምድ ያላቸው።'}
                        </p>
                      </div>
                    </div>

                    <div className="bg-white/5 border border-cyan-500/20 rounded-xl p-3.5 flex items-start gap-3">
                      <Building className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold text-white">
                          {language === 'en' ? 'Maraki Tower 3rd Floor Operatory' : 'ማራኪ ታወር 3ኛ ፎቅ ክሊኒክ'}
                        </h4>
                        <p className="text-[11px] text-slate-300 mt-0.5">
                          {language === 'en'
                            ? 'Megenagna, Addis Ababa • Modern sterile operatory suites equipped with digital 3D dental technology.'
                            : 'መገናኛ፣ አዲስ አበባ • በዘመናዊ የህክምና መሳሪያዎች የተሟላ።'}
                        </p>
                      </div>
                    </div>

                    <div className="bg-white/5 border border-cyan-500/20 rounded-xl p-3.5 flex items-start gap-3">
                      <Stethoscope className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold text-white">
                          {language === 'en' ? 'Ethiopian Dental Association Member' : 'የኢትዮጵያ የጥርስ ህክምና ማህበር አባል'}
                        </h4>
                        <p className="text-[11px] text-slate-300 mt-0.5">
                          {language === 'en'
                            ? 'Adhering strictly to international clinical safety, sterile barrier protocols, and gentle pain-free standards.'
                            : 'አለም አቀፍ የደህንነት እና የንጽህና መስፈርቶችን በጥብቅ የሚከተሉ።'}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Direct Contact Bar */}
                  <div className="pt-2 border-t border-cyan-900/60 flex items-center justify-between gap-3 text-xs">
                    <a
                      href={CLINIC_INFO.telegramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 px-3 rounded-xl bg-sky-500/20 hover:bg-sky-500/30 text-sky-200 border border-sky-400/30 font-bold flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Telegram</span>
                    </a>
                    <a
                      href={CLINIC_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 px-3 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-200 border border-emerald-400/30 font-bold flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>

                </div>
              </div>

              {/* Floating Experience Badge */}
              <div className="absolute -top-4 -left-4 bg-white border border-slate-200 py-2.5 px-4 rounded-2xl shadow-lg flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-cyan-500 animate-ping" />
                <div className="text-xs font-bold text-slate-950">
                  <span>12+ Years Practice</span>
                  <span className="block text-[10px] text-cyan-700 font-medium">Addis Ababa</span>
                </div>
              </div>

              {/* Hospital Affiliation Pill */}
              <div className="absolute -bottom-3 -right-3 bg-white border border-slate-200 py-2 px-3.5 rounded-2xl shadow-lg flex items-center gap-2 text-xs text-teal-800 font-bold">
                <ShieldCheck className="w-4 h-4 text-teal-600" />
                <span>Specialty Clinic Director</span>
              </div>
            </div>
          </div>

          {/* Doctor Bio and Philosophy Column */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 bg-cyan-50 border border-cyan-200 px-3.5 py-1.5 rounded-full text-cyan-800 text-xs font-bold uppercase tracking-wider">
                <GraduationCap className="w-3.5 h-3.5 text-cyan-600" />
                <span>{language === 'en' ? 'Clinical Leadership' : 'የህክምና ባለሙያ'}</span>
              </div>

              <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight">
                {language === 'en' ? 'Meet Dr. Abiy Diriba' : 'ዶ/ር አብይ ድሪባ'}
              </h2>

              <p className="text-sm sm:text-base text-cyan-800 font-semibold">
                {language === 'en'
                  ? 'Expert Dental Surgeon & Specialist in Oral Implantology & Aesthetic Transformations'
                  : 'ኤክስፐርት የጥርስ ቀዶ ህክምና ስፔሻሊስት'}
              </p>
            </div>

            {/* Doctor's Quote / Philosophy */}
            <div className="relative bg-white border-l-4 border-cyan-600 p-5 rounded-r-2xl text-slate-700 text-sm sm:text-base leading-relaxed italic border border-slate-200/80 shadow-xs">
              {language === 'en' ? (
                <>
                  "A healthy, radiant smile is not merely about dental mechanics—it is about restoring personal confidence, comfort, and joy. At our specialty clinic in Maraki Tower, we treat every patient like family with absolute gentleness, transparent communication, and uncompromised digital precision."
                </>
              ) : (
                <>
                  "ፈገግታ የሰው ልጅ የተፈጥሮ ጌጥ ነው። ክሊኒካችን እያንዳንዱን ታካሚ በከፍተኛ አክብሮት፣ በፍቅር እና ያለ ምንም ህመም ዘመናዊ የጥርስ ህክምና ያገኛል።"
                </>
              )}
            </div>

            {/* Credential Cards */}
            <div className="space-y-3 pt-2">
              {credentials.map((cred, idx) => (
                <div key={idx} className="flex items-start gap-3.5 bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
                  <div className="p-1.5 rounded-lg bg-cyan-50 text-cyan-600 shrink-0 mt-0.5 border border-cyan-100">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{cred.title}</h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{cred.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Cluster */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onOpenBooking}
                className="py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 text-white font-bold text-sm shadow-md shadow-cyan-900/15 transition-all flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>{language === 'en' ? 'Consult with Dr. Abiy' : 'ከዶ/ር አብይ ጋር ቀጠሮ ያስይዙ'}</span>
              </button>

              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white border border-emerald-500/40 text-sm font-bold flex items-center gap-2 transition-all shadow-md shadow-emerald-950/20"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{language === 'en' ? 'WhatsApp (0911893924)' : 'ዋትስአፕ (0911893924)'}</span>
              </a>

              {/* Telegram Contact Button */}
              <a
                href={CLINIC_INFO.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white border border-sky-400/40 text-sm font-bold flex items-center gap-2 transition-all shadow-md shadow-sky-950/20"
              >
                <Send className="w-4 h-4" />
                <span>Telegram: {CLINIC_INFO.telegramHandle}</span>
              </a>

              <a
                href={CLINIC_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 shadow-xs text-sm font-semibold flex items-center gap-2 transition-colors"
              >
                <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs">f</span>
                <span>Facebook</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
