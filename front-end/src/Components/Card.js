import React from 'react';
import {NavLink} from "react-router-dom";

function Card({ title, description, salary, id }) {

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        {/* #TODO Faire que la description n'est pas entiere si elle est trop grande */}
        <p>{description}</p>
        <p>Salaire : {salary} /Month</p>
        <a href="#" className="btn btn-primary">Apply</a>
        <NavLink to={`/JobDetail/${id}`} className="btn btn-primary">More Information</NavLink>
      </div>
    </div>
  );
}

export default Card;
