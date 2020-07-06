import React from "react";


function Employees(props){
   
    return (
        <ul className="list-group">
          {props.employees.map(item => (
            <li className="list-group-item" key={item.id}>
            <div class = "row">
                <div class="col-sm">
                  {item.name}
                </div>
                <div class="col-sm">
                  {item.department}
                </div>
                <div class="col-sm">
                {item.email}
                </div>
                </div>   
            </li>
          ))}
        </ul>
        
      );
}

export default Employees;