export interface ContactFormData {
  name: string;
  mobile: string;
  email: string;
  country: string;
  product: string;
  quantity: string;
  message: string;
}

export const MAIN_PRODUCTS = [
  { id: 'cable', name: 'Cable Trays & Ducts' },
  { id: 'earthing', name: 'Earthing Materials' },
  { id: 'solar', name: 'Solar Mounting Structures' },
  { id: 'galvanized', name: 'Hot-Dip Galvanized Products' },
  { id: 'towers', name: 'Towers & Power Infrastructure' },
];
