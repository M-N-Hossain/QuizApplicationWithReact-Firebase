import React from "react";

import "../styles/summary.css";
import image from "../assets/images/success.png";

export default function Summary() {
  return (
    <div className="summary">
      <div className="point">
        {/* progress bar will be placed here */}
        <p className="score">
          Your score is <br />5 out of 10
        </p>
      </div>

      <div className="badge">
        <img src={image} alt="Success" />
      </div>
    </div>
  );
}
