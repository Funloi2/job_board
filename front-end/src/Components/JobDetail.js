

function JobDetail({jobDetail}){


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