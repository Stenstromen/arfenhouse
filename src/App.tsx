import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import YouTube from "react-youtube";
import "./App.css";
import Navigations from "./components/Navigations";
function App() {
  const [radioValue, setRadioValue] = useState<string>("I3hvFexWF-s");
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    return window.addEventListener("resize", () => {
      window.innerWidth < 425 ? setIsMobile(true) : setIsMobile(false);
    });
  }, []);

  useEffect(() => {
    return window.innerWidth < 425 ? setIsMobile(true) : setIsMobile(false);
  }, []);
  return (
    <div className="d-flex flex-column align-items-center">
      &nbsp;
      <h1>Arfenhou.Se!!!!11One</h1>
      &nbsp;
      <YouTube
        videoId={radioValue}
        opts={{
          height: isMobile ? "300" : "720",
          width: isMobile ? "390" : "900",
          playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
          },
        }}
      />
      &nbsp;
        <Navigations
          radioValue={radioValue}
          setRadioValue={setRadioValue}
          isMobile={isMobile}
        />
    </div>
  );
}

export default App;
