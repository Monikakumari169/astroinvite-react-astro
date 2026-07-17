import { useState, useEffect } from 'react';
import './HeroSlider.css';

const HeroSlider = () => {
  const slides = [
    {
      desktop_image: '/web-1.webp', 
      mobile_image: '/ph-1-1.webp',
      link: '#',
    },
    {
      desktop_image: '/home-banner-two.webp', 
      mobile_image: '/ph-2.webp',
      link: '#',
    },
    {
      desktop_image: '/home-page-banner.webp', 
      mobile_image: '/ph-3.webp',
      link: '#',
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // 1. Declare functions first so they exist in memory...
  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const handleSlideTo = (index) => {
    setActiveIndex(index);
  };

  // 2. Now the useEffect can safely call handleNext!
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5500);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section id="heroSection">
      <div id="heroCarousel" className="carousel slide hero-carousel">
        
        {/* Indicators */}
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleSlideTo(index)}
              className={index === activeIndex ? 'active' : ''}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Slides */}
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
            >
              <a href={slide.link || '#'} target="_blank" rel="noopener noreferrer">
                <div className="hero-slide">
                  
                  {/* Desktop Background */}
                  {slide.desktop_image && (
                    <div 
                      className="hero-slide-bg desktop-bg" 
                      style={{ backgroundImage: `url('${slide.desktop_image}')` }}
                    />
                  )}

                  {/* Mobile Background */}
                  {slide.mobile_image && (
                    <div 
                      className="hero-slide-bg mobile-bg" 
                      style={{ backgroundImage: `url('${slide.mobile_image}')` }}
                    />
                  )}

                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        {slides.length > 1 && (
          <>
            <button 
              className="carousel-control-prev" 
              type="button" 
              onClick={handlePrev}
              aria-label="Previous Slide"
            />
            <button 
              className="carousel-control-next" 
              type="button" 
              onClick={handleNext}
              aria-label="Next Slide"
            />
          </>
        )}

      </div>
    </section>
  );
};

export default HeroSlider;