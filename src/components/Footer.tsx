import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";

export default function FooterContent() {
  return (
    <div className="credits">
      <a
        style={{ marginLeft: "0px" }}
        href="https://github.com/gass-git/level-up-ui"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://img.shields.io/github/repo-size/gass-git/level-up-ui?style=plastic&color=orange"
          alt="size"
        />
      </a>
      <span>
        -
        inspired by
      </span>
      <FontAwesomeIcon
        style={{ margin: "0px 5px 0 5px", fontSize: "19px", opacity: "0.9" }}
        icon={faGamepad}
      />
      <a
        className="credit-link"
        href="https://www.rpgmakerweb.com/"
        target="_blank"
        rel="noreferrer"
      >
        rpg maker
      </a>
      <span>
        designs
      </span>
    </div>
  );
}
