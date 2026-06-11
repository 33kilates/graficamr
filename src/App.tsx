import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AgitationSection from './components/AgitationSection';
import FactorySection from './components/FactorySection';
import PlansSection from './components/PlansSection';
import NichesSection from './components/NichesSection';
import TestimonialsSection from './components/TestimonialsSection';
import FaqSection from './components/FaqSection';
import BottomCta from './components/BottomCta';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AgitationSection />
        <FactorySection />
        <PlansSection />
        <NichesSection />
        <TestimonialsSection />
        <FaqSection />
        <BottomCta />
      </main>
      <Footer />
    </>
  );
}

export default App;
