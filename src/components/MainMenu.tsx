import { useEffect, useState } from "react";
import "../styles/MainMenu.css";
import useSound from "use-sound";
import selectionSound from "../assets/sounds/game-selection-sound.wav";
import { useLocation, useNavigate } from "react-router";

export default function MainMenu() {
  const [floorNumber, setFloorNumber] = useState(1);
  const [playSwitchSound] = useSound(selectionSound, { volume: 1 });
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    playSwitchSound();
    setFloorNumber(location.state);
  }, [location]);

  function goto(n: number) {
    navigate(`/section-${n}`, { state: n });
  }

  return (
    <div className="main-menu">
      <div className="rpg-border" style={{ height: `171px` }}>
        <div className="flex-container" style={{ height: `200px` }}>
          <div className="menu-wrapper">
            <div className="option" onClick={() => goto(1)}>
              <div className="label">section 1</div>
            </div>
            <div className="option" onClick={() => goto(2)}>
              <div className="label">section 2</div>
            </div>
            <div className="option" onClick={() => goto(3)}>
              <div className="label">section 3</div>
            </div>
            <div className="option" onClick={() => goto(4)}>
              <div className="label">section 4</div>
            </div>
            <div className="option" onClick={() => goto(5)}>
              <div className="label">section 5</div>
            </div>

            {/* -- Elevator -- */}
            <div className={`inverted-elevator floor-${floorNumber}`}></div>
            {/* -------------- */}
          </div>
        </div>
      </div>
    </div>
  );
}
