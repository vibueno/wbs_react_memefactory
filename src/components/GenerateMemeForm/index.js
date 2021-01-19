import React from "react";

import "./index.css";

const GenerateMemeForm = () => {
  const submitHandler = () => {};

  return (
    <form className="meme-form" onSubmit={submitHandler}>
      <label htmlFor="top-text-input" className="meme-form-field-label">
        Text top
      </label>

      <input
        type="text"
        id="top-text-input"
        className="meme-form-field"
        maxLength="40"
      />

      <label htmlFor="bottom-text-input" className="meme-form-field-label">
        Text bottom
      </label>
      <input
        type="text"
        id="bottom-text-input"
        className="meme-form-field"
        maxLength="40"
      />
      <button type="submit" className="meme-form-submit">
        Generate
      </button>
    </form>
  );
};
export default GenerateMemeForm;
