
const CallConsultation = () => {
  const handleOpenPopup = (e) => {
    e.preventDefault();
    console.log("Opening consultation popup...");
  };

  return (
    <div className="call-consultation-page" style={{ position: 'relative', zIndex: 10, minHeight: '80vh', background: '#ffffff' }}>
      
      {/* 1. Hero Section */}
      <section className="hero">
        <div className="hero__container section-wraps cstm-consult-head-wrap" style={{ padding: '60px 20px' }}>
          
          <div className="hero__content">
            <h1 className="hero__title">
              Your Life Deserves <span>Clarity, Not Confusion.</span>
            </h1>
            <p className="hero__sub">
              No sugar coated Predictions, Get Real solutions to your problem!
            </p>
            <a 
              href="#book-consultation" 
              onClick={handleOpenPopup}
              className="edu-btn btn-medium open-popup-btn"
            >
              Book Consultation
            </a>
            
            <ul className="hero__badges" style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
              <li>
                <img 
                  className="hero__badge-icononly" 
                  src="https://staging.astroinvite.com/wp-content/uploads/2026/05/new-image-call-scaled.webp" 
                  alt="Social Family" 
                />
              </li>
            </ul>
          </div>

          <div className="hero__visual">
            <img 
              className="hero__img" 
              src="https://staging.astroinvite.com/wp-content/uploads/2026/05/sir-kundli-image.webp" 
              alt="Astrologer Sachin Pandit" 
            />
          </div>

        </div>
      </section>

 

      {/* 2. Features Section */}
      <section className="features-section" style={{ background: '#fdf8f0', padding: '60px 20px' }}>
        <div className="section-wrap" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          <div className="features-header text-center mb-5">
            <h2 className="section-title">
              Confused About Your Path?<br />
              Astrology <span>Gives You Answers</span>
            </h2>
            <div className="divider-ornament justify-content-center">
              <div className="line"></div>
              <span className="star">✦</span>
              <div className="line right"></div>
            </div>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon"><i className="bi bi-lightbulb"></i></div>
              <h4>Practical Remedies</h4>
              <p>Simple remedies you can follow daily — designed to bring real, visible results.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon"><i className="bi bi-award"></i></div>
              <h4>Proven Expertise</h4>
              <p>Guidance backed by decades of real-world experience — not assumptions, not guesswork.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon"><i className="bi bi-signpost-2"></i></div>
              <h4>Clear Direction</h4>
              <p>Straightforward guidance to help you make the right decisions — without complicated astrology terms.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon"><i className="bi bi-person-check"></i></div>
              <h4>Personal Guidance</h4>
              <p>Your chart, your situation — every consultation is tailored specifically to your life.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon"><i className="bi bi-graph-up-arrow"></i></div>
              <h4>Real Results</h4>
              <p>See meaningful improvements in career, finances, and relationships with the right direction.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon"><i className="bi bi-shield-check"></i></div>
              <h4>Trusted Advice</h4>
              <p>No fear-based predictions. Only practical, supportive guidance you can rely on.</p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Stopping Section (Life Problems) */}
      <section className="stopping-section">
        <div className="section-wrap">
          
          <div className="text-center mb-5">
            <span className="gold-label" style={{ color: 'rgba(255,255,255,0.7)' }}>✦ Life Problems</span>
            <h2 className="section-title" style={{ color: '#fff' }}>
              Life Not Going <span>the Way You Expected?</span>
            </h2>
          </div>

          <div className="stopping-grid">
            <div className="stopping-card">
              <i className="bi bi-heart stopping-icon"></i>
              <h3 className="stopping-title">
                Marriage &amp;<br />
                Relationships
              </h3>
              <ul className="stopping-list">
                <li>Facing delays or obstacles in finding the right partner.</li>
                <li>Frequent misunderstandings, distance, or lack of emotional connection.</li>
              </ul>
            </div>

            <div className="stopping-card">
              <i className="bi bi-briefcase stopping-icon"></i>
              <h3 className="stopping-title">
                Career &amp;<br />
                Business
              </h3>
              <ul className="stopping-list">
                <li>Putting in effort but still not seeing the growth you expected</li>
                <li>Facing losses, instability, or wrong decisions affecting your progress.</li>
              </ul>
            </div>

            <div className="stopping-card">
              <i className="bi bi-house stopping-icon"></i>
              <h3 className="stopping-title">
                Family &amp;<br />
                Property
              </h3>
              <ul className="stopping-list">
                <li>Constant family conflicts disturbing your peace of mind.</li>
                <li>Ongoing disputes related to property or financial matters.</li>
              </ul>
            </div>

            <div className="stopping-card">
              <i className="bi bi-heart-pulse stopping-icon"></i>
              <h3 className="stopping-title">
                Health &amp;<br />
                Peace
              </h3>
              <ul className="stopping-list">
                <li>Recurring health issues affecting your daily life.</li>
                <li>Overthinking, stress, or anxiety that doesn’t seem to go away.</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Process Section */}
      <section className="process-section" style={{ padding: '60px 20px' }}>
        <div className="section-wrap" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          <div className="process-header text-center mb-5">
            <h2 className="section-title">
              Step-by-Step <span> Guidance </span> Process
            </h2>
          </div>

          <div className="process-flow">
            <div className="process-line"></div>

            <div className="process-step">
              <div className="step-icon"><i className="bi bi-check2-circle"></i></div>
              <div className="step-content">
                <h4>Booking Confirmed</h4>
                <p>Congrats on taking the first step toward clarity.</p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-icon"><i className="bi bi-clipboard2-data"></i></div>
              <div className="step-content">
                <h4>Info Collection</h4>
                <p>We gather your birth details for analysis.</p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-icon"><i className="bi bi-search"></i></div>
              <div className="step-content">
                <h4>Deep Analysis</h4>
                <p>In-depth study of your Kundli &amp; planetary positions.</p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-icon"><i className="bi bi-chat-heart"></i></div>
              <div className="step-content">
                <h4>Clear Advice</h4>
                <p>Personalized solutions and roadmap delivered.</p>
              </div>
            </div>

          </div>

        </div>
      </section>

           {/* 5. One Call Life Transformation Section */}
      <section className="onecall-section" style={{ padding: '60px 20px', background: '#ffffff' }}>
        <div className="section-wrap" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="onecall-wrapper">
            
            {/* Left: Professional Image & Badges */}
            <div className="onecall-image-wrap">
              <img 
                src="https://staging.astroinvite.com/wp-content/uploads/2026/05/astro-image.webp" 
                alt="Astrologer" 
                className="onecall-img" 
              />
              
              <div className="onecall-badges-pro">
                <div className="badge-pill">
                  <i className="bi bi-award-fill"></i>
                  <span>Gold Medalist</span>
                </div>
                <div className="badge-pill">
                  <i className="bi bi-patch-check-fill"></i>
                  <span>Certified Astrologer</span>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="onecall-content">
              <span className="gold-label">✦ Life Transformation</span>
              <h2 className="section-title mb-4">
                One Call That Can <br />
                <span>Change Your Life</span>
              </h2>

              <ul className="onecall-list">
                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  <div>
                    <strong>Direct Call</strong>
                    <p>Direct call with Astrologer Sachin Sikka for personalised astrology guidance.</p>
                  </div>
                </li>

                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  <div>
                    <strong>Kundli Insights</strong>
                    <p>Deep Kundli analysis to reveal hidden patterns in career, love, finance and health.</p>
                  </div>
                </li>

                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  <div>
                    <strong>Clear Roadmap</strong>
                    <p>Clear roadmap with step‑by‑step direction for important life decisions.</p>
                  </div>
                </li>

                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  <div>
                    <strong>Practical Remedies</strong>
                    <p>Practical, easy‑to‑follow remedies designed for fast, visible results in daily life.</p>
                  </div>
                </li>
              </ul>

              <div className="onecall-price-box">
                <div>
                  <span className="price-text">Consultation Price</span><br />
                  <span className="price-amount">₹11,000 Only</span>
                </div>
                <a href="#book-consultation" onClick={handleOpenPopup} className="edu-btn btn-medium open-popup-btn">
                  Book Consultation
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default CallConsultation;