import { Calendar, MessageCircle } from 'lucide-react';
import heroFr from '../assets/hero-fr.jpg';
import heroAr from '../assets/hero-ar.jpg';

export default function Hero({ lang }) {
  const isAr = lang === 'ar';

  return (
    <>
      <section id="home" className="relative w-full bg-[#fdf8f4] overflow-hidden">
        <img
          src={isAr ? heroAr : heroFr}
          alt="Dr. Karima Gardabou - Pédiatre"
          className="w-full h-auto object-cover"
        />
        
        {/* LES BOUTONS SUPERPOSÉS */}
        {/* J'ai supprimé la condition isAr pour la position. 
            Maintenant, c'est TOUJOURS 'left-[5%] md:left-[10%]' pour les deux langues. */}
        <div 
          className={`absolute bottom-[2%] sm:bottom-[4%] md:bottom-[6%] lg:bottom-[8%] 
          left-[5%] md:left-[10%] 
          flex flex-row gap-2 sm:gap-4`}
        >
          {/* Bouton WhatsApp (Vert) - Placé en premier pour être plus à gauche */}
          <button className="bg-[#009688] hover:bg-[#007d71] text-white px-3 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full flex items-center justify-center gap-1 sm:gap-2 font-bold text-[10px] sm:text-sm md:text-lg transition shadow-lg shadow-teal-500/30 hover:-translate-y-1">
            <MessageCircle className="w-3 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            <span dir={isAr ? 'rtl' : 'ltr'}>{isAr ? 'واتساب' : 'WhatsApp'}</span>
          </button>

          {/* Bouton Rendez-vous (Orange) - Placé en deuxième */}
          <button className="bg-[#f15a24] hover:bg-[#d84a1b] text-white px-3 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full flex items-center justify-center gap-1 sm:gap-2 font-bold text-[10px] sm:text-sm md:text-lg transition shadow-lg shadow-orange-500/30 hover:-translate-y-1">
            <Calendar className="w-3 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            <span dir={isAr ? 'rtl' : 'ltr'}>{isAr ? 'حجز موعد' : 'Rendez-vous'}</span>
          </button>
        </div>
      </section>
    </>
  );
}