import image54 from '../assets/images/54.png';
import image55 from '../assets/images/55.png';
import image56 from '../assets/images/56.png';
import image57 from '../assets/images/57.png';
import image58 from '../assets/images/58.png';
import image59 from '../assets/images/59.png';
import image60 from '../assets/images/60.png';
import image61 from '../assets/images/61.png';
import image62 from '../assets/images/62.png';
import image63 from '../assets/images/63.png';
import image64 from '../assets/images/64.png';
import image65 from '../assets/images/65.png';
import image66 from '../assets/images/66.png';
import image67 from '../assets/images/67.png';
import image68 from '../assets/images/68.png';
import image69 from '../assets/images/69.png';
import image70 from '../assets/images/70.png';
import image71 from '../assets/images/71.png';

export const UPLOADED_PRODUCT_IMAGES = {
  '54': image54,
  '55': image55,
  '56': image56,
  '57': image57,
  '58': image58,
  '59': image59,
  '60': image60,
  '61': image61,
  '62': image62,
  '63': image63,
  '64': image64,
  '65': image65,
  '66': image66,
  '67': image67,
  '68': image68,
  '69': image69,
  '70': image70,
  '71': image71,
} as const;

export type ProductImage = keyof typeof UPLOADED_PRODUCT_IMAGES;
