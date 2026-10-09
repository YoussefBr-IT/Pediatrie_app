import { ArrowRight } from 'lucide-react';

export default function Reels({ t, lang }) {
  const isAr = lang === 'ar';

  const reelsList = [
    {
      id: 1,
      titleFr: "Conseil médical du Dr Karima",
      titleAr: "نصيحة طبية من الدكتورة كريمة",
      descFr: "Découvrez les conseils récents du Dr Karima pour la santé et le bien-être de vos enfants.",
      descAr: "شاهدوا أحدث نصائح الدكتورة كريمة لصحة وسلامة أطفالكم.",
      instagramUrl: "https://www.instagram.com/reel/DeRkHdItWlT/",
      embedUrl: "https://www.instagram.com/reel/DeRkHdItWlT/embed/",
    },
    {
      id: 2,
      titleFr: "Conseil pédiatrique & Prévention",
      titleAr: "نصائح طبية في طب الأطفال",
      descFr: "Capsule éducative pour accompagner les parents au quotidien.",
      descAr: "فيديو توعوي لمساعدة الأولياء في الحياة اليومية.",
      instagramUrl: "https://www.instagram.com/reel/DdH7ovDtvjZ/",
      embedUrl: "https://www.instagram.com/reel/DdH7ovDtvjZ/embed/",
    },
    {
      id: 3,
      titleFr: "Prévention et santé infantile",
      titleAr: "الوقاية وصحة الأطفال",
      descFr: "Recommandations importantes du Dr Karima Brahim Gardabou.",
      descAr: "توصيات هامة من الدكتورة كريمة إبراهيم القردبو.",
      instagramUrl: "https://www.instagram.com/reel/Da-EVgXN_oI/",
      embedUrl: "https://www.instagram.com/reel/Da-EVgXN_oI/embed/",
    },
    {
      id: 4,
      titleFr: "Guidance parentale et soins",
      titleAr: "إرشادات للأبناء والعناية بهم",
      descFr: "Astuces pratiques et réponses aux questions fréquentes des parents.",
      descAr: "نصائح عملية وإجابات على أسئلة الأولياء المتكررة.",
      instagramUrl: "https://www.instagram.com/reel/DWb2zolDU-Y/",
      embedUrl: "https://www.instagram.com/reel/DWb2zolDU-Y/embed/",
    },
    {
      id: 5,
      titleFr: "Éducation de santé et bien-être",
      titleAr: "التثقيف الصحي والعلاجي",
      descFr: "Suivi médical et conseils d'experts pour vos enfants.",
      descAr: "المتابعة الطبية ونصائح الخبراء لأطفالكم.",
      instagramUrl: "https://www.instagram.com/reel/DEwffBut5qM/",
      embedUrl: "https://www.instagram.com/reel/DEwffBut5qM/embed/",
    },
    {
      id: 6,
      titleFr: "Conseils pour le développement de l'enfant",
      titleAr: "نصائح لنمو الطفل",
      descFr: "Tout savoir pour veiller sur la bonne croissance de votre bébé.",
      descAr: "كل ما تحتاج معرفته لمتابعة نمو طفلك السليم.",
      instagramUrl: "https://www.instagram.com/reel/DBbw1pSNgNS/",
      embedUrl: "https://www.instagram.com/reel/DBbw1pSNgNS/embed/",
    },
    {
      id: 7,
      titleFr: "Allergologie et pédiatrie au quotidien",
      titleAr: "طب الحساسية والأطفال اليومي",
      descFr: "Comprendre les réactions et protéger la santé des plus jeunes.",
      descAr: "فهم التفاعلات وحماية صحة الصغار.",
      instagramUrl: "https://www.instagram.com/reel/DBbuFN2tmcl/",
      embedUrl: "https://www.instagram.com/reel/DBbuFN2tmcl/embed/",
    },
    {
      id: 8,
      titleFr: "Capsule santé pédiatrique",
      titleAr: "ومضة صحية للأطفال",
      descFr: "Informations essentielles partagées par le Dr Karima.",
      descAr: "معلومات أساسية تشاركها معكم الدكتورة كريمة.",
      instagramUrl: "https://www.instagram.com/reel/DA092y1t-MI/",
      embedUrl: "https://www.instagram.com/reel/DA092y1t-MI/embed/",
    },
    {
      id: 9,
      titleFr: "Conseils d'allergologue pour enfants",
      titleAr: "نصائح أخصائية الحساسية للأطفال",
      descFr: "Prévenir et gérer les allergies saisonnières et alimentaires.",
      descAr: "الوقاية من الحساسية الموسمية والغذائية وكيفية التعامل معها.",
      instagramUrl: "https://www.instagram.com/reel/DA08xxmNQyo/",
      embedUrl: "https://www.instagram.com/reel/DA08xxmNQyo/embed/",
    },
    {
      id: 10,
      titleFr: "Bien-être et pédiatrie préventive",
      titleAr: "الصحة العامة وطب الأطفال الوقائي",
      descFr: "Prendre soin de la santé physique et immunitaire de l'enfant.",
      descAr: "العناية بالصحّة البدنية والمناعية للطفل.",
      instagramUrl: "https://www.instagram.com/reel/DAbDLE7tGy4/",
      embedUrl: "https://www.instagram.com/reel/DAbDLE7tGy4/embed/",
    },
    {
      id: 11,
      titleFr: "Recommandations médicales de la semaine",
      titleAr: "التوصيات الطبية للأسبوع",
      descFr: "Éclairages et repères pour rassurer les parents.",
      descAr: "إضاءات وإرشادات لطمأنة الأولياء.",
      instagramUrl: "https://www.instagram.com/reel/DAbBCk0tgu-/",
      embedUrl: "https://www.instagram.com/reel/DAbBCk0tgu-/embed/",
    },
    {
      id: 12,
      titleFr: "Consultation et conseils pédiatriques",
      titleAr: "استشارات ونصح طبي للأطفال",
      descFr: "Les bonnes pratiques à adopter à la maison.",
      descAr: "الممارسات السليمة التي يجب اتباعها في المنزل.",
      instagramUrl: "https://www.instagram.com/reel/DAEJ_7NN_FO/",
      embedUrl: "https://www.instagram.com/reel/DAEJ_7NN_FO/embed/",
    },
    {
      id: 13,
      titleFr: "Capsule d'information médicale",
      titleAr: "رسالة توعوية طبية",
      descFr: "Sensibilisation et conseils de santé ciblés pour les familles.",
      descAr: "توعية ونصائح صحية موجهة للعائلات.",
      instagramUrl: "https://www.instagram.com/reel/C__kMb6NmIy/",
      embedUrl: "https://www.instagram.com/reel/C__kMb6NmIy/embed/",
    }
  ];

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

        {/* Grille */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {reelsList.map((reel) => (
            <div key={reel.id} className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              
              <div className="p-4 flex justify-center bg-slate-900">
                <iframe 
                  src={reel.embedUrl} 
                  className="w-full rounded-xl aspect-[9/16] max-h-[450px]"
                  frameBorder="0" 
                  scrolling="no" 
                  allowTransparency="true"
                  title="Instagram Reel"
                ></iframe>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#043259] mb-3">
                  {isAr ? reel.titleAr : reel.titleFr}
                </h3>
                <p className="text-slate-500 text-sm mb-6 flex-grow">
                  {isAr ? reel.descAr : reel.descFr}
                </p>

                <a 
                  href={reel.instagramUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-orange-50 hover:bg-[#f15a24] text-[#f15a24] hover:text-white font-bold text-sm transition-colors duration-200"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>{isAr ? 'مشاهدة على إنستغرام' : 'Voir sur Instagram'}</span>
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Lien global Instagram */}
        <div className="text-center mt-12">
          <a 
            href="https://www.instagram.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#043259] hover:bg-[#03223c] text-white font-bold text-base shadow-lg transition-all"
          >
            <svg className="w-5 h-5 fill-current text-orange-400" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span>{isAr ? 'تابعوا صفحة الدكتورة على إنستغرام' : 'Suivre le Dr Karima sur Instagram'}</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
}