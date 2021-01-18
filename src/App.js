import React, { useEffect, useState } from "react";
import GenerateMemeForm from "./components/GenerateMemeForm";

import "./App.css";

function App() {
  const [memePic, setMemePic] = useState();

  const errorHandler = (response) => {
    if (!response.ok) throw Error(response.statusText);
    else return response;
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
      <GenerateMemeForm />
      <main>
        {memePic ? (
          <div className="meme-picture-container">
            <div className="meme-text top">top</div>
            <img src={memePic} className="meme-picture" alt="Meme base" />
            <div className="meme-text bottom">bottom</div>
          </div>
        ) : (
          <div className="meme-picture-loading">Loading picture...</div>
        )}
      </main>
    </>
  );
}

export default App;
