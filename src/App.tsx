import * as C from "./components";
import { Route, Routes, BrowserRouter, Navigate } from "react-router";
import { config } from "./config";
import "./styles/App.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="col-flexbox">
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
