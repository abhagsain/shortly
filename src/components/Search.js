import React, { Component } from "react";
import URLItem from "./URLItem";

export default class Search extends Component {
  state = {
    input: "",
    values: [
      { input: "https://todoist.com", output: "http://bit.ly/12s23s1" },
      { input: "https://todoist.com", output: "http://bit.ly/12s23s2" },
    ],
    error: false,
  };
  validateUrl = value => {
    return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
      value
    );
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
    this.setState({ values, input: "" });
  };
  handleURLSubmit = async () => {
    const { input } = this.state;
    // Check if it's the valid url
    /* 
      Make an HTTP request to URL: https://rel.ink/api/links/
     */
    if (input) {
      if (!this.validateUrl(input)) {
        return this.setState({ error: true });
      } else {
        this.getShortenedURL();
      }
    }
  };
  getUniqueID = function() {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
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
        </div>
      </div>
    );
  }
}
