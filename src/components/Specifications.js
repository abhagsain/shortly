import React from "react";

export default function Specifications() {
  const data = [
    {
      img: require("../images/icon-brand-recognition.svg"),
      title: "Brand Recognition",
      desc: `Boost your brand regonition with each click. Generic links don't
  mean a thing. Brand links help instil confidence in your
  content.`,
    },
    {
      img: require("../images/icon-detailed-records.svg"),
      title: "Detailed Records",
      desc: `Gain insights into who is clicking your links. Knowing when and
      where people engage with your content helps inform better
      decisions.`,
    },
    {
      img: require("../images/icon-fully-customizable.svg"),
      title: "Fully Customizable",
      desc: `Improve brand awareness and content discoverability through
      customizable links, supercharing audience engagement.`,
    },
  ];
  return (
    <div className="container">
      <div className="stat__container">
        <div className="heading-box">
          <h2 className="stat__heading">Advanced Statistics</h2>
          <p className="stat__subheading">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div className="spec__container">
          <div className="spec__line" />
          {data.map(el => {
            return (
              <div className="spec__item" key={el.title + " " + el.desc}>
                <div className="spec__item-logo">
                  <img src={el.img} alt="" srcSet={el.img} />
                </div>
                <div className="spec__content">
                  <h3 className="spec__item-heading">{el.title}</h3>
                  <p className="spec__item-description">{el.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
