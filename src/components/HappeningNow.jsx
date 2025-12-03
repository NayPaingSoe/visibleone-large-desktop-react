import React from 'react';

const HappeningNow = () => {
  return (
    <section className="happening-now" style={{ marginBottom: '4rem' }}>
      <div className="container">
        <div className="flex justify-between items-center" style={{ marginBottom: '1.5rem' }}>
          <h2 className="section-title" style={{ margin: 0 }}>Happening Now</h2>
          <div className="arrows text-gray text-xs">
            <span style={{ marginRight: '1rem', cursor: 'pointer' }}>&lt;</span>
            <span style={{ cursor: 'pointer' }}>&gt;</span>
          </div>
        </div>

        <div className="grid-layout" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
          {/* Large Main Article */}
          <div className="large-article" style={{ position: 'relative', height: '400px', borderRadius: '4px', overflow: 'hidden' }}>
            <img src="https://placehold.co/800x400/9e9e9e/white?text=Bridge" alt="Bridge" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div className="content-overlay" style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '2rem',
              background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))',
              color: 'white'
            }}>
              <div className="category uppercase text-xs font-bold" style={{ marginBottom: '0.5rem' }}>City</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>Large article title</h3>
              <p className="text-sm" style={{ opacity: '0.9', marginBottom: '1rem' }}>
                Lorem ipsum dolor sit amet, in eam odio amet, vix id nullam detracto, vidit vituperatoribus duo id. Affert detraxit voluptatum vis eu, inermis eloquentiam.
              </p>
              <div className="time text-xs" style={{ opacity: '0.8' }}>
                <span>🕒</span> 2m ago
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="right-column flex" style={{ flexDirection: 'column', gap: '2rem' }}>
            <div className="small-article">
              <div className="image" style={{ height: '150px', borderRadius: '4px', overflow: 'hidden', marginBottom: '0.5rem' }}>
                <img src="https://placehold.co/400x200/8d6e63/white?text=Elephant" alt="Elephant" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3 className="font-bold" style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>Small title</h3>
              <div className="time text-xs text-gray">
                <span>🕒</span> 3h ago by <span style={{ textDecoration: 'underline' }}>Worldnews</span>
              </div>
            </div>

            <div className="small-article">
              <div className="image" style={{ height: '150px', borderRadius: '4px', overflow: 'hidden', marginBottom: '0.5rem' }}>
                <img src="https://placehold.co/400x200/4caf50/white?text=Parrot" alt="Parrot" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3 className="font-bold" style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>Small title</h3>
              <div className="time text-xs text-gray">
                <span>🕒</span> 4h ago by <span style={{ textDecoration: 'underline' }}>Days</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Second Row */}
        <div className="grid-layout" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem', marginTop: '2rem' }}>
           {/* Large Main Article 2 */}
           <div className="large-article" style={{ position: 'relative', height: '400px', borderRadius: '4px', overflow: 'hidden' }}>
            <img src="https://placehold.co/800x400/2e7d32/white?text=Forest" alt="Forest" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div className="content-overlay" style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '2rem',
              background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))',
              color: 'white'
            }}>
              <div className="category uppercase text-xs font-bold" style={{ marginBottom: '0.5rem' }}>Travel</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>Large article title</h3>
              <p className="text-sm" style={{ opacity: '0.9', marginBottom: '1rem' }}>
                Lorem ipsum dolor sit amet, in eam odio amet, vix id nullam detracto, vidit vituperatoribus duo id. Affert detraxit voluptatum vis eu, inermis eloquentiam.
              </p>
              <div className="time text-xs" style={{ opacity: '0.8' }}>
                <span>🕒</span> 2m ago
              </div>
            </div>
          </div>

           {/* Right Column 2 */}
           <div className="right-column flex" style={{ flexDirection: 'column', gap: '2rem' }}>
            <div className="small-article">
              <div className="image" style={{ height: '150px', borderRadius: '4px', overflow: 'hidden', marginBottom: '0.5rem' }}>
                <img src="https://placehold.co/400x200/1b5e20/white?text=Road" alt="Road" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3 className="font-bold" style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>Small title</h3>
              <div className="time text-xs text-gray">
                <span>🕒</span> 3h ago by <span style={{ textDecoration: 'underline' }}>Monica</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HappeningNow;
