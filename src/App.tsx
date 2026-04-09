import * as C from "./components";
import { Route, Routes, BrowserRouter, Navigate } from "react-router";
import { config } from "./config";
import ambienceTrack from "./assets/sounds/fantasy-cave-ambience.mp3";
import "./styles/App.css";
import useSound from "use-sound";
import { useEffect, useState } from "react";

export default function App() {
  const [playAmbience, { stop }] = useSound(ambienceTrack, {
    loop: true,
    volume: 0.1,
  });
  const [ambience, setAmbience] = useState({ isActive: false, muted: false });

  useEffect(() => {
    if (ambience.muted) {
      stop();
      setAmbience({ ...ambience, isActive: false });
    } else {
      playAmbience();
    }
  }, [ambience.muted]);

  function handleOnMouseEnter() {
    if (!ambience.isActive && !ambience.muted) {
      playAmbience();
      setAmbience({ ...ambience, isActive: true });
    }
  }

  return (
    <BrowserRouter>
      <div className="col-flexbox" onMouseEnter={() => handleOnMouseEnter()}>
        <C.Drops />
        <C.Muter ambience={ambience} setAmbience={setAmbience} />

        <main style={{ width: config.width, margin: `50px auto 0 auto` }}>
          <section className="row">
            <C.Scroller />
          </section>

          <section className="row-flexbox">
            <div style={{ width: `100%`, marginRight: `2px` }}>
              <C.Menu />
            </div>

            <div>
              <C.Profile />
            </div>
          </section>

          <section>
            <div className="rpg-border" style={{ height: `243px` }}>
              <div className="flex-container" style={{ height: `271px` }}>
                <Routes>
                  <Route path="*" element={<Navigate to="/" />} />
                  <Route path="/" element={<C.Section n="0" />} />
                  <Route path="section-0" element={<Navigate to="/" />} />
                  <Route path="section-1" element={<C.Section n="1" />} />
                  <Route path="section-2" element={<C.Section n="2" />} />
                  <Route path="section-3" element={<C.Section n="3" />} />
                  <Route path="section-4" element={<C.Section n="4" />} />
                </Routes>
              </div>
            </div>
          </section>

          <section>
            <C.Links />
          </section>
        </main>

        <footer>
          <C.Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}
