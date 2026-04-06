import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import "../styles/footerContent.css";
import { space1, space2, space3 } from "../utils/spaces.tsx";

export default function FooterContent() {
  return (
    <div className="credits">
      {space2}
      <a
        style={{ marginLeft: "0px" }}
        href="https://github.com/gass-git/dev-plus"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://img.shields.io/github/repo-size/gass-git/dev-plus?style=plastic&color=orange"
          alt="size"
        />
      </a>
      {space3}
      <a
        href="https://github.com/gass-git/dev-plus/blob/master/LICENSE"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://img.shields.io/github/license/gass-git/dev-plus?style=plastic"
          alt="License name"
        />
      </a>
      {space2}
      <div className="txt">
        -{space2}
        inspired by
      </div>
      <FontAwesomeIcon
        style={{ margin: "-1px 5px 0 5px", fontSize: "19px", opacity: "0.9" }}
        icon={faGamepad}
      />
      <a
        className="credit-link"
        href="https://www.rpgmakerweb.com/"
        target="_blank"
        rel="noreferrer"
      >
        RPG maker
      </a>
      <div className="txt">
        {space1}
        designs
        {space1}
      </div>
    </div>
  );
}
