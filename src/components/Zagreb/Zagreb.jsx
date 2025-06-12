import "./Zagreb.css";
import { useNavigate } from "react-router-dom";
import { zagrebData } from "./ZagrebData.js";
import ReactPlayer from "react-player";
const Zagreb = () => {
  const navigate = useNavigate();
  return (
    <div className="Zagreb">
      <div className="zagreb-text">
        {zagrebData.map((data, i) => {
          return (
            <div key={i} className="zagreb-wrapper">
              <ReactPlayer
                className="zagreb-image"
                url={data.image}
                width="20rem"
                height="10.5rem"
                volume=".2"
              />

              <span className="zagreb-info">{data.text}</span>
              <span className="zagreb-infoEnglisch">{data.englisch}</span>
            </div>
          );
        })}
        <h2></h2>
        <div className="zagreb-button">
          <a
            href="#"
            onClick={() => {
              navigate("/belgrad");
            }}
          >
            Continue <br></br>to Belgrad{" "}
          </a>
          <a
            href="#"
            onClick={() => {
              navigate("/");
            }}
          >
            Back <br></br>to Main Page{" "}
          </a>
        </div>
      </div>{" "}
    </div>
  );
};

export default Zagreb;
