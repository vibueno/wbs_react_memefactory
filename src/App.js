import React, { useEffect, useState } from "react";

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
      <img src={memePic} />
    </>
  );
}

export default App;
