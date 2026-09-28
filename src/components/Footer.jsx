
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-200 py-12">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold text-white mb-4">عيادة د. كريمة قردابو</h3>
          <p className="text-slate-400 mb-4">
            رعاية طبية متخصصة للأطفال وحديثي الولادة. تشخيص دقيق ومتابعة مستمرة لضمان نمو صحي وسليم لطفلكم.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-4">معلومات الاتصال</h3>
          <ul className="space-y-3 text-slate-400">
            <li className="flex items-center gap-2"><MapPin className="w-5 h-5 text-teal-400"/> تونس، عنوان العيادة هنا</li>
            <li className="flex items-center gap-2"><Phone className="w-5 h-5 text-teal-400"/> +216 71 000 000</li>
            <li className="flex items-center gap-2"><Mail className="w-5 h-5 text-teal-400"/> contact@dr-karima.tn</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-4">أوقات العمل</h3>
          <ul className="space-y-2 text-slate-400">
            <li className="flex justify-between border-b border-slate-700 pb-2"><span>الإثنين - الجمعة</span> <span>09:00 - 17:00</span></li>
            <li className="flex justify-between border-b border-slate-700 pb-2"><span>السبت</span> <span>09:00 - 13:00</span></li>
            <li className="flex justify-between pb-2 text-red-400"><span>الأحد</span> <span>مغلق</span></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-slate-500 mt-8 pt-8 border-t border-slate-700">
        © 2026 د. كريمة قردابو. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}