import acsent from "../assets/acsent.png";
import "../css/style.css";
import imgprofile from "../assets/me.jpg";
import modulecardprofile from "../css/Cardprofile.module.css";

const Cardprofile = () => {
  // css in js
  /*const wrapper = {
    backgroundColor: "#00B6DF",
    width: "100vw",
    height: "100vh",
    backgroundImage: `url(${acsent})`,
    backgroundPosition: "bottom right",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };*/
  // call : style={wrapper}

  return (
    // inline css
    <div
      style={{
        backgroundColor: "#00B6DF",
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${acsent})`,
        backgroundPosition: "bottom right",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* css file */}
      <div className="card-profile">
        <img src={imgprofile} />
        <div className="job">Fullstack Developer</div>
        <div className="name">Syafiq Fajrian Emha</div>
        <div className="desc">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </div>
        <button className="buttoncontact">Contact Me</button>
      </div>

      {/* css module */}
      <div className="card-profile">
        <img src={imgprofile} />
        <div className="job">Fullstack Developer</div>
        <div className="name">Syafiq Fajrian Emha</div>
        <div className="desc">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </div>
        <button className={modulecardprofile.buttoncontact}>Contact Me</button>
      </div>
    </div>
  );
};

export default Cardprofile;
