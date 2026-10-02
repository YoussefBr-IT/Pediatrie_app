
import { Phone, MessageCircle, Baby, Shield, Clock } from 'lucide-react';

export default function Hero() {
    return (
        <>
            {/* Banner Section */}
            <div className="relative bg-teal-950/75 bg-cover bg-center px-6 py-20 text-center text-white md:px-8 md:py-24" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')", backgroundBlendMode: 'multiply' }}>
                <h2 className="mb-4 text-4xl font-bold md:text-5xl">د. كريمة قردابو</h2>
                <h3 className="mb-6 inline-block rounded-lg bg-white/15 px-4 py-2 text-xl text-amber-200 md:text-2xl">طب الأطفال • المناعة والحساسية</h3>
                <p className="mx-auto mb-8 max-w-3xl rounded-lg bg-teal-950/40 p-4 text-lg leading-relaxed">
                    أكثر من عشرين سنة من الخبرة في طب الأطفال، متابعة حديثي الولادة، مراقبة النمو والتطور، التلقيح، تشخيص وعلاج أمراض الأطفال، أمراض الحساسية والمناعة، مع رعاية طبية متخصصة في بيئة آمنة ومريحة للطفل وعائلته.
                </p>
                <div className="flex justify-center gap-4">
                    <button className="flex items-center gap-2 rounded-full bg-teal-500 px-8 py-3 text-lg font-bold text-white transition hover:bg-teal-400">
                        <Phone className="w-5 h-5" />
                        اتصال
                    </button>
                    <button className="flex items-center gap-2 rounded-full bg-emerald-500 px-8 py-3 text-lg font-bold text-white transition hover:bg-emerald-400">
                        <MessageCircle className="w-5 h-5" />
                        واتساب
                    </button>
                </div>
                <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm">
                    <span className="flex items-center gap-2"><Clock className="h-5 w-5 text-amber-300" /> أكثر من 20 سنة خبرة</span>
                    <span className="flex items-center gap-2"><Baby className="h-5 w-5 text-amber-300" /> من الولادة حتى المراهقة</span>
                    <span className="flex items-center gap-2"><Shield className="h-5 w-5 text-amber-300" /> اختصاص حساسية ومناعة الأطفال</span>
                </div>
            </div>

            {/* About Section */}
            <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 py-16 md:flex-row">
                <div className="w-full md:w-1/3">
                    <img src="https://www.para-doctor.tn/wp-content/uploads/2024/06/pediatre-el-mourouj-karima-brahim-gardabou.png" alt="د. كريمة قردابو" className="rounded-lg border-4 border-white shadow-lg shadow-teal-900/10" />
                </div>
                <div className="w-full md:w-2/3">
                    <h2 className="mb-2 text-3xl font-bold text-teal-950">نبذة عن الدكتورة</h2>
                    <p className="mb-6 font-medium text-teal-700">أكثر من عشرين سنة من الخبرة في رعاية الأطفال وحديثي الولادة.</p>
                    <div className="space-y-4 text-gray-600 leading-relaxed">
                        <p>
                            تتمتع الدكتورة <strong>كريمة قردابو</strong> بخبرة تتجاوز عشرين عاماً في طب الأطفال وحديثي الولادة، حيث تخرجت في كلية الطب وتحصلت على شهادة الاختصاص بعد سنوات من التكوين والإقامة الجامعية والعمل بالمستشفيات الجامعية.
                        </p>
                        <p>
                            تؤمن بأن الرعاية الطبية الناجحة تقوم على التشخيص الدقيق، والإصغاء الجيد للأولياء، والمتابعة المنتظمة لنمو الطفل وتطوره، مع الالتزام بأحدث التوصيات العلمية العالمية.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}