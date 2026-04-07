import "../styles/BasicInfo.css";
import avatar from "../assets/images/paladin.png";

export default function BasicInfo() {
  return (
    <section key="basic-info-identifier" className="basic-info">
      <div className="border-img">
        <div className="inner-container">
          <div className="avatar-wrapper">
            <img src={avatar} alt="" title="Pixel art made by Eric Barone" />
          </div>

          {/* -- Avatar & username -- */}
          <div className="username-wrapper">
            <div className="username">username</div>
            <div className="sub-username">subtitle</div>
          </div>

          {/* -- Profile summary -- */}
          <div className="info">
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
    </section>
  );
}
