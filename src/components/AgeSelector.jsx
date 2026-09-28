import  { useState } from 'react';
import { Baby, ArrowLeft } from 'lucide-react';

export default function AgeSelector() {
    const [selectedAge, setSelectedAge] = useState(null);

    const ageGroups = [
        { id: 'newborn', label: 'وليد جديد', icon: <Baby className="w-8 h-8 mb-2 text-teal-600" /> },
        { id: '0-3m', label: '0 - 3 أشهر', icon: <Baby className="w-8 h-8 mb-2 text-teal-600" /> },
        { id: '3-12m', label: '3 - 12 شهراً', icon: <Baby className="w-8 h-8 mb-2 text-teal-600" /> },
        { id: '1-3y', label: '1 - 3 سنوات', icon: <Baby className="w-8 h-8 mb-2 text-teal-600" /> },
        { id: '3-6y', label: '3 - 6 سنوات', icon: <Baby className="w-8 h-8 mb-2 text-teal-600" /> },
        { id: '6y+', label: 'أكثر من 6 سنوات', icon: <Baby className="w-8 h-8 mb-2 text-teal-600" /> },
    ];

    return (
        <div className="bg-white py-16">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-slate-800 mb-2">كيف يمكننا مساعدة طفلكم اليوم؟</h2>
                <p className="text-gray-500 mb-10">أجيبوا عن بضعة أسئلة بسيطة للوصول مباشرة إلى المقالات الطبية الأنسب لحالة طفلكم.</p>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow-sm">
                    <h3 className="text-xl font-bold mb-6 text-right">ما هو عمر طفلكم؟</h3>
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
                        {ageGroups.map((group) => (
                            <button
                                key={group.id}
                                onClick={() => setSelectedAge(group.id)}
                                className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition ${selectedAge === group.id ? 'border-teal-500 bg-teal-50' : 'border-transparent bg-white hover:border-slate-200 shadow-sm'}`}
                            >
                                {group.icon}
                                <span className="font-semibold text-slate-700">{group.label}</span>
                            </button>
                        ))}
                    </div>
                    <div className="flex justify-end">
                        <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-2 rounded-full font-bold flex items-center gap-2">
                            التالي
                            <ArrowLeft className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}