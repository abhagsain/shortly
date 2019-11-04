import React, { Component } from "react";
import URLItem from "./URLItem";

export default class Search extends Component {
  state = {
    input: "",
    values: [],
    error: false,
  };
  validateUrl = value => {
    return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
      value
    );
  };

  async componentDidMount() {
    const values = JSON.parse(localStorage.getItem("data")) || [];
    if (values.length > 0) {
      this.setState({ values });
    } else {
      console.log("NO data in the array");
    }
  }

  addToLocalStorage = values => {
    localStorage.setItem("data", JSON.stringify(values));
  };
  getShortenedURL = async () => {
    const { input } = this.state;
    const res = await fetch("https://rel.ink/api/links/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: input }),
    }).then(res => res.json());
    const { values } = JSON.parse(JSON.stringify(this.state));
    values.push({ input, output: `https://rel.ink/${res.hashid}` });
    this.addToLocalStorage(values);
    this.setState({ values, input: "" });
  };
  componentWillUnmount() {
    // console.log("Component will unmount");
    // localStorage.setItem("data", JSON.stringify(this.state.values));
  }

  handleURLSubmit = async () => {
    const { input } = this.state;
    if (input) {
      if (!this.validateUrl(input)) {
        return this.setState({ error: true });
      } else {
        this.getShortenedURL();
      }
    } else {
      return this.setState({ error: true });
    }
  };
  getUniqueID = function() {
    return (
      "_" +
      Math.random()
        .toString(36)
        .substr(2, 9)
    );
  };
  render() {
    const { error, input, values } = this.state;
    const cName = error
      ? "search__input search__input--error"
      : "search__input";
    return (
      <div className="section-2">
        <div className="search">
          <div className="search__container">
            <div className="search__main">
              <input
                type="text"
                className={cName}
                value={input}
                onChange={e =>
                  this.setState({ input: e.target.value, error: false })
                }
                placeholder="Shorten a link here"
              />

              {error && (
                <span className="search__error-text--mobile">
                  Please add a valid link
                </span>
              )}
              <button
                className="search__button"
                onClick={() => this.handleURLSubmit()}
              >
                Shorten it!
              </button>
            </div>
            {error && (
              <span className="search__error-text--desktop">
                Please add a valid link
              </span>
            )}
          </div>
          {values.map(value => (
            <URLItem
              input={value.input}
              output={value.output}
              key={this.getUniqueID()}
            />
          ))}
          <div className="container">
            <div className="stat__container">
              <div className="heading-box">
                <h2 className="stat__heading">Advanced Statistics</h2>
                <p className="stat__subheading">
                  Track how your links are performing across the web with our
                  advanced statistics dashboard.
                </p>
              </div>
              <div className="spec__container">
                <div className="spec__line" />
                <div className="spec__item">
                  <div className="spec__item-logo">
                    <img
                      src={require("../images/icon-brand-recognition.svg")}
                      alt=""
                      srcSet={require("../images/icon-brand-recognition.svg")}
                    />
                  </div>
                  <div className="spec__content">
                    <h3 className="spec__item-heading">Brand Recognition</h3>
                    <p className="spec__item-description">
                      Boost your brand regonition with each click. Generic links
                      don't mean a thing. Brand links help instil confidence in
                      your content.
                    </p>
                  </div>
                </div>
                <div className="spec__item">
                  <div className="spec__item-logo">
                    <img
                      src={require("../images/icon-detailed-records.svg")}
                      alt="Shortly"
                      srcSet={require("../images/icon-detailed-records.svg")}
                    />
                  </div>
                  <div className="spec__content">
                    <h3 className="spec__item-heading">Detailed Records</h3>
                    <p className="spec__item-description">
                      Gain insights into who is clicking your links. Knowing
                      when and where people engage with your content helps
                      inform better decisions.
                    </p>
                  </div>
                </div>
                <div className="spec__item">
                  <div className="spec__item-logo">
                    <img
                      src={require("../images/icon-fully-customizable.svg")}
                      alt=""
                      srcSet={require("../images/icon-fully-customizable.svg")}
                    />
                  </div>
                  <div className="spec__content">
                    <h3 className="spec__item-heading">Fully Customizable</h3>
                    <p className="spec__item-description">
                      Improve brand awareness and content discoverability
                      through customizable links, supercharing audience
                      engagement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
