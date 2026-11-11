import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, Phone, X } from 'lucide-react';
import rkLogo from '../assets/images/rk.png';
import { getProductNavigationProducts, PRODUCT_NAVIGATION_CATEGORIES } from '../data/productDetails.ts';

type DesktopMenu = 'products' | 'showcase' | null;

const PRIMARY_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
];

const SECONDARY_LINKS = [
  { label: 'Our Association', to: '/associations' },
  { label: 'Blog', to: '/blog' },
];

const SHOWCASE_LINKS = [
  { label: 'Gallery', to: '/gallery' },
  { label: 'Certifications', to: '/about#certifications' },
];

/* ---------- shared styles ---------- */

const UNDERLINE =
  "relative whitespace-nowrap transition-colors duration-200 hover:text-blue-700 " +
  "after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left " +
  "after:bg-red-600 after:transition-transform after:duration-300 after:content-[''] " +
  "motion-reduce:after:transition-none focus-visible:outline-2 focus-visible:outline-blue-700";

const desktopLinkClass = ({ isActive }: { isActive: boolean }) =>
  `${UNDERLINE} ${
    isActive
      ? 'font-bold text-blue-900 after:scale-x-100'
      : 'text-slate-800 after:scale-x-0 hover:after:scale-x-100'
  }`;

const triggerClass = (isActive: boolean, isOpen: boolean) =>
  `${UNDERLINE} inline-flex items-center gap-1 ${
    isActive ? 'font-bold text-blue-900' : 'text-slate-800'
  } ${isOpen ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100'}`;

const panelClass = (isOpen: boolean) =>
  `absolute top-full z-50 border border-slate-200 bg-white shadow-2xl transition-[opacity,transform,visibility] duration-200 ease-out motion-reduce:transition-none ${
    isOpen
      ? 'visible translate-y-0 opacity-100'
      : 'invisible pointer-events-none translate-y-2 opacity-0'
  }`;

const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
  `py-3 ${isActive ? 'font-bold text-blue-900' : ''}`;

const subLinkClass = (active: boolean) =>
  `text-sm leading-snug transition-colors hover:text-blue-900 ${
    active ? 'font-semibold text-blue-900' : 'text-slate-600'
  }`;

const Chevron: React.FC<{ open: boolean }> = ({ open }) => (
  <ChevronDown
    aria-hidden="true"
    className={`h-4 w-4 transition-transform duration-200 motion-reduce:transition-none ${open ? 'rotate-180' : ''}`}
  />
);

/* ---------- component ---------- */

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<DesktopMenu>(null);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileShowcaseOpen, setMobileShowcaseOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const productMenuRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  const isProductNavActive =
    location.pathname.startsWith('/products') ||
    PRODUCT_NAVIGATION_CATEGORIES.some((category) =>
      category.landingPages?.some((page) => page.path === location.pathname),
    );
  const isShowcaseActive = SHOWCASE_LINKS.some((link) => link.to === location.pathname);

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };
  const scheduleClose = (menu: Exclude<DesktopMenu, null>) => {
    cancelClose();
    closeTimer.current = setTimeout(
      () => setActiveMenu((current) => (current === menu ? null : current)),
      160,
    );
  };
  const openMenu = (menu: Exclude<DesktopMenu, null>) => {
    cancelClose();
    setActiveMenu(menu);
  };
  const toggleMenu = (menu: Exclude<DesktopMenu, null>) => {
    cancelClose();
    setActiveMenu((current) => (current === menu ? null : menu));
  };
  const closeMenus = () => {
    cancelClose();
    setMobileMenuOpen(false);
    setActiveMenu(null);
    setMobileProductsOpen(false);
    setMobileShowcaseOpen(false);
  };

  // Close products / showcase on outside click or Escape
  useEffect(() => {
    if (!activeMenu) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!productMenuRef.current?.contains(event.target as Node)) setActiveMenu(null);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveMenu(null);
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [activeMenu]);

  useEffect(() => cancelClose, []);

  useEffect(() => {
    const update = () => setIsScrolled(window.scrollY > 8);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full border-b border-slate-200 transition-[background-color,box-shadow] duration-300 motion-reduce:transition-none ${
        isScrolled
          ? 'bg-white/95 shadow-md backdrop-blur-sm'
          : 'bg-white shadow-[0_1px_3px_rgba(0,0,0,0.08)]'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 3-column grid: logo | centered nav | CTA (equal side columns = balanced) */}
        <div className="flex h-20 items-center justify-between gap-4 lg:h-24 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-6">
          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenus}
            className="flex h-16 w-16 shrink-0 items-center justify-center lg:h-[76px] lg:w-[76px] lg:justify-self-start"
            aria-label="RK Engineering home"
          >
            <img
              src={rkLogo}
              alt="RK Engineering & Galvanizers"
              width={76}
              height={76}
              className="h-full w-full object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <nav
            aria-label="Main navigation"
            className="hidden h-full items-center gap-4 text-[13px] font-medium lg:flex xl:gap-8 xl:text-[15px]"
          >
            {PRIMARY_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={closeMenus}
                className={desktopLinkClass}
              >
                {link.label}
              </NavLink>
            ))}

            {/* Products mega menu (anchored to the header so it is centered on the page) */}
            <div
              ref={productMenuRef}
              className="flex h-full items-center"
              onMouseEnter={() => openMenu('products')}
              onMouseLeave={() => scheduleClose('products')}
            >
              <button
                type="button"
                aria-expanded={activeMenu === 'products'}
                aria-haspopup="true"
                onClick={() => toggleMenu('products')}
                className={triggerClass(isProductNavActive, activeMenu === 'products')}
              >
                Products
                <Chevron open={activeMenu === 'products'} />
              </button>

              <div
                aria-hidden={activeMenu !== 'products'}
                inert={activeMenu !== 'products'}
                className={`${panelClass(activeMenu === 'products')} left-1/2 max-h-[75svh] w-[min(92vw,80rem)] -translate-x-1/2 overflow-y-auto rounded-b-xl p-5 sm:rounded-xl`}
                onMouseEnter={cancelClose}
                onMouseLeave={() => scheduleClose('products')}
              >
                <div className="mb-4 flex justify-end">
                  <Link
                    to="/products"
                    onClick={closeMenus}
                    className="text-xs font-semibold text-blue-900 transition-colors hover:text-red-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-950"
                  >
                    View all products →
                  </Link>
                </div>

                <div className="grid gap-x-10 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
                  {PRODUCT_NAVIGATION_CATEGORIES.map((category) => {
                    const products = getProductNavigationProducts(category);
                    const isGalvanized = category.id === 'galvanized-steel';
                    const mid = Math.ceil(products.length / 2);
                    const columns = isGalvanized
                      ? [products.slice(0, mid), products.slice(mid)]
                      : [products];

                    return (
                      <section
                        key={category.id}
                        className={`min-w-0 ${isGalvanized ? 'sm:col-span-2 lg:col-span-2' : ''}`}
                      >
                        <Link
                          to={`/products?category=${category.id}`}
                          onClick={closeMenus}
                          className="mb-3 block border-b border-slate-100 pb-2 text-base font-extrabold leading-snug text-blue-950 transition-colors hover:text-red-600"
                        >
                          {category.label}
                        </Link>

                        <div className={`grid ${isGalvanized ? 'gap-x-8 sm:grid-cols-2' : ''}`}>
                          {columns.map((column, i) => (
                            <ul key={i} className="list-disc space-y-2 pl-5 marker:text-blue-900">
                              {column.map((product) => (
                                <li key={product.slug} className="pl-0.5">
                                  <Link
                                    to={`/products/${product.slug}`}
                                    onClick={closeMenus}
                                    className={subLinkClass(location.pathname === `/products/${product.slug}`)}
                                  >
                                    {product.navigationLabel ?? product.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          ))}
                        </div>

                        {category.landingPages && (
                          <ul className="mt-2 list-disc space-y-2 pl-5 marker:text-blue-900">
                            {category.landingPages.map((page) => (
                              <li key={page.path} className="pl-0.5">
                                <Link
                                  to={page.path}
                                  onClick={closeMenus}
                                  className={subLinkClass(location.pathname === page.path)}
                                >
                                  {page.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </section>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Showcase dropdown */}
            <div
              className="relative flex h-full items-center"
              onMouseEnter={() => openMenu('showcase')}
              onMouseLeave={() => scheduleClose('showcase')}
            >
              <button
                type="button"
                aria-expanded={activeMenu === 'showcase'}
                aria-haspopup="true"
                onClick={() => toggleMenu('showcase')}
                className={triggerClass(isShowcaseActive, activeMenu === 'showcase')}
              >
                Showcase
                <Chevron open={activeMenu === 'showcase'} />
              </button>

              <div
                aria-hidden={activeMenu !== 'showcase'}
                inert={activeMenu !== 'showcase'}
                className={`${panelClass(activeMenu === 'showcase')} left-1/2 w-56 -translate-x-1/2 rounded-b-xl p-2`}
                onMouseEnter={cancelClose}
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

            {SECONDARY_LINKS.map((link) => (
              <NavLink key={link.to} to={link.to} onClick={closeMenus} className={desktopLinkClass}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center lg:flex lg:justify-self-end">
            <NavLink
              to="/contact"
              onClick={closeMenus}
              className={({ isActive }) =>
                `inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold text-white shadow-lg transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-950 ${
                  isActive ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-950 hover:bg-blue-900'
                }`
              }
            >
              <Phone aria-hidden="true" className="h-4 w-4" />
              Contact Us
            </NavLink>
          </div>

          {/* Mobile toggle */}
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

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="max-h-[calc(100svh-5rem)] overflow-y-auto border-t border-slate-100 bg-white px-5 py-4 shadow-lg lg:hidden">
          <nav
            aria-label="Mobile navigation"
            className="flex flex-col divide-y divide-slate-100 text-sm font-medium text-slate-800"
          >
            {PRIMARY_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={closeMenus}
                className={mobileLinkClass}
              >
                {link.label}
              </NavLink>
            ))}

            {/* Products accordion */}
            <div>
              <button
                type="button"
                onClick={() => setMobileProductsOpen((open) => !open)}
                aria-expanded={mobileProductsOpen}
                aria-controls="mobile-products-menu"
                className={`flex w-full items-center justify-between py-3 text-left ${
                  isProductNavActive ? 'font-bold text-blue-900' : ''
                }`}
              >
                Products
                <Chevron open={mobileProductsOpen} />
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
                  <Link to="/products" onClick={closeMenus} className="block py-2 font-bold text-red-600">
                    All Products
                  </Link>
                  {PRODUCT_NAVIGATION_CATEGORIES.map((category) => (
                    <div key={category.id} className="border-t border-slate-100 py-2">
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
                            location.pathname === `/products/${product.slug}`
                              ? 'font-bold text-blue-900'
                              : 'text-slate-600'
                          }`}
                        >
                          {product.navigationLabel ?? product.name}
                        </Link>
                      ))}
                      {category.landingPages?.map((page) => (
                        <Link
                          key={page.path}
                          to={page.path}
                          onClick={closeMenus}
                          className={`block py-2 transition-colors hover:text-blue-800 ${
                            location.pathname === page.path ? 'font-bold text-blue-900' : 'text-slate-600'
                          }`}
                        >
                          {page.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Showcase accordion */}
            <div>
              <button
                type="button"
                onClick={() => setMobileShowcaseOpen((open) => !open)}
                aria-expanded={mobileShowcaseOpen}
                aria-controls="mobile-showcase-menu"
                className={`flex w-full items-center justify-between py-3 text-left ${
                  isShowcaseActive ? 'font-bold text-blue-900' : ''
                }`}
              >
                Showcase
                <Chevron open={mobileShowcaseOpen} />
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
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={closeMenus}
                      className="block py-2 text-slate-600 transition-colors duration-200 hover:text-blue-800"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {SECONDARY_LINKS.map((link) => (
              <NavLink key={link.to} to={link.to} onClick={closeMenus} className={mobileLinkClass}>
                {link.label}
              </NavLink>
            ))}

            <NavLink
              to="/contact"
              onClick={closeMenus}
              className={({ isActive }) =>
                `mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold text-white shadow-md transition-colors ${
                  isActive ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-950 hover:bg-blue-900'
                }`
              }
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