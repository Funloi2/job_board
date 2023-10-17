import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Company from "./Company";


function JobDetail() {
  const { id } = useParams();
  const [jobDetail, setJobDetail] = useState(null);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [company, setCompany] = useState(null);

  const openCompany = () => {
    setIsCompanyOpen(true);
  };

  const closeCompany = () => {
    setIsCompanyOpen(false);
  };

  useEffect(() => {
    fetch(`http://localhost:3000/advertisement/${id}`)
      .then((response) => response.json())
      .then((data) => setJobDetail(data))
      .catch((error) =>
        console.error(
          "Erreur lors de la récupération des détails de l'annonce:",
          error
        )
      );
  }, [id]);

  useEffect(() => {
    if (jobDetail && jobDetail.data) {
      fetch(`http://localhost:3000/companie/${jobDetail.data.idCom}`)
        .then((response) => response.json())
        .then((data) => {
          setCompany(data);
        })

        .catch((error) =>
          console.error(
            "Erreur lors de la récupération du nom de la compagnie :",
            error
          )
        );
    }
  }, [jobDetail]);

  if (!jobDetail) {
    return <div>Loading...</div>;
  }
     if (!company) {
       return <div>Loading...</div>;
     }





  return (
    <div className="jobCard">
      <h1 className="text-center mb-5">{jobDetail.data.nomAd}</h1>
      <div className="row">
        <div className="col me-5 pe-5">
          
          {
            
            <p>
              {/*TODO: changer le button en lien pour un meilleur visuel*/}
              <strong>Company:</strong> <button onClick={openCompany} className="nav-link me-2 btn btn-link" aria-current="page">{company.data.nomCom}</button>
               <Company isOpen={isCompanyOpen} onClose={closeCompany} company={company}/>
            </p>
          }
          <p>
            <strong>Salary:</strong> {jobDetail.data.salaireAd}
          </p>
          <p>
            <strong>Contract:</strong> {jobDetail.data.contractAd}
          </p>
        </div>
        <div className="col ms-5 ps-5">
          <p>
            <strong>City:</strong> {jobDetail.data.VilleAd}
          </p>
          <p>
            <strong>Type:</strong> {jobDetail.data.typeAd}
          </p>
          <p>
            <strong>Date de publication:</strong>{" "}
            {jobDetail.data.dateCreationAd}
          </p>
        </div>
      </div>
      <p>
        <strong>Description:</strong> {jobDetail.data.descriptionAd}
      </p>
    </div>
  );
}

export default JobDetail;
