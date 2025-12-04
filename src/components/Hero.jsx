import React from "react";
import MotionFadeUp from "./MotionFadeUp";

const Hero = () => {
  return (
    <section className="hero">
      <div className="overlay"></div>

      <div className="container hero-container">
        <MotionFadeUp className="hero-content" duration={0.8} amount={0.4}>
          <div className="category">World News</div>
          <div className="divider"></div>

          <h1>Amazing places in America to visit.</h1>

          <p>
            For some reason — this country, this city, this neighborhood, this
            particular street — is the place you are living a majority of your
            life in.
          </p>

          <button className="btn btn-primary">Learn More</button>
        </MotionFadeUp>
      </div>
    </section>
  );
};

export default Hero;
