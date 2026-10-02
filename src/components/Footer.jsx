
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-teal-950 py-12 text-emerald-50">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="mb-4 text-xl font-bold text-white">عيادة د. كريمة قردابو</h3>
          <p className="mb-4 text-emerald-100/70">
            رعاية طبية متخصصة للأطفال وحديثي الولادة. تشخيص دقيق ومتابعة مستمرة لضمان نمو صحي وسليم لطفلكم.
          </p>
        </div>
        <div>
          <h3 className="mb-4 text-xl font-bold text-white">معلومات الاتصال</h3>
          <ul className="space-y-3 text-emerald-100/70">
            <li className="flex items-center gap-2"><MapPin className="h-5 w-5 text-rose-300" /> تونس، عنوان العيادة هنا</li>
            <li className="flex items-center gap-2"><Phone className="h-5 w-5 text-rose-300" /> +216 71 000 000</li>
            <li className="flex items-center gap-2"><Mail className="h-5 w-5 text-rose-300" /> contact@dr-karima.tn</li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-xl font-bold text-white">أوقات العمل</h3>
          <ul className="space-y-2 text-emerald-100/70">
            <li className="flex justify-between border-b border-teal-800 pb-2"><span>الإثنين - الجمعة</span> <span>09:00 - 17:00</span></li>
            <li className="flex justify-between border-b border-teal-800 pb-2"><span>السبت</span> <span>09:00 - 13:00</span></li>
            <li className="flex justify-between pb-2 text-rose-300"><span>الأحد</span> <span>مغلق</span></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t border-teal-800 pt-8 text-center text-emerald-100/50">
        © 2026 د. كريمة قردابو. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}