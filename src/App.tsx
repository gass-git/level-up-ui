import * as C from "./components";
import { Route, Routes, BrowserRouter, Navigate } from "react-router";
import { config } from "./config";
import ambienceTrack from "./assets/sounds/fantasy-cave-ambience.mp3";
import "./styles/App.css";
import useSound from "use-sound";
import { useEffect, useState } from "react";
import useVW from "use-viewport-width";

export default function App() {
  const [playAmbience, { stop }] = useSound(ambienceTrack, {
    loop: true,
    volume: 0.1,
  });
  const [ambience, setAmbience] = useState({ isActive: false, muted: false });
  const w = useVW(100);

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
    <BrowserRouter basename={config.routerBasename}>
      <div className="col-flexbox" onMouseEnter={() => handleOnMouseEnter()}>
        {config.waterDrops ? <C.Drops /> : null}

        {w > config.width + 150 ? (
          <C.Muter ambience={ambience} setAmbience={setAmbience} />
        ) : null}

        <main
          style={{
            width: w > config.width ? config.width : `${w * 0.97}px`,
            margin: `50px auto 0 auto`,
          }}
        >
          <section className="row">
            <C.Scroller />
          </section>

          {w > config.width ? (
            <section className="row-flexbox">
              <div style={{ width: `100%`, marginRight: `2px` }}>
                <C.Menu />
              </div>

              <div>
                <C.Profile />
              </div>
            </section>
          ) : (
            <>
              <section>
                <C.Profile />
              </section>
              <section>
                <C.Menu />
              </section>
            </>
          )}

          <section>
            <div
              className="rpg-border"
              style={{ height: w > config.width ? `243px` : `400px` }}
            >
              <div
                className="flex-container"
                style={{ height: w > config.width ? `271px` : `428px` }}
              >
                <Routes>
                  <Route path="*" element={<Navigate to="/" />} />
                  <Route
                    path="/"
                    element={<C.Section k={config.sections[0]} />}
                  />
                  {config.sections.map((name) => (
                    <Route path={name} element={<C.Section k={name} />} />
                  ))}
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
