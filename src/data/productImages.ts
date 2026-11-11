import perforatedcabletray from '../assets/images/Perforatedcabletray.png';
import Laddercabletray from '../assets/images/laddercabletray.png';
import Racewaycabletray from '../assets/images/racewaycabletray.png';
import cableduct from '../assets/images/cableduct.png';
import earthflat from '../assets/images/earthflat.png';
import earthelectrode from '../assets/images/earthingelectrode.png';

import copper from '../assets/images/copper.png';
import steel from '../assets/images/steel.png';
import channel from '../assets/images/channel.png';
import mast from '../assets/images/mast.png';
import pipes from '../assets/images/pipes.png';
import crash from '../assets/images/crash.png';
import handrail from '../assets/images/handrail.png';
import solar from '../assets/images/solar.png';
import grat from '../assets/images/grat.png';
import beam from '../assets/images/beam1.jpeg';
import transmission from '../assets/images/transmission2.png';
import telecom from '../assets/images/telecom4.png';
import mona from '../assets/images/mono1.png';
import Insideperoratedcabletray from '../assets/images/cabletray1.png';
import cabletray2 from '../assets/images/cabletray2.png';
import cabletray3 from '../assets/images/cabletray3.png';
import cabletray4 from '../assets/images/cabletray4.png';
import cabletray5 from '../assets/images/cabletray5.png';
import cable18 from '../assets/images/cable18.png';
import cabletray8 from '../assets/images/cabletray8.png';
import cabletray9 from '../assets/images/cabletray9.png';
import cable10 from "../assets/images/cable10.png";
import cable11 from '../assets/images/cable11.png';
import cable12 from '../assets/images/cable12.png';
import cable13 from '../assets/images/cable13.png';
import cable14 from '../assets/images/cable14.png';
import cable15 from '../assets/images/cable15.png';
import cable16 from '../assets/images/cable16.png';
import cable17 from '../assets/images/cable17.png';
import image54 from '../assets/images/laddercabletray.png';
import image55 from '../assets/images/Perforatedcabletray.png';

import image57 from '../assets/images/57.png';
import image58 from '../assets/images/laddercabletray.png';
import image59 from '../assets/images/racewaycabletray.png';
import image60 from '../assets/images/60.png';
import image61 from '../assets/images/mast.png';
import image62 from '../assets/images/copper1.jpeg';
import image63 from '../assets/images/hdg1.jpeg';
import image64 from '../assets/images/solar3.jpeg';
import image65 from '../assets/images/65.png';
import image66 from '../assets/images/66.png';
import image67 from '../assets/images/67.png';
import image68 from '../assets/images/68.png';
import image69 from '../assets/images/69.png';
import image70 from '../assets/images/70.png';
import image71 from '../assets/images/d3.jpeg';
import power from '../assets/images/power.jpg';
import junbox from '../assets/images/JunBox.jpeg';
import wire from '../assets/images/Wire.png';
import copper1 from '../assets/images/copper1.jpeg';
import tor from '../assets/images/Tor.jpeg';
import beam2 from '../assets/images/beam2.jpeg';
import plates1 from '../assets/images/plate1.jpeg';
import solar1 from '../assets/images/solar1.jpg';
import roof from '../assets/images/roof.png';
import solar2 from '../assets/images/solar2.png';
import Car from '../assets/images/car.png';
import walk from '../assets/images/walk.png';
import power1 from '../assets/images/power1.png';
import sub from '../assets/images/sub.png';

export const UPLOADED_PRODUCT_IMAGES = {
  'perforated-cable-tray': perforatedcabletray,
  'Fabricated Beams':beam2,
  'Junction Box' : junbox,
  'Plates' : plates1,
  'solar2': solar2,
  'Walkway': walk,
  'car' : Car,
  'Transmission Monopoles': mona,
  'Substation Structures':sub,
  'Power Distribution Poles': power1,
  'ladder-cable-tray': Laddercabletray,
  'raceway-cable-tray': Racewaycabletray,
  'cable-duct': cableduct,
  'earthflat': earthflat,
  'earthelectrode': earthelectrode,
  'solar1' : solar1,
  'Rooftop' : roof,
  'Gi wire' : wire,
  'Copper Earthing' : copper1,
  'copper': copper,
  'steel': steel,
  'channel': channel,
  'pipes': pipes,
  'crash': crash,
  'mast': mast,
  'handrail': handrail,
  'solar': solar,
  'grat': grat,
  'beam': beam,
  'Tor Rod': tor,
  'transmission': transmission,
  'telecom': telecom,
  'Inside perorated cable tray': Insideperoratedcabletray,
  'Inside Perorated cable tray': cabletray2,
  'Ladder type vertical bend': cabletray3,
  'Outside ladder' : cabletray4,
  'Outside Ladder Cable Tray': cabletray5,
  'Race With Partition': cable18,
  'Angle Ladder': cabletray8,
  'Cable Tray Cover C-Column Support': cabletray9,
  'Cable Duct Partition Sheet': cable10,
  "Cable Tray Cover": cable11,
  "C-Column Support": cable12,
  "Earthing Electrode": cable13,
  "Earthing Flat": cable14,
  "Earthing Rod": cable15,
  "Inside Ladder Cable Tray": cable16,
  "Inside Ladder": cable17,
   "Power Generation" : power,
  '54': image54,
  '55': image55,
 
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
