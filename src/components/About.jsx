import { CheckCircle } from 'lucide-react';

export default function About({ t, lang }) {
  return (
    <section id="about" className="py-20 bg-slate-50 border-t border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold text-amber-600 tracking-wider uppercase bg-amber-100/60 px-3 py-1 rounded-full">{t.about.tag}</span>
            <h2 className="text-3xl font-extrabold text-slate-900">{t.about.title}</h2>
            <p className="text-amber-600 font-semibold text-sm -mt-4">{t.about.specialties}</p>
            <p className="text-slate-600 text-sm leading-relaxed">{t.about.bio}</p>
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200">
              {t.about.stats.map((stat, idx) => (
                <div key={idx} className="text-center md:text-start">
                  <div className="text-2xl font-black text-slate-900">{stat.number}</div>
                  <div className="text-xs text-slate-500 font-medium mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-md space-y-4">
            <h3 className="text-lg font-bold text-slate-900 mb-4">{lang === 'fr' ? 'Engagements Qualité' : 'التزامات الجودة'}</h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-amber-500 shrink-0" /><span>{lang === 'fr' ? 'Écoute attentive et bienveillante' : 'إنصات تام ورعاية فائقة'}</span></li>
              <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-amber-500 shrink-0" /><span>{lang === 'fr' ? 'Équipements médicaux récents' : 'معدات طبية حديثة ومطورة'}</span></li>
              <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-amber-500 shrink-0" /><span>{lang === 'fr' ? 'Confidentialité et secret médical strict' : 'سرية تامة وخصوصية مطلقة'}</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}