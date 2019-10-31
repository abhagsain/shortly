import React from "react";

export default function URLItem() {
  return (
    <div className=" container">
      <div className="url__container">
        <div className="url__left">
          <p className="url__submitted">https://todoist.com/</p>
        </div>
        <div className="url__right">
          <p className="url__output">https://todoist.com/</p>
          <div className="btn btn--url">Copy</div>
        </div>
      </div>
    </div>
  );
}
