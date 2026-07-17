import { useState, useEffect } from 'react';
import './HeroSlider.css';

// 1. Export HeroSlider as a named component
export const HeroSlider = () => {
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

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const handleSlideTo = (index) => {
    setActiveIndex(index);
  };

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

// 2. Export ServicesHead as a named component
export const ServicesHead = () => {
  return (
    <section id="astro-services-main-head" className="astro-services-main-head">
      <div className="astro-section-wrap">
        <div className="astro-text-center astro-mb-5 astro-reveal astro-visible">
          <h1 className="astro-section-main-title astro-section-title">
            Astrology Guidance by <span>Astro Sachin Pandit</span>
          </h1>
          <p className="astro-section-title-desc">
            For over 30 years, AstroInvite has helped people find clarity through accurate Kundli analysis, 
            Vedic astrology guidance, and personalized remedies. Whether you need answers about career, 
            marriage, health, finance, or life direction, our experienced astrologers provide practical 
            and trusted advice based on your birth chart. Get meaningful insights that help you make 
            confident decisions at the right time.
          </p>
        </div>
      </div>
    </section>
  );
};