import React, { useState } from "react";
import "./Department.css";

const Students = (props) => {
  // Working with State
  const [text, setText] = useState("mango");
  const changeValue = () => {
    setText("Orange");
  };
  // End of working with State
  return (
    <div className="students">
      <h2 style={{ padding: "10px 15px" }}>Programming Department</h2>
      <div className="hold">
        {props.data.map((student, index) => (
          <div key={index} className="student">
            <div className="student__details">
              <li className="student__name">{student.name}</li>
              <span className="student__age">{student.age}</span>
              <small className="student__mat">{student.mat__no}</small>
              <small className="student__mat">{text}</small>
              <button onClick={changeValue}>Change</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Students;
