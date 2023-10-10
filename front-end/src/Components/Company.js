import React from 'react';

function Company({isOpen, onClose, company}) {

    // code to import the company details
    // import React, { useState } from 'react';


    // code to display the company details
    // <button onClick={openCompany} className="nav-link me-2 btn btn-link" aria-current="page">Company</button>
    // <Company isOpen={isCompanyOpen} onClose={closeCompany} company={company}/>
    // const [isCompanyOpen, setIsCompanyOpen] = useState(false);
    //
    // const openCompany = () => {
    //     setIsCompanyOpen(true);
    // };
    //
    // const closeCompany = () => {
    //     setIsCompanyOpen(false);
    // };

    return (
        isOpen && (
            <div className="modal" tabIndex="-1" role="dialog" style={{display: 'block'}}>
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header bg-dark text-white">
                            <h5 className="modal-title">{company.name}</h5>
                            <button type="button" className="btn-close bg-white" data-bs-dismiss="modal"
                                    aria-label="Close" onClick={onClose}></button>
                        </div>
                        <div className="modal-body">
                            <p>{company.description}</p>
                            <p><strong>Employee:</strong> {company.nbEmployee}</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
                                    onClick={onClose} >Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        )
    );
}

export default Company;
