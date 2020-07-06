import React from "react";


function Employees(props){
   
    return (
        <ul className="list-group">
          {props.employees.map(item => (
            <li className="list-group-item" key={item.id}>
              {item.name} {item.department} {item.email}
            </li>
          ))}
        </ul>
      );
}

export default Employees;