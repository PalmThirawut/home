import React from "react";
// import ProgressBar from "react-bootstrap/ProgressBar";

function SkillsBar({ skill, value, isScrolled }) {
  return (
    <div style={{ width: "95%" }}>
      <p className="lead mb-1 mt-2">{skill}</p>
      <hr className="skillHr"></hr>
      {/* <ProgressBar
        className={!isScrolled ? "progress" : " progress-bar-animation"}
        now={value}
      /> */}
    </div>
  );
}

export default SkillsBar;
