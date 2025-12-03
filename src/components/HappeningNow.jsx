import React from 'react';

const HappeningNow = () => {
  return (
    <section className="happening-now">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Happening Now</h2>
          <div className="arrows">
            <span className="arrow-left">&lt;</span>
            <span className="arrow-right">&gt;</span>
          </div>
        </div>

        <div className="grid-layout-main">
          {/* Large Main Article */}
          <div className="large-article">
            <img src="https://placehold.co/800x400/9e9e9e/white?text=Bridge" alt="Bridge" />
            <div className="content-overlay">
              <div className="category">City</div>
              <h3>Large article title</h3>
              <p>
                Lorem ipsum dolor sit amet, in eam odio amet, vix id nullam detracto, vidit vituperatoribus duo id. Affert detraxit voluptatum vis eu, inermis eloquentiam.
              </p>
              <div className="time">
                <span>🕒</span> 2m ago
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="right-column-happening">
            <div className="small-article">
              <div className="image">
                <img src="https://placehold.co/400x200/8d6e63/white?text=Elephant" alt="Elephant" />
              </div>
              <h3>Small title</h3>
              <div className="time">
                <span>🕒</span> 3h ago by <span>Worldnews</span>
              </div>
            </div>

            <div className="small-article">
              <div className="image">
                <img src="https://placehold.co/400x200/4caf50/white?text=Parrot" alt="Parrot" />
              </div>
              <h3>Small title</h3>
              <div className="time">
                <span>🕒</span> 4h ago by <span>Days</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Second Row */}
        <div className="grid-layout-main second-row">
           {/* Large Main Article 2 */}
           <div className="large-article">
            <img src="https://placehold.co/800x400/2e7d32/white?text=Forest" alt="Forest" />
            <div className="content-overlay">
              <div className="category">Travel</div>
              <h3>Large article title</h3>
              <p>
                Lorem ipsum dolor sit amet, in eam odio amet, vix id nullam detracto, vidit vituperatoribus duo id. Affert detraxit voluptatum vis eu, inermis eloquentiam.
              </p>
              <div className="time">
                <span>🕒</span> 2m ago
              </div>
            </div>
          </div>

           {/* Right Column 2 */}
           <div className="right-column-happening">
            <div className="small-article">
              <div className="image">
                <img src="https://placehold.co/400x200/1b5e20/white?text=Road" alt="Road" />
              </div>
              <h3>Small title</h3>
              <div className="time">
                <span>🕒</span> 3h ago by <span>Monica</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HappeningNow;
