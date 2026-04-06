import { Fragment, useEffect, useState } from "react";
import "../styles/Scroller.css";

export default function ScrollDisplay() {
  const [index, setIndex] = useState(0);
  const messages = [
    <Fragment>
      Welcome fellow visitor from Planet Earth ! I'm glad you came by, feel free
      to take a look around...
    </Fragment>,
    <Fragment>
      Web app using: Reactjs, FontAwesome, AOS, SVG Backgrounds, Axios & Use
      Sound...
    </Fragment>,
    <Fragment>Another example message...</Fragment>,
  ];

  useEffect(() => {
    // creat interval on mount
    const intervalId = setInterval(() => {
      const maxIndex = messages.length;

      if (index >= maxIndex) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 10000);

    // cleanup on unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section key="SD-identifier" className="scroll-display">
      <div className="border-img">
        <div className="inner-container">
          <div className="msg-display">
            <div className="scroll-text">{messages[index]}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
