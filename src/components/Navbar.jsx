
import { HeartPulse } from 'lucide-react';

export default function Navbar() {
    return (
        <>
            {/* Top Bar */}
            <div className="bg-teal-800 text-white text-sm py-2 px-4 flex justify-between items-center">
                <div className="flex gap-4">
                    <span className="bg-rose-400 px-3 py-1 rounded text-white font-bold">بلاغات</span>
                    <span>وزارة الصحة التونسية - آخر تحيين: فيفري 2026</span>
                </div>
                <div className="flex gap-4">
                    <a href="#" className="hover:text-amber-200">اطلعوا على المكتبة الطبية ومقالات صحة الطفل</a>
                    <a href="#" className="hover:text-amber-200">الأسئلة الشائعة للأولياء</a>
                </div>
            </div>

            {/* Main Navbar */}
            <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-emerald-100 bg-white/95 px-8 py-4 shadow-sm backdrop-blur">
                <div className="flex items-center gap-2">
                    <HeartPulse className="h-8 w-8 text-teal-600" />
                    <h1 className="text-2xl font-bold text-teal-800">د. كريمة قردابو</h1>
                </div>
                <div className="hidden md:flex gap-6 font-semibold text-slate-600">
                    <a href="#" className="border-b-2 border-rose-400 pb-1 text-teal-700">الرئيسية</a>
                    <a href="#" className="hover:text-teal-700">نبذة</a>
                    <a href="#" className="hover:text-teal-700">الخدمات</a>
                    <a href="#" className="hover:text-teal-700">الأسئلة الشائعة</a>
                    <a href="#" className="hover:text-teal-700">المكتبة الطبية</a>
                    <a href="#" className="hover:text-teal-700">معلومات مفيدة للأولياء</a>
                    <a href="#" className="hover:text-teal-700">اتصل بنا</a>
                </div>
                <button className="h-10 w-10 rounded-full bg-amber-100 font-bold text-teal-800 transition hover:bg-amber-200">FR</button>
            </nav>
        </>
    );
}