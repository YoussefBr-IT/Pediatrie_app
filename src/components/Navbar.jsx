import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
// Importation de tes deux logos
import logoFr from '../assets/logo-fr.jpg';
import logoAr from '../assets/logo-ar.jpg'; 

export default function Navbar({ t, lang, toggleLanguage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isAr = lang === 'ar';

  return (
    <header dir="ltr" className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="w-full px-4 md:px-8 lg:px-12 h-24 flex items-center justify-between">
        
        {/* LOGO DYNAMIQUE */}
        <div className="flex items-center">
          <img 
            src={isAr ? logoAr : logoFr} 
            alt="Logo Dr Karima Brahim Gardabou" 
            className="h-16 md:h-18 w-auto object-contain"
          />
        </div>
        
        {/* Liens de navigation (Agrandis : text-base md:text-lg et espacement accru) */}
        <nav className={`hidden md:flex items-center gap-10 font-semibold text-base md:text-lg text-slate-700 ${isAr ? 'flex-row-reverse' : ''}`}>
          <a href="#home" className="hover:text-[#f15a24] transition-colors">{t.nav.home}</a>
          <a href="#services" className="hover:text-[#f15a24] transition-colors">{t.nav.services}</a>
          <a href="#about" className="hover:text-[#f15a24] transition-colors">{t.nav.about}</a>
          <a href="#consult" className="hover:text-[#f15a24] transition-colors">{t.nav.consult}</a>
          <a href="#contact" className="hover:text-[#f15a24] transition-colors">{t.nav.contact}</a>
        </nav>
        
        {/* Boutons Desktop (Agrandis : texte et padding augmentés) */}
        <div className="hidden md:flex items-center gap-4">
          <button onClick={toggleLanguage} className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-slate-200 text-sm md:text-base font-bold text-slate-700 hover:bg-slate-50 transition ${isAr ? 'flex-row-reverse' : ''}`}>
            <Globe className="w-5 h-5 text-[#f15a24]" />
            <span>{isAr ? 'Français' : 'العربية'}</span>
          </button>
          <a href="#contact" className="px-6 py-3 rounded-xl bg-[#f15a24] hover:bg-[#d84a1b] text-white font-bold text-sm md:text-base shadow-md shadow-orange-500/20 transition duration-200">
            {t.nav.appointment}
          </a>
        </div>
        
        {/* Boutons Mobile */}
        <div className="flex items-center gap-2 md:hidden">
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
        <div dir={isAr ? 'rtl' : 'ltr'} className="md:hidden border-b border-slate-100 bg-white px-6 pt-4 pb-8 space-y-4 shadow-lg">
          <a href="#home" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md font-bold text-lg text-slate-700 hover:bg-amber-50 hover:text-[#f15a24]">{t.nav.home}</a>
          <a href="#services" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md font-bold text-lg text-slate-700 hover:bg-amber-50 hover:text-[#f15a24]">{t.nav.services}</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md font-bold text-lg text-slate-700 hover:bg-amber-50 hover:text-[#f15a24]">{t.nav.about}</a>
          <a href="#consult" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md font-bold text-lg text-slate-700 hover:bg-amber-50 hover:text-[#f15a24]">{t.nav.consult}</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md font-bold text-lg text-slate-700 hover:bg-amber-50 hover:text-[#f15a24]">{t.nav.contact}</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block w-full text-center mt-4 px-4 py-3 rounded-xl bg-[#f15a24] text-white font-bold text-base shadow-md">{t.nav.appointment}</a>
        </div>
      )}
    </header>
  );
}