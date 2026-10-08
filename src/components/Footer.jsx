export default function Footer({ t }) {
  return (
    <footer className="py-8 bg-white text-slate-600 border-t border-slate-100 text-xs md:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center md:flex md:items-center md:justify-between md:space-y-0">
        <p className="font-medium">© {new Date().getFullYear()} Dr Karima Brahim Gardabou. {t.footer.rights}</p>
        <p className="max-w-md text-slate-500 mx-auto md:mx-0">{t.footer.medicalNotice}</p>
      </div>
    </footer>
  );
}