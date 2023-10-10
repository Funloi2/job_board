

function JobDetail(jobDetail){


    return(
        <div>
            <div className="row text-center">
                <h1>{jobDetail.name}</h1>
            </div>
            <div className="row">
                <div className="col-6">
                    <p><strong>Company:</strong> {jobDetail.company}</p>
                    <p><strong>Salary:</strong> {jobDetail.salary}</p>
                    <p><strong>Contract:</strong> {jobDetail.contract}</p>
                </div>
                <div className="col-6">
                    <p><strong>City:</strong> {jobDetail.city}</p>
                    <p><strong>Type:</strong> {jobDetail.type}</p>
                    <p><strong>Date de publication:</strong> {jobDetail.date}</p>
                </div>
            </div>
        </div>
    );

}

export default JobDetail;