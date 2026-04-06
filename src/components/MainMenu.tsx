import { useEffect, useState } from "react";
import "../styles/MainMenu.css";
import useSound from "use-sound";
import selectionSound from "../assets/sounds/game-selection-sound.wav";
import { useLocation, useNavigate } from "react-router";

export default function MainMenu() {
  const [floorNumber, setFloorNumber] = useState(4);
  const [playSwitchSound] = useSound(selectionSound, { volume: 1 });
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    playSwitchSound();
    setFloorNumber(location.state);
  }, [location]);

  function goto(n: number) {
    navigate(`/option-${n}`, { state: n });
  }

  return (
    <section key="main-menu-identifier" className="main-menu">
      <div className="border-img">
        <div className="inner-container">
          <div className="menu-wrapper">
            <div className="option" onClick={() => goto(1)}>
              <div className="label">Option 1</div>
            </div>
            <div className="option" onClick={() => goto(2)}>
              <div className="label">Option 2</div>
            </div>
            <div className="option" onClick={() => goto(3)}>
              <div className="label">Option 3</div>
            </div>
            <div className="option" onClick={() => goto(4)}>
              <div className="label">Option 4</div>
            </div>

            {/* -- Elevator -- */}
            <div className={`inverted-elevator floor-${floorNumber}`}></div>
            {/* -------------- */}
          </div>
        </div>
      </div>
    </section>
  );
}
