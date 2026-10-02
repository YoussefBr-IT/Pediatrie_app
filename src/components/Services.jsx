
import { Baby, Activity, Syringe, Shield, HeartPulse, Wind, GraduationCap, Clock } from 'lucide-react';

export default function Services() {
    const services = [
        { title: 'متابعة حديثي الولادة', desc: 'الفحص بعد الولادة، الرضاعة، الوزن، اليرقان والمتابعة المبكرة.', icon: <Baby className="w-8 h-8 text-white" /> },
        { title: 'متابعة النمو والتطور', desc: 'مراقبة النمو الجسدي والحركي والذهني في مختلف المراحل العمرية.', icon: <Activity className="w-8 h-8 text-white" /> },
        { title: 'التلقيح', desc: 'التلقيح وفق البرنامج الوطني مع متابعة سلامة الطفل.', icon: <Syringe className="w-8 h-8 text-white" /> },
    ];

    const expertise = [
        { title: 'اختصاص في طب الأطفال', desc: 'أكثر من 20 سنة خبرة في متابعة الأطفال من الولادة حتى المراهقة.', icon: <HeartPulse className="w-6 h-6 text-teal-700" /> },
        { title: 'اختصاص في حساسية الأطفال', desc: 'تشخيص ومتابعة الحساسية والمناعة عند الأطفال والرضع.', icon: <Shield className="w-6 h-6 text-rose-500" /> },
        { title: 'متابعة الربو والجهاز التنفسي', desc: 'خطط متابعة مخصصة للربو وأمراض الجهاز التنفسي عند الطفل.', icon: <Wind className="w-6 h-6 text-teal-700" /> },
        { title: 'الطب الوقائي', desc: 'التلقيح والمتابعة الدورية للكشف المبكر عن أي مشكلة صحية.', icon: <Shield className="w-6 h-6 text-rose-500" /> },
        { title: 'مقاربة تربوية مع الأولياء', desc: 'إصغاء وشرح واضح يُمكّن الأولياء من فهم حالة طفلهم والمشاركة في رعايته.', icon: <GraduationCap className="w-6 h-6 text-teal-700" /> },
        { title: 'متابعة طويلة الأمد', desc: 'مرافقة الطفل وعائلته عبر مختلف مراحل النمو والتطور.', icon: <Clock className="w-6 h-6 text-rose-500" /> },
    ];

    return (
        <>
            <div className="bg-emerald-50 py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="mb-2 text-center text-3xl font-bold text-teal-950">مجالات الرعاية الطبية</h2>
                    <p className="text-gray-500 mb-10 text-center">رعاية متخصصة للأطفال منذ الولادة وحتى سن المراهقة.</p>
                    <div className="grid md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="rounded-lg border border-emerald-100 bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                                <div className={`${index === 1 ? 'bg-rose-400 shadow-rose-200' : index === 2 ? 'bg-amber-400 shadow-amber-200' : 'bg-teal-600 shadow-teal-200'} mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full shadow-lg`}>
                                    {service.icon}
                                </div>
                                <h3 className="mb-4 text-xl font-bold text-teal-950">{service.title}</h3>
                                <p className="text-gray-600 mb-6">{service.desc}</p>
                                <button className="rounded-full bg-teal-700 px-6 py-2 font-semibold text-white transition hover:bg-teal-800">اعرف المزيد</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="bg-white py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="mb-2 text-center text-3xl font-bold text-teal-950">الاختصاص والخبرة الطبية</h2>
                    <p className="text-gray-500 mb-10 text-center">اختصاص دقيق، ومتابعة طويلة الأمد، ومقاربة تربوية مع الأولياء.</p>
                    <div className="grid md:grid-cols-3 gap-6">
                        {expertise.map((item, index) => (
                            <div key={index} className="flex cursor-pointer flex-col items-center rounded-lg border border-emerald-100 bg-emerald-50/60 p-6 text-center transition hover:border-rose-200 hover:bg-white hover:shadow-md">
                                <div className="mb-4">{item.icon}</div>
                                <h3 className="mb-2 text-lg font-bold text-teal-950">{item.title}</h3>
                                <p className="text-sm text-gray-500">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}