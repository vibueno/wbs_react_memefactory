import React from "react";

import "./index.css";

const GenerateMemeForm = () => {
  return (
    <form className="meme-form">
      <label for="top-text-input" className="meme-form-field-label">
        Text top:
      </label>

      <input type="text" id="top-text-input" className="meme-form-field" />

      <label for="bottom-text-input" className="meme-form-field-label">
        Text bottom:
      </label>
      <input type="text" id="bottom-text-input" className="meme-form-field" />
      <button type="submit" className="meme-form-submit">
        Generate
      </button>
    </form>
  );
};
export default GenerateMemeForm;
