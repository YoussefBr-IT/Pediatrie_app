
import { HeartPulse } from 'lucide-react';

export default function Navbar() {
    return (
        <>
            {/* Top Bar */}
            <div className="bg-slate-800 text-white text-sm py-2 px-4 flex justify-between items-center">
                <div className="flex gap-4">
                    <span className="bg-teal-500 px-3 py-1 rounded text-white font-bold">بلاغات</span>
                    <span>وزارة الصحة التونسية - آخر تحيين: فيفري 2026</span>
                </div>
                <div className="flex gap-4">
                    <a href="#" className="hover:text-teal-300">اطلعوا على المكتبة الطبية ومقالات صحة الطفل</a>
                    <a href="#" className="hover:text-teal-300">الأسئلة الشائعة للأولياء</a>
                </div>
            </div>

            {/* Main Navbar */}
            <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center sticky top-0 z-50">
                <div className="flex items-center gap-2">
                    <HeartPulse className="text-teal-500 w-8 h-8" />
                    <h1 className="text-2xl font-bold text-teal-600">د. كريمة قردابو</h1>
                </div>
                <div className="hidden md:flex gap-6 font-semibold text-gray-700">
                    <a href="#" className="text-teal-600 border-b-2 border-teal-600 pb-1">الرئيسية</a>
                    <a href="#" className="hover:text-teal-600">نبذة</a>
                    <a href="#" className="hover:text-teal-600">الخدمات</a>
                    <a href="#" className="hover:text-teal-600">الأسئلة الشائعة</a>
                    <a href="#" className="hover:text-teal-600">المكتبة الطبية</a>
                    <a href="#" className="hover:text-teal-600">معلومات مفيدة للأولياء</a>
                    <a href="#" className="hover:text-teal-600">اتصل بنا</a>
                </div>
                <button className="bg-blue-600 text-white w-10 h-10 rounded-full font-bold">FR</button>
            </nav>
        </>
    );
}