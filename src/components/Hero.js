import React from "react";

export default function Hero() {
  return (
    <div className="container">
      <div className="hero">
        <div className="hero__container">
          <div className="hero__text">
            <h2 className="hero__heading">More than just shorter links</h2>
            <p className="hero__subheading">
              Build your brand's recognition and get detailed insight on how
              your links are performing
            </p>
            <a href="#0" className="btn btn--blue">
              Get Started
            </a>
          </div>
          <div className="hero__image">
            {
              <img
                src={require("../images/illustration-working.svg")}
                alt=""
                className="hero__image-content"
              />
            }
          </div>
        </div>
      </div>
    </div>
  );
}
