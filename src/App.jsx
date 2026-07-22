import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import StarCanvas from './StarCanvas';

// Import Page Components (capitalized for React)
import AboutUs from './pages/AboutUs';
import CallConsultation from './pages/CallConsultation'; 


// Import HomePage Sections
import { 
  HeroSlider, 
  ServicesHead, 
  Servicecards, 
  Serviceabout, 
  HomeYoutube, 
  Blogsection, 
  Ctasection, 
  TestimonialsSection, 
  FaqSection 
} from './HomePage';

import './App.css';

// Placeholder Components for remaining pages
const BrahmvidKundli = () => <div style={{ padding: '100px 20px', textAlign: 'center' }}><h1>Brahmvid Kundli Report</h1></div>;
const Blog = () => <div style={{ padding: '100px 20px', textAlign: 'center' }}><h1>Blog</h1></div>;
const ContactUs = () => <div style={{ padding: '100px 20px', textAlign: 'center' }}><h1>Contact Us</h1></div>;

const HomePageLayout = () => (
  <>
    <HeroSlider />
    <ServicesHead />
    <Servicecards />
    <Serviceabout />
    <HomeYoutube />
    <Blogsection />
    <Ctasection />
    <TestimonialsSection />
    <FaqSection />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <div className="app-container" style={{ position: 'relative', minHeight: '100vh', background: '#ffffff' }}>
        <StarCanvas />
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<HomePageLayout />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/brahmvid-kundli-reports" element={<BrahmvidKundli />} />
            <Route path="/call-consultation" element={<CallConsultation />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;