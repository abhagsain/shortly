import React, { useState, useRef } from "react";
export default function URLItem(props) {
  const [output] = useState(props.output || null);
  const [input] = useState(props.input || null);
  const [copied, setCopied] = useState(null);
  const [clicked, setClicked] = useState(false);
  const inputRef = useRef(null);
  const handleClick = () => {
    document.execCommand("copy");
    inputRef.current.disabled = false;
    inputRef.current.select();
    const copy = document.execCommand("copy", true);
    inputRef.current.selectionEnd = 0;
    inputRef.current.disabled = true;
    setCopied(copy);
    setClicked(true);
  };
  return (
    <div className=" container">
      <div className="url__container">
        <div className="url__left">
          <p className="url__submitted">{input}</p>
        </div>
        <div className="url__right">
          <input
            className="url__output"
            ref={inputRef}
            disabled
            value={output}
          />
          {copied ? (
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
