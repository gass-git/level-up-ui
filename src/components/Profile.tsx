import avatar from "../assets/images/avatar-img.png";
import { config } from "../config";

export default function Profile() {
  return (
    <div
      className="rpg-border"
      style={{ height: `168px`, width: config.profileWidth }}
    >
      <div className="flex-container" style={{ height: `196px` }}>
        <img src={avatar} className="avatar" alt="" />

        <div style={{ padding: `20px 0 0 20px`, minWidth: `140px` }}>
          <div className="username">username</div>
          <div className="sub-username">subtitle</div>
        </div>

        <div className="profile-attributes">
          <div>
            <label>field 1</label>
            <data>value</data>
          </div>
          <div>
            <label>field 2</label>
            <data>value</data>
          </div>
          <div>
            <label>field 3</label>
            <data>value</data>
          </div>
          <div>
            <label>field 4</label>
            <data>value</data>
          </div>
        </div>
      </div>
    </div>
  );
}
