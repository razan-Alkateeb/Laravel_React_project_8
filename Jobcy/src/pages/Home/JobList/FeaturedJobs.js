import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Row, Modal, ModalBody, Input, Label } from "reactstrap";
import { Link } from "react-router-dom";
import GitData from "../../ApiData/GitDataApi";

//jobImages
// import jobImage1 from "../../../assets/images/featured-job/img-01.png";
// import jobImage2 from "../../../assets/images/featured-job/img-02.png";
// import jobImage3 from "../../../assets/images/featured-job/img-03.png";
// import jobImage4 from "../../../assets/images/featured-job/img-04.png";

const FeaturedJobs = () => {
  //Apply Now Model
  const [modal, setModal] = useState(false);
  const openModal = () => setModal(!modal);
  // const featuredJobs = [
  //   {
  //     id: 1,
  //     companyImg: jobImage1,
  //     jobDescription: "Web Developer",
  //     companyName: "Web Technology pvt.Ltd",
  //     location: "Oakridge Lane ssRichardson",
  //     salary: "1000-1200/m",
  //     fullTime: true,
  //     timing: "Full Time",
  //     catogary: "Featured Jobs",
  //     addclassNameBookmark: true,
  //     badges: [
  //       {
  //         id: 1,
  //         badgeclassName: "bg-info-subtle text-info",
  //         badgeName: "Private",
  //       },
  //       {
  //         id: 2,
  //         badgeclassName: "bg-warning-subtle text-warning",
  //         badgeName: "Urgent",
  //       },
  //     ],
  //     experience: "1 - 2 years",
  //     Notes: "languages only differ in their grammar.",
  //   },
  //   {
  //     id: 2,
  //     companyImg: jobImage2,
  //     jobDescription: "Business Associate",
  //     companyName: "Pixel Technology pvt.Ltd",
  //     location: "Dodge City, Louisiana",
  //     salary: "800-1800/m",
  //     partTime: true,
  //     timing: "Part Time",
  //     catogary: "Featured Jobs",
  //     addclassNameBookmark: false,
  //     badges: [],
  //     experience: "0 - 1 years",
  //     Notes: "languages only differ in their grammar.",
  //   },
  //   {
  //     id: 3,
  //     companyImg: jobImage3,
  //     jobDescription: "Digital Marketing Manager",
  //     companyName: "Jobcy Technology Pvt.Ltd",
  //     location: "Phoenix, Arizona",
  //     salary: "1500-2400/m",
  //     freelancer: true,
  //     timing: "Freelancer",
  //     catogary: "Featured Jobs",
  //     addclassNameBookmark: true,
  //     badges: [],
  //     experience: "4+ years",
  //     Notes: null,
  //   },
  //   {
  //     id: 4,
  //     companyImg: jobImage4,
  //     jobDescription: "Product Director",
  //     companyName: "Creative Agency",
  //     location: "Escondido, California",
  //     salary: "1500-2400/m",
  //     fullTime: true,
  //     timing: "Full Time",
  //     catogary: "Featured Jobs",
  //     addclassNameBookmark: false,
  //     badges: [],
  //     experience: "2 - 4 years",
  //     Notes: null,
  //   },
  // ];

  // const [jobs, setJobs] = useState([]);

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  // const fetchProducts = async () => {
  //   await axios.get(`http://127.0.0.1:8000/api/jobs`).then(({ data }) => {
  //     setJobs(data);
  //   });
  // };

  const apiEndpoint = "http://127.0.0.1:8000/api/jobs";
  const { data, loading, error } = GitData(apiEndpoint);

  return (
    <React.Fragment>
      {data.length === 0 ? (
        <h5 style={{ textAlign: "center", marginTop: "80px" }}>
          There are no jobs
        </h5>
      ) : (
        (data || []).map((allJobDetails, key) => (
          <div
            key={key}
            className={
              allJobDetails.addclassNameBookmark === true
                ? "job-box bookmark-post card mt-4"
                : "job-box card mt-4"
            }
          >
            <div className="bookmark-label text-center">
              <Link
                to={`/jobdetails/${allJobDetails.id}`}
                className="text-white align-middle"
              >
                <i className="mdi mdi-star"></i>
              </Link>
            </div>
            <div className="p-4">
              <Row className="align-items-center">
                <Col md={2}>
                  <div className="text-center mb-4 mb-md-0">
                    <Link to="/companydetails">
                      <img
                        src={`http://127.0.0.1:8000/company_img/${allJobDetails.company.img1}`}
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
                      <Link to={`/jobdetails/${data.id}`} className="text-dark">
                        {allJobDetails.title}
                      </Link>
                    </h5>
                    <p className="text-muted fs-14 mb-0">
                      {allJobDetails.company.name}
                    </p>
                  </div>
                </Col>

                <Col md={3}>
                  <div className="d-flex mb-2">
                    <div className="flex-shrink-0">
                      <i className="mdi mdi-map-marker text-primary me-1"></i>
                    </div>
                    <p className="text-muted mb-0">
                      {allJobDetails.company.location[0].name}
                    </p>
                  </div>
                </Col>

                <Col md={2}>
                  <div>
                    <p className="text-muted mb-2">
                      <span className="text-primary">$</span>
                      {allJobDetails.salary}
                    </p>
                  </div>
                </Col>

                <Col md={2}>
                  <div>
                    <span
                      className={
                        allJobDetails.employment_type === "Full-time"
                          ? "badge bg-success-subtle text-success fs-13 mt-1 mx-1"
                          : allJobDetails.employment_type === "Part-time"
                          ? "badge bg-danger-subtle text-danger fs-13 mt-1 mx-1"
                          : allJobDetails.employment_type === "Freelancer"
                          ? "badge bg-primary-subtle text-primary fs-13 mt-1 mx-1"
                          : ""
                      }
                    >
                      {allJobDetails.employment_type}
                    </span>
                    {(allJobDetails.badges || []).map((badgeInner, key) => (
                      <span
                        className={`badge ${badgeInner.badgeclassName} fs-13 mt-1`}
                        key={key}
                      >
                        {badgeInner.badgeName}
                      </span>
                    ))}
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
                      {allJobDetails.professional_level}
                    </p>
                  </div>
                </Col>

                <Col lg={6} md={5}>
                  {}
                  <div>
                    <p className="text-muted mb-0">
                      <span className="text-dark">
                        {allJobDetails.deadline_date === null
                          ? ""
                          : "Deadline :"}
                      </span>
                      {allJobDetails.deadline_date}{" "}
                    </p>
                  </div>
                </Col>

                <Col lg={2} md={3}>
                  <div className="text-start text-md-end">
                    <Link
                      to={`/jobdetails/${allJobDetails.id}`}
                      onClick={openModal}
                      data-bs-toggle="modal"
                      className="primary-link"
                    >
                      Apply Now <i className="mdi mdi-chevron-double-right"></i>
                    </Link>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        ))
      )}

      <div className="text-center mt-4 pt-2">
        <Link to="/joblist/All" className="btn btn-primary">
          View More <i className="uil uil-arrow-right"></i>
        </Link>
      </div>
      <div
        className="modal fade"
        id="applyNow"
        tabIndex="-1"
        aria-labelledby="applyNow"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <Modal isOpen={modal} toggle={openModal} centered>
            <ModalBody className="modal-body p-5">
              <div className="text-center mb-4">
                <h5 className="modal-title" id="staticBackdropLabel">
                  Apply For This Job
                </h5>
              </div>
              <div className="position-absolute end-0 top-0 p-3">
                <button
                  type="button"
                  onClick={openModal}
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="mb-3">
                <Label for="nameControlInput" className="form-label">
                  Name
                </Label>
                <Input
                  type="text"
                  className="form-control"
                  id="nameControlInput"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                <Label for="emailControlInput2" className="form-label">
                  Email Address
                </Label>
                <Input
                  type="email"
                  className="form-control"
                  id="emailControlInput2"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-3">
                <Label for="messageControlTextarea" className="form-label">
                  Message
                </Label>
                <textarea
                  className="form-control"
                  id="messageControlTextarea"
                  rows="4"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Send Application
              </button>
            </ModalBody>
          </Modal>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FeaturedJobs;
