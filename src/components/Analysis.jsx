import React from "react";

import "../styles/analysis.css";
import Question from "./Question";

export default function Analysis() {
  return (
    <div class="analysis">
      <h1>Question Analysis</h1>
      <h4>You answerd 5 out of 10 questions correctly</h4>
      <Question />
    </div>
  );
}
