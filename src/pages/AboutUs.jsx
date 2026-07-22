import { HeroSlider } from '../HomePage.jsx';

// Custom slide specifically for the About Us page
const aboutUsSlides = [
  {
    desktop_image: '/about-us-banner-2.webp',
    mobile_image: '/ph-about-us-banner-2.webp',
    link: '#',
  }
];

const AboutUs = () => {
  return (
    <div className="about-us-page">
      {/* 1. About Us Hero Slider */}
      <HeroSlider slides={aboutUsSlides} />

      {/* 2. Our Story Section */}
      <section id="ourStory">
        <div className="section-wrap">
          
          {/* Block 1 */}
          <div className="story-block reveal visible" data-visible-class="visible">
            {/* Content */}
            <div className="story-content">
              <span className="gold-label">✦ Our Journey</span>
              <h3>Born with a <span>Purpose</span></h3>
              <p className="text-muted">
                AstroInvite was started by Astrologer Sachin Pandit with his 30+ years of experience in Vedic astrology to guide you in your life path, be it career, marriage, business, or relationships.
              </p>
              <p className="text-muted">
                In his experience of three decades, he has helped thousands of people with his readings and guidance, providing clarity where there was confusion.
              </p>
            </div>

            {/* Image */}
            <div className="story-img-wrap">
              <img 
                src="https://staging.astroinvite.com/wp-content/uploads/2026/05/cover-page.webp" 
                alt="AstroInvite Story Cover" 
              />
            </div>
          </div>

          {/* Block 2 */}
          <div className="story-block reverse reveal visible" data-visible-class="visible">
            {/* Image */}
            <div 
              className="story-img-wrap bg-img" 
              style={{ backgroundImage: "url('https://staging.astroinvite.com/wp-content/uploads/2026/05/cover-page-two.webp')" }}
            />

            {/* Content */}
            <div className="story-content">
              <span className="gold-label">✦ Wisdom &amp; Guidance</span>
              <h3>The Path of <span>Transformation</span></h3>
              <p>
                With the thought and desire of helping people with his guidance, Astrologer Sachin Pandit dedicated his entire life to Astrology.
              </p>

              <div className="story-list-grid">
                <div className="list-grid-item">
                  <i className="bi bi-check-circle-fill"></i> 30+ years of trusted guidance
                </div>
                <div className="list-grid-item">
                  <i className="bi bi-check-circle-fill"></i> Online consultation available
                </div>
                <div className="list-grid-item">
                  <i className="bi bi-check-circle-fill"></i> Accurate readings &amp; remedies
                </div>
                <div className="list-grid-item">
                  <i className="bi bi-check-circle-fill"></i> Thousands of happy clients
                </div>
                <div className="list-grid-item">
                  <i className="bi bi-check-circle-fill"></i> Book Consultation
                </div>
              </div>

              <a href="#book-consultation" className="edu-btn open-popup-btn">
                Book Consultation
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Difference / Our Commitment Section */}
      <section id="difference">
        <div className="section-wrap">
          <div className="text-center mb-5 reveal visible" data-visible-class="visible">
            <span className="gold-label">✦ Our Commitment</span>
            <h2 className="section-title" style={{ color: '#fff' }}>
              What Makes Sachin Pandit <span>Different?</span>
            </h2>
            <div className="divider-ornament justify-content-center">
              <div className="line"></div>
              <span className="star">✦</span>
              <div className="line right"></div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="row g-4 mb-5">
            <div className="col-md-6 col-lg-3 reveal reveal-delay-1 visible" data-visible-class="visible">
              <div className="diff-card">
                <div className="diff-icon"><i className="bi bi-award-fill"></i></div>
                <h4>Decades of experience</h4>
                <p>
                  With 30+ years in Vedic astrology, he tells you what you need to hear, not just what you want, with accurate predictions and clear solutions.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 reveal reveal-delay-2 visible" data-visible-class="visible">
              <div className="diff-card">
                <div className="diff-icon"><i className="bi bi-check-circle-fill"></i></div>
                <h4>100% Solutions guaranteed</h4>
                <p>
                  With deep astrological insight, he not only identifies doshas but also shows you how to overcome them effectively.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 reveal reveal-delay-3 visible" data-visible-class="visible">
              <div className="diff-card">
                <div className="diff-icon"><i className="bi bi-people-fill"></i></div>
                <h4>Trusted by Thousands of individuals</h4>
                <p>
                  Thousands of people trust in Astrologer Sachin Pandit’s predictions and remedies because they’ve experienced real results.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 reveal reveal-delay-4 visible" data-visible-class="visible">
              <div className="diff-card">
                <div className="diff-icon"><i className="bi bi-lightbulb-fill"></i></div>
                <h4>Remedies not just predictions</h4>
                <p>
                  His focus is not only on what may happen, but also on what you can do to improve your situation through remedies.
                </p>
              </div>
            </div>
          </div>

          {/* Counter Stats */}
          <div className="diff-stats reveal visible" data-visible-class="visible">
            <div className="stat-item">
              <h2><span className="counter" data-target="300">5L+</span></h2>
              <p>Kundli Served</p>
            </div>

            <div className="stat-item">
              <h2><span className="counter" data-target="300">30+</span></h2>
              <p>Year’s Of Legacy</p>
            </div>

            <div className="stat-item">
              <h2><span className="counter" data-target="300">5L+</span></h2>
              <p>Consultation Given</p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Instagram Social Feed Section */}
      <section id="insta">
        <div className="section-wrap">
          
          <div className="insta-header reveal visible" data-visible-class="visible">
            <div>
              <span className="gold-label">✦ Social Feed</span>
              <h2 className="section-title">Divine Messages on <span>Instagram</span></h2>
            </div>
            <a 
              href="https://www.instagram.com/astro_invite_?igsh=ejhqcnNsY3NqMTF3" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-outline-gold"
            >
              <i className="bi bi-instagram me-2"></i> Follow Us
            </a>
          </div>

          <div className="insta-grid reveal visible" data-visible-class="visible">
            {/* Item 1 */}
            <a 
              href="https://www.instagram.com/astro_invite_?igsh=ejhqcnNsY3NqMTF3" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="insta-item"
            >
              <img src="https://staging.astroinvite.com/wp-content/uploads/2026/05/i1.webp" alt="Instagram Post 1" />
              <div className="insta-overlay">
                <i className="bi bi-instagram"></i>
                <span>View Post</span>
              </div>
            </a>

            {/* Item 2 */}
            <a 
              href="https://www.instagram.com/astro_invite_?igsh=ejhqcnNsY3NqMTF3" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="insta-item"
            >
              <img src="https://staging.astroinvite.com/wp-content/uploads/2026/05/i2.webp" alt="Instagram Post 2" />
              <div className="insta-overlay">
                <i className="bi bi-instagram"></i>
                <span>View Post</span>
              </div>
            </a>

            {/* Item 3 */}
            <a 
              href="https://www.instagram.com/astro_invite_?igsh=ejhqcnNsY3NqMTF3" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="insta-item"
            >
              <img src="https://staging.astroinvite.com/wp-content/uploads/2026/05/i3.webp" alt="Instagram Post 3" />
              <div className="insta-overlay">
                <i className="bi bi-instagram"></i>
                <span>View Post</span>
              </div>
            </a>

            {/* Item 4 */}
            <a 
              href="https://www.instagram.com/astro_invite_?igsh=ejhqcnNsY3NqMTF3" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="insta-item"
            >
              <img src="https://staging.astroinvite.com/wp-content/uploads/2026/05/i4.webp" alt="Instagram Post 4" />
              <div className="insta-overlay">
                <i className="bi bi-instagram"></i>
                <span>View Post</span>
              </div>
            </a>

            {/* Item 5 */}
            <a 
              href="https://www.instagram.com/astro_invite_?igsh=ejhqcnNsY3NqMTF3" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="insta-item"
            >
              <img src="https://staging.astroinvite.com/wp-content/uploads/2026/05/i5.webp" alt="Instagram Post 5" />
              <div className="insta-overlay">
                <i className="bi bi-instagram"></i>
                <span>View Post</span>
              </div>
            </a>
          </div>

        </div>
      </section>

    </div>
  );
};

export default AboutUs;