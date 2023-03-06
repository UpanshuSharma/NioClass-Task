import React from "react";
import "./Question.css";
import { MathJax, MathJaxContext } from "better-react-mathjax";
function Question({ serialnumber, data }) {
  return (
    <div className="Question">
      <p className="question-n0">{`Question ${serialnumber}`}</p>
      <MathJax
        style={{
          lineHeight: "2",
          textAlign: "justify",
          width: "80%",
          marginLeft: "auto",
          marginRight: "auto",
          wordSpacing: "1.4",
        }}
      >{`${data["Question"]}`}</MathJax>
    </div>
  );
}

export default Question;
