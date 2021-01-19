import React, { useRef } from "react";

import "./index.css";

const GenerateMemeForm = ({ submitHandler }) => {
  const textTop = useRef();
  const textBottom = useRef();

  return (
    <form
      className="meme-form"
      onSubmit={(e) => {
        submitHandler(e, textTop.current.value, textBottom);
      }}
    >
      <label htmlFor="top-text-input" className="meme-form-field-label">
        Text top
      </label>

      <input
        type="text"
        id="top-text-input"
        className="meme-form-field"
        maxLength="40"
        ref={textTop}
      />

      <label htmlFor="bottom-text-input" className="meme-form-field-label">
        Text bottom
      </label>
      <input
        type="text"
        id="bottom-text-input"
        className="meme-form-field"
        maxLength="40"
        ref={textBottom}
      />

      <button className="meme-form-btn">Browse pic</button>
      <button className="meme-form-btn">Random pic</button>

      <button type="submit" className="meme-form-btn">
        Generate
      </button>
    </form>
  );
};
export default GenerateMemeForm;
