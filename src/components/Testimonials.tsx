import React, { useState } from 'react';
import { 
  Star, 
  Quote, 
  CheckCircle2, 
  MessageSquare, 
  Sparkles, 
  ExternalLink,
  ThumbsUp
} from 'lucide-react';
import { TESTIMONIALS, CLINIC_INFO } from '../data/clinicData';
import { Language, Testimonial } from '../types';

interface TestimonialsProps {
  language: Language;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ language }) => {
  const [reviewsList, setReviewsList] = useState<Testimonial[]>(TESTIMONIALS);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [newAuthor, setNewAuthor] = useState('');
  const [newLocation, setNewLocation] = useState('');
  const [newTreatment, setNewTreatment] = useState('Cosmetic Smile Makeover');
  const [newComment, setNewComment] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [submittedThanks, setSubmittedThanks] = useState(false);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor || !newComment) return;

    const newRev: Testimonial = {
      id: `test-${Date.now()}`,
      patientName: newAuthor,
      location: newLocation || 'Addis Ababa',
      rating: newRating,
      treatment: newTreatment,
      comment: newComment,
      date: 'Just now',
      verified: true,
      avatarSeed: newAuthor
    };

    setReviewsList([newRev, ...reviewsList]);
    setSubmittedThanks(true);
    setTimeout(() => {
      setSubmittedThanks(false);
      setShowReviewModal(false);
      setNewAuthor('');
      setNewLocation('');
      setNewComment('');
    }, 2000);
  };

  return (
    <section id="reviews" className="py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 bg-cyan-50 border border-cyan-200 px-3.5 py-1.5 rounded-full text-cyan-800 text-xs font-bold uppercase tracking-wider">
            <Quote className="w-3.5 h-3.5 text-cyan-600" />
            <span>{language === 'en' ? 'Verified Patient Experiences' : 'የታካሚዎቻችን ምስክርነት'}</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight">
            {language === 'en' ? 'Loved by Thousands in Addis Ababa' : 'በሺዎች የሚቆጠሩ ደስተኛ ታካሚዎች'}
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            {language === 'en'
              ? 'Read genuine reviews from local families and international visitors who entrusted their smiles to Dr. Abiy Diriba.'
              : 'በዶ/ር አብይ ድሪባ የጥርስ ክሊኒክ የታከሙ ታካሚዎች የሰጡት አስተያየት።'}
          </p>
        </div>

        {/* Rating Summary Bar */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 max-w-4xl mx-auto mb-12 flex flex-wrap items-center justify-between gap-6 shadow-xl shadow-slate-200/80">
          <div className="flex items-center gap-4">
            <div className="text-4xl sm:text-5xl font-cinzel font-bold text-slate-950">5.0</div>
            <div>
              <div className="flex items-center text-amber-500 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-600 font-medium">
                {language === 'en' ? 'Over 450+ 5-Star Reviews across platforms' : 'ከ450 በላይ ባለ 5 ኮከብ ግምገማዎች'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setShowReviewModal(true)}
              className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-cyan-800 text-xs font-bold border border-slate-200 flex items-center gap-2 transition-all shadow-xs"
            >
              <MessageSquare className="w-4 h-4 text-cyan-600" />
              <span>{language === 'en' ? 'Share Your Experience' : 'አስተያየት ይጻፉ'}</span>
            </button>

            <a
              href={CLINIC_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center gap-2 transition-all shadow-md shadow-blue-600/20"
            >
              <span className="font-bold">f</span>
              <span>{language === 'en' ? 'Facebook Reviews' : 'በፌስቡክ ይመልከቱ'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviewsList.map((t) => (
            <div
              key={t.id}
              className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-7 flex flex-col justify-between space-y-4 hover:border-cyan-300 hover:shadow-lg transition-all shadow-xs"
            >
              <div className="space-y-3">
                {/* Rating & Date */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-500 font-medium">{t.date}</span>
                </div>

                {/* Treatment Pill */}
                <div className="inline-block bg-cyan-50 border border-cyan-200 text-cyan-800 text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                  {t.treatment}
                </div>

                {/* Comment */}
                <p className="text-sm text-slate-700 leading-relaxed italic">
                  "{language === 'am' && t.commentAm ? t.commentAm : t.comment}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-600 to-teal-500 text-white font-bold flex items-center justify-center text-sm shadow-md">
                  {t.patientName.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-1.5 font-bold text-slate-950 text-sm">
                    <span>{t.patientName}</span>
                    {t.verified && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600" />
                    )}
                  </div>
                  <p className="text-xs text-slate-500">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Review Submission Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in">
          <div className="relative w-full max-w-lg bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-5">
            <h3 className="text-xl font-bold text-slate-950">
              {language === 'en' ? 'Share Your Clinic Experience' : 'የህክምና አስተያየትዎን ያጋሩ'}
            </h3>

            {submittedThanks ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-950">
                  {language === 'en' ? 'Thank You for Your Feedback!' : 'አስተያየትዎ ስለደረሰን እናመሰግናለን!'}
                </h4>
                <p className="text-xs text-slate-600">
                  {language === 'en' ? 'Your review will help fellow patients in Addis Ababa.' : 'አስተያየትዎ ክሊኒካችንን ለማሻሻል ያግዛል።'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {language === 'en' ? 'Your Full Name' : 'ሙሉ ስም'}
                  </label>
                  <input
                    type="text"
                    required
                    value={newAuthor}
                    onChange={(e) => setNewAuthor(e.target.value)}
                    placeholder="e.g. Abebe Kebede"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {language === 'en' ? 'Location (e.g. Bole, Addis Ababa / Diaspora)' : 'አድራሻ'}
                  </label>
                  <input
                    type="text"
                    value={newLocation}
                    onChange={(e) => setNewLocation(e.target.value)}
                    placeholder="e.g. Megenagna, Addis Ababa"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {language === 'en' ? 'Treatment Received' : 'የታከሙት የህክምና አይነት'}
                  </label>
                  <select
                    value={newTreatment}
                    onChange={(e) => setNewTreatment(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-cyan-500"
                  >
                    <option value="Porcelain Veneers & Smile Design">Porcelain Veneers & Smile Design</option>
                    <option value="Dental Implants">Dental Implants</option>
                    <option value="Clear Aligners & Orthodontics">Clear Aligners & Orthodontics</option>
                    <option value="Laser Teeth Whitening">Laser Teeth Whitening</option>
                    <option value="Root Canal Therapy">Root Canal Therapy</option>
                    <option value="General Checkup & Clean">General Checkup & Clean</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {language === 'en' ? 'Your Rating' : 'ደረጃ'}
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setNewRating(star)}
                        className="p-1 focus:outline-none"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            star <= newRating ? 'fill-amber-400 text-amber-500' : 'text-slate-300'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {language === 'en' ? 'Your Review / Experience' : 'የህክምና አስተያየት'}
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Tell us about Dr. Abiy's care, comfort, and results..."
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setShowReviewModal(false)}
                    className="px-4 py-2 text-xs font-semibold text-slate-500 hover:text-slate-900"
                  >
                    {language === 'en' ? 'Cancel' : 'ይቅር'}
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs shadow-md shadow-cyan-900/10"
                  >
                    {language === 'en' ? 'Publish Review' : 'አስተያየቱን ይላኩ'}
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      )}
    </section>
  );
};
