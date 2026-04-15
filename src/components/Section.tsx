import { Fragment, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleUp,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import useSound from "use-sound";
import tickSound from "../assets/sounds/tick-sound.wav";
import { content } from "../data";

export default function Section({ k }) {
  const [current, setCurrent] = useState(0);
  const [contentLength, setContentLength] = useState(content[k].length);
  const [playSound] = useSound(tickSound, { volume: 0.6 });

  useEffect(() => {
    setCurrent(0);
    setContentLength(content[k].length);
  }, [k]);

  function handleCurrent() {
    playSound();

    if (current === contentLength - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  }

  function iconHandler() {
    return current === contentLength - 1 ? faAngleDoubleUp : faCaretDown;
  }

  return (
    <section>
      <div className="content">
        <Fragment>{content[k][current]}</Fragment>
      </div>
      <div hidden={contentLength <= 1} className="arrow-box">
        <FontAwesomeIcon
          className="icon shadow-08"
          icon={iconHandler()}
          onClick={() => handleCurrent()}
        />
      </div>
    </section>
  );
}
