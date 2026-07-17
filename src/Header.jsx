import './Header.css';

const Header = () => {
  const menuItems = [
    { id: "menu-item-22088", name: "Home", link: "#", active: true },
    { id: "menu-item-22089", name: "About Us", link: "#about-us/" },
    { id: "menu-item-22498", name: "Astro Invite Store", link: "https://gemsinvite.com/", highlight: true },
    { id: "menu-item-23903", name: "Brahmvid Kundli Reports", link: "#brahmvid-kundli-reports/" },
    { id: "menu-item-22925", name: "Call Consultation", link: "#call-consultation/" },
    { id: "menu-item-24069", name: "Blog", link: "#blog/" },
    { id: "menu-item-23198", name: "Contact Us", link: "#contact-us/" }
  ];

  return (
    <header id="masthead" className="astro-site-header astro-theme-header-3 astro-header-get-sticky astro-header-sticky">
      <div className="astro-header-area astro-navbar astro-navbar-expand-lg">
        <div className="astro-container">
          <div className="astro-header-navbar astro-align-items-center">
            
            {/* Unique Brand/Logo Wrap */}
            <div className="astro-branding astro-logo-info">
              <div className="astro-logo-wrapper" itemScope="" itemType="http://schema.org/Brand">
                <a href="#" className="astro-navbar-brand astro-site-main-logo" rel="home" aria-current="page">
                  <img 
                    fetchPriority="high" 
                    width="250" 
                    height="250" 
                    src="/Astro-Invite-Logo-removebg-preview-1-1.webp" 
                    className="astro-site-logo" 
                    alt="Astro Invite" 
                    decoding="async" 
                  />
                </a>
                <a href="#" className="astro-navbar-brand astro-site-white-logo">
                  <img 
                    src="/Astro-Invite-Logo-removebg-preview-1-1.webp" 
                    className="astro-header-white-logo" 
                    alt="Astro Invite" 
                  />
                </a>
              </div>
            </div>

            {/* Custom Scoped Navigation */}
            <div className="astro-theme-header-nav astro-d-none astro-d-xl-block">
              <nav id="site-navigation" className="astro-main-navigation astro-theme-nav astro-navbar-collapse">
                <div className="astro-navbar-primary-menu">
                  <div id="primary-menu-container-id" className="astro-primary-menu-container-class">
                    <ul id="primary-menu-custom-id" className="astro-default-header-navbar astro-navbar-nav astro-navbar-right">
                      {menuItems.map((item) => (
                        <li 
                          key={item.id}
                          itemScope="itemscope" 
                          itemType="https://www.schema.org/SiteNavigationElement" 
                          id={item.id} 
                          className={`astro-menu-item astro-nav-item astro-menu-align-left ${item.active ? 'astro-active' : ''}`}
                        >
                          <a 
                            className="astro-nav-link" 
                            href={item.link}
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </nav>
            </div>

            {/* Scoped Right Side / Mobile Menu Toggle */}
            {/* <div className="astro-header-right-side">
              <div className="astro-quote-icon astro-theme-nav-responsive astro-hamburger-icon">
                <div className="astro-mobile-hamburger-menu">
                  <a href="javascript:void(0);"><i className="icon-54"></i></a>
                </div>
              </div>
            </div> */}

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;