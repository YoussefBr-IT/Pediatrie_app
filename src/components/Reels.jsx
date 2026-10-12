import { ArrowRight } from 'lucide-react';
import { useEffect } from 'react';

export default function Reels({ t, lang }) {
  const isAr = lang === 'ar';

  useEffect(() => {
    // Injection du script Elfsight au montage du composant
    const script = document.createElement('script');
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);

    // Nettoyage au démontage
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="reels" className="py-16 md:py-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-[#f15a24] font-bold text-sm mb-4">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span>{isAr ? 'نصائح إرشادية مرئية' : 'Conseils Vidéo & Reels'}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#043259] mb-4">
            {isAr ? 'نصائح الدكتورة كريمة على إنستغرام' : 'Conseils du Dr Karima sur Instagram'}
          </h2>
          <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto">
            {isAr 
              ? 'شاهدوا أحدث الفيديوهات التوعوية والنصائح الطبية الموجهة لصحة أطفالكم.' 
              : 'Retrouvez toutes les capsules vidéo éducatives du Dr Karima pour la santé et le bien-être de vos enfants.'}
          </p>
        </div>

        {/* Conteneur du Widget Elfsight */}
        <div className="w-full flex justify-center min-h-[500px]">
          <div 
            className="elfsight-app-83d5f84a-c91b-419d-8f26-28b79cb2498c w-full" 
            data-elfsight-app-lazy
          ></div>
        </div>

        {/* Lien global Instagram */}
        <div className="text-center mt-12">
          <a 
            href="https://www.instagram.com/VOTRE_LIEN_INSTAGRAM" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#043259] hover:bg-[#03223c] text-white font-bold text-base shadow-lg transition-all"
          >
            <span>{isAr ? 'تابعوا صفحة الدكتورة على إنستغرام' : 'Suivre le Dr Karima sur Instagram'}</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
}