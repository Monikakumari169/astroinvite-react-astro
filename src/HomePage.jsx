import { useState, useEffect, useRef } from 'react';
import './assets/css/commonSection.css';
import './assets/css/HeroSlider.css'; // Use this if you have slider styles here


// Default slides for Home Page
const DEFAULT_SLIDES = [
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

export const HeroSlider = ({ slides = DEFAULT_SLIDES }) => {
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
    if (slides.length <= 1) return;
    
    const interval = setInterval(() => {
      handleNext();
    }, 5500);
    return () => clearInterval(interval);
  }, [activeIndex, slides.length]);

  return (
    <section id="heroSection">
      <div id="heroCarousel" className="carousel slide hero-carousel">
        {slides.length > 1 && (
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
        )}

        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
            >
              <a href={slide.link || '#'} target="_blank" rel="noopener noreferrer">
                <div className="hero-slide">
                  {slide.desktop_image && (
                    <div 
                      className="hero-slide-bg desktop-bg" 
                      style={{ backgroundImage: `url('${slide.desktop_image}')` }}
                    />
                  )}
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

// 2. ServicesHead Component
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

// 3. Servicecards Component
export const Servicecards = () => {
  return (
    <section id="services">
      <div className="section-wrap">
        <div className="text-center mb-5 reveal visible" data-visible-class="visible">
          <span className="gold-label">✦ What We Offer</span>  
          <h2 className="section-title" style={{ color: '#000' }}>
            Expert Astrology <span>Services</span>
          </h2>
          <div className="divider-ornament justify-content-center">
            <div className="line"></div>
            <span className="star">✦</span>
            <div className="line right"></div>
          </div>
        </div>
      
        <div className="row g-4 mb-4">
          <div className="col-md-6 col-lg-4 reveal reveal-delay-1 visible">
            <div className="service-card">
              <div className="service-icon">
                <i className="bi bi-graph-down-arrow" style={{ color: '#fff' }}></i>
              </div>
              <h3>Facing Business Losses?</h3>
              <p>Identify favourable periods, financial obstacles, &amp; effective remedies to reduce losses and increase growth through consultation.</p>
              <a href="#" onClick={(e) => e.preventDefault()} className="btn-gold open-popup-btn">
                Book Now <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 reveal reveal-delay-2 visible">
            <div className="service-card">
              <div className="service-icon">
                <i className="bi bi-heart-fill" style={{ color: '#fff' }}></i>
              </div>
              <h3>Marriage Delays?</h3>
              <p>Receive expert consultation to know why your marriage is delayed &amp; when you’ll find the right partner.</p>
              <a href="#" onClick={(e) => e.preventDefault()} className="btn-gold open-popup-btn">
                Book Now <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 reveal reveal-delay-3 visible">
            <div className="service-card">
              <div className="service-icon">
                <i className="bi bi-person-heart" style={{ color: '#fff' }}></i>
              </div>
              <h3>Delays in Childbirth?</h3>
              <p>Discover the reasons behind delays in your parenthood journey through a personal consultation with the expert.</p>
              <a href="#" onClick={(e) => e.preventDefault()} className="btn-gold open-popup-btn">
                Book Now <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 reveal reveal-delay-4">
            <div className="service-card">
              <div className="service-icon">
                <i className="bi bi-briefcase-fill" style={{ color: '#fff' }}></i>
              </div>
              <h3>Where’s my growth?</h3>
              <p>Get a consultation with Astrologer Sachin Pandit to understand which career path will give you better stability, promotion and growth.</p>
              <a href="#" onClick={(e) => e.preventDefault()} className="btn-gold open-popup-btn">
                Book Now <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 reveal reveal-delay-1">
            <div className="service-card">
              <div className="service-icon">
                <i className="bi bi-heart-pulse-fill" style={{ color: '#fff' }}></i>
              </div>
              <h3>Repeated Health Concerns?</h3>
              <p>Understand planetary influences affecting your health and get remedies through consultation for overall well-being.</p>
              <a href="#" onClick={(e) => e.preventDefault()} className="btn-gold open-popup-btn">
                Book Now <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 reveal reveal-delay-2">
            <div className="service-card">
              <div className="service-icon">
                <i className="bi bi-lightbulb-fill" style={{ color: '#fff' }}></i>
              </div>
              <h3>Efforts not Paying Off?</h3>
              <p>Get clarity with consultation on what’s holding you back, your current life phase, and the right direction.</p>
              <a href="#" onClick={(e) => e.preventDefault()} className="btn-gold open-popup-btn">
                Book Now <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// 4. Serviceabout Component
export const Serviceabout = () => {
  return (
    <section id="about">
      <div className="section-wrap">
        <div className="row align-items-center g-5">
          <div className="col-lg-5 reveal visible" data-visible-class="visible">
            <div className="about-image-wrap" style={{ paddingBottom: '24px' }}>
              <img 
                width="450" 
                height="550" 
                className="about-photo-main" 
                src="https://staging.astroinvite.com/wp-content/uploads/2026/05/about-us-final.webp" 
                alt="Astro Sachin Pandit" 
              />
              <div className="about-badge">
                <div className="num">30+</div>
                <div className="lbl">
                  <p>Years of<br />Wisdom</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-7 reveal reveal-delay-2 visible" data-visible-class="visible">
            <span className="gold-label">✦ Meet the Astrologer</span>        
            <h2 className="section-title">
              One of the World’s Most Trusted Astrologer - <span>Astro Sachin Pandit</span>
            </h2>        
            <div className="divider-ornament">
              <div className="line"></div>
              <span className="star">✦</span>
              <div className="line right"></div>
            </div>
            
            <p style={{ color: 'var(--text-muted)', fontSize: '13.5px', lineHeight: '1.9', marginBottom: '24px' }}>
              With 30+ years of expertise in Vedic Astrology, Lal Kitab, Numerology, and Palmistry, he helps you find the right solutions, remove obstacles, and move forward with clarity.
            </p>
            
            <ul className="about-list">
              <li><i className="bi bi-check-circle-fill"></i> Detailed Kundli Reading, Not Guesswork</li>
              <li><i className="bi bi-check-circle-fill"></i> 1.2 lakh+ live astrology sessions completed</li>
              <li><i className="bi bi-check-circle-fill"></i> Specialist in powerful spiritual remedies</li>
              <li><i className="bi bi-check-circle-fill"></i> Chosen by People Seeking Real Answers</li>
            </ul>
            
            <a href="#" onClick={(e) => e.preventDefault()} className="edu-btn btn-medium open-popup-btn">
              Book Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// 5. HomeYoutube Component
export const HomeYoutube = () => {
  const openVideoModal = (videoId) => {
    console.log('Open video modal for:', videoId);
  };

  return (
    <section id="youtube">
      <div className="section-wrap">
        <div className="text-center mb-5 reveal visible" data-visible-class="visible">
          <div className="yt-channel-badge">
            <i className="bi bi-youtube"></i> YouTube Channel
          </div>
          
          <h2 className="section-title" style={{ color: '#000' }}>
            Discover The Stars <span>On YouTube</span>
          </h2>
          
          <div className="divider-ornament justify-content-center">
            <div className="line"></div>
            <span className="star">✦</span>
            <div className="line right"></div>
          </div>
        </div>

        <div className="row g-4 mb-5">
          <div className="col-md-6 col-lg-4 reveal reveal-delay-1" data-visible-class="visible">
            <div className="yt-card" onClick={() => openVideoModal('VIDEO_ID_1')}>
              <div className="yt-thumb">
                <img 
                  width="1434" 
                  height="783" 
                  src="https://staging.astroinvite.com/wp-content/uploads/2026/05/1-t.webp" 
                  alt="सही मंत्र राशि अनुसार — आर्थिक तंगी दूर हो जाएगी" 
                  className="entered lazyloaded" 
                />
                
                <div className="yt-play">
                  <div className="yt-play-btn">
                    <i className="bi bi-play-fill" style={{ marginLeft: '3px' }}></i>
                  </div>
                </div>

                <span className="blog-cat">Mantra &amp; Rashi</span>
              </div>

              <div className="yt-info">
                <p className="yt-info-title">सही मंत्र राशि अनुसार — आर्थिक तंगी दूर हो जाएगी</p>
                <p className="yt-info-des">Astro Sachin Pandit • AstroInvite</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 reveal reveal-delay-2" data-visible-class="visible">
            <div className="yt-card" onClick={() => openVideoModal('VIDEO_ID_2')}>
              <div className="yt-thumb">
                <img 
                  width="1389" 
                  height="757" 
                  src="https://staging.astroinvite.com/wp-content/uploads/2026/05/2-t.webp" 
                  alt="गरीब अब नहीं रहेंगे — साड़ी उम्र की अमीरी GUARANTEE" 
                  className="entered lazyloaded" 
                />
                
                <div className="yt-play">
                  <div className="yt-play-btn">
                    <i className="bi bi-play-fill" style={{ marginLeft: '3px' }}></i>
                  </div>
                </div>

                <span className="blog-cat">वृषभ राशि</span>
              </div>

              <div className="yt-info">
                <p className="yt-info-title">गरीब अब नहीं रहेंगे — साड़ी उम्र की अमीरी GUARANTEE</p>
                <p className="yt-info-des">Astro Sachin Pandit • AstroInvite</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 reveal reveal-delay-3" data-visible-class="visible">
            <div className="yt-card" onClick={() => openVideoModal('VIDEO_ID_3')}>
              <div className="yt-thumb">
                <img 
                  width="1371" 
                  height="759" 
                  src="https://staging.astroinvite.com/wp-content/uploads/2026/05/3-t.webp" 
                  alt="कुम्भ राशि Aquarius वाले पागल होते हैं? — True Story" 
                  className="entered lazyloaded" 
                />
                
                <div className="yt-play">
                  <div className="yt-play-btn">
                    <i className="bi bi-play-fill" style={{ marginLeft: '3px' }}></i>
                  </div>
                </div>

                <span className="blog-cat">कुम्भ राशि</span>
              </div>

              <div className="yt-info">
                <p className="yt-info-title">कुम्भ राशि Aquarius वाले पागल होते हैं? — True Story</p>
                <p className="yt-info-des">Astro Sachin Pandit • AstroInvite</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center reveal" data-visible-class="visible">
          <a 
            href="https://www.youtube.com/@AstroInvite" 
            target="_blank" 
            rel="noopener noreferrer"
            className="edu-btn btn-medium" 
            style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', fontSize: '13px' }}
          >
            <i className="bi bi-youtube" style={{ fontSize: '17px' }}></i>
            Visit Our YouTube Channel
          </a>
        </div>
      </div>
    </section>
  );
};

// 6. Blogsection Component
export const Blogsection = () => {
  return (
    <section data-wpr-lazyrender="1" id="blogs">
      <div className="section-wrap">
        <div className="d-flex justify-content-between align-items-end flex-wrap gap-3 mb-5 reveal visible" data-visible-class="visible">
          <div>
            <span className="gold-label">✦ Astrology Insights</span>
            <h2 className="section-title">Our <span>Blogs</span></h2>
          </div>
        </div>

        <div className="row g-4 buttom-new">
          <div className="col-md-6 col-lg-4 reveal reveal-delay-1 visible" data-visible-class="visible">
            <div className="blog-card">
              <div className="blog-thumb">
                <a href="https://staging.astroinvite.com/blog/how-gemstones-work-astrological-explanation-3/">
                  <div className="blog-thumb-inner blog-thumb-1">
                    <img 
                      width="1536" 
                      height="1024" 
                      src="https://staging.astroinvite.com/wp-content/uploads/2026/03/Gems-Blog-image.webp" 
                      alt="How Gemstones work: Astrological explanation 2" 
                      className="entered lazyloaded" 
                    />
                  </div>
                </a>
                <span className="blog-cat">Life Journey</span>
              </div>

              <div className="blog-body">
                <p className="cstm-blog-heading">How Gemstones work: Astrological explanation 2</p>
                <p className="cstm-blog-except">You’ve probably seen gemstones before, maybe as a ring someone wears every…</p>
                <a href="https://staging.astroinvite.com/blog/how-gemstones-work-astrological-explanation-3/" className="blog-link">
                  Read More <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 reveal reveal-delay-2 visible" data-visible-class="visible">
            <div className="blog-card">
              <div className="blog-thumb">
                <a href="https://staging.astroinvite.com/blog/12-zodiac-signs-dates-meanings-personality-traits-complete-guide-4/">
                  <div className="blog-thumb-inner blog-thumb-2">
                    <img 
                      width="1200" 
                      height="600" 
                      src="https://staging.astroinvite.com/wp-content/uploads/2026/05/12-zodiac-signs-complete-guide-banner.webp" 
                      alt="22212 Zodiac Signs: Dates, Meanings, Personality Traits & Complete Guide" 
                      className="entered lazyloaded" 
                    />
                  </div>
                </a>
                <span className="blog-cat">Life Journey</span>
              </div>

              <div className="blog-body">
                <p className="cstm-blog-heading">22212 Zodiac Signs: Dates, Meanings, Personality Traits & Complete Guide</p>
                <p className="cstm-blog-except">Ever wished to understand why some people are just naturally leaders and…</p>
                <a href="https://staging.astroinvite.com/blog/12-zodiac-signs-dates-meanings-personality-traits-complete-guide-4/" className="blog-link">
                  Read More <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 reveal reveal-delay-3 visible" data-visible-class="visible">
            <div className="blog-card">
              <div className="blog-thumb">
                <a href="https://staging.astroinvite.com/blog/12-zodiac-signs-dates-meanings-personality-traits-complete-guide-3/">
                  <div className="blog-thumb-inner blog-thumb-3">
                    <img 
                      width="1200" 
                      height="600" 
                      src="https://staging.astroinvite.com/wp-content/uploads/2026/05/12-zodiac-signs-complete-guide-banner.webp" 
                      alt="212112 Zodiac Signs: Dates, Meanings, Personality Traits & Complete Guide" 
                      className="entered lazyloaded" 
                    />
                  </div>
                </a>
                <span className="blog-cat">Life Journey</span>
              </div>

              <div className="blog-body">
                <p className="cstm-blog-heading">212112 Zodiac Signs: Dates, Meanings, Personality Traits & Complete Guide</p>
                <p className="cstm-blog-except">Ever wished to understand why some people are just naturally leaders and…</p>
                <a href="https://staging.astroinvite.com/blog/12-zodiac-signs-dates-meanings-personality-traits-complete-guide-3/" className="blog-link">
                  Read More <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center reveal visible" data-visible-class="visible">
        <a href="https://staging.astroinvite.com/blog" className="edu-btn btn-medium">
          Explore More <i className="bi bi-arrow-right ms-1"></i>
        </a>
      </div>
    </section>
  );
};

// 7. Ctasection Component
export const Ctasection = () => {
  return (
    <section id="cta">
      <div className="cta-ring"></div>
      <div className="section-wrap position-relative" style={{ zIndex: 2 }}>
        <div className="text-center reveal visible" data-visible-class="visible">
          <div className="cta-tag">
            <i className="bi bi-calendar-check"></i> Begin Your Journey
          </div>
          
          <h2>
            Still waiting for things to work out?<br />
            <span>Your turning point starts now</span>
          </h2>
          
          <p>
            Book a one on one consultation with Astrologer Sachin Pandit and gain the clarity, direction, and remedies you need to break free from what is holding you back.
          </p>

          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="#" 
              onClick={(e) => e.preventDefault()} 
              className="btn-gold open-popup-btn" 
              style={{ fontSize: '14px', padding: '16px 42px' }}
            >
              Book Consultation
            </a>
            
            <a 
              href="https://staging.astroinvite.com" 
              className="btn-outline-gold" 
              style={{ padding: '15px 34px', fontSize: '13px', color: '#fff', borderColor: 'rgba(255,255,255,.3)' }}
            >
              <i className="bi bi-file-earmark-text-fill"></i>&nbsp; Get Reports
            </a>
          </div>

          <div className="cta-trust">
            <div className="cta-trust-item">
              <i className="bi bi-shield-fill-check"></i> 100% Confidential
            </div>
            <div className="cta-trust-item">
              <i className="bi bi-camera-video-fill"></i> Online & In-person
            </div>
            <div className="cta-trust-item">
              <i className="bi bi-translate"></i> Hindi & English
            </div>
            <div className="cta-trust-item">
              <i className="bi bi-clock-history"></i> Same-day Slots
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Testimonial mock data
const testimonialsData = [
  {
    id: 1,
    review_stars: '⭐⭐⭐⭐⭐',
    testimonials_description: 'Astro Sachin Pandit provided mind-blowing accuracy during my Kundli reading. His remedies brought immense peace to my family.',
    client_name: 'Priya Sharma',
    client_place: 'New Delhi'
  },
  {
    id: 2,
    review_stars: '⭐⭐⭐⭐⭐',
    testimonials_description: 'The business guidance I received was spot on. I followed the simple remedies and saw positive shifts within weeks!',
    client_name: 'Ankit Mehta',
    client_place: 'Mumbai'
  },
  {
    id: 3,
    review_stars: '⭐⭐⭐⭐⭐',
    testimonials_description: 'Extremely compassionate and wise. The marriage compatibility report gave me clarity when I needed it most.',
    client_name: 'Sunita Verma',
    client_place: 'Chandigarh'
  },
  {
    id: 4,
    review_stars: '⭐⭐⭐⭐⭐',
    testimonials_description: 'One of the most genuine astrologers I have ever consulted. Highly recommend for practical solutions.',
    client_name: 'Rahul Kapoor',
    client_place: 'Bengaluru'
  }
];

const getInitials = (name) => {
  if (!name) return '';
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.charAt(0) || '';
  const last = parts.length > 1 ? parts[parts.length - 1].charAt(0) : '';
  return (first + last).toUpperCase();
};

// 8. TestimonialsSection Component
export const TestimonialsSection = ({
  tag = "✦ Words From Our Seekers",
  heading = "What People Say",
  headingYellow = "About Us"
}) => {
  const sliderWrapRef = useRef(null);
  const sliderTrackRef = useRef(null);

  useEffect(() => {
    const sliderWrap = sliderWrapRef.current;
    const sliderTrack = sliderTrackRef.current;

    if (!sliderWrap || !sliderTrack) return;

    let isDown = false;
    let startX = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let animationFrameId;

    const autoSlide = () => {
      const totalWidth = sliderTrack.scrollWidth / 2;

      currentTranslate -= 0.25;

      if (Math.abs(currentTranslate) >= totalWidth) {
        currentTranslate += totalWidth;
      }

      if (!isDown) {
        sliderTrack.style.transform = `translateX(${currentTranslate}px)`;
      }

      animationFrameId = requestAnimationFrame(autoSlide);
    };

    const fixLoop = () => {
      const totalWidth = sliderTrack.scrollWidth / 2;

      if (Math.abs(currentTranslate) >= totalWidth) {
        currentTranslate += totalWidth;
        prevTranslate = currentTranslate;
      }

      if (currentTranslate > 0) {
        currentTranslate -= totalWidth;
        prevTranslate = currentTranslate;
      }
    };

    const handleMouseDown = (e) => {
      isDown = true;
      startX = e.pageX;
      const matrix = new DOMMatrix(getComputedStyle(sliderTrack).transform);
      currentTranslate = matrix.m41;
      prevTranslate = currentTranslate;
    };

    const handleMouseUp = () => {
      isDown = false;
      fixLoop();
    };

    const handleMouseLeave = () => {
      isDown = false;
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const walk = (e.pageX - startX) * 1.5;
      currentTranslate = prevTranslate + walk;
      sliderTrack.style.transform = `translateX(${currentTranslate}px)`;
    };

    const handleTouchStart = (e) => {
      isDown = true;
      startX = e.touches[0].pageX;
      const matrix = new DOMMatrix(getComputedStyle(sliderTrack).transform);
      currentTranslate = matrix.m41;
      prevTranslate = currentTranslate;
    };

    const handleTouchEnd = () => {
      isDown = false;
      fixLoop();
    };

    const handleTouchMove = (e) => {
      if (!isDown) return;
      const walk = (e.touches[0].pageX - startX) * 1.5;
      currentTranslate = prevTranslate + walk;
      sliderTrack.style.transform = `translateX(${currentTranslate}px)`;
    };

    sliderWrap.addEventListener('mousedown', handleMouseDown);
    sliderWrap.addEventListener('mouseup', handleMouseUp);
    sliderWrap.addEventListener('mouseleave', handleMouseLeave);
    sliderWrap.addEventListener('mousemove', handleMouseMove);

    sliderWrap.addEventListener('touchstart', handleTouchStart);
    sliderWrap.addEventListener('touchend', handleTouchEnd);
    sliderWrap.addEventListener('touchmove', handleTouchMove);

    animationFrameId = requestAnimationFrame(autoSlide);

    return () => {
      cancelAnimationFrame(animationFrameId);
      sliderWrap.removeEventListener('mousedown', handleMouseDown);
      sliderWrap.removeEventListener('mouseup', handleMouseUp);
      sliderWrap.removeEventListener('mouseleave', handleMouseLeave);
      sliderWrap.removeEventListener('mousemove', handleMouseMove);

      sliderWrap.removeEventListener('touchstart', handleTouchStart);
      sliderWrap.removeEventListener('touchend', handleTouchEnd);
      sliderWrap.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  const displayTestimonials = [...testimonialsData, ...testimonialsData];

  return (
    <section id="testimonials">
      <div className="section-wrap">
        <div className="text-center mb-5 reveal visible" data-visible-class="visible">
          {tag && <span className="gold-label">{tag}</span>}
          {heading && (
            <h2 className="section-title">
              {heading} <span>{headingYellow}</span>
            </h2>
          )}
          <div className="divider-ornament justify-content-center">
            <div className="line"></div>
            <span className="star">✦</span>
            <div className="line right"></div>
          </div>
        </div>
      </div>

      <div 
        className="testimonials-track-wrap reveal visible" 
        id="testimonialsTrackWrap"
        ref={sliderWrapRef}
        style={{ overflow: 'hidden', cursor: 'grab' }}
      >
        <div 
          className="testimonials-track" 
          id="testimonialsTrack"
          ref={sliderTrackRef}
          style={{ display: 'flex', gap: '20px', width: 'max-content', willChange: 'transform' }}
        >
          {displayTestimonials.map((item, index) => (
            <div className="testimonial-card" key={`${item.id}-${index}`}>
              <div className="stars">{item.review_stars}</div>

              <p className="testimonial-text">{item.testimonials_description}</p>

              <div className="testimonial-footer">
                <div className="testimonial-avatar">
                  {getInitials(item.client_name)}
                </div>
                <div>
                  <div className="testimonial-name">{item.client_name}</div>
                  <div className="testimonial-city">{item.client_place}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


// Default mock data structure matching your ACF fields
const DEFAULT_FAQ_GROUPS = [
  {
    group_key: 'default',
    faqs: [
      {
        question: "How accurate are Astro Sachin Pandit's predictions?",
        answer: "With over 30 years of experience in Vedic astrology, Kundli analysis, and Lal Kitab, predictions are calculated using precise astronomical calculations and your birth chart details."
      },
      {
        question: "What details do I need to provide for a consultation?",
        answer: "You will need your exact date of birth, time of birth, and place of birth to generate an accurate birth chart (Kundli)."
      },
      {
        question: "Are the astrological remedies expensive or complicated?",
        answer: "No, Sachin Pandit focuses on practical, practical, and highly effective remedies including simple mantras, lifestyle tweaks, and spiritual guidance."
      },
      {
        question: "Is my personal information kept confidential?",
        answer: "Yes, 100%. All consultations and personal birth details are strictly confidential."
      }
    ]
  }
];

export const FaqSection = ({
  isFaqPage = false,
  isSingleBlog = false,
  selectedGroup = 'default',
  faqBlogHeading = '',
  faqGroups = DEFAULT_FAQ_GROUPS
}) => {
  // State for active accordion item index
  const [openIndex, setOpenIndex] = useState(0); // Open first item by default
  
  // State for pagination/load more functionality
  const [visibleCount, setVisibleCount] = useState(50);

  // Filter groups based on props logic
  const filteredGroups = faqGroups.filter((group) => {
    if (isFaqPage) return true;
    return (group.group_key || 'default') === (selectedGroup || 'default');
  });

  // Flatten FAQs across filtered groups
  const allFaqs = filteredGroups.flatMap((group) => group.faqs || []);

  const handleToggle = (index) => {
    // If clicking the currently open item, close it; otherwise open new item
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  return (
    <section
      id="faq"
      className={`${isFaqPage ? 'faq-page-layout' : ''} ${isSingleBlog ? 'faq-single-blog-layout' : ''}`}
      style={{ background: '#fdf8f0' }}
    >
      <div className="section-wrap">
        <div
          className={`${
            isSingleBlog ? 'faq-single-blog-stack' : 'row g-5 align-items-start'
          } ${isFaqPage ? 'faq-row' : ''}`}
        >
          {/* LEFT HEADER */}
          <div
            className={`${
              isSingleBlog
                ? 'reveal faq-single-blog-header visible'
                : 'col-lg-4 reveal visible'
            } ${isFaqPage ? 'faq-coloum' : ''}`}
          >
            <span className="gold-label">✦ Got Questions?</span>

            <h2 className="section-title">
              Frequently Asked <span>Questions</span> {faqBlogHeading}
            </h2>

            <div className="divider-ornament">
              <div className="line"></div>
              <span className="star">✦</span>
              <div className="line right"></div>
            </div>
          </div>

          {/* RIGHT ACCORDION LIST */}
          <div
            className={`${
              isSingleBlog
                ? 'reveal reveal-delay-2 faq-single-blog-list visible'
                : 'col-lg-8 reveal reveal-delay-2 visible'
            } ${isFaqPage ? 'faq-full-width' : ''}`}
          >
            {allFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const isHidden = isFaqPage && index >= visibleCount;

              return (
                <div
                  key={index}
                  className={`faq-item ${isOpen ? 'open' : ''} ${
                    isFaqPage ? 'faq-load-item' : ''
                  } ${isHidden ? 'faq-hidden' : ''}`}
                  style={{ display: isHidden ? 'none' : 'block' }}
                >
                  <div
                    className="faq-question"
                    onClick={() => handleToggle(index)}
                    style={{ cursor: 'pointer' }}
                  >
                    <p>{faq.question}</p>
                    <div className="faq-icon">
                      <i className={`bi ${isOpen ? 'bi bi-plus' : 'bi-plus'}`}></i>
                    </div>
                  </div>

                  <div
                    className="faq-answer"
                    style={{
                      maxHeight: isOpen ? '300px' : '0px',
                      overflow: 'hidden',
                      transition: 'max-height 0.3s ease-in-out'
                    }}
                  >
                    <div
                      className="faq-answer-inner"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    />
                  </div>
                </div>
              );
            })}

            {/* LOAD MORE BUTTON */}
            {isFaqPage && visibleCount < allFaqs.length && (
              <div className="faq-load-more-wrap" style={{ marginTop: '20px' }}>
                <button
                  type="button"
                  className="faq-load-more-btn edu-btn btn-medium"
                  onClick={handleLoadMore}
                >
                  Load More
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};