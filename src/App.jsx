
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AgeSelector from './components/AgeSelector';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <div dir="rtl" className="min-h-screen bg-emerald-50/50 font-sans text-slate-700">
      <Navbar />
      <Hero />
      <AgeSelector />
      <Services />
      <Footer />
    </div>
  );
}

export default App;