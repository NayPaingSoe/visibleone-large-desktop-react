import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="logo-col">
          <div className="logo">Logo</div>
        </div>

        <div className="links-col">
          <div className="col">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Discovery</a></li>
              <li><a href="#">Photos</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="col">
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Help</a></li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Guidelines</a></li>
            </ul>
          </div>
          <div className="col">
            <ul>
              <li><a href="#">Testimonials</a></li>
              <li><a href="#">Advertise</a></li>
              <li><a href="#">Integrations</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
        </div>

        <div className="newsletter-col">
          <div className="input-group">
            <input 
              type="email" 
              placeholder="Email" 
            />
            <button>
              ➤
            </button>
          </div>
          <p>Stay in touch with us for the freshest products!</p>
        </div>

        <div className="social-col">
          <a href="#">📷</a>
          <a href="#">🐦</a>
          <a href="#">f</a>
          <a href="#">🌐</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
