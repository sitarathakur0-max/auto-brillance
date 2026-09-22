import { FaqItem, ServiceDetail } from '../types';

export const SERVICES_LIST: ServiceDetail[] = [
  {
    id: 'deep-interior-cleaning',
    title: 'Deep Interior Cleaning',
    shortDescription:
      'A thorough cleaning process dedicated to cabin surfaces, upholstery, and hard-to-reach areas for a refreshed, clean interior atmosphere.',
    pageId: 'interior',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/3/33/Mercedes-Benz_W213_%28E-class%29_interior.jpg',
    imageAlt: 'Pristine vehicle interior cabin showcasing immaculate leather upholstery and console',
    highlights: [
      'Thorough vacuuming and surface wipe-down',
      'Dedicated care for interior cabin textures',
      'Removal of everyday dust, debris, and surface grime',
      'Refined and pleasant interior driving environment',
    ],
  },
  {
    id: 'exterior-washing',
    title: 'Exterior Washing',
    shortDescription:
      'Careful, hand-focused exterior washing that cleans bodywork, wheels, and glass while preserving the vehicle’s surface finish.',
    pageId: 'exterior',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/b/bb/Aktivschaum.JPG',
    imageAlt: 'Rich exterior washing foam covering vehicle bodywork during deep wash stage',
    highlights: [
      'Comprehensive exterior bodywork wash',
      'Attention to wheels, wheel arches, and exterior glass',
      'Removal of road film, atmospheric dust, and exterior dirt',
      'Clean foundation prepared for polishing and finishing',
    ],
  },
  {
    id: 'polishing',
    title: 'Polishing',
    shortDescription:
      'A meticulous machine or hand polishing procedure focused on refining paint surface clarity, enhancing gloss, and restoring depth to the vehicle finish.',
    pageId: 'polishing',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/e/e2/AZ_Auto_Detailing.jpg',
    imageAlt: 'Automotive detailing specialist polishing vehicle exterior panel with machine buffer',
    highlights: [
      'Refining paintwork surface presentation',
      'Enhancing clear coat gloss and color richness',
      'Smoothing micro-texture for a mirror-like finish',
      'Targeted attention across all visible painted panels',
    ],
  },
  {
    id: 'finishing',
    title: 'Finishing',
    shortDescription:
      'The critical final phase where trims, glass, tires, and exterior accents receive precision inspection and detailing for an immaculate handover.',
    pageId: 'polishing',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/0/0e/Close-up_view_of_a_sophisticated_car_headlight_reveals_intricate_components_and_reflections.jpg',
    imageAlt: 'Immaculate vehicle finish highlighting crystalline headlight components and paint reflections',
    highlights: [
      'Final visual inspection under high-clarity lighting',
      'Streak-free glass cleaning inside and out',
      'Conditioning of exterior rubber, plastic, and chrome trims',
      'Flawless overall vehicle presentation and delivery readiness',
    ],
  },
];

export const FAQ_LIST: FaqItem[] = [
  {
    category: 'general',
    question: 'What is vehicle detailing and how does it differ from a standard car wash?',
    answer:
      'Vehicle detailing is a meticulous, comprehensive cleaning and refining process that covers both interior surfaces and exterior bodywork. Unlike an automated or quick exterior car wash, detailing focuses on deep interior cleaning, meticulous hand washing, paint polishing to improve gloss, and dedicated finishing of every visible detail to present the vehicle in its best possible aesthetic condition.',
  },
  {
    category: 'interior',
    question: 'What is included in deep interior cleaning?',
    answer:
      'Our deep interior cleaning is focused on cleaning every accessible area inside your vehicle cabin. This involves comprehensive vacuuming of carpets, seating, and boot spaces, detailed wiping and cleaning of dashboard panels, center consoles, door cards, glass surfaces, and interior trims to eliminate dust, dirt, and everyday buildup, creating a crisp, pleasant driving environment.',
  },
  {
    category: 'exterior',
    question: 'What makes professional exterior washing at Auto Brillance effective?',
    answer:
      'Professional exterior washing is conducted using gentle, high-lubricity methods that safely lift and rinse away road grime, brake dust, and environmental contamination. Attention is given to exterior bodywork panels, wheels, glass, and crevices, creating a spotless surface and an even, clean appearance.',
  },
  {
    category: 'polishing',
    question: 'What does polishing achieve for my vehicle’s paintwork?',
    answer:
      'Polishing is an automotive refinement process aimed at enhancing the clarity, depth, and gloss of your vehicle’s exterior paint. By working over the clear coat surface with dedicated polishing techniques, it revives luster, enhances reflections, and delivers a sleek, mirror-like aesthetic finish.',
  },
  {
    category: 'polishing',
    question: 'What is the role of finishing in vehicle detailing?',
    answer:
      'Finishing represents the meticulous final stage of our detailing service. Once washing and polishing are complete, finishing ensures that window glass is crystal-clear without streaks, exterior plastics and rubbers are neatly dressed, wheels and tires are neatly presented, and the entire vehicle undergoes a final visual inspection.',
  },
  {
    category: 'enquiries',
    question: 'How do I enquire about pricing, scheduling, and vehicle availability?',
    answer:
      'Because every vehicle condition and detailing requirement is unique, please contact Auto Brillance directly by telephone at +33 4 78 51 29 64 or submit an enquiry through our online contact form. We are located at 67 Avenue Jean Jaurès in Lyon (69007) and will gladly discuss your vehicle’s detailing needs.',
  },
  {
    category: 'enquiries',
    question: 'Where is Auto Brillance located in Lyon?',
    answer:
      'Auto Brillance is located at 67 Avenue Jean Jaurès, 69007 Lyon, France. You can reach us directly by telephone at +33 4 78 51 29 64 to arrange your detailing appointment or make an enquiry.',
  },
  {
    category: 'general',
    question: 'Why is regular detailing beneficial for a vehicle’s presentation?',
    answer:
      'Routine detailing removes damaging road grime, dust accumulation, and grime from surfaces before they diminish the visual quality of the vehicle. It maintains high aesthetic standards, keeps the cabin clean and enjoyable for driver and passengers, and ensures the vehicle always looks polished and well-cared-for.',
  },
];
