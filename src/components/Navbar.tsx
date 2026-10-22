import React, { useState } from 'react';
import { ArrowUpRight, ChevronDown, Menu, Phone, X } from 'lucide-react';
import rkLogo from '../assets/images/rk.png';

interface NavbarProps {
  onOpenRFQ: (productName?: string) => void;
}

const PRODUCT_GROUPS = [
  {
    title: 'Cable Tray',
    items: ['Perforated Type Cable Tray', 'Ladder Type Cable Tray', 'Raceway Cable Tray', 'Cable Tray Duct'],
  },
  {
    title: 'Earthing Materials',
    items: ['Earthing Flats', 'Earthing Electrode', 'Junction Box', 'GI Wire', 'Copper Earthing Strips'],
  },
  {
    title: 'Solar Mounting Structure',
    items: ['Ground Mounted Structure', 'Rooftop Structure', 'Solar Tracker', 'Car Parking Structure', 'Walkway Structure'],
  },
  {
    title: 'Hot Dip Galvanizing',
    items: [
      'Steel Angles',
      'Construction Channel',
      'High Mast Pole',
      'Pipes',
      'H-Beams',
      'Crash Barrier',
      'Handrail',
      'Solar Mounting Channel',
      'Gratings',
      'Fabricated Beams',
      'Tor Rod',
      'Chequered Plate',
    ],
  },
  {
    title: 'Towers',
    items: ['Transmission Towers', 'Telecom Towers', 'Transmission Monopoles', 'Power Distribution Poles', 'Substation Structures'],
  },
];

const SHOWCASE_LINKS = [
  { label: 'Export Solutions', href: '#exports' },
  { label: 'Manufacturing Process', href: '#process' },
  { label: 'Engineering Calculator', href: '#calculator' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenRFQ }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDesktopMenu, setActiveDesktopMenu] = useState<'products' | 'showcase' | null>(null);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileShowcaseOpen, setMobileShowcaseOpen] = useState(false);

  const closeMenus = () => {
    setActiveDesktopMenu(null);
    setMobileMenuOpen(false);
    setMobileProductsOpen(false);
    setMobileShowcaseOpen(false);
  };

  const openRFQ = () => {
    closeMenus();
    onOpenRFQ();
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-5">
          <a href="#" onClick={closeMenus} className="flex h-14 w-14 shrink-0 items-center justify-center" aria-label="RK Engineering home">
            <img
              src={rkLogo}
              alt="RK Engineering & Galvanizers"
              width={56}
              height={56}
              className="h-14 w-14 object-contain"
            />
          </a>

          <nav className="hidden h-full items-center gap-5 text-sm font-medium text-slate-800 lg:flex">
            <a href="#" onClick={closeMenus} className="whitespace-nowrap transition-colors hover:text-blue-700">
              Home
            </a>
            <a href="#about" onClick={closeMenus} className="whitespace-nowrap transition-colors hover:text-blue-700">
              About Us
            </a>
            <a href="#process" onClick={closeMenus} className="whitespace-nowrap transition-colors hover:text-blue-700">
              Services
            </a>

            <div
              className="relative flex h-full items-center"
              onMouseEnter={() => setActiveDesktopMenu('products')}
              onMouseLeave={() => setActiveDesktopMenu(null)}
            >
              <button
                type="button"
                aria-expanded={activeDesktopMenu === 'products'}
                aria-haspopup="true"
                onClick={() => setActiveDesktopMenu(activeDesktopMenu === 'products' ? null : 'products')}
                onKeyDown={(event) => {
                  if (event.key === 'Escape') setActiveDesktopMenu(null);
                }}
                className="inline-flex items-center gap-1 whitespace-nowrap transition-colors hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-blue-700"
              >
                Products
                <ChevronDown className={`h-4 w-4 transition-transform ${activeDesktopMenu === 'products' ? 'rotate-180' : ''}`} />
              </button>
              {activeDesktopMenu === 'products' && (
                <div
                  className="fixed z-[60] rounded-b-xl border border-slate-100 bg-white p-6 shadow-2xl sm:p-8"
                  style={{
                    top: 'calc(var(--header-height) + 1px)',
                    left: '50%',
                    width: 'min(1080px, calc(100vw - 32px))',
                    transform: 'translateX(-50%)',
                  }}
                >
                  <div
                    className="grid gap-x-8 gap-y-7"
                    style={{ gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' }}
                  >
                    {PRODUCT_GROUPS.map((group) => (
                      <div key={group.title} className={group.title === 'Hot Dip Galvanizing' ? 'col-span-2' : ''}>
                        <h2 className="mb-3 text-lg font-extrabold tracking-tight text-blue-950">{group.title}</h2>
                        <ul className={group.title === 'Hot Dip Galvanizing' ? 'grid grid-cols-2 gap-x-6' : 'space-y-2'}>
                          {group.items.map((item) => (
                            <li key={item}>
                              <a
                                href="#products"
                                onClick={closeMenus}
                                className="group flex items-center gap-3 rounded-sm py-1 text-sm text-slate-600 transition-colors hover:text-blue-800"
                              >
                                <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-900" />
                                <span className="group-hover:underline group-hover:underline-offset-2">{item}</span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div
              className="relative flex h-full items-center"
              onMouseEnter={() => setActiveDesktopMenu('showcase')}
              onMouseLeave={() => setActiveDesktopMenu(null)}
            >
              <button
                type="button"
                aria-expanded={activeDesktopMenu === 'showcase'}
                aria-haspopup="true"
                onClick={() => setActiveDesktopMenu(activeDesktopMenu === 'showcase' ? null : 'showcase')}
                onKeyDown={(event) => {
                  if (event.key === 'Escape') setActiveDesktopMenu(null);
                }}
                className="inline-flex items-center gap-1 whitespace-nowrap transition-colors hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-blue-700"
              >
                Showcase
                <ChevronDown className={`h-4 w-4 transition-transform ${activeDesktopMenu === 'showcase' ? 'rotate-180' : ''}`} />
              </button>
              {activeDesktopMenu === 'showcase' && (
                <div className="absolute left-0 top-full z-50 w-64 rounded-b-xl border border-slate-100 bg-white p-3 shadow-2xl">
                  {SHOWCASE_LINKS.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={closeMenus}
                      className="block rounded-md px-3 py-2.5 text-sm text-slate-700 transition-colors hover:bg-slate-50 hover:text-blue-800"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#about" onClick={closeMenus} className="whitespace-nowrap transition-colors hover:text-blue-700">
              Our Association
            </a>
            <a href="#faq" onClick={closeMenus} className="whitespace-nowrap transition-colors hover:text-blue-700">
              Blog
            </a>
          </nav>

          <div className="hidden shrink-0 items-center lg:flex">
            <button
              type="button"
              onClick={openRFQ}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-950 px-5 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-950"
            >
              <Phone aria-hidden="true" className="h-4 w-4" />
              <span>Contact Us</span>
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-md p-2 text-slate-700 transition-colors hover:text-blue-900 focus-visible:outline-2 focus-visible:outline-blue-600 lg:hidden"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="max-h-[calc(100svh-5rem)] overflow-y-auto border-t border-slate-100 bg-white px-5 py-4 shadow-lg lg:hidden">
          <nav className="flex flex-col text-sm font-medium text-slate-800">
            <a href="#" onClick={closeMenus} className="py-3">Home</a>
            <a href="#about" onClick={closeMenus} className="py-3">About Us</a>
            <a href="#process" onClick={closeMenus} className="py-3">Services</a>

            <button
              type="button"
              onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
              aria-expanded={mobileProductsOpen}
              className="flex items-center justify-between py-3 text-left"
            >
              Products
              <ChevronDown className={`h-4 w-4 transition-transform ${mobileProductsOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileProductsOpen && (
              <div className="space-y-4 pb-4 pl-3">
                {PRODUCT_GROUPS.map((group) => (
                  <div key={group.title}>
                    <h2 className="pb-1 font-bold text-blue-950">{group.title}</h2>
                    <ul className="space-y-1 border-l border-slate-200 pl-3">
                      {group.items.map((item) => (
                        <li key={item}>
                          <a href="#products" onClick={closeMenus} className="block py-1.5 text-slate-600 hover:text-blue-800">
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            <button
              type="button"
              onClick={() => setMobileShowcaseOpen(!mobileShowcaseOpen)}
              aria-expanded={mobileShowcaseOpen}
              className="flex items-center justify-between py-3 text-left"
            >
              Showcase
              <ChevronDown className={`h-4 w-4 transition-transform ${mobileShowcaseOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileShowcaseOpen && (
              <div className="pb-2 pl-3">
                {SHOWCASE_LINKS.map((link) => (
                  <a key={link.label} href={link.href} onClick={closeMenus} className="block py-2 text-slate-600 hover:text-blue-800">
                    {link.label}
                  </a>
                ))}
              </div>
            )}

            <a href="#about" onClick={closeMenus} className="py-3">Our Association</a>
            <a href="#faq" onClick={closeMenus} className="py-3">Blog</a>
            <button
              type="button"
              onClick={openRFQ}
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-md bg-blue-950 px-5 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-blue-900"
            >
              <Phone aria-hidden="true" className="h-4 w-4" />
              Contact Us
              <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
