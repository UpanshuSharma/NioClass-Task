import "./App.css";
import React, { useEffect, useState } from "react";
import Question from "./component/Question";
function App() {
  const [qn, setQN] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [loading, setLoading] = useState(false);
  const QUESTION_CODE = [
    "AreaUnderTheCurve_901",
    "BinomialTheorem_901",
    "DifferentialCalculus2_901",
  ];

  const fetchCurrentQuestion = () => {
    fetch(
      `https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=${QUESTION_CODE[qn]}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCurrentQuestion(data[0]);
        setLoading(false);
      })

      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    setLoading(true);
    fetchCurrentQuestion();
  }, [qn]);
  return (
    <div className="App">
      <p className="main">NioClass: UPANSHU_SHARMA</p>
      {loading === true ? (
        <p>Loading</p>
      ) : (
        <>
          {currentQuestion && (
            <Question serialnumber={qn + 1} data={currentQuestion} />
          )}

          <div className="button-container">
            <button
              onClick={() => setQN((prev) => prev - 1)}
              className={qn == 0 ? "disable" : "button"}
              disabled={qn === 0 ? true : false}
            >
              Previous
            </button>
            <button
              onClick={() => setQN((prev) => prev + 1)}
              className={qn == QUESTION_CODE.length - 1 ? "disable" : "button"}
              disabled={qn === QUESTION_CODE.length - 1 ? true : false}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
