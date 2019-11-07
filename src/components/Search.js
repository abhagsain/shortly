import React, { Component } from "react";
import GlobalContext from "./GlobalContext";
export default class Search extends Component {
  static contextType = GlobalContext;

  render() {
    const { handleSubmit, error, input } = this.context;
    const cName = error
      ? "search__input search__input--error"
      : "search__input";
    return (
      <div className="search">
        <div className="search__container">
          <div className="search__main">
            <input
              type="text"
              className={cName}
              value={input}
              onChange={e =>
                this.context.handleInputChange({
                  input: e.target.value,
                  error: false,
                })
              }
              onKeyPress={e => this.context.handleEnter(e)}
              placeholder="Shorten a link here"
            />

            {error && (
              <span className="search__error-text--mobile">
                Please add a valid link
              </span>
            )}
            <button className="search__button" onClick={() => handleSubmit()}>
              Shorten it!
            </button>
          </div>
          {error && (
            <span className="search__error-text--desktop">
              Please add a valid link
            </span>
          )}
        </div>
      </div>
    );
  }
}
