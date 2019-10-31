import React from "react";

export default function Search({ error }) {
  const cName = error ? "search__input search__input--error" : "search__input";
  return (
    <div className="search">
      <div className="search__container">
        <div className="search__main">
          <input
            type="text"
            className={cName}
            placeholder="Shorten a link here"
          />

          {error && (
            <span className="search__error-text--mobile">
              Please add a valid link
            </span>
          )}
          <button className="search__button">Shorten it!</button>
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
