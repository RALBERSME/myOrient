import React from "react";
import "./Book.css";
import { useNavigate } from "react-router-dom";

import Confetti from "../../assets/confetti.png";

const Book = () => {
  const navigate = useNavigate();
  return (
    <div
      className="Book"
      onClick={() => {
        navigate("/adventure");
      }}
    >
      <div className="book-l">
        <div class="book-wrapper">
          <a class="book-link" href="#" target="_blank">
            <div class="color"></div>
            <span>You won a trip in the year 1920, just click to accept!</span>
            <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
      <div className="book-r">
        <div className="book-img">
          <img src={Confetti} />
        </div>
      </div>
    </div>
  );
};

export default Book;
