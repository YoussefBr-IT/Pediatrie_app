export default function Consult({ t }) {
  return (
    <section id="consult" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-amber-600 tracking-wider uppercase bg-amber-50 px-3 py-1 rounded-full">{t.consult.tag}</span>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-3">{t.consult.title}</h2>
          <p className="text-slate-600 mt-2 text-sm">{t.consult.subtitle}</p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {t.consult.reasons.map((reason, idx) => (
            <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-amber-200 transition">
              <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">{idx + 1}</div>
              <p className="text-sm font-medium text-slate-700 pt-1 leading-relaxed">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}