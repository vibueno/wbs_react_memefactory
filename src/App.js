import React, { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [memePic, setMemePic] = useState();

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => setMemePic(response.data.memes[0].url));
  });

  return (
    <>
      <img src={memePic} />
    </>
  );
}

export default App;
