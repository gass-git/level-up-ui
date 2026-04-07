import * as C from "./components";
import { BrowserRouter } from "react-router";
import { config } from "./config";
import "./styles/App.css";

export default function App() {
  return (
    <BrowserRouter>
      <section className="col-flexbox">
        <main style={{ width: config.width, margin:`50px auto 0 auto` }}>
          <section className="first-row">
            <C.Scroller />
          </section>

          <section className="second-row">
            <div className="left-side">
              <C.MainMenu />
            </div>

            <div className="right-side">
              <C.BasicInfo />
            </div>
          </section>

          <section className="third-row">
            <C.MainContent />
          </section>

          <section className="fourth-row">
            <C.Links />
          </section>
        </main>

        <footer>
          <C.Footer />
        </footer>
      </section>
    </BrowserRouter>
  );
}