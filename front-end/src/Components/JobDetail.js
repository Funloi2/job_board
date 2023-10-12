import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";


function JobDetail(){
    const { id } = useParams();
    const [jobDetail, setJobDetail] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/advertisement/${id}`) 
          .then(response => response.json())
          .then(data => setJobDetail(data))
          .catch(error => console.error('Erreur lors de la récupération des détails de l\'annonce:', error));
      }, [id]);
      console.log(jobDetail);
      if (!jobDetail) {
        return <div>Loading...</div>; 
      }



     


    return(
        <div className="jobCard">
            <h1 className="text-center mb-5">{jobDetail.name}</h1>
            <div className="row">
                <div className="col me-5 pe-5">
                    <p><strong>Company:</strong> {jobDetail.company}</p>
                    <p><strong>Salary:</strong> {jobDetail.salary}</p>
                    <p><strong>Contract:</strong> {jobDetail.contract}</p>
                </div>
                <div className="col ms-5 ps-5">
                    <p><strong>City:</strong> {jobDetail.city}</p>
                    <p><strong>Type:</strong> {jobDetail.type}</p>
                    <p><strong>Date de publication:</strong> {jobDetail.date}</p>
                </div>
            </div>
            <p><strong>Description:</strong> {jobDetail.description}</p>
        </div>
    );

}

export default JobDetail;