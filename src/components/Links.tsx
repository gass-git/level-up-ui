import { useState } from "react";
import "../styles/Links.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStackOverflow,
  faGithub,
  faLinkedin,
  faNpm,
} from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import useSound from "use-sound";
import clickSound from "../assets/sounds/link-click.mp3";
import copySound from "../assets/sounds/copy-email.mp3";

export default function Links() {
  const [playClickSound] = useSound(clickSound, { volume: 0.8 });
  const [playCopySound] = useSound(copySound, { volume: 0.2 });
  const [showEffect, setShowEffect] = useState(false);

  function copyText(entryText) {
    navigator.clipboard.writeText(entryText);
    setShowEffect(true);
    setTimeout(() => {
      setShowEffect(false);
    }, 2000);
    playCopySound();
  }

  return (
    <section>
      <div className="rpg-border" style={{ height: `30px` }}>
        <div
          className="flex-container"
          style={{
            justifyContent: `space-between`,
            padding: `10px 20px 10px 20px`,
          }}
        >
          <a
            onClick={() => playClickSound()}
            href="https://github.com/gass-git"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              style={{ fontSize: "35px", marginTop: "1px" }}
              className="fa-icon"
            />
          </a>
          <a
            onClick={() => playClickSound()}
            href="https://stackoverflow.com/users/14895985/gass?tab=profile"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faStackOverflow}
              style={{ fontSize: "36px" }}
              className="fa-icon"
            />
          </a>
          <a
            onClick={() => playClickSound()}
            href="https://www.linkedin.com/in/gabriel-salinas-szada-7a188196"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{ fontSize: "36px", marginLeft: "6px" }}
              className="fa-icon"
            />
          </a>
          <a
            onClick={() => playClickSound()}
            href="https://www.npmjs.com/~gass-npm"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faNpm}
              style={{ fontSize: "33px", marginTop: "2px" }}
              className="fa-icon"
            />
          </a>
          <div onClick={() => copyText("g.szada@gmail.com")} title="Copy email">
            {showEffect ? (
              <div style={{ position: `relative` }}>
                <span className="float">e-mail copied</span>
              </div>
            ) : null}

            <FontAwesomeIcon
              icon={faAt}
              style={{ fontSize: "33px", marginTop: "2px" }}
              className="fa-icon"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
