export interface DetailingService {
  id: string;
  name: string;
  description: string;
  startingPrice: string;
  duration: string;
  features: string[];
  image: string;
}

export interface QuoteRequest {
  fullName: string;
  email: string;
  phone: string;
  vehicleMake: string;
  vehicleModel: string;
  vehicleYear: string;
  serviceSelected: string;
  packageDetails?: string;
  additionalNotes?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  vehicle: string;
  rating: number;
  comment: string;
  date: string;
  isVerified: boolean;
}
