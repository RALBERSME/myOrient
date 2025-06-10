import React from "react";
import "./Book.css";
import { useNavigate } from "react-router-dom";

import Moon from "../../assets/moon.jpg";

function throwConfetti() {
  createConfetti();
  drawConfetti();
  const confettiCanvas = document.getElementById("confettiCanvas");
  const fireworksCanvas = document.getElementById("fireworksCanvas");
  const balloonCanvas = document.getElementById("balloonCanvas");
  const confettiCtx = confettiCanvas.getContext("2d");
  const fireworksCtx = fireworksCanvas.getContext("2d");
  const balloonCtx = balloonCanvas.getContext("2d");
  confettiCanvas.width =
    fireworksCanvas.width =
    balloonCanvas.width =
      window.innerWidth;
  confettiCanvas.height =
    fireworksCanvas.height =
    balloonCanvas.height =
      window.innerHeight;

  let confetti = [];
  function createConfetti() {
    confetti = [];
    for (let i = 0; i < 200; i++) {
      confetti.push({
        x: Math.random() * confettiCanvas.width,
        y: Math.random() * confettiCanvas.height - confettiCanvas.height,
        r: Math.random() * 6 + 2,
        color: `hsl(${Math.random() * 360}, 100%, 70%)`,
        tilt: Math.random() * 10 - 5,
        speed: Math.random() * 2 + 1,
      });
    }
  }

  function drawConfetti() {
    confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    confetti.forEach((c) => {
      confettiCtx.beginPath();
      confettiCtx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
      confettiCtx.fillStyle = c.color;
      confettiCtx.fill();
      c.y += c.speed;
      c.tilt += Math.random() * 0.1 - 0.05;

      if (c.y > confettiCanvas.height) c.y = -c.r;
    });
  }
}
const Book = () => {
  const navigate = useNavigate();
  return (
    <div
      className="Book"
      onClick={() => {
        navigate("/myOrient/adventure");
      }}
    >
      <div className="book-l" onMouseEnter={throwConfetti}>
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
          <img src={Moon} />
        </div>
      </div>
    </div>
  );
};

export default Book;
