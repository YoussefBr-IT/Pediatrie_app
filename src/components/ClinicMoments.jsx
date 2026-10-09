import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';

// Importation des 15 photos de 1.jpeg à 15.jpeg
import img1 from '../assets/1.jpeg';
import img2 from '../assets/2.jpeg';
import img3 from '../assets/3.jpeg';
import img4 from '../assets/4.jpeg';
import img5 from '../assets/5.jpeg';
import img6 from '../assets/6.jpeg';
import img7 from '../assets/7.jpeg';
import img8 from '../assets/8.jpeg';
import img9 from '../assets/9.jpeg';
import img10 from '../assets/10.jpeg';
import img11 from '../assets/11.jpeg';
import img12 from '../assets/12.jpeg';
import img13 from '../assets/13.jpeg';
import img14 from '../assets/14.jpeg';
import img15 from '../assets/15.jpeg';

export default function ClinicMoments({ lang }) {
  const isAr = lang === 'ar';
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    img1, img2, img3, img4, img5, 
    img6, img7, img8, img9, img10, 
    img11, img12, img13, img14, img15
  ];

  // Défilement automatique toutes les 4 secondes
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-white border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête de la section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-100 text-pink-600 font-bold text-sm mb-4">
            <Heart className="w-4 h-4 fill-current text-pink-500" />
            <span>{isAr ? 'لحظات سعيدة في العيادة' : 'Moments de joie au cabinet'}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#043259] mb-3">
            {isAr ? 'ابتسامات أطفالنا الأعزاء مع الدكتورة كريمة' : 'Sourires et douceur avec nos petits patients'}
          </h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto">
            {isAr 
              ? 'نحرص على خلق بيئة مريحة ومليئة بالحب لكل طفل يزور عيادتنا.' 
              : 'Un accueil chaleureux et bienveillant pour que chaque visite soit un moment de confiance et de sourire.'}
          </p>
        </div>

        {/* Carrousel d'images (Fond changé ici de bg-slate-900 à bg-white) */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white aspect-[4/3] md:aspect-[16/9] max-h-[550px] mx-auto border-4 border-white">
          
          <img 
            src={images[currentIndex]} 
            alt={`Moment cabinet ${currentIndex + 1}`} 
            className="w-full h-full object-contain transition-all duration-700 ease-in-out"
          />

          {/* Bouton Précédent */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-md transition hover:scale-110"
            aria-label="Précédent"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Bouton Suivant */}
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-md transition hover:scale-110"
            aria-label="Suivant"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Indicateurs (petits points en bas) */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 bg-black/40 px-3 py-2 rounded-full backdrop-blur-sm max-w-full overflow-x-auto shadow-sm">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${currentIndex === index ? 'bg-orange-500 w-5' : 'bg-white/80'}`}
                aria-label={`Aller à l'image ${index + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}