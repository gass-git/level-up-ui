import avatar from "../assets/images/paladin.png";
import { config } from "../config";
import { profile } from "../data";
import useVW from "use-viewport-width";

export default function Profile() {
  const w = useVW(100);

  const Attributes = () => (
    <div className="profile-attributes">
      {profile.attributes.map((it) => (
        <div>
          <label>{it.field}</label>
          <data>{it.value}</data>
        </div>
      ))}
    </div>
  );

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
          <div className="username">{profile.name}</div>
          <div className="sub-username">{profile.vocation}</div>
        </div>

        {w > 550 ? <Attributes /> : null}
      </div>
    </div>
  );
}
