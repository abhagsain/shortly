import React, { useState, useRef } from "react";
export default function URLItem(props) {
  const [output, setOutput] = useState(props.output || null);
  const [input, setInput] = useState(props.input || null);
  const [clicked, setClicked] = useState(false);
  const outputData = useRef(null);
  const handleClick = () => {
    if (!clicked) {
      setClicked(true);
    }
  };
  return (
    <div className=" container">
      <div className="url__container">
        <div className="url__left">
          <p className="url__submitted">{input}</p>
        </div>
        <div className="url__right">
          <p className="url__output" ref={outputData}>
            {output}
          </p>
          {clicked ? (
            <div className="btn btn--clicked">Copied</div>
          ) : (
            <div
              className="btn btn--url"
              onClick={() => {
                handleClick();
              }}
            >
              Copy
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
