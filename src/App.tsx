import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactPlayer from "react-player";
import "./App.css";
import Navigations from "./components/Navigations";
function App() {
  const [radioValue, setRadioValue] = useState<string>(
    "https://api.arfenhou.se/arfenhouse/Arfenhouse%20-%20The%20Movie-I3hvFexWF-s.mp4"
  );
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
      <ReactPlayer
        playing
        url={radioValue}
        width={isMobile ? "390px" : "900px"}
        height={isMobile ? "300px" : "720px"}
        controls={true}
        light="/splash.webp"
      />
      &nbsp;
      <Navigations
        radioValue={radioValue}
        setRadioValue={setRadioValue}
        isMobile={isMobile}
      />
      &nbsp;
    </div>
  );
}

export default App;
