import { NavLink } from 'react-router-dom';
import './assets/css/Header.css';

const Header = () => {
  const menuItems = [
    { id: "1", name: "Home", link: "/", isExternal: false },
    { id: "2", name: "About Us", link: "/about-us", isExternal: false },
    { id: "3", name: "Astro Invite Store", link: "https://gemsinvite.com/", isExternal: true },
    { id: "4", name: "Brahmvid Kundli Reports", link: "/brahmvid-kundli-reports", isExternal: false },
    { id: "5", name: "Call Consultation", link: "/call-consultation", isExternal: false },
    { id: "6", name: "Blog", link: "/blog", isExternal: false },
    { id: "7", name: "Contact Us", link: "/contact-us", isExternal: false }
  ];

  return (
    <header id="masthead" className="astro-site-header astro-theme-header-3 astro-header-sticky">
      <div className="astro-header-area astro-navbar astro-navbar-expand-lg">
        <div className="astro-container">
          <div className="astro-header-navbar astro-align-items-center">
            
            {/* Logo */}
            <div className="astro-branding astro-logo-info">
              <NavLink to="/" className="astro-navbar-brand astro-site-main-logo">
                <img 
                  width="200" 
                  src="/Astro-Invite-Logo-removebg-preview-1-1.webp" 
                  className="astro-site-logo" 
                  alt="Astro Invite" 
                />
              </NavLink>
            </div>

            {/* Navigation Menu */}
            <div className="astro-theme-header-nav">
              <nav id="site-navigation" className="astro-main-navigation astro-theme-nav astro-navbar-collapse">
                <div className="astro-navbar-primary-menu">
                  <ul className="astro-default-header-navbar astro-navbar-nav astro-navbar-right">
                    {menuItems.map((item) => (
                      <li key={item.id} className="astro-menu-item astro-nav-item">
                        {item.isExternal ? (
                          <a 
                            href={item.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="astro-nav-link"
                          >
                            {item.name}
                          </a>
                        ) : (
                          <NavLink 
                            to={item.link} 
                            className={({ isActive }) => 
                              isActive ? 'astro-nav-link astro-active active' : 'astro-nav-link'
                            }
                          >
                            {item.name}
                          </NavLink>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;