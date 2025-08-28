import React, { useState } from 'react';
import { DropletIcon } from './Icons';
import { useLocalization } from '../hooks/useLocalization';
import LanguageSwitcher from './LanguageSwitcher';

type Page = 'home' | 'pregnancy' | 'articles' | 'about' | 'contact';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLocalization();

  const navLinks: { key: Page; text: string; path: string; }[] = [
    { key: 'home', text: t.navbar.periodCalculator, path: '/' },
    { key: 'pregnancy', text: t.navbar.pregnancyCalculator, path: '/pregnancy' },
    { key: 'articles', text: t.navbar.articles, path: '/articles' },
    { key: 'about', text: t.navbar.aboutUs, path: '/about' },
    { key: 'contact', text: t.navbar.contactUs, path: '/contact' },
  ];

  const NavLink: React.FC<{ pageKey: Page; text: string; path: string }> = ({ pageKey, text, path }) => (
    <a
      href={path}
      onClick={(e) => {
        e.preventDefault();
        onNavigate(pageKey);
        setIsMenuOpen(false);
      }}
      className={`block w-full text-start md:w-auto md:inline-block py-2 px-3 rounded-md text-md font-medium transition-colors duration-200 ${
        currentPage === pageKey
          ? 'bg-purple-600 text-white'
          : 'text-gray-700 hover:bg-purple-100 hover:text-purple-700'
      }`}
    >
      {text}
    </a>
  );

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} className="flex-shrink-0 flex items-center text-purple-700">
                <DropletIcon className="w-8 h-8 text-red-400" />
                <span className="font-bold text-xl mx-2">{t.navbar.siteName}</span>
            </a>
          </div>
          <div className="hidden md:flex md:items-center">
            <div className="flex items-baseline space-x-1 lg:space-x-4">
              {navLinks.map(link => (
                  <NavLink key={link.key} pageKey={link.key} text={link.text} path={link.path} />
              ))}
            </div>
            <div className="ms-4">
              <LanguageSwitcher />
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-purple-600 hover:bg-purple-100 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3">
            {navLinks.map(link => (
                <NavLink key={link.key} pageKey={link.key} text={link.text} path={link.path} />
            ))}
            <div className="p-2">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
