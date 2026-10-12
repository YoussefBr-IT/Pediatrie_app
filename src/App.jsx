import { useState, useEffect } from 'react';
import { Baby, Activity, Syringe } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Consult from './components/Consult';
import Reviews from './components/Reviews';
import Reels from './components/Reels';
import ClinicMoments from './components/ClinicMoments';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIChatbot from './components/AIChatbot'; // <-- 1. Import de ton nouveau chatbot

const content = {
  fr: {
    dir: 'ltr',
    nav: { home: 'Accueil', services: 'Services', about: 'À Propos', consult: 'Quand Consulter', reels: 'Reels', contact: 'Contact', appointment: 'Rendez-vous' },
    hero: { badge: 'Cabinet Médical Spécialisé', title: 'Votre Santé, Notre Priorité Absolue', subtitle: 'Accompagnement médical personnalisé, diagnostics précis et soins de haute qualité adaptés à vos besoins.', ctaPrimary: 'Prendre Rendez-vous', ctaSecondary: 'Découvrir nos services' },
    services: { 
      title: 'Domaines de soins médicaux', 
      subtitle: 'Des soins spécialisés pour les enfants, de la naissance à l\'adolescence.', 
      list: [
        { icon: Syringe, bgColor: 'bg-[#ffb703]', title: 'Vaccination', desc: 'Vaccination selon le programme national avec suivi de la santé de l\'enfant.', cta: 'En savoir plus' },
        { icon: Activity, bgColor: 'bg-[#ff5c77]', title: 'Suivi de la croissance et du développement', desc: 'Surveillance de la croissance physique, motrice et mentale à différents âges.', cta: 'En savoir plus' },
        { icon: Baby, bgColor: 'bg-[#009688]', title: 'Suivi des nouveau-nés', desc: 'Examen post-partum, allaitement, poids, jaunisse et suivi précoce.', cta: 'En savoir plus' }
      ]
    },
    about: { tag: 'Le Praticien', title: 'Dr Karima Brahim Gardabou', specialties: 'Spécialiste en Pédiatrie et Allergologie', bio: 'Diplômée de la Faculté de Médecine avec plus de 15 ans d’expérience praticienne. Passionnée par une approche humaine et holistique de la santé, le Dr Karima s’engage à offrir à chaque patient une écoute attentive et des soins fondés sur les dernières avancées médicales.', stats: [ { number: '15+', label: 'Années d’expérience' }, { number: '8,000+', label: 'Patients suivis' }, { number: '100%', label: 'Dévouement & Soin' } ] },
    consult: { tag: 'Prévention & Conseils', title: 'Quand Devez-vous Consulter ?', subtitle: 'Ne négligez pas les signaux d’alerte de votre corps. Une prise en charge précoce garantit une meilleure récupération.', reasons: [ 'Fatigue persistante ou inexpliquée durant plus de deux semaines', 'Douleurs thoraciques, essoufflement ou palpitations anormales', 'Maux de tête fréquents résistant aux antalgiques habituels', 'Ajustement ou suivi régulier d’un traitement de longue durée', 'Bilan de santé annuel et dépistage préventif' ] },
    contact: { 
      tag: 'Localisation & Accès', 
      title: 'Informations Complètes du Cabinet', 
      subtitle: 'Nous vous accueillons dans un cadre moderne, apaisant et facile d’accès.', 
      addressTitle: 'Adresse', 
      addressValue: 'Av des Martyrs, Centre Challekh\n3ème étage, El Mourouj 4\nBen Arous', 
      phoneTitle: 'Téléphone', 
      phoneValue: 'Fixe : +216 71 474 022\nGSM : +216 97 806 230', 
      emailTitle: 'Email', 
      emailValue: 'kaariitn@yahoo.com', 
      hoursTitle: 'Horaires d’ouverture', 
      hoursValue: 'Lun, Mar, Jeu, Ven : 08:30–18:00\nMer : 08:30–16:00\nSam : 08:30–13:30\nDim : Fermé' 
    },
    footer: { rights: 'Tous droits réservés.', medicalNotice: 'En cas d’urgence vitale, veuillez contacter immédiatement le service d’urgence le plus proche ou composer le numéro d’urgence national.' }
  },
  ar: {
    dir: 'rtl',
    nav: { home: 'الرئيسية', services: 'خدماتنا', about: 'عن الطبيب', consult: 'متى تستشير؟', reels: 'فيديوهات', contact: 'الاتصال', appointment: 'حجز موعد' },
    hero: { badge: 'عيادة طبية متخصصة', title: 'صحتكم هي أولويتنا المطلقة', subtitle: 'متابعة طبية شخصية، تشخيص دقيق، ورعاية عالية الجودة مصممة لتلبية احتياجاتكم الصحية.', ctaPrimary: 'احجز موعداً الآن', ctaSecondary: 'استكشف خدماتنا' },
    services: { 
      title: 'مجالات الرعاية الطبية', 
      subtitle: 'رعاية متخصصة للأطفال منذ الولادة وحتى سن المراهقة.', 
      list: [
        { icon: Syringe, bgColor: 'bg-[#ffb703]', title: 'التلقيح', desc: 'التلقيح وفق البرنامج الوطني مع متابعة سلامة الطفل.', cta: 'اعرف المزيد' },
        { icon: Activity, bgColor: 'bg-[#ff5c77]', title: 'متابعة النمو والتطور', desc: 'مراقبة النمو الجسدي والحركي والذهني في مختلف المراحل العمرية.', cta: 'اعرف المزيد' },
        { icon: Baby, bgColor: 'bg-[#009688]', title: 'متابعة حديثي الولادة', desc: 'الفحص بعد الولادة، الرضاعة، الوزن، اليرقان والمتابعة المبكرة.', cta: 'اعرف المزيد' }
      ]
    },
    about: { tag: 'الطبيب الممارس', title: 'الدكتورة كريمة ابراهيم القردبو', specialties: 'أخصائية في طب الأطفال والحساسية', bio: 'خريجة كلية الطب مع أكثر من 15 عاماً من الخبرة العملية. تلتزم الدكتورة كريمة بتقديم رعاية صحية إنسانية وشاملة، مع التركيز على الاستماع الفعال للأنشطة الطبية المعتمدة على أحدث التقنيات.', stats: [ { number: '+15', label: 'سنوات من الخبرة' }, { number: '+8000', label: 'مريض تم علاجهم' }, { number: '100%', label: 'التزام ورعاية' } ] },
    consult: { tag: 'وقاية ونصح', title: 'متى ينبغي عليك زيارة الطبيب؟', subtitle: 'لا تتجاهل إشارات جسمك. التشخيص المبكر يضمن استجابة أفضل وعلاجاً أكثر فعالية.', reasons: [ 'شعور مستمر بالتعب أو الإرهاق دون سبب واضح لأكثر من أسبوعين', 'آلام في الصدر، ضيق في التنفس، أو تسارع غير طبيعي في ضربات القلب', 'صداع متكرر ولا يستجيب للمسكنات الاعتيادية', 'متابعة وتعديل جرعات العلاج للأمراض المزمنة', 'إجراء الفحص الطبي السنوي الوقائي' ] },
    contact: { 
      tag: 'الموقع والوصول', 
      title: 'معلومات العيادة', 
      subtitle: 'نستقبلكم في بيئة حديثة، مريحة، وسهلة الوصول.', 
      addressTitle: 'العنوان', 
      addressValue: 'شارع الشهداء، مركز الشالخ\nالطابق الثالث، المروج 4\nبن عروس', 
      phoneTitle: 'الهاتف', 
      phoneValue: 'ثابت : 022 474 71 216+\nجوال : 230 806 97 216+', 
      emailTitle: 'البريد الإلكتروني', 
      emailValue: 'kaariitn@yahoo.com', 
      hoursTitle: 'أوقات العمل', 
      hoursValue: 'الإثنين، الثلاثاء، الخميس، الجمعة: 08:30–18:00\nالأربعاء: 08:30–16:00\nالسبت: 08:30–13:30\nالأحد: مغلق' 
    },
    footer: { rights: 'جميع الحقوق محفوظة.', medicalNotice: 'في حالة الطوارئ الحرجة، يرجى الاتصال فوراً بأقرب مركز طوارئ أو بخدمة الإسعاف الوطنية.' }
  }
};

export default function App() {
  const [lang, setLang] = useState('fr');
  const [currentPage, setCurrentPage] = useState('home');
  const t = content[lang];
  const isRtl = t.dir === 'rtl';

  useEffect(() => {
    document.dir = t.dir;
  }, [t.dir]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'fr' ? 'ar' : 'fr'));
  };

  return (
    <div className={`min-h-screen bg-slate-50 font-sans text-slate-800 ${isRtl ? 'rtl' : 'ltr'} relative`}>
      <Navbar t={t} lang={lang} toggleLanguage={toggleLanguage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      {currentPage === 'home' ? (
        <>
          <Hero t={t} lang={lang} />
          <Services t={t} />
          <About t={t} lang={lang} />
          <Consult t={t} />
          <ClinicMoments lang={lang} /> 
          <Reviews t={t} lang={lang} />
          <Contact t={t} lang={lang} />
        </>
      ) : (
        <Reels t={t} lang={lang} />
      )}

      <Footer t={t} />
      
      {/* 2. Ajout du chatbot ici, il recevra la langue courante pour s'adapter (Français ou Arabe) */}
      <AIChatbot lang={lang} />
    </div>
  );
}