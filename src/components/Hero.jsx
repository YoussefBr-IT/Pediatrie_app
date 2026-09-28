
import { Phone, MessageCircle, Baby, Shield, Clock } from 'lucide-react';

export default function Hero() {
    return (
        <>
            {/* Banner Section */}
            <div className="relative bg-slate-700 text-white py-24 px-8 text-center bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')", backgroundBlendMode: 'multiply' }}>
                <h2 className="text-5xl font-bold mb-4">د. كريمة قردابو</h2>
                <h3 className="text-3xl text-teal-400 mb-6 bg-slate-800/50 inline-block px-4 py-2 rounded">طب الأطفال • المناعة والحساسية</h3>
                <p className="max-w-3xl mx-auto text-lg mb-8 leading-relaxed bg-slate-800/40 p-4 rounded-lg">
                    أكثر من عشرين سنة من الخبرة في طب الأطفال، متابعة حديثي الولادة، مراقبة النمو والتطور، التلقيح، تشخيص وعلاج أمراض الأطفال، أمراض الحساسية والمناعة، مع رعاية طبية متخصصة في بيئة آمنة ومريحة للطفل وعائلته.
                </p>
                <div className="flex justify-center gap-4">
                    <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-full flex items-center gap-2 font-bold text-lg transition">
                        <Phone className="w-5 h-5" />
                        اتصال
                    </button>
                    <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full flex items-center gap-2 font-bold text-lg transition">
                        <MessageCircle className="w-5 h-5" />
                        واتساب
                    </button>
                </div>
                <div className="flex justify-center gap-8 mt-12 text-sm">
                    <span className="flex items-center gap-2"><Clock className="w-5 h-5 text-yellow-400" /> أكثر من 20 سنة خبرة</span>
                    <span className="flex items-center gap-2"><Baby className="w-5 h-5 text-yellow-400" /> من الولادة حتى المراهقة</span>
                    <span className="flex items-center gap-2"><Shield className="w-5 h-5 text-yellow-400" /> اختصاص حساسية ومناعة الأطفال</span>
                </div>
            </div>

            {/* About Section */}
            <div className="max-w-6xl mx-auto py-16 px-4 flex flex-col md:flex-row gap-12 items-center">
                <div className="w-full md:w-1/3">
                    <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="د. كريمة قردابو" className="rounded-2xl shadow-xl border-4 border-white" />
                </div>
                <div className="w-full md:w-2/3">
                    <h2 className="text-3xl font-bold text-slate-800 mb-2">نبذة عن الدكتورة</h2>
                    <p className="text-teal-600 mb-6 font-medium">أكثر من عشرين سنة من الخبرة في رعاية الأطفال وحديثي الولادة.</p>
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