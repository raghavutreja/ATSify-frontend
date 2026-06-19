import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import ReactMarkDown from "react-markdown";
import "./Dashboard.css";
import "../Home/Home.css";

function Dashboard() {
  const [scoree, setScore] = useState(1);
  const [matched, setMatched] = useState([]);
  const [unmatched, setUnmatched] = useState([]);
  const [aifeedbackk, setaiFeedbackk] = useState("");
  const location = useLocation();
  const {
    resumeData,
    Desc,
    score,
    matchedSkills,
    unmatchedSkills,
    aifeedback,
  } = location.state || {};
  useEffect(() => {
    setMatched(matchedSkills);
    setUnmatched(unmatchedSkills);
    setaiFeedbackk(aifeedback);
    setScore(score);
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-1"></div>
        <div className="col mb-5 pb-5 centering ">
          <div className="centeringskills mb-5">
            
            <ul className="greenskills">
              <h2>Matched Skills</h2>
              {matched.map((word, index) => (
                <li>• {word}</li>
              ))}
            </ul>
            <ul className="redskills">
              <h2>Unmatched Skills</h2>
              {unmatched.map((word, index) => (
                <li>• {word}</li>
              ))}
            </ul>
            
          </div>
          Progress Bar
          <div
              className="progress"
              role="progressbar"
              aria-label="Example with label"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div className="progress-bar" style={{width:`${scoree}%`}} >
              </div>
            </div>
          <h1 className="mt-5 pt-5 mb-5" style={{ textAlign: "center" }}>
            ACTUAL REPORT
          </h1>
          <div className="feedresponse">
            <ReactMarkDown>{aifeedbackk}</ReactMarkDown>
          </div>
          <NavLink
            to="/checkimprovements"
            state={{
              resumeData,
              Desc,
            }}
            style={{ alignSelf: "center" }}
            className="btnscore mt-5"
          >
            Check Improvements
          </NavLink>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}

export default Dashboard;
