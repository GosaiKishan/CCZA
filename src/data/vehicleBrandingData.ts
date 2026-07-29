export interface VehicleBrandingImage {
  id: string;
  category: 'design_concept' | 'final_install';
  title: string;
  vehicle: string;
  client: string;
  url: string;
  driveFallbackUrl?: string;
  alt: string;
  description: string;
}

export const VEHICLE_BRANDING_IMAGES: {
  designConcepts: VehicleBrandingImage[];
  finalInstalls: VehicleBrandingImage[];
} = {
  designConcepts: [
    {
      id: 'concept-1',
      category: 'design_concept',
      title: 'Militia Defense Red Truck CAD Vector Artwork',
      vehicle: 'Ford Ranger Double Cab',
      client: 'Militia Defense',
      url: 'https://lh3.googleusercontent.com/d/1B5Ge5B1UMEePu8wcn9UowDOlZIiL9CYN',
      alt: 'Militia Defense Red Truck Vehicle Branding CAD Design Concept',
      description: 'Digital CAD vector artwork blueprint mock-up for Militia Defense VIP Protection truck wrap.'
    },
    {
      id: 'concept-2',
      category: 'design_concept',
      title: 'Militia Defense White Sedan CAD Schematic',
      vehicle: 'BMW 3-Series Sedan',
      client: 'Militia Defense',
      url: 'https://lh3.googleusercontent.com/d/1jAmFchTlth5TsqfXN4jrqo6Xz7WgloBR',
      alt: 'Militia Defense White Sedan Vehicle Branding CAD Design Concept',
      description: 'Side profile vector schematic drawing for Militia Defense VIP Protection sedan livery.'
    }
  ],
  finalInstalls: [
    {
      id: 'install-1',
      category: 'final_install',
      title: 'Militia Defense Grey BMW Coupe Vinyl Graphics',
      vehicle: 'BMW Coupe',
      client: 'Militia Defense',
      url: 'https://lh3.googleusercontent.com/d/1xAqgY1xmFNeYCXaySj3iYPb482ZwGQIX',
      alt: 'Militia Defense Grey BMW Coupe Side Door Custom Branding Final Install',
      description: 'Completed matte black MD Militia Defense vinyl lettering and door branding installed in detailing bay.'
    },
    {
      id: 'install-2',
      category: 'final_install',
      title: 'Militia Defense Red Ford Ranger Wrap Install',
      vehicle: 'Ford Ranger Pickup',
      client: 'Militia Defense',
      url: 'https://lh3.googleusercontent.com/d/1nTdFbySZ436djqU9FoCDyE4jIVjpQ26T',
      alt: 'Militia Defense Red Ford Ranger Vehicle Branding Final Install',
      description: 'Finished side door branding wrap application for Militia Defense security vehicle.'
    }
  ]
};

export default VEHICLE_BRANDING_IMAGES;
