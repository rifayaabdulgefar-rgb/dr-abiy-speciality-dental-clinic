import React, { useState, useEffect } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  User, 
  Phone, 
  Mail, 
  FileText, 
  AlertTriangle, 
  Sparkles, 
  Share2,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  MessageCircle,
  Send
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { CLINIC_SERVICES, CLINIC_INFO } from '../data/clinicData';
import { Language, AppointmentFormData } from '../types';
import { ClinicLogo } from './ClinicLogo';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
  language: Language;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialServiceId,
  language,
}) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    phone: '',
    email: '',
    serviceId: initialServiceId || CLINIC_SERVICES[0].id,
    preferredDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    preferredTimeSlot: '10:00 AM (4:00 Local Time)',
    notes: '',
    isFirstVisit: true,
    hasEmergency: false,
  });

  const [bookingRef, setBookingRef] = useState('');

  useEffect(() => {
    if (initialServiceId) {
      setFormData((prev) => ({ ...prev, serviceId: initialServiceId }));
    }
  }, [initialServiceId]);

  if (!isOpen) return null;

  const timeSlots = [
    '09:00 AM (3:00 Local Time)',
    '10:30 AM (4:30 Local Time)',
    '12:00 PM (6:00 Local Time)',
    '02:30 PM (8:30 Local Time)',
    '04:00 PM (10:00 Local Time)',
    '05:30 PM (11:30 Local Time)',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) return;

    const ref = `ABIY-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(ref);
    setStep('success');

    // Confetti celebration
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#06b6d4', '#14b8a6', '#38bdf8', '#f59e0b'],
      });
    } catch {
      // safe fallback
    }
  };

  const selectedService = CLINIC_SERVICES.find((s) => s.id === formData.serviceId) || CLINIC_SERVICES[0];

  const whatsappMessage = encodeURIComponent(
    `🦷 *APPOINTMENT BOOKING DETAILS* - Dr. Abiy Specialty Dental Clinic\n` +
    `-----------------------------------------\n` +
    `• *Patient Name:* ${formData.fullName}\n` +
    `• *Contact Phone:* ${formData.phone}\n` +
    `• *Service/Treatment:* ${selectedService.title}\n` +
    `• *Preferred Date:* ${formData.preferredDate}\n` +
    `• *Time Slot:* ${formData.preferredTimeSlot}\n` +
    `• *Emergency Case:* ${formData.hasEmergency ? 'YES (Acute Urgency)' : 'Standard Appointment'}\n` +
    `• *First Time Patient:* ${formData.isFirstVisit ? 'Yes' : 'Returning Patient'}\n` +
    `• *Notes/Symptoms:* ${formData.notes || 'None provided'}\n` +
    `• *Booking Reference:* ${bookingRef}\n` +
    `-----------------------------------------\n` +
    `Clinic Location: Maraki Tower 3rd Floor, Megenagna, Addis Ababa\n` +
    `Direct WhatsApp Line: 0911893924`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[92vh] overflow-y-auto space-y-6">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'form' ? (
          <>
            {/* Modal Header with Clinic Logo */}
            <div className="space-y-2 pr-8">
              <ClinicLogo size="sm" language={language} variant="light" />
              
              <div className="pt-1">
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-slate-950">
                  {language === 'en' ? 'Book Your Dental Consultation' : 'የጥርስ ህክምና ቀጠሮ ያስይዙ'}
                </h3>
                <p className="text-xs text-slate-600 mt-0.5 font-medium">
                  {language === 'en' 
                    ? '3rd Floor, Maraki Tower, Megenagna • WhatsApp: 0911893924' 
                    : 'ማራኪ ታወር 3ኛ ፎቅ፡ መገናኛ፡ አዲስ አበባ • ዋትስአፕ፡ 0911893924'}
                </p>
              </div>
            </div>

            {/* Quick WhatsApp & Telegram Alternative Banner */}
            <div className="flex flex-wrap items-center justify-between gap-2 p-3 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-xs text-slate-800 font-semibold">
                {language === 'en' ? 'Direct booking via chat:' : 'በቀጥታ በመልእክት ቀጠሮ ያስይዙ:'}
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={CLINIC_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shrink-0 transition-colors flex items-center gap-1 shadow-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
                <a
                  href={CLINIC_INFO.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-white text-xs font-bold shrink-0 transition-colors flex items-center gap-1 shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Telegram</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Emergency Alert Checkbox */}
              <div className="bg-amber-50 border border-amber-200 p-3 rounded-xl flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                  <span className="text-xs text-amber-900 font-semibold">
                    {language === 'en' ? 'Is this an acute emergency/toothache?' : 'ድንገተኛ ከፍተኛ የጥርስ ህመም ነው?'}
                  </span>
                </div>
                <input
                  type="checkbox"
                  id="hasEmergency"
                  checked={formData.hasEmergency}
                  onChange={(e) => setFormData({ ...formData, hasEmergency: e.target.checked })}
                  className="w-4 h-4 rounded border-amber-400 text-amber-600 focus:ring-amber-500"
                />
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {language === 'en' ? 'Desired Dental Treatment / Goal' : 'የሚፈልጉት የህክምና አይነት'}
                </label>
                <select
                  value={formData.serviceId}
                  onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                  className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600"
                >
                  {CLINIC_SERVICES.map((s) => (
                    <option key={s.id} value={s.id}>
                      {language === 'en' ? s.title : s.titleAm}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date and Time Slot Picker */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {language === 'en' ? 'Preferred Date' : 'የቀጠሮ ቀን'}
                  </label>
                  <input
                    type="date"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {language === 'en' ? 'Preferred Time Slot' : 'የቀጠሮ ሰዓት'}
                  </label>
                  <select
                    value={formData.preferredTimeSlot}
                    onChange={(e) => setFormData({ ...formData, preferredTimeSlot: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600"
                  >
                    {timeSlots.map((ts, idx) => (
                      <option key={idx} value={ts}>
                        {ts}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Patient Contact Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {language === 'en' ? 'Your Full Name' : 'ሙሉ ስም'} *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Almaz Bekele"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl pl-9 pr-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {language === 'en' ? 'Phone Number (Ethiopia / Int.)' : 'ስልክ ቁጥር'} *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="0911... or +251..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl pl-9 pr-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600"
                    />
                  </div>
                </div>
              </div>

              {/* Email & First Visit */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {language === 'en' ? 'Email Address (Optional)' : 'ኢሜል (አስፈላጊ ከሆነ)'}
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      placeholder="name@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl pl-9 pr-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-6">
                  <input
                    type="checkbox"
                    id="isFirstVisit"
                    checked={formData.isFirstVisit}
                    onChange={(e) => setFormData({ ...formData, isFirstVisit: e.target.checked })}
                    className="w-4 h-4 rounded border-slate-300 text-cyan-600 focus:ring-cyan-500"
                  />
                  <label htmlFor="isFirstVisit" className="text-xs text-slate-700 font-medium cursor-pointer">
                    {language === 'en' ? 'First time visiting Dr. Abiy Clinic' : 'በክሊኒካችን የመጀመሪያ ጊዜዬ ነው'}
                  </label>
                </div>
              </div>

              {/* Optional Notes */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {language === 'en' ? 'Brief Description of Symptoms or Inquiries' : 'ተጨማሪ ማብራሪያ (ካለዎት)'}
                </label>
                <textarea
                  rows={2}
                  placeholder={language === 'en' ? 'e.g. Broken tooth, interested in Hollywood smile, bleeding gums...' : 'ለምሳሌ፡ የጥርስ መነቀል፡ የፈገግታ ማስተካከል...'}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 text-white font-bold text-sm shadow-lg shadow-cyan-900/15 transition-all flex items-center justify-center gap-2 active:scale-[0.99]"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{language === 'en' ? 'Confirm Appointment Request' : 'ቀጠሮውን ያረጋግጡ'}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </form>
          </>
        ) : (
          /* Confirmation Screen */
          <div className="py-4 text-center space-y-6 animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-3xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200 shadow-sm">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-bold text-cyan-700 uppercase tracking-wider">
                {language === 'en' ? 'Appointment Request Created' : 'ቀጠሮዎ በተሳካ ሁኔታ ተመዝግቧል'}
              </span>
              <h3 className="font-cinzel text-2xl font-bold text-slate-950">
                {language === 'en' ? `Welcome, ${formData.fullName}!` : `እንኳን ደህና መጡ፣ ${formData.fullName}!`}
              </h3>
              <p className="text-xs text-slate-600">
                {language === 'en' 
                  ? `Booking Reference Code:` 
                  : `የቀጠሮ መለያ ቁጥር:`} <strong className="text-cyan-800 font-mono text-sm">{bookingRef}</strong>
              </p>
            </div>

            {/* Appointment Summary Box */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-left space-y-3 text-xs sm:text-sm">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500">{language === 'en' ? 'Treatment' : 'ህክምና'}:</span>
                <span className="font-bold text-slate-900">{selectedService.title}</span>
              </div>
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500">{language === 'en' ? 'Date & Time' : 'ቀን እና ሰዓት'}:</span>
                <span className="font-semibold text-cyan-800">{formData.preferredDate} at {formData.preferredTimeSlot}</span>
              </div>
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500">{language === 'en' ? 'Location' : 'አድራሻ'}:</span>
                <span className="font-semibold text-slate-900 text-right">Maraki Tower 3rd Floor, Megenagna</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">{language === 'en' ? 'Patient Phone' : 'ስልክ'}:</span>
                <span className="font-semibold text-slate-900">{formData.phone}</span>
              </div>
            </div>

            {/* Direct Confirmation Links (WhatsApp & Telegram) */}
            <div className="space-y-2.5">
              <a
                href={`https://wa.me/251911893924?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2.5 shadow-md shadow-emerald-900/15 border border-emerald-500 transition-colors active:scale-[0.99]"
              >
                <MessageCircle className="w-5 h-5 text-emerald-100" />
                <span>{language === 'en' ? 'Send to Clinic WhatsApp (0911893924)' : 'ዝርዝሩን ለክሊኒኩ ዋትስአፕ ይላኩ (0911893924)'}</span>
                <ExternalLink className="w-4 h-4 text-emerald-100" />
              </a>

              <a
                href={`https://t.me/drabiyspecialitydentalclinic1?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-sm flex items-center justify-center gap-2.5 shadow-md shadow-sky-900/15 border border-sky-400 transition-colors active:scale-[0.99]"
              >
                <Send className="w-4 h-4 text-sky-100" />
                <span>{language === 'en' ? 'Send to Clinic Telegram (@drabiyspecialitydentalclinic1)' : 'ዝርዝሩን ለቴሌግራም ይላኩ (@drabiyspecialitydentalclinic1)'}</span>
                <ExternalLink className="w-4 h-4 text-sky-100" />
              </a>

              <button
                type="button"
                onClick={onClose}
                className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors"
              >
                {language === 'en' ? 'Done & Return to Website' : 'ተጠናቋል'}
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
