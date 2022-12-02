import React from "react";
import "../Css/Todo.css";
import { Link } from "react-router-dom";

function WelcomeComponent(props) {
  return (
    <div className="container" style={{ backgroundColor: "black" }}>
      <div className="row justify-content-center align-item-center">
        <div className="col col-md-6">
          <h2 style={{ fontSize: "70px", color: "White" }}>
            Welcome {props.params.name}
          </h2>
        </div>
      </div>
      <div className="row justify-content-center align-item-center">
        <div className="col col-md-6">
          <p>
            <span style={{ color: "white" }}> To view the user list,</span>
            <Link to="/List">click here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default WelcomeComponent;
