import React from "react";
import Employees from "./Employees"

const employees = [
  {name: "Alex Karev", department: "Pediatrics", email: "alexkarev@grey-sloan.com"},
  {name: "Meredith Grey", department: "General Surgery", email: "meredithgrey@grey-sloan.com"},
  {name: "Catherine Fox", department: "Hospital Management", email: "catherinefox@grey-sloan.com"},
  {name: "Maggie Pierce", department: "Cardiothoracics", email: "maggiepierce@greysloan.com"},
  {name: "Amelia Shepherd", department: "Neurological", email: "ameliashepherd@greysloan.com"},
]

function HelloReact() {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1>Employee Directory</h1>
      </div>
      <Employees employees={employees}/>
    </div>
  );
}

export default HelloReact;
