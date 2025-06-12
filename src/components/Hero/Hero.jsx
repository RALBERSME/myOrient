import React from "react";
import "./Hero.css";
import Header from "./Header/Header";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useNavigate } from "react-router-dom";
import Programs from "../Programs/Programs";
import Reasons from "../Reasons/Reasons";
import Plans from "../Plans/Plans";
import Testimonials from "../Testimonials/Testimonials";
import Camel from "../../assets/camel.png";
import France from "../../assets/france.png";
const Hero = () => {
  const navigate = useNavigate();

  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;

  return (
    <>
      <div className="hero" id="Home">
        <div className="blur hero-blur"></div>
        <div className="left-h">
          <Header />

          <div className="hero-text">
            <div>
              <span className="stroke-text">Enjoy </span>
              <span> More Than </span>
            </div>
            <div>
              <span>Just A Tour</span>
            </div>
            <div>
              <span>Start the greatest adventure of your life!</span>
            </div>
          </div>

          <div className="figures">
            <div>
              <span>FR-DE-AT-HU-HR-RS-BG-TR</span>
              <span>
                <CountUp
                  start={0}
                  end={8}
                  duration={2}
                  separator=" "
                  prefix=" "
                  suffix=" countries"
                ></CountUp>
              </span>
            </div>
            <div>
              <span> Paris to Constantinopel </span>
              <span>
                <CountUp
                  start={0}
                  end={2750}
                  duration={2.75}
                  separator=" "
                  prefix="ca. "
                  suffix=" km"
                ></CountUp>
              </span>
            </div>
            <div>
              <span>max. speed</span>
              <span>
                <CountUp
                  start={0}
                  end={100}
                  duration={2.75}
                  separator=" "
                  prefix=" "
                  suffix=" km/h"
                ></CountUp>
              </span>
            </div>
          </div>

          <div className="hero-buttons">
            <button
              onClick={() => {
                navigate("/adventure");
              }}
              className="btn"
            >
              HOP ON (free)<i className="fa-solid fa-cart-shopping"></i>
            </button>
            <button
              className="btn"
              onClick={() => {
                navigate("/moreInfo");
              }}
            >
              More Information <i className="fa-solid fa-folder-open"></i>
            </button>
          </div>
        </div>
        <div className="right-h">
          <img src={Camel} alt="" className="hero-image" />
          <motion.img
            initial={{ right: "11rem" }}
            whileInView={{ right: "20rem" }}
            transition={transition}
            src={France}
            alt=""
            className="hero-image-back"
          />
        </div>
      </div>

      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
    </>
  );
};

export default Hero;
