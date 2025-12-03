import React from 'react';

const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundColor: '#a0aab5', padding: '4rem 0', color: 'white' }}>
      <div className="container flex justify-between items-start">
        <div className="logo-col">
          <div className="logo font-bold text-sm uppercase" style={{ marginBottom: '1rem', letterSpacing: '0.1em' }}>Logo</div>
        </div>

        <div className="links-col flex gap-4 text-xs" style={{ gap: '3rem' }}>
          <div className="col">
            <ul style={{ lineHeight: '2' }}>
              <li><a href="#">Home</a></li>
              <li><a href="#">Discovery</a></li>
              <li><a href="#">Photos</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="col">
            <ul style={{ lineHeight: '2' }}>
              <li><a href="#">About</a></li>
              <li><a href="#">Help</a></li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Guidelines</a></li>
            </ul>
          </div>
          <div className="col">
            <ul style={{ lineHeight: '2' }}>
              <li><a href="#">Testimonials</a></li>
              <li><a href="#">Advertise</a></li>
              <li><a href="#">Integrations</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
        </div>

        <div className="newsletter-col" style={{ width: '300px' }}>
          <div className="input-group" style={{ position: 'relative', borderBottom: '1px solid rgba(255,255,255,0.5)', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>
            <input 
              type="email" 
              placeholder="Email" 
              style={{ 
                background: 'transparent', 
                border: 'none', 
                color: 'white', 
                width: '100%', 
                outline: 'none',
                fontSize: '0.875rem'
              }} 
            />
            <button style={{ 
              position: 'absolute', 
              right: 0, 
              top: '50%', 
              transform: 'translateY(-50%)', 
              background: 'transparent', 
              border: 'none', 
              color: 'white', 
              cursor: 'pointer' 
            }}>
              ➤
            </button>
          </div>
          <p className="text-xs" style={{ opacity: '0.7' }}>Stay in touch with us for the freshest products!</p>
        </div>

        <div className="social-col flex gap-4">
          <a href="#" style={{ color: 'white' }}>📷</a>
          <a href="#" style={{ color: 'white' }}>🐦</a>
          <a href="#" style={{ color: 'white' }}>f</a>
          <a href="#" style={{ color: 'white' }}>🌐</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
