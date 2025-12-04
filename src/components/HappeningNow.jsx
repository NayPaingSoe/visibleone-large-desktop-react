import React from "react";

const HappeningNow = () => {
  return (
    <section className="happening-now">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Happening Now</h2>
          <div className="arrows">
            <span className="arrow-left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path
                  fill="#554f4f"
                  d="m14 18l-6-6l6-6l1.4 1.4l-4.6 4.6l4.6 4.6z"
                ></path>
              </svg>
            </span>
            <span className="arrow-right">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path
                  fill="#554f4f"
                  d="M12.6 12L8 7.4L9.4 6l6 6l-6 6L8 16.6z"
                ></path>
              </svg>
            </span>
          </div>
        </div>

        <div className="grid-layout-main">
          {/* Large Main Article */}
          <div className="large-article">
            <img src="/happen1.webp" alt="Bridge" />
            <div className="content-overlay">
              <div className="category">City</div>
              <h3>Large article title</h3>
              <p>
                Lorem ipsum dolor sit amet, in eam odio amet, vix id nullam
                detracto, vidit vituperatoribus duo id. Affert detraxit
                voluptatum vis eu, inermis eloquentiam.
              </p>
              <div className="time">
                <span className="time-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#554f4f"
                      d="M12 4.75a7.25 7.25 0 1 0 0 14.5a7.25 7.25 0 0 0 0-14.5M3.25 12a8.75 8.75 0 1 1 17.5 0a8.75 8.75 0 0 1-17.5 0"
                    ></path>
                    <path
                      fill="#554f4f"
                      d="M12 7.25a.75.75 0 0 1 .75.75v3.69l1.78 1.78a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1-.22-.53V8a.75.75 0 0 1 .75-.75"
                      opacity={0.5}
                    ></path>
                  </svg>
                </span>
                <span className="time-text">2m ago</span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="right-column-happening">
            <div className="small-article">
              <div className="image">
                <img src="/happen2.webp" alt="Elephant" />
              </div>
              <h3>Small title</h3>
              <div className="time">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#554f4f"
                      d="M12 4.75a7.25 7.25 0 1 0 0 14.5a7.25 7.25 0 0 0 0-14.5M3.25 12a8.75 8.75 0 1 1 17.5 0a8.75 8.75 0 0 1-17.5 0"
                    ></path>
                    <path
                      fill="#554f4f"
                      d="M12 7.25a.75.75 0 0 1 .75.75v3.69l1.78 1.78a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1-.22-.53V8a.75.75 0 0 1 .75-.75"
                      opacity={0.5}
                    ></path>
                  </svg>
                </span>
                <span className="time-text">
                  3h ago by <span className="time-source">Worldnews</span>
                </span>
              </div>
            </div>

            <div className="small-article">
              <div className="image">
                <img src="/happen3.webp" alt="Parrot" />
              </div>
              <h3>Small title</h3>
              <div className="time">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#554f4f"
                      d="M12 4.75a7.25 7.25 0 1 0 0 14.5a7.25 7.25 0 0 0 0-14.5M3.25 12a8.75 8.75 0 1 1 17.5 0a8.75 8.75 0 0 1-17.5 0"
                    ></path>
                    <path
                      fill="#554f4f"
                      d="M12 7.25a.75.75 0 0 1 .75.75v3.69l1.78 1.78a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1-.22-.53V8a.75.75 0 0 1 .75-.75"
                      opacity={0.5}
                    ></path>
                  </svg>
                </span>
                <span className="time-text">
                  4h ago by <span className="time-source">Days</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid-layout-main second-row">
          {/* Large Main Article 2 */}
          <div className="large-article">
            <img src="/happen4.webp" alt="Forest" />
            <div className="content-overlay">
              <div className="category">Travel</div>
              <h3>Large article title</h3>
              <p>
                Lorem ipsum dolor sit amet, in eam odio amet, vix id nullam
                detracto, vidit vituperatoribus duo id. Affert detraxit
                voluptatum vis eu, inermis eloquentiam.
              </p>
              <div className="time">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#554f4f"
                      d="M12 4.75a7.25 7.25 0 1 0 0 14.5a7.25 7.25 0 0 0 0-14.5M3.25 12a8.75 8.75 0 1 1 17.5 0a8.75 8.75 0 0 1-17.5 0"
                    ></path>
                    <path
                      fill="#554f4f"
                      d="M12 7.25a.75.75 0 0 1 .75.75v3.69l1.78 1.78a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1-.22-.53V8a.75.75 0 0 1 .75-.75"
                      opacity={0.5}
                    ></path>
                  </svg>
                </span>
                <span className="time-text">2m ago</span>
              </div>
            </div>
          </div>

          {/* Right Column 2 */}
          <div className="right-column-happening">
            <div className="small-article">
              <div className="image">
                <img src="/happen5.webp" alt="Road" />
              </div>
              <h3>Small title</h3>
              <div className="time">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#554f4f"
                      d="M12 4.75a7.25 7.25 0 1 0 0 14.5a7.25 7.25 0 0 0 0-14.5M3.25 12a8.75 8.75 0 1 1 17.5 0a8.75 8.75 0 0 1-17.5 0"
                    ></path>
                    <path
                      fill="#554f4f"
                      d="M12 7.25a.75.75 0 0 1 .75.75v3.69l1.78 1.78a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1-.22-.53V8a.75.75 0 0 1 .75-.75"
                      opacity={0.5}
                    ></path>
                  </svg>
                </span>
                <span className="time-text">
                  3h ago by <span className="time-source">Monica</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HappeningNow;
