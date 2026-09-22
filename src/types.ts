export type PageId =
  | 'home'
  | 'services'
  | 'interior'
  | 'exterior'
  | 'polishing'
  | 'about'
  | 'faq'
  | 'contact';

export interface BusinessInfo {
  name: string;
  category: string;
  address: string;
  street: string;
  city: string;
  postalCode: string;
  country: string;
  phone: string;
  phoneRaw: string;
  rating: number;
  reviewsCount: number;
  tagline: string;
  heroHeadline: string;
  heroSupportingCopy: string;
}

export const BUSINESS_DATA: BusinessInfo = {
  name: 'Auto Brillance',
  category: 'Car Detailing',
  address: '67 Avenue Jean Jaurès, 69007 Lyon, France',
  street: '67 Avenue Jean Jaurès',
  city: 'Lyon',
  postalCode: '69007',
  country: 'France',
  phone: '+33 4 78 51 29 64',
  phoneRaw: '+33478512964',
  rating: 4.9,
  reviewsCount: 41,
  tagline: 'Vehicle Detailing in Lyon',
  heroHeadline: 'Bring Back the Brilliance',
  heroSupportingCopy:
    'Professional vehicle detailing with deep interior cleaning, exterior washing, polishing and finishing services in Lyon.',
};

export interface ServiceDetail {
  id: string;
  title: string;
  shortDescription: string;
  pageId: PageId;
  image: string;
  imageAlt: string;
  highlights: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'general' | 'interior' | 'exterior' | 'polishing' | 'enquiries';
}
