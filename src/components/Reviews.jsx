import { Star } from 'lucide-react';

export default function Reviews({ t, lang }) {
  const isAr = lang === 'ar';

  return (
    <section id="reviews" className="py-16 bg-white border-t border-slate-100" lang={lang}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête de la section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 font-bold text-sm mb-4">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span>{isAr ? 'تقييمات العملاء على جوجل' : 'Avis Google Verified'}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#043259] mb-4">
            {isAr ? 'ما يقوله آباؤنا عن عيادة الدكتورة كريمة' : 'Ce que les parents disent du Dr Karima'}
          </h2>
          <p className="text-slate-500 text-base max-w-2xl mx-auto">
            {isAr 
              ? 'نقرأ بكل امتنان آراءكم وتجاربكم الصادقة التي تسعدنا وتساعدنا على تقديم أفضل رعاية لأطفالكم.' 
              : 'Découvrez les retours d’expérience authentiques des parents qui font confiance à notre cabinet.'}
          </p>
        </div>

        {/* Widget Elfsight Google Reviews */}
        <div className="bg-slate-50 rounded-2xl p-4 md:p-6 shadow-sm border border-slate-100">
          <script src="https://elfsightcdn.com/platform.js" async></script>
          <div 
            key={lang}
            className="elfsight-app-eba023d4-7726-43b3-9cf2-7f9533c2a895" 
            data-elfsight-app-lazy 
            data-lang={isAr ? 'ar' : 'fr'}
          ></div>
        </div>

      </div>
    </section>
  );
}