export default function Services({ t }) {
  return (
    <section id="services" className="py-16 md:py-24 bg-[#f0fcf5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête de la section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#043259] mb-4">
            {t.services.title}
          </h2>
          <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>
        
        {/* Grille des 3 cartes dynamiques */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {t.services.list.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-8 flex flex-col items-center text-center border border-slate-50 shadow-sm hover:shadow-md transition-shadow">
                
                {/* Cercle avec l'icône de couleur */}
                <div className={`w-20 h-20 rounded-full flex items-center justify-center text-white mb-6 shadow-sm ${service.bgColor}`}>
                  <Icon className="w-10 h-10" />
                </div>
                
                {/* Textes */}
                <h3 className="text-xl font-bold text-[#043259] mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm md:text-base mb-8 flex-grow">
                  {service.desc}
                </p>
                
                {/* Lien Instagram "En savoir plus" / "اعرف المزيد" */}
                <a 
                  href="https://www.instagram.com/dr_karima_brahim_gardabou/?utm_source=ig_embed&ig_rid=AKJo3y2UYfEUrVKZQn3LXfU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#00897b] hover:bg-[#007065] text-white px-8 py-2.5 rounded-full font-bold text-sm transition-colors inline-block text-center"
                >
                  {service.cta}
                </a>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}