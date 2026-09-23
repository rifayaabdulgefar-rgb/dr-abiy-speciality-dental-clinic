import React from 'react';
import { 
  Users, 
  Stethoscope, 
  Sparkles, 
  Activity, 
  ShieldCheck, 
  GraduationCap, 
  HeartHandshake, 
  CheckCircle2,
  Calendar,
  MessageCircle,
  Send,
  Building
} from 'lucide-react';
import { CLINIC_INFO, CLINIC_TEAM } from '../data/clinicData';
import { Language } from '../types';

interface ClinicTeamProps {
  language: Language;
  onOpenBooking: () => void;
}

export const ClinicTeam: React.FC<ClinicTeamProps> = ({ language, onOpenBooking }) => {
  // Department color and icon helper
  const getDepartmentMeta = (role: string) => {
    if (role.toLowerCase().includes('therapy')) {
      return {
        badgeBg: 'bg-emerald-50 text-emerald-800 border-emerald-200',
        dotBg: 'bg-emerald-500',
        icon: Stethoscope,
      };
    }
    if (role.toLowerCase().includes('technology')) {
      return {
        badgeBg: 'bg-indigo-50 text-indigo-800 border-indigo-200',
        dotBg: 'bg-indigo-500',
        icon: Activity,
      };
    }
    if (role.toLowerCase().includes('nurse') || role.toLowerCase().includes('sr.')) {
      return {
        badgeBg: 'bg-cyan-50 text-cyan-800 border-cyan-200',
        dotBg: 'bg-cyan-500',
        icon: HeartHandshake,
      };
    }
    return {
      badgeBg: 'bg-teal-50 text-teal-800 border-teal-200',
      dotBg: 'bg-teal-500',
      icon: GraduationCap,
    };
  };

  return (
    <section id="team" className="py-20 bg-white relative overflow-hidden border-t border-slate-200">
      {/* Subtle Background Ambience */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-cyan-50/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-emerald-50/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 bg-cyan-50 border border-cyan-200 px-4 py-1.5 rounded-full text-cyan-800 text-xs font-bold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5 text-cyan-600" />
            <span>{language === 'en' ? 'Clinical Staff & Specialists' : 'የክሊኒኩ የህክምና ቡድን'}</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight">
            {language === 'en' ? 'Our Expert Dental Team' : 'የተካኑ የጥርስ ህክምና ባለሙያዎቻችን'}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {language === 'en'
              ? 'Led by Dr. Abiy Diriba (Expert Dental Surgeon), our multi-disciplinary team combines certified therapy, dental technology, clinical nursing, and precision science to deliver gentle, hospital-grade care.'
              : 'በዶ/ር አብይ ድሪባ (ኤክስፐርት የጥርስ ቀዶ ህክምና ስፔሻሊስት) የሚመራው ቡድናችን በከፍተኛ ስነ-ምግባር እና ሙያዊ ብቃት ታካሚዎችን ያገለግላል።'}
          </p>
        </div>

        {/* Lead Doctor Banner Card */}
        <div className="mb-10 bg-gradient-to-r from-slate-900 via-cyan-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-cyan-900/30">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>{language === 'en' ? 'Clinical Director & Lead Surgeon' : 'ዋና የህክምና ዳይሬክተር እና ቀዶ ጥገና ሐኪም'}</span>
              </div>
              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {language === 'en' ? 'Dr. Abiy Diriba' : 'ዶ/ር አብይ ድሪባ'}
              </h3>
              <p className="text-cyan-200 text-sm sm:text-base font-semibold">
                {language === 'en' ? 'Expert Dental Surgeon & Specialty Clinical Lead' : 'ኤክስፐርት የጥርስ ቀዶ ህክምና ስፔሻሊስት'}
              </p>
              <p className="text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed pt-1">
                {language === 'en'
                  ? 'Over 12 years of clinical excellence in advanced oral surgery, dental implantology, cosmetic restorations, and painless treatment protocols at Maraki Tower, Addis Ababa.'
                  : 'ከ12 አመታት በላይ በተወሳሰበ የጥርስ ቀዶ ጥገና፣ ኢምፕላንት እና ህመም አልባ ህክምና የዳበረ ልምድ ያላቸው ባለሙያ።'}
              </p>
            </div>

            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={onOpenBooking}
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md active:scale-95 flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>{language === 'en' ? 'Book with Dr. Abiy' : 'ከዶ/ር አብይ ጋር ቀጠሮ'}</span>
              </button>
              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-all border border-emerald-500/40 flex items-center gap-1.5"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
              <a
                href={CLINIC_INFO.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs sm:text-sm transition-all border border-sky-400/40 flex items-center gap-1.5"
              >
                <Send className="w-4 h-4" />
                <span>Telegram</span>
              </a>
            </div>
          </div>
        </div>

        {/* 6 Clinical Staff Cards Grid (Clean, photo-free, typographic and structural craftsmanship) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLINIC_TEAM.map((member, index) => {
            const meta = getDepartmentMeta(member.role);
            const Icon = meta.icon;

            return (
              <div
                key={member.id}
                id={`team-member-${index + 1}`}
                className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:border-cyan-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Top Bar: Number Tag & Department Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="w-7 h-7 rounded-lg bg-slate-100 border border-slate-200 text-slate-600 text-xs font-bold flex items-center justify-center group-hover:bg-cyan-600 group-hover:text-white group-hover:border-cyan-600 transition-colors">
                      0{index + 1}
                    </span>

                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${meta.badgeBg}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${meta.dotBg}`} />
                      {member.badge}
                    </span>
                  </div>

                  {/* Icon & Role Header */}
                  <div className="flex items-start gap-3 pt-1">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-700 group-hover:text-cyan-700 group-hover:bg-cyan-50 group-hover:border-cyan-200 transition-all shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-950 group-hover:text-cyan-900 transition-colors">
                        {language === 'en' ? member.name : (member.nameAm || member.name)}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-cyan-800">
                        {language === 'en' ? member.role : (member.roleAm || member.role)}
                      </p>
                    </div>
                  </div>

                  {/* Department & Description */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                      <Building className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{language === 'en' ? member.department : (member.departmentAm || member.department)}</span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {language === 'en' ? member.description : (member.descriptionAm || member.description)}
                    </p>
                  </div>
                </div>

                {/* Card Footer: Standard of Care Checkmark */}
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                  <span className="flex items-center gap-1 text-teal-700 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                    <span>{language === 'en' ? 'Licensed Specialist' : 'የተረጋገጠ ባለሙያ'}</span>
                  </span>
                  <span className="text-slate-400">Maraki Tower</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Hospital-Grade Team Commitment Note */}
        <div className="mt-12 bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                {language === 'en' ? 'Synchronized Multi-Disciplinary Practice' : 'የተቀናጀ የህክምና ቡድን አገልግሎት'}
              </h4>
              <p className="text-xs text-slate-600">
                {language === 'en' 
                  ? 'Our senior dental therapists, technicians, nurses, and dental science graduates collaborate seamlessly on every patient visit.'
                  : 'የእኛ ሲኒየር ቴራፒስቶች፣ ቴክኖሎጂስቶች፣ ነርሶችና የጥርስ ሳይንስ ምሩቃን ተቀናጅተው ፈጣንና ጥራት ያለው እንክብካቤ ያደርጋሉ።'}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenBooking}
            className="px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 text-xs font-bold transition-all shrink-0 shadow-xs"
          >
            {language === 'en' ? 'Schedule Visit with the Team' : 'ከቡድኑ ጋር ቀጠሮ ያስይዙ'}
          </button>
        </div>

      </div>
    </section>
  );
};
