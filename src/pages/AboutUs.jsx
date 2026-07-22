import { HeroSlider } from '../HomePage.jsx'; // Adjust path if HeroSlider is in a different file

// Custom slides specifically for the About Us page
const aboutUsSlides = [
  {
    desktop_image: '/about-us-banner-2.webp', // replace with your about us images
    mobile_image: '/ph-about-us-banner-2.webp',
    link: '#',
  }
];

const AboutUs = () => {
  return (
    <div className="about-us-page">
      {/* OPTION 1: Use specific About Us slides */}
      <HeroSlider slides={aboutUsSlides} />

      {/* OPTION 2: Or simply use <HeroSlider /> if you want the exact same Home slides */}
      
      <div style={{ padding: '60px 20px', textAlign: 'center' }}>
        <h1>About Us</h1>
        <p>Welcome to Astro Invite...</p>
      </div>
    </div>
  );
};

export default AboutUs;