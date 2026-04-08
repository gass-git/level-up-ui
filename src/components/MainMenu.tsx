import { useEffect, useState } from "react";
import useSound from "use-sound";
import selectionSound from "../assets/sounds/game-selection-sound.wav";
import { useLocation, useNavigate } from "react-router";

export default function MainMenu() {
  const [floor, setFloor] = useState(1);
  const [playSwitchSound] = useSound(selectionSound, { volume: 1 });
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    playSwitchSound();
    setFloor(location.state);
  }, [location]);

  function goto(n: number) {
    navigate(`/section-${n}`, { state: n });
  }

  return (
    <div className="rpg-border" style={{ height: `168px` }}>
      <div className="flex-container" style={{ height: `196px` }}>
        <div className="menu">
          {[0, 1, 2, 3, 4].map((n) => (
            <div key={n} onClick={() => goto(n)}>
              section {n}
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
