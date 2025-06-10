import { useNavigate } from "react-router-dom";
import "./Programs.css";
import { programsData } from "./programsData.js";
import Plan1 from "../../assets/plan1.png";
import Plan2 from "../../assets/plan2.png";
import Plan3 from "../../assets/plan3.png";
import Plan4 from "../../assets/plan4.png";
import Plan5 from "../../assets/plan5.png";
import Plan6 from "../../assets/plan6.png";
import Plan7 from "../../assets/plan7.png";

const planAarray = [Plan1, Plan2, Plan3, Plan4, Plan5, Plan6, Plan7];
const Programs = () => {
  const navigate = useNavigate();

  return (
    <div className="Programs" id="programs">
      <div className="programs-header">
        <span>From Paris </span>
        <span> </span>...through Europe ...<span>To Constantinople</span>
      </div>

      <div className="program-categories">
        {programsData.map((program, i) => {
          return (
            <div
              key={program.heading}
              onClick={() => {
                navigate(program.path);
              }}
              className="category"
            >
              <img src={planAarray[i]} />
              <span>{program.heading}</span>
              <span>{program.details}</span>
              <div className="join-now">
                <span>Click here to read more..</span>
                <i className="fa-solid fa-newspaper"></i>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Programs;
