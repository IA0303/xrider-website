import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import HowToUse from './components/HowToUse';
import Pricing from './components/Pricing';
import VideoList from './components/VideoList';
import SafetyNotice from './components/SafetyNotice';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <HowToUse />
        <Pricing />
        <VideoList />
        <SafetyNotice />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
