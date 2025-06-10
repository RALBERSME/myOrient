import "./Plans.css";
import { plansData } from "./plansData.js";
import { useNavigate } from "react-router-dom";
import Luxusabteil from "../../assets/Luxusabteil.png";
import ExtraLuxusabteil from "../../assets/ExtraLuxusabteil.png";
import ZweibettGehobenFarbe from "../../assets/ZweibettGehobenFarbe.png";
import Parcel from "../../assets/parcel.png";
import Certificate from "../../assets/certificat.png";
import Krone from "../../assets/krone.png";
import Kranz from "../../assets/kranz.png";

const picArray = [Luxusabteil, ExtraLuxusabteil, ZweibettGehobenFarbe];
const iconArray = [Certificate, Krone, Kranz];
const Plans = () => {
  const navigate = useNavigate();
  return (
    <div className="plans-container">
      <div className="blur plans-blur1"></div>
      <div className="blur plans-blur2"></div>
      <div className="programs-header" style={{ gap: "2rem" }} id="ready">
        <span>READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span>WITH US ?</span>
      </div>

      <div className="plans">
        {plansData.map((plan, i) => {
          return (
            <div key={i} className="plan">
              <img width="35px" height="35px" src={iconArray[i]} />
              <span>{plan.name}</span>
              <img src={picArray[i]} alt="" />
              <span>{plan.price}</span>

              <div className="features">
                {plan.features.map((feature, i) => {
                  return (
                    <div key={i} className="feature">
                      <img width="30px" height="30px" src={Parcel} alt="" />

                      <span key={i}>{feature}</span>
                    </div>
                  );
                })}
              </div>

              <div>
                <span></span>
              </div>
              <button
                onClick={() => {
                  navigate("/myOrient/book");
                }}
                className="btn"
                id="bookBtn"
              >
                Book now
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Plans;
