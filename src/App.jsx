import Header from './Header';
import StarCanvas from './StarCanvas';
import { HeroSlider, ServicesHead, Servicecards, Serviceabout, HomeYoutube, Blogsection, Ctasection, TestimonialsSection, FaqSection } from './HeroSlider';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="app-container" style={{ position: 'relative', minHeight: '100vh', background: '#ffffff' }}>
      {/* 1. Star Canvas Background */}
      <StarCanvas />

      {/* 2. Header */}
      <Header />
      
      {/* 3. Hero Slider Banner */}
      <HeroSlider />

      {/* 4. Services Headline */}
      <ServicesHead />

      {/* 5. Service Cards Grid */}
      <Servicecards />

      <Serviceabout />

      <HomeYoutube />

      <Blogsection />

      <Ctasection />

      <TestimonialsSection />

      <FaqSection />

      <Footer />
    </div>
  );
}

export default App;