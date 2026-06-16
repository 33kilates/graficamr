import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AgitationSection from './components/AgitationSection';
import FactorySection from './components/FactorySection';
import ProductsSection from './components/ProductsSection';
import PlansSection from './components/PlansSection';
import NichesSection from './components/NichesSection';
import TestimonialsSection from './components/TestimonialsSection';
import GoogleReviews from './components/GoogleReviews';
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
        <ProductsSection />
        <PlansSection />
        <NichesSection />
        <GoogleReviews />
        <TestimonialsSection />
        <FaqSection />
        <BottomCta />
      </main>
      <Footer />
    </>
  );
}

export default App;
