import "./Reasons.css";
import Zugbegleiter from "../../assets/Zugbegleiter.png";
import TrainDriver from "../../assets/TrainDriver.png";
import Serviererin from "../../assets/Serviererin.png";
import Trainstation1 from "../../assets/trainstation1.jpg";
import Trainstation2 from "../../assets/trainstation2.png";
import Trainstation3 from "../../assets/trainstation3.png";
const Reasons = () => {
  return (
    <div className="Reasons" id="reasons">
      <div className="left-r">
        <img src={Trainstation1} alt="" />
        <img src={Trainstation2} alt="" />
        <img src={Trainstation3} alt="" />
      </div>
      <div className="right-r">
        <span>
          <i className="fa-solid fa-web-awesome"></i>
        </span>
        <div>
          <span id="why">
            <em>why</em>
          </span>
          <span> travel with us?</span>
        </div>

        <div className="details-r">
          <div>
            <i className="fa-solid fa-thumbs-up"></i>
            <span>Luxury and comfort</span>
          </div>
          <div>
            <i className="fa-solid fa-thumbs-up"></i>
            <span>breathtaking landscapes and historic cities</span>
          </div>
          <div>
            <i className="fa-solid fa-thumbs-up"></i>
            <span>Adventure and exoticism</span>
          </div>
          <div>
            <i className="fa-solid fa-thumbs-up"></i>
            <span>Cultural encounters</span>
          </div>
        </div>
        <span style={{ color: "var(--gray", fontWeight: "normal" }}>
          Our Crew
        </span>
        <div className="paratners">
          <img width="150px" height="150px" src={Serviererin} alt="" />
          <img width="150px" height="150px" src={TrainDriver} alt="" />
          <img width="150px" height="150px" src={Zugbegleiter} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Reasons;
