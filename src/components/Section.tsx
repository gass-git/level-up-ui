import { Fragment, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleUp,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import useSound from "use-sound";
import tickSound from "../assets/sounds/tick-sound.wav";
import { data } from "../data";

export default function Section({ n }) {
  const [current, setCurrent] = useState(0);
  const [dataLength, setDataLength] = useState(data[n].length);
  const [playSound] = useSound(tickSound, { volume: 0.6 });

  useEffect(() => {
    setCurrent(0);
    setDataLength(data[n].length);
  }, [n]);

  function handleCurrent() {
    playSound();

    if (current === dataLength - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  }

  function iconHandler() {
    return current === dataLength - 1 ? faAngleDoubleUp : faCaretDown;
  }

  return (
    <section>
      <div className="content">
        <Fragment>{data[n][current]}</Fragment>
      </div>
      <div hidden={dataLength <= 1} className="arrow-box">
        <FontAwesomeIcon
          className="icon shadow-08"
          icon={iconHandler()}
          onClick={() => handleCurrent()}
        />
      </div>
    </section>
  );
}
