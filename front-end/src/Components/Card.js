import React from 'react';

function Card({ title, description }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p>{description}</p>
        <p>Salaire : 20000/Month</p>
        <a href="#" className="btn btn-primary">Apply</a>
        <a href="#" className="btn btn-primary">More Information</a>
      </div>
    </div>
  );
}

export default Card;
