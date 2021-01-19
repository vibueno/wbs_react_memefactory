import React, { useEffect, useState } from "react";
import GenerateMemeForm from "./components/GenerateMemeForm";

import "./App.css";

function App() {
  const [memePic, setMemePic] = useState();
  const [textTop, setTextTop] = useState("Text top");
  const [textBottom, setTextBottom] = useState("Text bottom");

  const errorHandler = (response) => {
    if (!response.ok) throw Error(response.statusText);
    else return response;
  };

  const submitHandler = (e, textTop, textBottom) => {
    e.preventDefault();
    setTextTop(textTop);
    setTextBottom(textBottom);
  };

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(errorHandler)
      .then((response) => response.json())
      .then((response) => {
        const memes = response.data.memes;
        const picIndex = Math.round(Math.random() * memes.length - 1);
        setMemePic(memes[picIndex].url);
      });
  }, []);

  return (
    <>
      <h1>The Meme Mine</h1>
      <GenerateMemeForm submitHandler={submitHandler} />
      <main>
        {memePic ? (
          <div className="meme-picture-container">
            <div className="meme-text top">{textTop}</div>
            <img src={memePic} className="meme-picture" alt="Meme base" />
            <div className="meme-text bottom">{textBottom}</div>
          </div>
        ) : (
          <div className="meme-picture-loading">Loading picture...</div>
        )}
      </main>
    </>
  );
}

export default App;
