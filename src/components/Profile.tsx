import avatar from "../assets/images/paladin.png";
import { config } from "../config";
import useVW from "use-viewport-width";

export default function Profile() {
  const w = useVW(100);

  return (
    <div
      className="rpg-border"
      style={{
        height: `168px`,
        width: w > config.width ? config.profileWidth : ``,
      }}
    >
      <div className="flex-container" style={{ height: `196px` }}>
        <img src={avatar} className="avatar" alt="" />

        <div
          style={{
            padding: `20px 10px 0 10px`,
            minWidth: `140px`,
          }}
        >
          <div className="username">Hayashiro</div>
          <div className="sub-username">Demon Hunter</div>
        </div>

        <div className="profile-attributes">
          <div>
            <label>experience</label>
            <data>241043</data>
          </div>
          <div>
            <label>health</label>
            <data>1230</data>
          </div>
          <div>
            <label>distance</label>
            <data>71</data>
          </div>
          <div>
            <label>speed</label>
            <data>43</data>
          </div>
        </div>
      </div>
    </div>
  );
}
