import React from 'react';

const Hero = () => {
  return (
    <section className="hero" style={{ 
      position: 'relative', 
      height: '500px', 
      backgroundImage: 'url(https://placehold.co/1200x600/333/999?text=Landscape)', 
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      marginBottom: '3rem'
    }}>
      <div className="overlay" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.6))'
      }}></div>
      
      <div className="container" style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div className="hero-content" style={{ maxWidth: '600px', color: 'white' }}>
          <div className="category uppercase text-xs font-bold" style={{ marginBottom: '1rem', letterSpacing: '0.1em' }}>World News</div>
          <div style={{ width: '50px', height: '2px', background: 'white', marginBottom: '1.5rem' }}></div>
          
          <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem', lineHeight: '1.2' }}>
            Amazing places in America to visit.
          </h1>
          
          <p style={{ fontSize: '0.9rem', marginBottom: '2rem', opacity: '0.9', lineHeight: '1.6' }}>
            For some reason — this country, this city, this neighborhood, this particular street — is the place you are living a majority of your life in.
          </p>
          
          <button className="btn btn-primary">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
