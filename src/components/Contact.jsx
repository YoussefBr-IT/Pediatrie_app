import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact({ t, lang }) {
  const isAr = lang === 'ar';

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[#f15a24] font-bold text-sm tracking-wider uppercase bg-orange-50 px-4 py-1.5 rounded-full inline-block mb-4">
            {t.contact.tag}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#043259] mb-4">
            {t.contact.title}
          </h2>
          <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Grille des informations avec le style des icônes en haut */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          
          {/* Adresse */}
          <div className="bg-slate-50/50 p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-orange-50 text-[#f15a24] flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-[#043259] text-lg mb-3">{t.contact.addressTitle}</h3>
            <p className="text-slate-600 whitespace-pre-line text-sm leading-relaxed">{t.contact.addressValue}</p>
          </div>

          {/* Téléphone */}
          <div className="bg-slate-50/50 p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-orange-50 text-[#f15a24] flex items-center justify-center mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-[#043259] text-lg mb-3">{t.contact.phoneTitle}</h3>
            <p className="text-slate-600 whitespace-pre-line text-sm leading-relaxed">{t.contact.phoneValue}</p>
          </div>

          {/* Email */}
          <div className="bg-slate-50/50 p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-orange-50 text-[#f15a24] flex items-center justify-center mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-[#043259] text-lg mb-3">{t.contact.emailTitle}</h3>
            <p className="text-slate-600 text-sm break-all leading-relaxed">{t.contact.emailValue}</p>
          </div>

          {/* Horaires */}
          <div className="bg-slate-50/50 p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-orange-50 text-[#f15a24] flex items-center justify-center mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-[#043259] text-lg mb-3">{t.contact.hoursTitle}</h3>
            <p className="text-slate-600 whitespace-pre-line text-sm leading-relaxed">{t.contact.hoursValue}</p>
          </div>

        </div>

        {/* Google Maps intégré au milieu */}
        <div className="w-full bg-slate-100 rounded-3xl overflow-hidden shadow-md border border-slate-200 mb-16">
          <div className="p-4 bg-[#043259] text-white font-bold text-center">
            {isAr ? 'موقع العيادة على الخريطة (المروج 4، مركز الشالخ)' : 'Localisation du Cabinet (El Mourouj 4, Centre Challekh)'}
          </div>
          <div className="w-full h-[400px]">
            <iframe
              title="Google Maps Cabinet Dr Karima"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3195.4262804245667!2d10.2294!3d36.7289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd350070b43bbd%3A0x6b4df3d47ff0a1a0!2sEl%20Mourouj%204!5e0!3m2!1sfr!2stn!4v1650000000000!5m2!1sfr!2stn"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Bannière "Besoin d'une consultation rapide ?" en bas */}
        <div className="bg-[#f15a24] rounded-3xl p-8 md:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              {isAr ? 'هل تحتاج إلى استشارة عاجلة؟' : 'Besoin d’une consultation rapide ?'}
            </h3>
            <p className="text-orange-100 text-base">
              {isAr ? 'اتصل بأمانة الأمانة الطبية لحجز موعدك.' : 'Contactez notre secrétariat médical pour réserver votre créneau.'}
            </p>
          </div>
          <a 
            href="tel:+21671474022" 
            className="bg-white text-[#f15a24] hover:bg-orange-50 font-bold px-8 py-4 rounded-xl shadow-md transition-all whitespace-nowrap"
          >
            {isAr ? 'اتصل بالعيادة' : 'Appeler la clinique'}
          </a>
        </div>

      </div>
    </section>
  );
}