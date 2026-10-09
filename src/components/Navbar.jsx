import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import logoFr from '../assets/logo-fr.jpg';
import logoAr from '../assets/logo-ar.jpg'; 

export default function Navbar({ t, lang, toggleLanguage, currentPage, setCurrentPage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isAr = lang === 'ar';

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header dir="ltr" className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="relative w-full px-4 md:px-8 lg:px-12 h-24 flex items-center justify-between">
        
        {/* LOGO (Z-10 pour rester cliquable au-dessus du centre) */}
        <div className="flex items-center cursor-pointer relative z-10" onClick={() => handleNavClick('home')}>
          <img 
            src={isAr ? logoAr : logoFr} 
            alt="Logo Dr Karima Brahim Gardabou" 
            className="h-16 md:h-18 w-auto object-contain"
          />
        </div>
        
        {/* Liens de navigation (Parfaitement au centre absolu) */}
        <nav className={`hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-6 xl:gap-10 font-semibold text-base text-slate-700 ${isAr ? 'flex-row-reverse' : ''} z-0`}>
          <button onClick={() => handleNavClick('home')} className={`hover:text-[#f15a24] transition-colors whitespace-nowrap ${currentPage === 'home' ? 'text-[#f15a24]' : ''}`}>{t.nav.home}</button>
          <button onClick={() => { setCurrentPage('home'); setTimeout(() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="hover:text-[#f15a24] transition-colors whitespace-nowrap">{t.nav.services}</button>
          <button onClick={() => { setCurrentPage('home'); setTimeout(() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="hover:text-[#f15a24] transition-colors whitespace-nowrap">{t.nav.about}</button>
          <button onClick={() => { setCurrentPage('home'); setTimeout(() => document.getElementById('consult')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="hover:text-[#f15a24] transition-colors whitespace-nowrap">{t.nav.consult}</button>
          <button onClick={() => handleNavClick('reels')} className={`hover:text-[#f15a24] transition-colors whitespace-nowrap ${currentPage === 'reels' ? 'text-[#f15a24]' : ''}`}>{isAr ? 'فيديوهات' : 'Reels'}</button>
          <button onClick={() => { setCurrentPage('home'); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="hover:text-[#f15a24] transition-colors whitespace-nowrap">{t.nav.contact}</button>
        </nav>
        
        {/* Boutons Desktop (Sélecteur de langue) */}
        <div className="hidden lg:flex items-center gap-4 relative z-10">
          <button onClick={toggleLanguage} className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-slate-200 text-sm md:text-base font-bold text-slate-700 hover:bg-slate-50 transition ${isAr ? 'flex-row-reverse' : ''}`}>
            <Globe className="w-5 h-5 text-[#f15a24]" />
            <span>{isAr ? 'Français' : 'العربية'}</span>
          </button>
        </div>
        
        {/* Boutons Mobile */}
        <div className="flex items-center gap-2 lg:hidden relative z-10">
          <button onClick={toggleLanguage} className="p-2.5 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50">
            <Globe className="w-6 h-6 text-[#f15a24]" />
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2.5 rounded-lg text-slate-600 hover:bg-slate-100">
            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>
      
      {/* Menu Mobile Déroulant */}
      {isMenuOpen && (
        <div dir={isAr ? 'rtl' : 'ltr'} className="lg:hidden border-b border-slate-100 bg-white px-6 pt-4 pb-8 space-y-4 shadow-lg">
          <button onClick={() => handleNavClick('home')} className="block w-full text-left px-3 py-2 rounded-md font-bold text-lg text-slate-700 hover:bg-amber-50 hover:text-[#f15a24]">{t.nav.home}</button>
          <button onClick={() => handleNavClick('reels')} className="block w-full text-left px-3 py-2 rounded-md font-bold text-lg text-slate-700 hover:bg-amber-50 hover:text-[#f15a24]">{isAr ? 'فيديوهات' : 'Reels'}</button>
        </div>
      )}
    </header>
  );
}