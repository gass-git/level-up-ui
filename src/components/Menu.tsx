import { useEffect, useState } from "react";
import useSound from "use-sound";
import selectionSound from "../assets/sounds/game-selection-sound.wav";
import { useLocation, useNavigate } from "react-router";
import { config } from "../config";

export default function Menu() {
  const [floor, setFloor] = useState(0);
  const [playSwitchSound] = useSound(selectionSound, { volume: 1 });
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    playSwitchSound();
    setFloor(location.state);
  }, [location]);

  function goto(pathName: string, i: number) {
    navigate(pathName, { state: i });
  }

  return (
    <div className="rpg-border" style={{ height: `168px` }}>
      <div className="flex-container" style={{ height: `196px` }}>
        <div className="menu">
          {config.sections.map((name, i) => (
            <div className="option" key={name} onClick={() => goto(name, i)}>
              {name}
            </div>
          ))}
          <div
            className="slider"
            style={{ transform: `translateY(${floor * 38}px)` }}
          />
        </div>
      </div>
    </div>
  );
}
