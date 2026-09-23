export type Language = 'en' | 'am';

export type ServiceCategory = 
  | 'all'
  | 'cosmetic'
  | 'implants'
  | 'orthodontics'
  | 'endodontics'
  | 'pediatric'
  | 'surgery';

export interface DentalService {
  id: string;
  title: string;
  titleAm: string;
  category: ServiceCategory;
  tagline: string;
  description: string;
  descriptionAm: string;
  duration: string;
  anesthesia: string;
  recovery: string;
  benefits: string[];
  benefitsAm: string[];
  procedureSteps: string[];
  recommendedFor: string;
  iconName: string;
  featured?: boolean;
}

export interface BeforeAfterCase {
  id: string;
  title: string;
  treatment: string;
  treatmentAm: string;
  description: string;
  duration: string;
  beforeImage: string;
  afterImage: string;
  doctorNotes: string;
  patientAge: string;
}

export interface Testimonial {
  id: string;
  patientName: string;
  location: string;
  rating: number;
  treatment: string;
  comment: string;
  commentAm?: string;
  date: string;
  verified: boolean;
  avatarSeed: string;
}

export interface AppointmentFormData {
  fullName: string;
  phone: string;
  email: string;
  serviceId: string;
  preferredDate: string;
  preferredTimeSlot: string;
  notes: string;
  isFirstVisit: boolean;
  hasEmergency: boolean;
}

export interface FAQItem {
  question: string;
  questionAm: string;
  answer: string;
  answerAm: string;
  category: 'general' | 'payments' | 'procedures' | 'emergency';
}

export interface ClinicTeamMember {
  id: string;
  name: string;
  nameAm?: string;
  role: string;
  roleAm?: string;
  department: string;
  departmentAm?: string;
  description?: string;
  descriptionAm?: string;
  badge?: string;
}
