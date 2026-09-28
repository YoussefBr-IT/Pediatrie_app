
import { Baby, Activity, Syringe, Shield, HeartPulse, Lungs, GraduationCap, Clock } from 'lucide-react';

export default function Services() {
    const services = [
        { title: 'متابعة حديثي الولادة', desc: 'الفحص بعد الولادة، الرضاعة، الوزن، اليرقان والمتابعة المبكرة.', icon: <Baby className="w-8 h-8 text-white" /> },
        { title: 'متابعة النمو والتطور', desc: 'مراقبة النمو الجسدي والحركي والذهني في مختلف المراحل العمرية.', icon: <Activity className="w-8 h-8 text-white" /> },
        { title: 'التلقيح', desc: 'التلقيح وفق البرنامج الوطني مع متابعة سلامة الطفل.', icon: <Syringe className="w-8 h-8 text-white" /> },
    ];

    const expertise = [
        { title: 'اختصاص في طب الأطفال', desc: 'أكثر من 20 سنة خبرة في متابعة الأطفال من الولادة حتى المراهقة.', icon: <HeartPulse className="w-6 h-6 text-teal-700" /> },
        { title: 'اختصاص في حساسية الأطفال', desc: 'تشخيص ومتابعة الحساسية والمناعة عند الأطفال والرضع.', icon: <Shield className="w-6 h-6 text-teal-700" /> },
        { title: 'متابعة الربو والجهاز التنفسي', desc: 'خطط متابعة مخصصة للربو وأمراض الجهاز التنفسي عند الطفل.', icon: <Lungs className="w-6 h-6 text-teal-700" /> },
        { title: 'الطب الوقائي', desc: 'التلقيح والمتابعة الدورية للكشف المبكر عن أي مشكلة صحية.', icon: <Shield className="w-6 h-6 text-teal-700" /> },
        { title: 'مقاربة تربوية مع الأولياء', desc: 'إصغاء وشرح واضح يُمكّن الأولياء من فهم حالة طفلهم والمشاركة في رعايته.', icon: <GraduationCap className="w-6 h-6 text-teal-700" /> },
        { title: 'متابعة طويلة الأمد', desc: 'مرافقة الطفل وعائلته عبر مختلف مراحل النمو والتطور.', icon: <Clock className="w-6 h-6 text-teal-700" /> },
    ];

    return (
        <>
            <div className="bg-slate-100 py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-slate-800 mb-2 text-center">مجالات الرعاية الطبية</h2>
                    <p className="text-gray-500 mb-10 text-center">رعاية متخصصة للأطفال منذ الولادة وحتى سن المراهقة.</p>
                    <div className="grid md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm text-center hover:shadow-md transition">
                                <div className="bg-teal-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-teal-200">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-4">{service.title}</h3>
                                <p className="text-gray-600 mb-6">{service.desc}</p>
                                <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full font-semibold">اعرف المزيد</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="bg-white py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-slate-800 mb-2 text-center">الاختصاص والخبرة الطبية</h2>
                    <p className="text-gray-500 mb-10 text-center">اختصاص دقيق، ومتابعة طويلة الأمد، ومقاربة تربوية مع الأولياء.</p>
                    <div className="grid md:grid-cols-3 gap-6">
                        {expertise.map((item, index) => (
                            <div key={index} className="border border-slate-100 bg-slate-50 p-6 rounded-xl text-center hover:bg-white hover:shadow-lg transition cursor-pointer flex flex-col items-center">
                                <div className="mb-4">{item.icon}</div>
                                <h3 className="text-lg font-bold text-slate-800 mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-500">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}