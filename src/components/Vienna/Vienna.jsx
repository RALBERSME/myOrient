import { useState } from "react";
import "./Vienna.css";
import { useNavigate } from "react-router-dom";
import { viennaData } from "./ViennaData.js";
import ArrowLeft from "../../assets/arrowleft.png";
import ArrowRight from "../../assets/arrowright.png";

import Wien3 from "../../assets/wien3.jpg";
import Wien4 from "../../assets/wien4.jpg";
import Wien5 from "../../assets/wien5.jpg";
import Wien6 from "../../assets/wien6.jpg";
import Wien7 from "../../assets/wien7.jpg";
import Wien8 from "../../assets/wien8.jpg";
import Wien9 from "../../assets/wien9.jpg";
const wienArray = [Wien3, Wien4, Wien5, Wien6, Wien7, Wien8, Wien9];

const Vienna = () => {
  const [selected, setSelected] = useState(0);
  const vLength = viennaData.length;
  const navigate = useNavigate();
  const transition = { type: "spring", duration: 3 };
  return (
    <div className="Vienna">
      <div className="vienna-button">
        <a
          href="#"
          onClick={() => {
            navigate("/");
          }}
        >
          Back <br></br>to Main Page{" "}
        </a>
        <a
          href="#"
          onClick={() => {
            navigate("/budapest");
          }}
        >
          Continue <br></br>to Budapest{" "}
        </a>

        <br></br>
      </div>
      <br></br>

      <div className="vienna-text">
        <h2>{viennaData[selected].text}</h2>
        <br></br>
        <img
          className="vienna-img"
          key={selected}
          height="150px"
          width="150px"
          src={wienArray[selected]}
          alt=" "
        />
        <div className="vienna-Arrows">
          <img
            widht="25px"
            height="25px"
            onClick={() =>
              selected === 0
                ? setSelected(vLength - 1)
                : setSelected((prev) => prev - 1)
            }
            src={ArrowLeft}
            alt=""
          />
          <h3>click for more infos</h3>
          <img
            onClick={() =>
              selected === vLength - 1
                ? setSelected(0)
                : setSelected((prev) => prev + 1)
            }
            widht="25px"
            height="25px"
            src={ArrowRight}
            alt=""
          />
        </div>

        <h2>{viennaData[selected].englisch}</h2>
      </div>
    </div>
  );
};

export default Vienna;
