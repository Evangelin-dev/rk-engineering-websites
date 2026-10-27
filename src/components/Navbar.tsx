import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, Phone, X } from 'lucide-react';
import rkLogo from '../assets/images/rk.png';
import { getProductNavigationProducts, PRODUCT_NAVIGATION_CATEGORIES } from '../data/productDetails.ts';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Our Association', to: '/associations' },
];

const SHOWCASE_LINKS = [
  { label: 'Gallery', to: '/gallery' },
  { label: 'Certifications', to: '/about#certifications' },
];

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `relative whitespace-nowrap transition-colors duration-200 hover:text-blue-700 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:bg-red-600 after:transition-transform after:duration-300 after:content-[''] motion-reduce:after:transition-none ${
    isActive
      ? 'font-bold text-blue-900 after:scale-x-100'
      : 'text-slate-800 after:scale-x-0 hover:after:scale-x-100'
  }`;

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDesktopMenu, setActiveDesktopMenu] = useState<'products' | 'showcase' | null>(null);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileShowcaseOpen, setMobileShowcaseOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const productMenuRef = useRef<HTMLDivElement>(null);
  const productMenuCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();
  const cancelProductMenuClose = () => {
    if (productMenuCloseTimer.current) {
      clearTimeout(productMenuCloseTimer.current);
      productMenuCloseTimer.current = null;
    }
  };
  const scheduleProductMenuClose = () => {
    cancelProductMenuClose();
    productMenuCloseTimer.current = setTimeout(() => {
      setActiveDesktopMenu((current) => current === 'products' ? null : current);
    }, 160);
  };
  const closeMenus = () => {
    cancelProductMenuClose();
    setMobileMenuOpen(false);
    setActiveDesktopMenu(null);
    setMobileProductsOpen(false);
    setMobileShowcaseOpen(false);
  };

  useEffect(() => {
    if (activeDesktopMenu !== 'products') return;

    const closeOnOutsidePointer = (event: PointerEvent) => {
      if (!productMenuRef.current?.contains(event.target as Node)) {
        setActiveDesktopMenu(null);
      }
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveDesktopMenu(null);
    };
    document.addEventListener('pointerdown', closeOnOutsidePointer);
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.removeEventListener('pointerdown', closeOnOutsidePointer);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [activeDesktopMenu]);

  useEffect(() => () => cancelProductMenuClose(), []);

  useEffect(() => {
    const updateScrolledState = () => setIsScrolled(window.scrollY > 8);
    updateScrolledState();
    window.addEventListener('scroll', updateScrolledState, { passive: true });
    return () => window.removeEventListener('scroll', updateScrolledState);
  }, []);

  return (
    <header className={`sticky top-0 z-40 w-full border-b transition-[background-color,border-color,box-shadow] duration-300 motion-reduce:transition-none ${
      isScrolled
        ? 'border-slate-200 bg-white/95 shadow-md backdrop-blur-sm'
        : 'border-slate-200 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.08)]'
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4">
          <Link
            to="/"
            onClick={closeMenus}
            className="flex h-14 w-14 shrink-0 items-center justify-center"
            aria-label="RK Engineering home"
          >
            <img src={rkLogo} alt="RK Engineering & Galvanizers" width={56} height={56} className="h-14 w-14 object-contain" />
          </Link>

          <nav aria-label="Main navigation" className="hidden h-full items-center gap-3 text-xs font-medium lg:flex xl:gap-5 xl:text-sm">
            {NAV_LINKS.slice(0, 3).map((link) => (
              <NavLink key={link.label} to={link.to} onClick={closeMenus} className={linkClass} end={link.to === '/'}>
                {link.label}
              </NavLink>
            ))}

            <div
              ref={productMenuRef}
              className="flex h-full items-center"
              onMouseEnter={() => {
                cancelProductMenuClose();
                setActiveDesktopMenu('products');
              }}
              onMouseLeave={scheduleProductMenuClose}
            >
              <button
                type="button"
                aria-expanded={activeDesktopMenu === 'products'}
                aria-haspopup="true"
                onClick={() => {
                  cancelProductMenuClose();
                  setActiveDesktopMenu(activeDesktopMenu === 'products' ? null : 'products');
                }}
                onKeyDown={(event) => {
                  if (event.key === 'Escape') setActiveDesktopMenu(null);
                }}
                className={`relative inline-flex items-center gap-1 whitespace-nowrap transition-colors duration-200 hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-blue-700 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:bg-red-600 after:transition-transform after:duration-300 after:content-[''] motion-reduce:after:transition-none ${
                  location.pathname.startsWith('/products') ? 'font-bold text-blue-900' : 'text-slate-800'
                } ${activeDesktopMenu === 'products' ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100'}`}
              >
                Products
                <ChevronDown className={`h-4 w-4 transition-transform motion-reduce:transition-none ${activeDesktopMenu === 'products' ? 'rotate-180' : ''}`} />
              </button>
              <div
                aria-hidden={activeDesktopMenu !== 'products'}
                inert={activeDesktopMenu !== 'products'}
                className={`absolute left-1/2 top-full z-50 max-h-[75svh] w-[min(92vw,80rem)] -translate-x-1/2 overflow-y-auto rounded-b-xl border border-slate-200 bg-white p-4 shadow-2xl transition-[opacity,transform,visibility] duration-200 ease-out motion-reduce:transition-none sm:rounded-xl sm:p-5 ${
                  activeDesktopMenu === 'products'
                    ? 'visible translate-y-0 opacity-100'
                    : 'invisible pointer-events-none translate-y-2 opacity-0'
                }`}
                onMouseEnter={cancelProductMenuClose}
                onMouseLeave={scheduleProductMenuClose}
              >
                  <div className="mb-4 flex items-center justify-between border-b border-slate-200 pb-4">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-red-600">Product Directory</p>
                      <p className="mt-1 text-xs text-slate-500">Browse product families and types</p>
                    </div>
                    <Link
                      to="/products"
                      onClick={closeMenus}
                      className="inline-flex items-center justify-center rounded-md bg-blue-950 px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-950"
                    >
                      All Products
                    </Link>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                    {PRODUCT_NAVIGATION_CATEGORIES.map((category) => (
                      <section key={category.id} className="min-w-0 rounded-lg border border-slate-100 bg-slate-50/70 p-3">
                        <Link
                          to={`/products?category=${category.id}`}
                          onClick={closeMenus}
                          className="block border-b border-slate-200 px-2 pb-2 text-xs font-bold uppercase leading-snug tracking-wide text-blue-950 transition-colors hover:text-red-600"
                        >
                          {category.label}
                        </Link>
                        <div className="pt-1">
                          {getProductNavigationProducts(category).map((product) => (
                            <Link
                              key={product.slug}
                              to={`/products/${product.slug}`}
                              onClick={closeMenus}
                              className={`block rounded-md px-2 py-2 text-sm leading-snug transition-colors hover:bg-white hover:text-blue-800 ${
                                location.pathname === `/products/${product.slug}` ? 'font-bold text-blue-900' : 'text-slate-700'
                              }`}
                            >
                              {product.navigationLabel ?? product.name}
                            </Link>
                          ))}
                        </div>
                      </section>
                    ))}
                  </div>
                </div>
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
                className={`relative inline-flex items-center gap-1 whitespace-nowrap transition-colors duration-200 hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-blue-700 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:bg-red-600 after:transition-transform after:duration-300 after:content-[''] motion-reduce:after:transition-none ${
                  SHOWCASE_LINKS.some((link) => link.to === location.pathname) ? 'font-bold text-blue-900' : 'text-slate-800'
                } ${activeDesktopMenu === 'showcase' ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100'}`}
              >
                Showcase
                <ChevronDown className={`h-4 w-4 transition-transform motion-reduce:transition-none ${activeDesktopMenu === 'showcase' ? 'rotate-180' : ''}`} />
              </button>
              <div
                aria-hidden={activeDesktopMenu !== 'showcase'}
                inert={activeDesktopMenu !== 'showcase'}
                className={`absolute left-0 top-full z-50 w-64 rounded-b-xl border border-slate-100 bg-white p-3 shadow-2xl transition-[opacity,transform,visibility] duration-200 ease-out motion-reduce:transition-none ${
                  activeDesktopMenu === 'showcase'
                    ? 'visible translate-y-0 opacity-100'
                    : 'invisible pointer-events-none translate-y-2 opacity-0'
                }`}
              >
                {SHOWCASE_LINKS.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={closeMenus}
                    className="block rounded-md px-3 py-2.5 text-sm text-slate-700 transition-colors duration-200 hover:bg-slate-50 hover:text-blue-800"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <NavLink to="/associations" onClick={closeMenus} className={linkClass}>
              Our Association
            </NavLink>
            <Link
              to="/blog"
              onClick={closeMenus}
              className={`whitespace-nowrap transition-colors hover:text-blue-700 ${location.pathname === '/blog' ? 'font-bold text-blue-900' : 'text-slate-800'}`}
            >
              Blog
            </Link>
          </nav>

          <div className="hidden shrink-0 items-center lg:flex">
            <NavLink
              to="/contact"
              onClick={closeMenus}
              className={({ isActive }) =>
                `inline-flex items-center justify-center gap-2 rounded-md px-4 py-3 text-sm font-semibold text-white shadow-lg transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-950 ${
                  isActive ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-950 hover:bg-blue-900'
                }`
              }
            >
              <Phone aria-hidden="true" className="h-4 w-4" />
              Contact Us
            </NavLink>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
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
          <nav aria-label="Mobile navigation" className="flex flex-col text-sm font-medium text-slate-800">
            {NAV_LINKS.slice(0, 3).map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                onClick={closeMenus}
                className={({ isActive }) => `py-3 ${isActive ? 'font-bold text-blue-900' : ''}`}
                end={link.to === '/'}
              >
                {link.label}
              </NavLink>
            ))}

            <button
              type="button"
              onClick={() => setMobileProductsOpen((open) => !open)}
              aria-expanded={mobileProductsOpen}
              aria-controls="mobile-products-menu"
              className={`flex items-center justify-between py-3 text-left ${location.pathname.startsWith('/products') ? 'font-bold text-blue-900' : ''}`}
            >
              Products
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 motion-reduce:transition-none ${mobileProductsOpen ? 'rotate-180' : ''}`} />
            </button>
            <div
              id="mobile-products-menu"
              aria-hidden={!mobileProductsOpen}
              inert={!mobileProductsOpen}
              className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none ${
                mobileProductsOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden pb-2 pl-3">
                <Link to="/products" onClick={closeMenus} className="block py-2 font-bold text-red-600">All Products</Link>
                {PRODUCT_NAVIGATION_CATEGORIES.map((category) => (
                  <div key={category.id} className="border-t border-slate-100 py-2 first:border-t-0">
                    <Link
                      to={`/products?category=${category.id}`}
                      onClick={closeMenus}
                      className="block py-1 text-[11px] font-bold uppercase tracking-wider text-slate-400 transition-colors hover:text-red-600"
                    >
                      {category.label}
                    </Link>
                    {getProductNavigationProducts(category).map((product) => (
                      <Link
                        key={product.slug}
                        to={`/products/${product.slug}`}
                        onClick={closeMenus}
                        className={`block py-2 transition-colors hover:text-blue-800 ${
                          location.pathname === `/products/${product.slug}` ? 'font-bold text-blue-900' : 'text-slate-600'
                        }`}
                      >
                        {product.navigationLabel ?? product.name}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => setMobileShowcaseOpen((open) => !open)}
              aria-expanded={mobileShowcaseOpen}
              aria-controls="mobile-showcase-menu"
              className="flex items-center justify-between py-3 text-left"
            >
              Showcase
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 motion-reduce:transition-none ${mobileShowcaseOpen ? 'rotate-180' : ''}`} />
            </button>
            <div
              id="mobile-showcase-menu"
              aria-hidden={!mobileShowcaseOpen}
              inert={!mobileShowcaseOpen}
              className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none ${
                mobileShowcaseOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden pb-2 pl-3">
                {SHOWCASE_LINKS.map((link) => (
                  <Link key={link.to} to={link.to} onClick={closeMenus} className="block py-2 text-slate-600 transition-colors duration-200 hover:text-blue-800">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <NavLink to="/associations" onClick={closeMenus} className={({ isActive }) => `py-3 ${isActive ? 'font-bold text-blue-900' : ''}`}>
              Our Association
            </NavLink>
            <Link to="/blog" onClick={closeMenus} className={`py-3 ${location.pathname === '/blog' ? 'font-bold text-blue-900' : ''}`}>Blog</Link>
            <NavLink
              to="/contact"
              onClick={closeMenus}
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-md bg-blue-950 px-5 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-blue-900"
            >
              <Phone aria-hidden="true" className="h-4 w-4" />
              Contact Us
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};
