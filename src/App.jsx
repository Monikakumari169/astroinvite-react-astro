import Header from './Header';
import StarCanvas from './StarCanvas';
import HeroSlider from './HeroSlider'; // Import the new slider
import './App.css';

function App() {
  return (
    <div className="app-container" style={{ position: 'relative', minHeight: '100vh', background: '#0a0500' }}>
      {/* 1. Star Background */}
      <StarCanvas />

      {/* 2. Custom Header */}
      <Header />
      
      {/* 3. Hero Banner Slider */}
      <HeroSlider />


    </div>
  );
}

export default App;