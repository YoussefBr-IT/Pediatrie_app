import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact({ t, lang }) {
  const isAr = lang === 'ar';

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[#f15a24] font-bold tracking-wider text-sm md:text-base">{t.contact.tag}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#043259] mt-2 mb-4">{t.contact.title}</h2>
          <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto">{t.contact.subtitle}</p>
        </div>

        {/* Grille d'informations (Fond clair) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Adresse */}
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex flex-col items-center text-center shadow-sm">
            <div className="w-12 h-12 bg-orange-50 text-[#f15a24] rounded-full flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#043259] mb-2">{t.contact.addressTitle}</h3>
            <p className="text-slate-600 text-sm whitespace-pre-line leading-relaxed">{t.contact.addressValue}</p>
          </div>

          {/* Téléphone */}
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex flex-col items-center text-center shadow-sm">
            <div className="w-12 h-12 bg-orange-50 text-[#f15a24] rounded-full flex items-center justify-center mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#043259] mb-2">{t.contact.phoneTitle}</h3>
            {/* dir="ltr" forcé pour que le +216 s'affiche dans le bon sens même en arabe */}
            <p className="text-slate-600 text-sm whitespace-pre-line leading-relaxed" dir="ltr">{t.contact.phoneValue}</p>
          </div>

          {/* Email */}
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex flex-col items-center text-center shadow-sm">
            <div className="w-12 h-12 bg-orange-50 text-[#f15a24] rounded-full flex items-center justify-center mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#043259] mb-2">{t.contact.emailTitle}</h3>
            <p className="text-slate-600 text-sm">{t.contact.emailValue}</p>
          </div>

          {/* Horaires */}
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex flex-col items-center text-center shadow-sm">
            <div className="w-12 h-12 bg-orange-50 text-[#f15a24] rounded-full flex items-center justify-center mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#043259] mb-2">{t.contact.hoursTitle}</h3>
            <p className="text-slate-600 text-sm whitespace-pre-line leading-relaxed">{t.contact.hoursValue}</p>
          </div>
        </div>

        {/* Bannière d'appel à l'action */}
        <div className="mt-12 bg-[#f15a24] rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between text-white shadow-xl shadow-orange-500/20">
          <div className={`mb-6 md:mb-0 ${isAr ? 'text-right md:ml-8' : 'text-left md:mr-8'}`}>
            <h3 className="text-xl md:text-2xl font-bold mb-2">
              {isAr ? 'بحاجة لاستشارة سريعة؟' : 'Besoin d’une consultation rapide ?'}
            </h3>
            <p className="text-orange-100">
              {isAr ? 'اتصل بسكرتاريتنا الطبية لحجز موعدك.' : 'Contactez notre secrétariat médical pour réserver votre créneau.'}
            </p>
          </div>
          {/* Remplacement du <button> par <a> pour le lien téléphonique */}
          <a 
            href="tel:+21697806230" 
            className="bg-white text-[#f15a24] hover:bg-slate-50 px-8 py-3.5 rounded-xl font-bold whitespace-nowrap transition shadow-md"
          >
            {isAr ? 'اتصل بالعيادة' : 'Appeler la clinique'}
          </a>
        </div>

      </div>
    </section>
  );
}