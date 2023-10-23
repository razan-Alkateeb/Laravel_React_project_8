import React, { useState, useEffect } from "react";
import { Col, Row } from "reactstrap";
import axios from "../../../components/axios";
import { Link } from "react-router-dom";

//Job Images

const JobVacancyPost = (props) => {
  //Apply Now Model
  const [modal, setModal] = useState(false);
  const [jobs, setJobs] = useState([]);
  const openModal = () => setModal(!modal);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/samejob/${props.job.company.industry.id}`
        );
        // Make sure the response is not undefined
        if (response && response.data) {
          console.log(response.data);
          setJobs(response.data);
        } else {
          console.error("Response data is undefined.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [props.job]);
  return (
    <React.Fragment>
      {jobs
        .filter((fullTimeJobdetails) => fullTimeJobdetails.id !== props.job.id)
        .map((fullTimeJobdetails, key) => (
          <div
            key={key}
            className={
              fullTimeJobdetails.addclassNameBookmark === true
                ? "job-box bookmark-post card mt-4"
                : "job-box card mt-4"
            }>
            <div className="bookmark-label text-center">
              <Link to="#" className="text-white align-middle">
                <i className="mdi mdi-star"></i>
              </Link>
            </div>
            <div className="p-4">
              <Row className="align-items-center">
                <Col md={2}>
                  <div className="text-center mb-4 mb-md-0">
                    <Link to="/companydetails">
                      <img
                        src={`http://127.0.0.1:8000/company_img/${fullTimeJobdetails.company.img1}`}
                        alt="CompanyImage"
                        className="img-fluid rounded-3"
                        style={{ width: "50px" }}
                      />
                    </Link>
                  </div>
                </Col>

                <Col md={3}>
                  <div className="mb-2 mb-md-0">
                    <h5 className="fs-18 mb-1">
                      <Link
                        to={`/jobdetails/${fullTimeJobdetails.id}`}
                        className="text-dark">
                        {fullTimeJobdetails.title}
                      </Link>
                    </h5>
                    <p className="text-muted fs-14 mb-0">
                      {fullTimeJobdetails.company.name}
                    </p>
                  </div>
                </Col>

                <Col md={3}>
                  <div className="d-flex mb-2">
                    <div className="flex-shrink-0">
                      <i className="mdi mdi-map-marker text-primary me-1"></i>
                    </div>
                    <p className="text-muted mb-0">
                      {fullTimeJobdetails.company.location[0].name}
                    </p>
                  </div>
                </Col>

                <Col md={2}>
                  <div>
                    <p className="text-muted mb-2">
                      <span className="text-primary">$</span>
                      {fullTimeJobdetails.salary}
                    </p>
                  </div>
                </Col>

                <Col md={2}>
                  <div>
                    <span
                      className={
                        fullTimeJobdetails.employment_type === "Full-time"
                          ? "badge bg-success-subtle text-success fs-13 mt-1 mx-1"
                          : fullTimeJobdetails.employment_type === "Part-time"
                          ? "badge bg-danger-subtle text-danger fs-13 mt-1 mx-1"
                          : fullTimeJobdetails.employment_type === "Freelancer"
                          ? "badge bg-primary-subtle text-primary fs-13 mt-1 mx-1"
                          : ""
                      }>
                      {fullTimeJobdetails.employment_type}
                    </span>
                    {(fullTimeJobdetails.badges || []).map(
                      (badgeInner, key) => (
                        <span
                          className={`badge ${badgeInner.badgeclassName} fs-13 mt-1`}
                          key={key}>
                          {badgeInner.badgeName}
                        </span>
                      )
                    )}
                  </div>
                </Col>
              </Row>
            </div>
            <div className="p-3 bg-light">
              <Row>
                <Col md={4}>
                  <div>
                    <p className="text-muted mb-0">
                      <span className="text-dark">Experience :</span>{" "}
                      {fullTimeJobdetails.employment_type}
                    </p>
                  </div>
                </Col>

                <Col lg={6} md={5}>
                  {}
                  <div>
                    <p className="text-muted mb-0">
                      <span className="text-dark">
                        {fullTimeJobdetails.deadline_date === null
                          ? ""
                          : "Deadline :"}
                      </span>
                      {fullTimeJobdetails.deadline_date}{" "}
                    </p>
                  </div>
                </Col>

                <Col lg={2} md={3}>
                  <div className="text-start text-md-end">
                    <Link
                      to={`/jobdetails/${fullTimeJobdetails.id}`}
                      className="primary-link">
                      Apply Now <i className="mdi mdi-chevron-double-right"></i>
                    </Link>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        ))}

      <div className="text-center mt-4">
        <Link to="/joblist/All" className="primary-link form-text">
          View More <i className="mdi mdi-arrow-right"></i>
        </Link>
      </div>

      <div
        className="modal fade"
        id="applyNow"
        tabIndex="-1"
        aria-labelledby="applyNow"
        aria-hidden="true"></div>
    </React.Fragment>
  );
};

export default JobVacancyPost;
