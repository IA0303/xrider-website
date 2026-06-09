import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import HowToUse from './components/HowToUse';
import Pricing from './components/Pricing';
import VideoList from './components/VideoList';
import RecommendedCombos from './components/RecommendedCombos';
import SafetyNotice from './components/SafetyNotice';
import StoreInfo from './components/StoreInfo';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import MobileStoreBar from './components/MobileStoreBar';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      {/* pb-16 on mobile accounts for the fixed bottom bar */}
      <main className="pb-16 md:pb-0">
        <Hero />
        <About />
        <HowToUse />
        <Pricing />
        <VideoList />
        <RecommendedCombos />
        <SafetyNotice />
        <StoreInfo />
        <FAQ />
      </main>
      <Footer />
      <MobileStoreBar />
    </div>
  );
}

export default App;
