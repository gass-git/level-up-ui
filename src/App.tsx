import * as C from "./components";
import { BrowserRouter } from "react-router";
import { config } from "./config";
import "./styles/App.css";

export default function App() {
  return (
    <BrowserRouter>
      <section className="col-flexbox">
        <main style={{ width: config.width, margin: `50px auto 0 auto` }}>
          <section className="row">
            <C.Scroller />
          </section>

          <section className="row-flexbox">
            <div style={{ width: `100%`, marginRight: `2px` }}>
              <C.MainMenu />
            </div>

            <div>
              <C.Profile />
            </div>
          </section>

          <section>
            <C.MainContent />
          </section>

          <section>
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
