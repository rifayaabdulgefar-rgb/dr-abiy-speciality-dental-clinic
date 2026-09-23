/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { Services } from './components/Services';
import { DoctorProfile } from './components/DoctorProfile';
import { ClinicTeam } from './components/ClinicTeam';
import { TreatmentEstimator } from './components/TreatmentEstimator';
import { ClinicTechnology } from './components/ClinicTechnology';
import { Testimonials } from './components/Testimonials';
import { LocationContact } from './components/LocationContact';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { FloatingActions } from './components/FloatingActions';
import { Language } from './types';

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);

  const handleOpenBooking = (serviceId?: string) => {
    setSelectedServiceId(serviceId);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-cyan-500 selection:text-white">
      {/* Top Header & Navigation */}
      <Header
        language={language}
        setLanguage={setLanguage}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* Breathtaking Front Background Hero Section */}
        <Hero
          language={language}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Interactive Before & After Transformation Slider */}
        <BeforeAfterSlider
          language={language}
          onOpenBooking={handleOpenBooking}
        />

        {/* Specialized Dental Services Portfolio */}
        <Services
          language={language}
          onOpenBooking={handleOpenBooking}
        />

        {/* Meet Dr. Abiy Diriba (Expert Dental Surgeon) */}
        <DoctorProfile
          language={language}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Clinical Staff & Specialists Team (Without Photos) */}
        <ClinicTeam
          language={language}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Interactive Smile Assessment & Symptom Triage */}
        <TreatmentEstimator
          language={language}
          onOpenBooking={handleOpenBooking}
        />

        {/* State-of-the-Art Technology & Sterilization Suite */}
        <ClinicTechnology
          language={language}
        />

        {/* Patient Reviews & Experiences */}
        <Testimonials
          language={language}
        />

        {/* Location & Landmark Navigation in Megenagna Maraki Tower */}
        <LocationContact
          language={language}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Frequently Asked Questions */}
        <FAQ
          language={language}
        />
      </main>

      {/* Footer */}
      <Footer
        language={language}
        onOpenBooking={handleOpenBooking}
      />

      {/* Interactive Appointment Booking Modal */}
      <AppointmentModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialServiceId={selectedServiceId}
        language={language}
      />

      {/* Floating Action Buttons (WhatsApp, Quick Call, Book Visit, Scroll Top) */}
      <FloatingActions
        language={language}
        onOpenBooking={() => handleOpenBooking()}
      />
    </div>
  );
}
