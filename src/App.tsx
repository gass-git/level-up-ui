import FooterContent from "./components/FooterContent";
import Scroller from "./components/Scroller";
import "./styles/App.css";
import MainMenu from "./components/MainMenu";
import Links from "./components/Links";
import { BrowserRouter } from "react-router";
import MainContent from "./components/MainContent";
import BasicInfo from "./components/BasicInfo";

function App() {
  return (
    <BrowserRouter>
      <main className="main-wrapper">
        <section className="first-row">
          <Scroller />
        </section>

        <section className="second-row">
          <div className="left-side">
            <MainMenu />
          </div>

          <div className="right-side">
            <BasicInfo />
          </div>
        </section>

        <section className="third-row">
          <MainContent />
        </section>

        <section className="fourth-row">
          <Links />
        </section>
      </main>

      <footer>
        <FooterContent />
      </footer>
    </BrowserRouter>
  );
}

export default App;
