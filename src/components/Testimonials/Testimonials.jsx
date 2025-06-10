import React, { useState } from "react";
import "./Testimonials.css";
import "./testimonialsData.js";
import { testimonialsData } from "./testimonialsData.js";
import { motion } from "framer-motion";
import ArrowLeft from "../../assets/arrowleft.png";
import ArrowRight from "../../assets/arrowright.png";
import Testimonial1 from "../../assets/testimonial1.jpg";
import Testimonial2 from "../../assets/testimonial2.jpg";
import Testimonial3 from "../../assets/testimonial3.jpg";
const testimonialArray = [Testimonial1, Testimonial2, Testimonial3];

const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;
  const transition = { type: "spring", duration: 3 };
  return (
    <div className="Testimonials">
      <div className="left-t">
        <span>Travel reports</span>
        <span className="travellers">what travellers</span>
        <span className="travellers">say about us</span>
        <motion.span
          key={selected}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={transition}
        >
          {testimonialsData[selected].review}
        </motion.span>
        <span>
          <span style={{ color: "var(--orange)" }}>
            {testimonialsData[selected].name}
          </span>
          <span> - {testimonialsData[selected].status}</span>
        </span>
      </div>

      <div className="right-t">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.img
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
          src={testimonialArray[selected]}
          alt=" "
        />
        <div className="arrows">
          <img
            widht="25px"
            height="25px"
            onClick={() =>
              selected === 0
                ? setSelected(tLength - 1)
                : setSelected((prev) => prev - 1)
            }
            src={ArrowLeft}
            alt=""
          />
          <img
            onClick={() =>
              selected === tLength - 1
                ? setSelected(0)
                : setSelected((prev) => prev + 1)
            }
            widht="25px"
            height="25px"
            src={ArrowRight}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
