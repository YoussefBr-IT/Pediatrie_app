
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AgeSelector from './components/AgeSelector';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <div dir="rtl" className="font-sans text-gray-800 bg-slate-50 min-h-screen">
      <Navbar />
      <Hero />
      <AgeSelector />
      <Services />
      <Footer />
    </div>
  );
}

export default App;