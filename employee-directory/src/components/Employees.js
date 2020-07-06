import React from "react";

const employees = [
    {name: "Alex Karev", department: "Pediatrics", email: "alexkarev@grey-sloan.com"},
    {name: "Meredith Grey", department: "General Surgery", email: "meredithgrey@grey-sloan.com"},
    {name: "Catherine Fox", department: "Hospital Management", email: "catherinefox@grey-sloan.com"},
    {name: "Maggie Pierce", department: "Cardiothoracics", email: "maggiepierce@greysloan.com"},
    {name: "Amelia Shepherd", department: "Neurological", email: "ameliashepherd@greysloan.com"},
  ]

function Employees(props){
   
    return (
        <ul className="list-group">
          {props.employees.map(item => (
            <li className="list-group-item" key={item.id}>
              {item.name}
            </li>
          ))}
        </ul>
      );
}

export default Employees;