import React, { useEffect, useState } from "react";
import GenerateMemeForm from "./components/GenerateMemeForm";

import "./App.css";

function App() {
  const [memePics, setMemePics] = useState();
  const [memePicURL, setMemePicURL] = useState("");
  const [textTop, setTextTop] = useState("Text top");
  const [textBottom, setTextBottom] = useState("Text bottom");

  const formRef = React.createRef();

  const errorHandler = (response) => {
    if (!response.ok) throw Error(response.statusText);
    else return response;
  };

  const submitHandler = (e, text1, text2) => {
    e.preventDefault();
    setTextTop(text1);
    setTextBottom(text2);
  };

  const getRandomPicURL = (memePics) =>
    memePics[Math.round(Math.random() * memePics.length - 1)].url;

  const resetHandler = () => {
    formRef.current.reset();
    setTextTop("");
    setTextBottom("");
    setMemePicURL("noPic");
  };

  const renderPicture = () => {
    switch (memePicURL) {
      case "":
        return <div className="meme-picture-loading">Loading picture...</div>;

      case "noPic":
        return (
          <div className="meme-picture-container">
            Get a random picture to start a new meme!
          </div>
        );

      default:
        return (
          <div className="meme-picture-container">
            <div className="meme-text top">{textTop}</div>
            <img src={memePicURL} className="meme-picture" alt="" />
            <div className="meme-text bottom">{textBottom}</div>
          </div>
        );
    }
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
          ref={formRef}
          submitHandler={submitHandler}
          clickHandlerRandomPic={() => {
            setMemePicURL(getRandomPicURL(memePics));
          }}
          clickHandlerReset={resetHandler}
        />
      ) : null}
      <main>{renderPicture()}</main>
    </>
  );
}

export default App;
