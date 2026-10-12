import { useState, useRef, useEffect } from "react";
import { X, Send } from "lucide-react";
import { GoogleGenAI } from "@google/genai";
import logo from "../assets/logo.jpeg";

const SYSTEM_PROMPT = `Tu es l'assistant virtuel médical du cabinet du Dr Karima Brahim Ep Gardabou. Ton rôle est de répondre aux patients de manière courtoise, concise et professionnelle, en français ou en arabe, selon la langue utilisée par l'utilisateur. Tu ne dois jamais donner de diagnostic médical, de traitement ou de conseils de santé personnalisés. Si un patient décrit des symptômes, recommande-lui de prendre rendez-vous ou de se diriger vers les urgences si cela semble grave. 

Utilise exclusivement les informations suivantes pour répondre aux questions :
1. Présentation : Dr Karima Brahim Ep Gardabou, médecin pédiatre et spécialiste en pneumo-allergologie pédiatrique.
2. Domaines d'expertise : Pédiatrie générale, suivi de la croissance du bébé et de l'enfant, médecine néonatale, vaccination, pneumo-allergologie pédiatrique (traitement et suivi de l'asthme, prise en charge de la toux chronique, spirométrie, tests cutanés d'allergie respiratoire), urgences pédiatriques, dermatologie pédiatrique, homéopathie.
3. Contact et Localisation : Adresse : Avenue des Martyrs, Centre commercial Challekh, 3ème étage (près du terminus du métro), El Mourouj 4, 2074 Ben Arous, Tunisie. Téléphone : +216 71 474 022 (Fixe) ou +216 97 806 230 (Mobile). Email : kaariitn@yahoo.com
4. Horaires d'ouverture : Lundi, Mardi, Jeudi, Vendredi : 08h30 – 18h00. Mercredi : 08h30 – 16h00. Samedi : 08h30 – 13h30. Dimanche : Fermé. (Les horaires peuvent être modifiés lors des jours fériés comme le jour de l'Évacuation).`;

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

export default function AIChatbot({ lang }) {
  const isAr = lang === 'ar';
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      role: 'assistant', 
      content: isAr 
        ? 'مرحباً! أنا المساعد الذكي لعيادة الدكتورة كريمة. كيف يمكنني مساعدتك؟ (مواعيد، أوقات العمل...)' 
        : 'Bonjour ! Je suis l\'assistant de la clinique du Dr Karima. Comment puis-je vous aider ? (horaires, rendez-vous...)'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: input,
        config: {
          systemInstruction: SYSTEM_PROMPT,
        }
      });

      setMessages((prev) => [...prev, { 
        role: 'assistant', 
        content: response.text
      }]);
    } catch (error) {
      console.error('Erreur:', error);
      setMessages((prev) => [...prev, { 
        role: 'assistant', 
        content: isAr 
          ? 'عذراً، حدث خطأ في الاتصال. يرجى المحاولة لاحقاً.' 
          : 'Désolé, un problème de connexion est survenu. Veuillez réessayer plus tard.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      
      {isOpen && (
        <div className="bg-white w-80 sm:w-96 rounded-2xl shadow-2xl border border-slate-200 flex flex-col mb-4 h-[500px] overflow-hidden animate-in slide-in-from-bottom-5">
          
          <div className="bg-[#043259] text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Logo" className="w-8 h-8 rounded-full object-cover border border-white/30" />
              <div>
                <h3 className="font-bold">{isAr ? 'المساعد الذكي' : 'Assistant IA'}</h3>
                <p className="text-xs text-orange-200">
                  {isAr ? 'يرد على أسئلتك فوراً' : 'Répond à vos questions'}
                </p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded-full transition">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 bg-slate-50 space-y-4" dir={isAr ? 'rtl' : 'ltr'}>
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm whitespace-pre-wrap ${
                  msg.role === 'user' 
                    ? 'bg-[#f15a24] text-white rounded-tr-none' 
                    : 'bg-white border border-slate-200 text-slate-700 rounded-tl-none shadow-sm'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-none shadow-sm flex gap-1">
                  <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-75"></span>
                  <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-150"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSend} className="p-4 bg-white border-t border-slate-100 flex gap-2" dir={isAr ? 'rtl' : 'ltr'}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={isAr ? 'اكتب رسالتك هنا...' : 'Écrivez votre message...'}
              className="flex-1 border border-slate-200 rounded-xl px-4 py-2 focus:outline-none focus:border-[#f15a24] text-sm"
            />
            <button 
              type="submit" 
              disabled={isLoading || !input.trim()}
              className="bg-[#043259] text-white p-2 rounded-xl hover:bg-[#03223c] transition disabled:opacity-50"
            >
              <Send className={`w-5 h-5 ${isAr ? 'rotate-180' : ''}`} />
            </button>
          </form>
        </div>
      )}

      {!isOpen && (
        <div className="flex items-center gap-3" dir="ltr">
          
          {!isAr && (
            <div 
              onClick={() => setIsOpen(true)}
              className="bg-white px-4 py-3 rounded-2xl shadow-xl border border-slate-200 relative animate-bounce cursor-pointer"
            >
              <p className="text-sm font-bold text-[#043259] whitespace-nowrap">
                Bonjour ! Avez-vous des questions ?
              </p>
              <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-0 h-0 border-y-[6px] border-y-transparent border-l-[8px] border-l-white"></div>
            </div>
          )}

          {isAr && (
            <div 
              onClick={() => setIsOpen(true)}
              className="bg-white px-4 py-3 rounded-2xl shadow-xl border border-slate-200 relative animate-bounce cursor-pointer"
              dir="rtl"
            >
              <p className="text-sm font-bold text-[#043259] whitespace-nowrap">
                مرحباً! هل لديك أي أسئلة؟
              </p>
              <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-0 h-0 border-y-[6px] border-y-transparent border-l-[8px] border-l-white"></div>
            </div>
          )}

          <button
            onClick={() => setIsOpen(true)}
            className="w-16 h-16 shrink-0 rounded-full shadow-2xl transition-transform hover:scale-105 flex items-center justify-center relative overflow-hidden border-[3px] border-[#043259] bg-white p-0.5"
          >
            <img 
              src={logo} 
              alt="Docteur Karima" 
              className="w-full h-full object-cover rounded-full"
            />
          </button>

        </div>
      )}
    </div>
  );
}