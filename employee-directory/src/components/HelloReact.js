import React from "react";
import Employees from "./Employees"

function HelloReact() {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1>Employee Directory</h1>
        <p>I'm a jumbotron!</p>
        <p>
          <button className="btn btn-primary btn-lg">Learn more</button>
        </p>
      </div>
      <Employees/>
    </div>
  );
}

export default HelloReact;
