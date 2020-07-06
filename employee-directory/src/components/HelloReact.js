import React from "react";
import Employees from "./Employees"

const employees = [
  {name: "Alex Karev", department: "Pediatrics", email: "alexkarev@grey-sloan.com"},
  {name: "Meredith Grey", department: "General Surgery", email: "meredithgrey@grey-sloan.com"},
  {name: "Catherine Fox", department: "Hospital Management", email: "catherinefox@grey-sloan.com"},
  {name: "Maggie Pierce", department: "Cardiothoracics", email: "maggiepierce@greysloan.com"},
  {name: "Amelia Shepherd", department: "Neurological", email: "ameliashepherd@greysloan.com"},
  {name: "Jackson Avery", department: "Plastic Surgery", email: "jacksonavery@grey-sloan.com"},
  {name: "Andrew Deluca", department: "Residents", email: "andrewdeluca@grey-sloan.com"},
  {name: "Owen Hunt", department: "Trauma", email: "owenhunt@grey-sloan.com"},
  {name: "Teddy Altman", department: "Cardiothoracics", email: "teddyaltman@greysloan.com"},
  {name: "Richard Webber", department: "General Surgery", email: "richardwebber@greysloan.com"}
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
