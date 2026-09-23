import { DentalService, BeforeAfterCase, Testimonial, FAQItem, ClinicTeamMember } from '../types';
import macroVeneersBefore from '../assets/images/macro_veneers_before_1790078493667.jpg';
import macroVeneersAfter from '../assets/images/macro_veneers_after_1790078508826.jpg';
import macroImplantBefore from '../assets/images/macro_implant_before_1790078522332.jpg';
import macroImplantAfter from '../assets/images/macro_implant_after_1790078537534.jpg';
import macroAlignerBefore from '../assets/images/macro_aligner_before_1790078551657.jpg';
import macroAlignerAfter from '../assets/images/macro_aligner_after_1790078563819.jpg';

export const CLINIC_INFO = {
  name: 'Dr. Abiy Specialty Dental Clinic',
  nameAm: 'ዶ/ር አብይ ስፔሻሊቲ የጥርስ ህክምና ክሊኒክ',
  tagline: 'Precision Artistry & Advanced Dental Care in Addis Ababa',
  taglineAm: 'ዘመናዊና ጥራት ያለው የጥርስ ህክምና አገልግሎት በአዲስ አበባ',
  doctorName: 'Dr. Abiy Diriba',
  doctorTitle: 'Expert Dental Surgeon & Specialist',
  doctorTitleAm: 'ኤክስፐርት የጥርስ ቀዶ ህክምና ስፔሻሊስት',
  phone1: '+251 91 189 3924',
  phone2: '+251 92 154 5450',
  localPhone1: '0911893924',
  localPhone2: '0921545450',
  whatsappPhone: '0911893924',
  whatsappFormatted: '+251 91 189 3924',
  whatsappUrl: 'https://wa.me/251911893924',
  telegramUsername: 'drabiyspecialitydentalclinic1',
  telegramHandle: '@drabiyspecialitydentalclinic1',
  telegramUrl: 'https://t.me/drabiyspecialitydentalclinic1',
  email: 'info@drabiydental.com',
  address: '3rd Floor, Maraki Tower, Megenagna (Between Zefmesh Grand Mall & Shola Traffic Light), Addis Ababa, Ethiopia',
  addressAm: 'መገናኛ፡ ማራኪ ታወር 3ኛ ፎቅ (ከዘፍመሽ ግራንድ ሞል ወደ ሾላ መብራት በሚወስደው መንገድ)',
  city: 'Addis Ababa',
  country: 'Ethiopia',
  facebookUrl: 'https://www.facebook.com/share/1MH1eayws7/?mibextid=wwXIfr',
  workingHours: [
    { days: 'Monday – Saturday', daysAm: 'ከሰኞ – ቅዳሜ', time: '8:30 AM – 6:30 PM (2:30 - 12:30 Local Time)' },
    { days: 'Sunday', daysAm: 'እሁድ', time: 'Emergency & Advance Appointments Only' },
  ],
  emergencyAvailable: '24/7 On-Call Emergency Line',
};

export const CLINIC_SERVICES: DentalService[] = [
  {
    id: 'cosmetic-veneers',
    title: 'Porcelain Veneers & Smile Design',
    titleAm: 'የፖርሲሊን ቬኒየርስ እና የፈገግታ ዲዛይን',
    category: 'cosmetic',
    tagline: 'Custom handcrafted ceramic shells for a luminous, symmetrical Hollywood smile.',
    description: 'Transform discolored, chipped, gapped, or uneven teeth with ultra-thin, natural-looking porcelain veneers tailored to your facial aesthetics.',
    descriptionAm: 'ያማረና የተስተካከለ ፈገግታ የሚያጎናፅፍ የቅርብ ጊዜ የፖርሲሊን ቬኒየርስ ህክምና።',
    duration: '2 - 3 Sessions',
    anesthesia: 'Mild Local Anesthetic / Painless',
    recovery: 'Immediate return to daily routine',
    benefits: [
      'Stain-resistant high-grade medical ceramic',
      'Preserves maximum natural tooth structure',
      'Personalized digital smile mock-up before placement',
      '15+ years long-term durability'
    ],
    benefitsAm: [
      'እድፍ የማይዝ ዘላቂ ሴራሚክ',
      'የጥርስን ተፈጥሯዊ ቅርጽ የሚጠብቅ',
      'ከህክምናው በፊት የዲጂታል ፈገግታ ቅድመ-እይታ'
    ],
    procedureSteps: [
      'Comprehensive 3D Smile Consultation & Facial Analysis',
      'Micro-thin enamel preparation & digital intraoral scanning',
      'Custom laboratory shade matching & precision fabrication',
      'Permanent painless bonding & final bite calibration'
    ],
    recommendedFor: 'Discolored, worn, chipped, or slightly misaligned front teeth seeking a permanent aesthetic upgrade.',
    iconName: 'Sparkles',
    featured: true,
  },
  {
    id: 'dental-implants',
    title: 'Advanced Dental Implants & Bone Grafting',
    titleAm: 'የጥርስ መተከል ህክምና (Dental Implants)',
    category: 'implants',
    tagline: 'Permanent, titanium-anchored replacement teeth that feel, look, and chew like natural teeth.',
    description: 'State-of-the-art implantology for single, multiple, or full-arch tooth loss utilizing 3D CBCT guided precision surgery for optimal stability and longevity.',
    descriptionAm: 'የተነቀሉ ጥርሶችን በቋሚነት የሚተካ አስተማማኝና ዘመናዊ የኢምፕላንት ህክምና።',
    duration: '1 Hour per implant + Osseointegration period',
    anesthesia: 'Computerized Local Anesthesia / Sedation Option',
    recovery: '2 - 4 Days mild recovery',
    benefits: [
      'Prevents facial bone loss & jaw shrinking',
      'No damage to adjacent healthy teeth',
      '100% natural chewing strength restored',
      'Lifetime warranty on Swiss/German titanium fixtures'
    ],
    benefitsAm: [
      'የመንጋጋ አጥንት እንዳይሸረሸር ይከላከላል',
      'አጠገብ ያሉ ጤናማ ጥርሶችን አይጎዳም',
      'ተፈጥሯዊ የማኘክ አቅምን ሙሉ በሙሉ ይመልሳል'
    ],
    procedureSteps: [
      'High-resolution 3D CBCT bone density scan & digital planning',
      'Minimally invasive implant fixture surgical placement',
      'Biological healing & osseointegration integration',
      'Custom zirconia aesthetic crown placement'
    ],
    recommendedFor: 'Patients missing one or more teeth looking for the gold-standard permanent replacement.',
    iconName: 'ShieldCheck',
    featured: true,
  },
  {
    id: 'clear-aligners-orthodontics',
    title: 'Orthodontics & Clear Aligners',
    titleAm: 'የጥርስ ማስተካከል (ኦርቶዶንቲክስ እና አላይነርስ)',
    category: 'orthodontics',
    tagline: 'Discreet invisible aligners and precision aesthetic braces for harmoniously aligned teeth.',
    description: 'Straighten crooked teeth, close gaps, and correct bite discrepancies using nearly invisible clear trays or low-profile sapphire ceramic brackets.',
    descriptionAm: 'የተዛቡና የተነባበሩ ጥርሶችን ያለ ህመም የሚያስተካክል ዘመናዊ የኦርቶዶንቲክስ ህክምና።',
    duration: '6 - 18 Months depending on case',
    anesthesia: 'None required',
    recovery: 'Comfortable & zero downtime',
    benefits: [
      'Virtually invisible clear aesthetic trays',
      'Removable for effortless eating & oral hygiene',
      'Digital 3D simulation of teeth movement from Day 1',
      'Gentle biological force reduction prevents soreness'
    ],
    benefitsAm: [
      'በቀላሉ የማይታይ ንጹህ አላይነር',
      'ለምግብ እና ለጥርስ መፋቅ በቀላሉ የሚወልቅ',
      'የጥርስ እንቅስቃሴን በ3D ቅድመ-እይታ ማየት የሚያስችል'
    ],
    procedureSteps: [
      '3D intraoral digital mapping & cephalometric analysis',
      'Custom aligner fabrication series sequence',
      'Periodic progress check-ins every 4-6 weeks',
      'Final retention therapy for permanent stability'
    ],
    recommendedFor: 'Crowded teeth, spacing, crossbites, overbites, and relapse cases for teens and adults.',
    iconName: 'Layers',
    featured: true,
  },
  {
    id: 'laser-teeth-whitening',
    title: 'Medical Laser Teeth Whitening',
    titleAm: 'በሌዘር ጥርስ የማንጣት ህክምና (Teeth Whitening)',
    category: 'cosmetic',
    tagline: 'Brighten your smile up to 8 shades in a single safe, monitored 45-minute clinical session.',
    description: 'Advanced dental photo-activation technology that gently removes deep coffee, tea, tobacco, and age-related enamel stains with zero enamel damage.',
    descriptionAm: 'በአንድ ክፍለ ጊዜ ውስጥ ጥርስዎን እስከ 8 ደርጃ ድረስ የሚያነጣ ዘመናዊ የሌዘር ህክምና።',
    duration: '45 - 60 Minutes',
    anesthesia: 'None needed / Desensitizing gel applied',
    recovery: 'Instant dazzling brightness',
    benefits: [
      'Instant clinical results in one visit',
      'Special desensitizing shield protects tooth nerves',
      'Long-lasting brilliance with home maintenance kit',
      'Safe on enamel, approved by international dental associations'
    ],
    benefitsAm: [
      'በአንድ ቀን ውስጥ የሚታይ ፈጣን ውጤት',
      'የጥርስን ገጽታ የማይጎዳ ደህንነቱ የተጠበቀ',
      'ለረጅም ጊዜ የሚቆይ ብሩህነት'
    ],
    procedureSteps: [
      'Shade baseline measurement & gingival barrier placement',
      'Application of clinical photo-active hydrogen whitening matrix',
      'Quad-wavelength cold blue laser activation (3 cycles x 15 min)',
      'Fluoride remineralization & final luster polish'
    ],
    recommendedFor: 'Yellowed, stained, or dull teeth before weddings, graduations, or professional events.',
    iconName: 'Sun',
    featured: true,
  },
  {
    id: 'microscopic-root-canal',
    title: 'Microscopic Endodontics (Painless Root Canal)',
    titleAm: 'የጥርስ ስር ህክምና (Root Canal Therapy)',
    category: 'endodontics',
    tagline: 'Save severely infected or painful teeth with precision rotary microscope technology.',
    description: 'Gentle, pain-relieving therapy that removes deep bacterial infection, cleans microscopic root canals, and saves your natural tooth from extraction.',
    descriptionAm: 'በከፍተኛ ህመም የተጠቃን ጥርስ ሳይነቀል የሚያድኑበት ህመም አልባ የስር ህክምና።',
    duration: '1 - 2 Visits (45 min each)',
    anesthesia: 'Targeted Deep Local Anesthetic (100% Pain-Free)',
    recovery: 'Immediate relief from acute throbbing pain',
    benefits: [
      'Preserves your natural tooth roots and jaw structure',
      'Rotary nickel-titanium instrumentation for 99% success',
      'Eliminates abscesses, facial swelling, and throbbing pain',
      'Sealed with biocompatible thermoplastic gutta-percha'
    ],
    benefitsAm: [
      'ተፈጥሯዊ ጥርስ እንዳይነቀል ያድናል',
      'የነርቭ ህመምን ወዲያውኑ ያስታግሳል',
      'በዘመናዊ ማይክሮስኮፕ የሚከናወን ጥንቃቄ የተሞላበት'
    ],
    procedureSteps: [
      'Digital diagnostic sensor x-ray & vitality assessment',
      'Painless local anesthesia & rubber dam isolation',
      'Microscopic canal debridement & antibacterial irrigation',
      'Hermetic 3D root sealing & core rebuild'
    ],
    recommendedFor: 'Deep dental decay, severe sensitivity to hot/cold, throbbing toothaches, and dental trauma.',
    iconName: 'Activity',
    featured: false,
  },
  {
    id: 'zirconia-crowns-bridges',
    title: 'Zirconia Crowns & Aesthetic Ceramic Bridges',
    titleAm: 'የዚርኮኒያ ክራውን እና ብሪጅ (Zirconia Crowns)',
    category: 'cosmetic',
    tagline: 'Metal-free, diamond-strength aesthetic crowns that blend seamlessly with natural enamel.',
    description: 'Restore broken, cracked, or root-canal treated teeth with CAD/CAM milled monolithic zirconia crowns offering unmatched strength and lifelike translucency.',
    descriptionAm: 'የተሰበሩና የተጎዱ ጥርሶችን በጥንካሬና በውበት የሚተካ የዚርኮኒያ ክራውን።',
    duration: '2 Appointments',
    anesthesia: 'Gentle Local Anesthetic',
    recovery: 'Immediate functionality',
    benefits: [
      '100% Biocompatible & completely metal-free (no dark gum lines)',
      'Extremely high fracture resistance',
      'Individually customized color shading & translucency',
      'Smooth surface protects opposing natural teeth from wear'
    ],
    benefitsAm: [
      'ከብረት ነጻ የሆነ ውብና ጠንካራ',
      'የድድ መስመር ላይ ጥቁር ጥላ አይፈጥርም',
      'ለረጅም አመታት የሚቆይ አስተማማኝ'
    ],
    procedureSteps: [
      'Precision conservative tooth preparation',
      'Optical digital intraoral scan (no messy putty impressions)',
      'Custom CAD/CAM fabrication & shade layering',
      'Permanent adhesive resin bonding'
    ],
    recommendedFor: 'Severely broken teeth, large failing fillings, root-canal treated teeth, and cosmetic reconstructions.',
    iconName: 'Crown',
    featured: true,
  },
  {
    id: 'wisdom-teeth-oral-surgery',
    title: 'Wisdom Teeth & Advanced Oral Surgery',
    titleAm: 'የጥበብ ጥርስ መንቀል እና የቀዶ ህክምና',
    category: 'surgery',
    tagline: 'Gentle, atraumatic surgical extractions and minor oral surgeries with rapid healing protocols.',
    description: 'Safe removal of impacted wisdom teeth, cyst enucleation, frenectomy, and pre-orthodontic surgical exposure with minimal post-operative discomfort.',
    descriptionAm: 'ህመም አልባ የጥበብ ጥርስ አወጣጥ እና የቀዶ ጥገና ህክምና።',
    duration: '30 - 50 Minutes',
    anesthesia: 'Advanced Local Anesthesia with Sedation options',
    recovery: '2 - 3 Days with post-care protocol',
    benefits: [
      'Prevents damage to adjacent molar roots and crowding',
      'Eliminates recurrent pericoronitis, jaw pain, and infection',
      'Atraumatic piezosurgery technique protects nerves',
      'Dedicated post-op recovery pack & round-the-clock doctor check-in'
    ],
    benefitsAm: [
      'የአጠገብ ጥርሶችን ጉዳት ይከላከላል',
      'ከህመም እና እብጠት ፈጣን እፎይታ ይሰጣል',
      'በቀስታ እና በጥንቃቄ የሚከናወን'
    ],
    procedureSteps: [
      '3D panoramic nerve mapping via digital x-ray',
      'Gentle targeted anesthesia for complete numbness',
      'Atraumatic tooth sectioning & gentle removal',
      'Collagen membrane placement & self-dissolving sutures'
    ],
    recommendedFor: 'Impacted wisdom teeth, severe jaw tightness, recurrent gum swelling around back molars.',
    iconName: 'Crosshair',
    featured: false,
  },
  {
    id: 'pediatric-gentle-dentistry',
    title: 'Pediatric Dentistry & Preventive Care',
    titleAm: 'የህጻናት የጥርስ ህክምና እና መከላከያ',
    category: 'pediatric',
    tagline: 'Warm, fun, and fear-free dental experiences tailored specifically for children and teens.',
    description: 'Gentle dental exams, cavity-prevention sealants, fluoride treatments, early orthodontic guidance, and gentle pediatric restorations in a welcoming atmosphere.',
    descriptionAm: 'ለህጻናት ምቹና ፍርሃት አልባ በሆነ መልኩ የሚሰጥ የጥርስ ህክምና።',
    duration: '30 - 40 Minutes',
    anesthesia: 'Child-friendly topical numbing gels',
    recovery: 'Zero downtime, happy smiling kids',
    benefits: [
      'Positive dental psychology building lifelong dental confidence',
      'Deep groove dental sealants reduce childhood cavities by 80%',
      'Early detection of jaw growth and bite misalignments',
      'Fun prize box & kid-friendly explanation approach'
    ],
    benefitsAm: [
      'ህፃናት የጥርስ ህክምናን እንዳይፈሩ የሚያግዝ',
      'የህጻናት ጥርስ እንዳይበሰብስ የሚከላከል',
      'ፍቅርና እንክብካቤ የተሞላበት አገልግሎት'
    ],
    procedureSteps: [
      'Friendly introductory "Tell-Show-Do" walkthrough',
      'Gentle tooth count & gentle ultrasonic plaque clean',
      'Protective fluoride enamel varnish application',
      'Fun oral hygiene demonstration for child and parents'
    ],
    recommendedFor: 'Children aged 1 to 16 for preventive checkups, cavity fillings, and early growth monitoring.',
    iconName: 'HeartHandshake',
    featured: false,
  }
];

export const BEFORE_AFTER_CASES: BeforeAfterCase[] = [
  {
    id: 'case-1',
    title: 'Hollywood Smile & Porcelain Veneers',
    treatment: '8 Upper & Lower E-Max Porcelain Veneers',
    treatmentAm: '8 የላይኛው እና የታችኛው የኢ-ማክስ ቬኒየርስ',
    description: 'Patient presented with tetracycline discoloration, uneven incisal edges, and midline asymmetry. Treated with ultra-thin feldspathic ceramic veneers.',
    duration: '2 Weeks (2 Appointments)',
    beforeImage: macroVeneersBefore,
    afterImage: macroVeneersAfter,
    doctorNotes: 'Achieved natural BL2 aesthetic brightness with delicate incisal translucency matching the patient\'s dental anatomy.',
    patientAge: '28 Years Old'
  },
  {
    id: 'case-2',
    title: 'Full Arch Dental Implant Rehabilitation',
    treatment: 'All-on-4 Swiss Titanium Implants with Zirconia Bridge',
    treatmentAm: 'ሙሉ የጥርስ መተከል እና የዚርኮኒያ ድልድይ',
    description: 'Severe periodontal tooth loss resolved with computerized guided implant surgery and immediate fixed aesthetic hybrid prosthesis.',
    duration: '3 Months Total',
    beforeImage: macroImplantBefore,
    afterImage: macroImplantAfter,
    doctorNotes: 'Restored 100% chewing capability, restored lip support, and elevated patient quality of life tremendously.',
    patientAge: '54 Years Old'
  },
  {
    id: 'case-3',
    title: 'Invisible Clear Aligners Orthodontics',
    treatment: '14-Stage Clear Aligner Series + Whitening',
    treatmentAm: 'በ14 ደረጃዎች የተጠናቀቀ ንጹህ አላይነር',
    description: 'Correction of severe anterior crowding, rotation on upper central incisors, and deep bite without metal wires.',
    duration: '7 Months',
    beforeImage: macroAlignerBefore,
    afterImage: macroAlignerAfter,
    doctorNotes: 'Ideal arch expansion and harmonious alignment completed with zero soft-tissue irritation.',
    patientAge: '31 Years Old'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    patientName: 'Kalkidan Mengistu',
    location: 'Bole, Addis Ababa',
    rating: 5,
    treatment: 'Porcelain Veneers & Smile Makeover',
    comment: 'Dr. Abiy is truly an artist. I had severe fluorosis staining and was always hiding my smile. After my veneer treatment at the Maraki Tower clinic, I cannot stop smiling. The clinic is ultra-modern and the care was completely painless!',
    commentAm: 'ዶ/ር አብይ በእውነት ምርጥ ባለሙያ ናቸው! ፈገግታዬ ሙሉ በሙሉ ተቀይሯል፡ ክሊኒኩ በጣም ዘመናዊና ፅዱ ነው።',
    date: '2 weeks ago',
    verified: true,
    avatarSeed: 'Kalkidan'
  },
  {
    id: 'test-2',
    patientName: 'Yohannes Bekele',
    location: 'Diaspora (Washington DC / Addis)',
    rating: 5,
    treatment: 'Dental Implants (Single & Bridge)',
    comment: 'I visited Dr. Abiy Specialty Dental Clinic while visiting Ethiopia from the US. The technology they use—3D scanning and Swiss implants—is on par with the best clinics in America, at a fraction of the cost. Dr. Abiy is extremely professional and gentle.',
    commentAm: 'ከአሜሪካ መጥቼ የጥርስ ኢምፕላንት ህክምና አድርጌያለሁ። አሰራራቸው አለም አቀፍ ደረጃውን የጠበቀና የሚያረካ ነው።',
    date: '1 month ago',
    verified: true,
    avatarSeed: 'Yohannes'
  },
  {
    id: 'test-3',
    patientName: 'Selamawit Tadesse',
    location: 'Megenagna, Addis Ababa',
    rating: 5,
    treatment: 'Laser Teeth Whitening & Clean',
    comment: 'Did laser teeth whitening right before my wedding ceremony. In less than one hour, my teeth were 7 shades whiter without any sensitivity. The staff is so welcoming and Dr. Abiy explained every step thoroughly.',
    commentAm: 'ለሰርጌ የጥርስ ማንጣት ህክምና አድርጌ ውጤቱ በጣም አስደስቶኛል። ምንም አይነት ህመም አልነበረውም።',
    date: '3 weeks ago',
    verified: true,
    avatarSeed: 'Selamawit'
  },
  {
    id: 'test-4',
    patientName: 'Dr. Dawit Haile',
    location: 'CMC, Addis Ababa',
    rating: 5,
    treatment: 'Microscopic Root Canal & Crown',
    comment: 'As a physician myself, I am very particular about sterile protocols and clinical precision. Dr. Abiy Specialty Dental Clinic exceeds hospital-grade standards. Saved my molar tooth with zero pain. Highly recommended!',
    commentAm: 'የክሊኒኩ የንጽህና አጠባበቅ እና የህክምና መሳሪያዎች እጅግ ዘመናዊ ናቸው። ጥርሴን ከነቀላ አድነውልኛል።',
    date: '2 months ago',
    verified: true,
    avatarSeed: 'Dawit'
  }
];

export const CLINIC_STATS = [
  { value: '12+', label: 'Years Specialty Experience', labelAm: 'የአመታት የሙያ ልምድ' },
  { value: '15,000+', label: 'Successful Smile Makeovers', labelAm: 'የተሳኩ የፈገግታ ህክምናዎች' },
  { value: '99.6%', label: 'Patient Satisfaction Rate', labelAm: 'የታካሚዎች እርካታ' },
  { value: '100%', label: 'Hospital-Grade Sterilization', labelAm: 'ዘመናዊ የንጽህና አጠባበቅ' },
];

export const FAQS: FAQItem[] = [
  {
    question: 'Where is Dr. Abiy Specialty Dental Clinic located in Addis Ababa?',
    questionAm: 'የዶ/ር አብይ የጥርስ ክሊኒክ የት ነው የሚገኘው?',
    answer: 'We are centrally located in Megenagna, 3rd Floor of Maraki Tower, on the main road between Zefmesh Grand Mall and Shola traffic light in Addis Ababa. Elevator access and secure parking are available.',
    answerAm: 'ክሊኒካችን የሚገኘው መገናኛ፡ ማራኪ ታወር 3ኛ ፎቅ (ከዘፍመሽ ግራንድ ሞል ወደ ሾላ መብራት በሚወስደው መንገድ) ላይ ነው። ሊፍት እና የመኪና ማቆሚያ አለው።',
    category: 'general'
  },
  {
    question: 'Are dental treatments at Dr. Abiy Clinic painful?',
    questionAm: 'የጥርስ ህክምናው ህመም አለው ወይ?',
    answer: 'Not at all! We use modern computer-controlled painless local anesthesia, micro-invasive techniques, and soft-tissue lasers to ensure 100% comfort during all procedures including root canals, extractions, and implants.',
    answerAm: 'በፍጹም ህመም የለውም! ህመም አልባ ዘመናዊ የማደንዘዣ ዘዴዎችን እና የሌዘር ቴክኖሎጂዎችን ስለምንጠቀም በምቾት ይታከማሉ።',
    category: 'procedures'
  },
  {
    question: 'How long do dental implants last?',
    questionAm: 'የተተከለ ጥርስ (Dental Implant) ለምን ያህል ጊዜ ይቆያል?',
    answer: 'With proper oral hygiene and regular 6-month checkups, high-grade Swiss and German titanium implants placed by Dr. Abiy have a 98%+ success rate and are designed to last a lifetime.',
    answerAm: 'ተገቢውን የጥርስ ንጽህና በመጠበቅ እና መደበኛ ምርመራ በማድረግ የተተከለ ጥርስ ለእድሜ ልክ ያገለግላል።',
    category: 'procedures'
  },
  {
    question: 'What payment methods do you accept at the clinic?',
    questionAm: 'ክፍያ በምን አይነት መንገድ መፈጸም ይቻላል?',
    answer: 'We accept all major Ethiopian payment methods including Telebirr, CBE Birr, Awash, BOA, local bank transfers, cash, as well as Visa and Mastercard for international and diaspora patients.',
    answerAm: 'በቴሌብር (Telebirr)፣ በሲቢኢ ብር (CBE Birr)፣ በባንክ ሂሳብ ዝውውር፣ በጥሬ ገንዘብ እንዲሁም በቪዛ እና ማስተር ካርድ ክፍያ መቀበል እንችላለን።',
    category: 'payments'
  },
  {
    question: 'Do I need an appointment or do you accept walk-ins?',
    questionAm: 'ቀጠሮ ማስያዝ ግዴታ ነው ወይስ በቀጥታ መምጣት ይቻላል?',
    answer: 'While we always accommodate acute emergency cases immediately, we strongly recommend booking an advance appointment online or via phone (+251 91 189 3924) to ensure zero waiting time.',
    answerAm: 'ድንገተኛ ታካሚዎችን ወዲያውኑ የምናስተናግድ ቢሆንም፡ ጊዜዎን ለመቆጠብ በስልክ (+251 91 189 3924) ወይም በድረ-ገጻችን አስቀድመው ቀጠሮ እንዲያስይዙ እንመክራለን።',
    category: 'general'
  },
  {
    question: 'What should I do in case of a severe dental emergency?',
    questionAm: 'ድንገተኛ ከባድ የጥርስ ህመም ወይም አደጋ ሲያጋጥም ምን ማድረግ አለብኝ?',
    answer: 'Call our direct emergency line immediately at +251 91 189 3924 or +251 92 154 5450. We provide urgent pain relief, trauma stabilization, and emergency appointments.',
    answerAm: 'ወዲያውኑ በ +251 91 189 3924 ወይም +251 92 154 5450 ይደውሉልን። የድንገተኛ ህክምና አገልግሎት እንሰጣለን።',
    category: 'emergency'
  }
];

export const CLINIC_TECHNOLOGY = [
  {
    name: '3D Intraoral Digital Scanner',
    nameAm: '3D ዲጂታል የጥርስ ስካነር',
    desc: 'Takes 6,000 optical captures per second for ultra-accurate 3D digital impressions without messy, gag-inducing impression paste.',
    icon: 'ScanFace'
  },
  {
    name: 'Low-Radiation HD Panoramic CBCT',
    nameAm: 'ዝቅተኛ ጨረር ያለው 3D ኤክስ-ሬይ',
    desc: 'Ultra-low radiation 3D volumetric jaw imaging providing pinpoint millimeter precision for nerve mapping and implant placement.',
    icon: 'Radio'
  },
  {
    name: 'Soft-Tissue Biolase Dental Laser',
    nameAm: 'ዘመናዊ የሌዘር የጥርስ ህክምና መሳሪያ',
    desc: 'Enables bloodless, suture-free gum contouring, deep sterilization, and instant cold-sore healing.',
    icon: 'Zap'
  },
  {
    name: 'Hospital-Grade Class-B Autoclave',
    nameAm: 'ሆስፒታል ደረጃ የህክምና እቃዎች ማምከኛ',
    desc: 'Vacuum pressurized multi-cycle sterilization ensuring 100% viral and bacterial decontamination for patient safety.',
    icon: 'Shield'
  }
];

export const DENTAL_SYMPTOMS_TRIAGE = [
  {
    id: 'symptom-1',
    label: 'Missing One or Multiple Teeth',
    labelAm: 'የተነቀለ ወይም የጎደለ ጥርስ',
    urgency: 'Medium',
    recommended: 'Advanced Dental Implants or Ceramic Bridge',
    description: 'Replacing missing teeth preserves jawbone density and stops neighbouring teeth from shifting.',
    estimatedVisits: '2 - 3 Visits'
  },
  {
    id: 'symptom-2',
    label: 'Severe Throbbing Toothache / Hot & Cold Sensitivity',
    labelAm: 'ከባድ የጥርስ ቁርጠት / የነርቭ ህመም',
    urgency: 'High (Immediate Attention)',
    recommended: 'Microscopic Painless Root Canal & Zirconia Crown',
    description: 'Indicates deep nerve inflammation or infection requiring gentle canal disinfection to save the tooth.',
    estimatedVisits: '1 - 2 Visits'
  },
  {
    id: 'symptom-3',
    label: 'Yellow, Stained, or Dull Enamel',
    labelAm: 'የጠቆረ ወይም ቢጫ የሆነ የጥርስ ቀለም',
    urgency: 'Elective Aesthetic',
    recommended: 'Laser Teeth Whitening or Porcelain Veneers',
    description: 'Quick clinical photo-laser activation to lift stubborn coffee, fluorosis, or tea stains.',
    estimatedVisits: '1 Single Session (45 min)'
  },
  {
    id: 'symptom-4',
    label: 'Crooked, Crowded, or Gapped Teeth',
    labelAm: 'የተነባበሩ ወይም የተዛቡ ጥርሶች',
    urgency: 'Elective Orthodontic',
    recommended: 'Clear Aligners or Precision Aesthetic Braces',
    description: 'Gradual, invisible alignment to balance bite aesthetics and chewing distribution.',
    estimatedVisits: 'Monthly check-ins'
  },
  {
    id: 'symptom-5',
    label: 'Bleeding Gums / Bad Breath / Tartar Buildup',
    labelAm: 'የድድ መድማት / የድድ እብጠት',
    urgency: 'Moderate',
    recommended: 'Deep Ultrasonic Scaling & Periodontal Laser Therapy',
    description: 'Eliminates calcified tartar, stops gum bleeding, and protects natural tooth roots.',
    estimatedVisits: '1 Visit (30 min)'
  },
  {
    id: 'symptom-6',
    label: 'Painful Back Molar / Wisdom Tooth Swelling',
    labelAm: 'የጥበብ ጥርስ ህመም ወይም እብጠት',
    urgency: 'High',
    recommended: '3D Panoramic Exam & Gentle Atraumatic Extraction',
    description: 'Prevents impaction pressure, jaw cysts, and damage to the second molar tooth.',
    estimatedVisits: '1 Visit'
  }
];

export const CLINIC_TEAM: ClinicTeamMember[] = [
  {
    id: 'team-1',
    name: 'Meseret Ageru',
    nameAm: 'መሰረት አገሩ',
    role: 'Senior Dental Therapy',
    roleAm: 'ሲኒየር ዴንታል ቴራፒስት',
    department: 'Clinical Dental Therapy & Prevention',
    departmentAm: 'ክሊኒካል ዴንታል ቴራፒ እና መከላከያ',
    description: 'Expert dental therapist specializing in advanced preventive oral healthcare, periodontal maintenance, and precision therapy.',
    descriptionAm: 'በጥርስ ጤና ክብካቤ፣ በመከላከያ እና ቴራፒ ህክምና ከፍተኛ ልምድ ያላቸው ባለሙያ።',
    badge: 'Senior Specialist'
  },
  {
    id: 'team-2',
    name: 'Rufael Kassahun',
    nameAm: 'ሩፋኤል ካሳሁን',
    role: 'Junior Dental Technology',
    roleAm: 'ጁኒየር ዴንታል ቴክኖሎጂስት',
    department: 'Dental Laboratory & Prosthetics',
    departmentAm: 'ዴንታል ላብራቶሪ እና ፕሮስቴቲክስ',
    description: 'Specialized in dental laboratory craftsmanship, precision prosthesis, crown fitting, and aesthetic appliances.',
    descriptionAm: 'በዴንታል ላብራቶሪ እና ጥርስ ቴክኖሎጂ ትክክለኛ ስራዎች የተሰማሩ ባለሙያ።',
    badge: 'Dental Tech'
  },
  {
    id: 'team-3',
    name: 'Sr. Elshaday Meheret',
    nameAm: 'ሲ/ር ኤልሻዳይ ምህረት',
    role: 'Senior Clinical Dental Nurse',
    roleAm: 'ሲኒየር ክሊኒካል ዴንታል ነርስ',
    department: 'Surgical Assistance & Patient Care',
    departmentAm: 'የቀዶ ህክምና ረዳት እና የታካሚ ክብካቤ',
    description: 'Dedicated clinical nursing specialist ensuring sterile surgical protocols, chairside doctor support, and gentle patient comfort.',
    descriptionAm: 'የቀዶ ህክምና ረዳትነት እና የታካሚዎች ምቹ እንክብካቤ የሚሰጡ ነርስ።',
    badge: 'Clinical Nurse'
  },
  {
    id: 'team-4',
    name: 'Sr. Emebet Gizaw',
    nameAm: 'ሲ/ር እመቤት ግዛው',
    role: 'Senior Clinical Dental Nurse',
    roleAm: 'ሲኒየር ክሊኒካል ዴንታል ነርስ',
    department: 'Sterilization & Operatory Care',
    departmentAm: 'የማምከን ስራ እና ክሊኒካል ድጋፍ',
    description: 'Specialist in clinical operatory sterilization protocols, infection control management, and compassionate chairside care.',
    descriptionAm: 'በክሊኒክ ንጽህና እና ማምከን ከፍተኛ ጥንቃቄ የሚያደርጉ እንዲሁም የህክምና ድጋፍ የሚሰጡ ነርስ።',
    badge: 'Clinical Nurse'
  },
  {
    id: 'team-5',
    name: 'Hayat Nesru',
    nameAm: 'ሀያት ነስሩ',
    role: 'Junior Dental Therapy',
    roleAm: 'ጁኒየር ዴንታል ቴራፒስት',
    department: 'Dental Therapy & Oral Hygiene',
    departmentAm: 'ዴንታል ቴራፒ እና የአፍ ንጽህና',
    description: 'Focused on therapeutic oral hygiene, patient dental education, fluoride treatments, and gentle routine maintenance.',
    descriptionAm: 'በአፍና ጥርስ ንጽህና፣ መከላከያ ህክምና እና ምክር አገልግሎት የሚሰጡ ባለሙያ።',
    badge: 'Dental Therapy'
  },
  {
    id: 'team-6',
    name: 'Ruth Girma',
    nameAm: 'ሩት ግርማ',
    role: 'Junior Bachelor Dental Science',
    roleAm: 'ጁኒየር ባችለር ዴንታል ሳይንስ',
    department: 'Dental Science & Clinical Diagnostics',
    departmentAm: 'ዴንታል ሳይንስ እና ክሊኒካል ምርመራ',
    description: 'Qualified Dental Science practitioner supporting clinical examinations, diagnostic workflows, and modern patient treatments.',
    descriptionAm: 'በጥርስ ሳይንስ ሙያ የተመረቁና በክሊኒካል ምርመራና ህክምና የሚተጉ ባለሙያ።',
    badge: 'B.Sc. Dental Science'
  }
];
