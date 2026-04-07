import { useEffect, useState } from "react";
import { config } from "../config";
import { scrollerMessages } from "../data";

export default function Scroller() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // creat interval on mount
    const intervalId = setInterval(() => {
      setIndex(prev => (prev >= scrollerMessages.length - 1 ? 0 : prev + 1))
    }, config.scrollInterval);

    // cleanup on unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
      <div className="rpg-border" style={{height: `30px`}}>
        <div className="flex-container" style={{height: `58px`}}>
          <div className="msg-display">
            
            {/** 
             * React will remount the div element everytime the index value changes,
             * therefore the CSS class will be toggled. Re-adding the class triggers
             * the animation again.
             */}
            <div key={index} className="scroll-text" style={{animationDuration: `${String(config.scrollInterval)}ms`}}>
              {scrollerMessages[index]}
            </div>
          </div>
        </div>
      </div>
  );
}
