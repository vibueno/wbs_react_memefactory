import React, { useEffect, useState } from "react";
import GenerateMemeForm from "./components/GenerateMemeForm";

import "./App.css";

function App() {
  const [memePics, setMemePics] = useState();
  const [memePicURL, setMemePicURL] = useState();
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

  const getRandomPicURL = (memePics) => {
    const url = memePics[Math.round(Math.random() * memePics.length - 1)].url;

    return url;
  };

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(errorHandler)
      .then((response) => response.json())
      .then((response) => {
        setMemePics(response.data.memes);
        setMemePicURL(getRandomPicURL(response.data.memes));
      });
  }, []);

  return (
    <>
      <h1>The Meme Mine</h1>
      {memePics ? (
        <GenerateMemeForm
          submitHandler={submitHandler}
          clickHandlerRandomPic={() => {
            setMemePicURL(getRandomPicURL(memePics));
          }}
        />
      ) : null}
      <main>
        {memePicURL ? (
          <div className="meme-picture-container">
            <div className="meme-text top">{textTop}</div>
            <img src={memePicURL} className="meme-picture" alt="Meme base" />
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
