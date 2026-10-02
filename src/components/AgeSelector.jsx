import { useState } from 'react';
import { Baby, ArrowLeft } from 'lucide-react';

export default function AgeSelector() {
    const [selectedAge, setSelectedAge] = useState(null);

    const ageGroups = [
        { id: 'newborn', label: 'وليد جديد', icon: <Baby className="mb-2 h-8 w-8 text-teal-600" /> },
        { id: '0-3m', label: '0 - 3 أشهر', icon: <Baby className="mb-2 h-8 w-8 text-teal-600" /> },
        { id: '3-12m', label: '3 - 12 شهراً', icon: <Baby className="mb-2 h-8 w-8 text-teal-600" /> },
        { id: '1-3y', label: '1 - 3 سنوات', icon: <Baby className="mb-2 h-8 w-8 text-teal-600" /> },
        { id: '3-6y', label: '3 - 6 سنوات', icon: <Baby className="mb-2 h-8 w-8 text-teal-600" /> },
        { id: '6y+', label: 'أكثر من 6 سنوات', icon: <Baby className="mb-2 h-8 w-8 text-teal-600" /> },
    ];

    return (
        <div className="bg-white py-16">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="mb-2 text-3xl font-bold text-teal-950">كيف يمكننا مساعدة طفلكم اليوم؟</h2>
                <p className="text-gray-500 mb-10">أجيبوا عن بضعة أسئلة بسيطة للوصول مباشرة إلى المقالات الطبية الأنسب لحالة طفلكم.</p>

                <div className="rounded-lg border border-emerald-100 bg-emerald-50/70 p-8 shadow-sm shadow-teal-900/5">
                    <h3 className="mb-6 text-right text-xl font-bold text-teal-950">ما هو عمر طفلكم؟</h3>
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
                        {ageGroups.map((group) => (
                            <button
                                key={group.id}
                                onClick={() => setSelectedAge(group.id)}
                                className={`flex flex-col items-center justify-center rounded-lg border-2 p-4 transition ${selectedAge === group.id ? 'border-teal-500 bg-white shadow-sm' : 'border-transparent bg-white hover:border-rose-200 shadow-sm'}`}
                            >
                                {group.icon}
                                <span className="font-semibold text-teal-950">{group.label}</span>
                            </button>
                        ))}
                    </div>
                    <div className="flex justify-end">
                        <button className="flex items-center gap-2 rounded-full bg-teal-700 px-8 py-2 font-bold text-white transition hover:bg-teal-800">
                            التالي
                            <ArrowLeft className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}