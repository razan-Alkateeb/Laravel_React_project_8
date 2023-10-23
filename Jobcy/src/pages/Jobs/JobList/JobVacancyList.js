import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Col, Input, Label, Row, Modal, ModalBody } from "reactstrap";
import GitData from "../../ApiData/GitDataApi";
import { useParams } from "react-router-dom";
import { DataContext } from "../../FilterData/DataContext";
// import { UpperContext } from "../../FilterData/UpperContext";

//Images Import
// import jobImage1 from "../../../assets/images/featured-job/img-01.png";
// import jobImage2 from "../../../assets/images/featured-job/img-02.png";
// import jobImage3 from "../../../assets/images/featured-job/img-03.png";
// import jobImage4 from "../../../assets/images/featured-job/img-04.png";
// import jobImage5 from "../../../assets/images/featured-job/img-05.png";
// import jobImage6 from "../../../assets/images/featured-job/img-06.png";
// import jobImage7 from "../../../assets/images/featured-job/img-07.png";

const JobVacancyList = () => {
  //Apply Now Model
  const [modal, setModal] = useState(false);
  const openModal = () => setModal(!modal);




  const { id } = useParams();





  // const jobVacancyList = [
  //   {
  //     id: 1,
  //     companyImg: jobImage1,
  //     jobDescription: "Product Director",
  //     companyName: "Creative Agency",
  //     location: " Escondido,California",
  //     jobPostTime: "3 min ago",
  //     fullTime: true,
  //     timing: "Full Time",
  //     addclassNameBookmark: false,
  //     badges: [],
  //     experience: "2 - 3 years"
  //   },
  //   {
  //     id: 2,
  //     companyImg: jobImage2,
  //     jobDescription: "Digital Marketing Manager",
  //     companyName: "Jobcy Technology Pvt.Ltd",
  //     location: "Phoenix, Arizona",
  //     jobPostTime: "15 min ago",
  //     fullTime: true,
  //     timing: "Full Time",
  //     catogary: "Recent Jobs",
  //     addclassNameBookmark: true,
  //     badges: [
  //       {
  //         id: 1,
  //         badgeclassName: "bg-warning-subtle text-warning",
  //         badgeName: "Urgent"
  //       },
  //       {
  //         id: 2,
  //         badgeclassName: "bg-primary-subtle text-primary",
  //         badgeName: "Freelance"
  //       }
  //     ],
  //     experience: "4+ years"
  //   },
  //   {
  //     id: 3,
  //     companyImg: jobImage3,
  //     jobDescription: "Product Director",
  //     companyName: "Creative Agency",
  //     location: " Escondido,California",
  //     jobPostTime: "37 min ago",
  //     fullTime: true,
  //     timing: "Full Time",
  //     addclassNameBookmark: false,
  //     badges: [],
  //     experience: "2 - 3 years"
  //   },
  //   {
  //     id: 4,
  //     companyImg: jobImage4,
  //     jobDescription: "Product Director",
  //     companyName: "Creative Agency",
  //     location: " Escondido,California",
  //     jobPostTime: "50 min ago",
  //     freeLance: true,
  //     timing: "Freelance",
  //     addclassNameBookmark: false,
  //     badges: [],
  //     experience: "2 - 3 years"
  //   },
  //   {
  //     id: 5,
  //     companyImg: jobImage5,
  //     jobDescription: "Product Director",
  //     companyName: "Creative Agency",
  //     location: " Escondido,California",
  //     jobPostTime: "1 month ago",
  //     partTime: true,
  //     timing: "Part Time",
  //     addclassNameBookmark: true,
  //     badges: [],
  //     experience: "2 - 3 years"
  //   },
  //   {
  //     id: 6,
  //     companyImg: jobImage6,
  //     jobDescription: "Product Director",
  //     companyName: "Creative Agency",
  //     location: "Escondido, California",
  //     jobPostTime: "2 month ago",
  //     freeLance: true,
  //     timing: "Freelance",
  //     addclassNameBookmark: false,
  //     badges: [
  //       {
  //         id: 1,
  //         badgeclassName: "bg-warning-subtle text-warning",
  //         badgeName: "Urgent"
  //       }
  //     ],
  //     experience: "2-3 years"
  //   },
  //   {
  //     id: 7,
  //     companyImg: jobImage7,
  //     jobDescription: "Product Director",
  //     companyName: "Creative Agency",
  //     location: "Escondido, California",
  //     jobPostTime: "2 month ago",
  //     partTime: true,
  //     timing: "Part Time",
  //     addclassNameBookmark: false,
  //     badges: [
  //       {
  //         id: 1,
  //         badgeclassName: "bg-warning-subtle text-warning",
  //         badgeName: "Urgent"
  //       }
  //     ],
  //     experience: "2-3 years"
  //   },
  //   {
  //     id: 8,
  //     companyImg: jobImage3,
  //     jobDescription: "Product Director",
  //     companyName: "Creative Agency",
  //     location: "Escondido, California",
  //     jobPostTime: "3 month ago",
  //     internship: true,
  //     timing: "Internship",
  //     addclassNameBookmark: false,
  //     badges: [
  //       {
  //         id: 1,
  //         badgeclassName: "bg-warning-subtle text-warning",
  //         badgeName: "Private"
  //       }
  //     ],
  //     experience: "2-3 years"
  //   }
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

  // const { comLocationF, setComLocationF, comIndustryF, setComIndustryF } =
  //   useContext(UpperContext);

  const apiEndpoint = "http://127.0.0.1:8000/api/jobs";
  const { data, loading, error } = GitData(apiEndpoint);

  const {
    salaryF,
    setSalaryF,
    experienceF,
    setExperienceF,
    employmentF,
    setEmploymentF,
    locationF,
    setLocationF,
    comLocationF,
    setComLocationF,
    comIndustryF,
    setComIndustryF,
  } = useContext(DataContext);

  useEffect(() => {
    
    setComLocationF(id);
  }, [id]); 

  // Filter the data based on context values
  const filteredData = data.filter((job) => {
    if (job.salary <= salaryF) {
      if (
        experienceF.length === 0 ||
        experienceF.includes(job.professional_level)
      ) {
        if (
          employmentF.length === 0 ||
          employmentF.includes(job.employment_type)
        ) {
          if (locationF.length === 0 || locationF.includes(job.location_type)) {
            if (
              comLocationF === "All" ||
              job.company.location[0].name === comLocationF 
              
            ) {
              if (
                comIndustryF === "" ||
                job.company.industry_id === comIndustryF
              ) {
                return true;
              }
            }
          }
        }
      }
    }

    return false;
  });

 
console.log(id);

  return (
    <React.Fragment>
      <div>

      {filteredData.length === 0 ? (
        
        <h5 style={{ textAlign: 'center', marginTop: '80px' }}>
        There are no jobs
      </h5>
  ) : (



        filteredData.map((jobVacancyListDetails, key) => (
          <div
            key={key}
            className={
              jobVacancyListDetails.addclassNameBookmark === true
                ? "job-box bookmark-post card mt-4"
                : "job-box card mt-4"
            }
          >
            <div className="bookmark-label text-center">
              <Link to="#" className="align-middle text-white">
                <i className="mdi mdi-star"></i>
              </Link>
            </div>
            <div className="p-4">
              <Row className="align-items-center">
                <Col md={2}>
                  <div className="text-center mb-4 mb-md-0">
                    <Link to="/companydetails">
                      <img
                        src={`http://127.0.0.1:8000/company_img/${jobVacancyListDetails.company.img1}`}
                        alt="CompanyImage"
                        className="img-fluid rounded-3"
                        style={{ width: "50px" }}
                      />
                    </Link>
                  </div>
                </Col>

                <Col md={3}>
                  <div className="mb-2 mb-md-0">
                    <h5 className="fs-18 mb-0">
                      <Link
                        to={`/jobdetails/${jobVacancyListDetails.id}`}
                        className="text-dark"
                      >
                        {jobVacancyListDetails.title}
                      </Link>
                    </h5>
                    <p className="text-muted fs-14 mb-0">
                      {jobVacancyListDetails.company.name}
                    </p>
                  </div>
                </Col>

                <Col md={3}>
                  <div className="d-flex mb-2">
                    <div className="flex-shrink-0">
                      <i className="mdi mdi-map-marker text-primary me-1"></i>
                    </div>
                    <p className="text-muted mb-0">
                      {jobVacancyListDetails.company.location[0].name}
                    </p>
                  </div>
                </Col>

                <Col md={2}>
                  <div className="d-flex mb-0">
                    <div className="flex-shrink-0">
                      <i className="uil uil-clock-three text-primary me-1"></i>
                    </div>
                    <p className="text-muted mb-0">
                      {" "}
                      {/* {jobVacancyListDetails.created_at} */}
                      {new Date(
                        jobVacancyListDetails.created_at
                      ).toLocaleDateString()}
                    </p>
                  </div>
                </Col>

                <Col md={2}>
                  <div>
                    <span
                      className={
                        jobVacancyListDetails.employment_type === "Full-time"
                          ? "badge bg-success-subtle text-success fs-13 mt-1 mx-1"
                          : jobVacancyListDetails.employment_type ===
                            "Part-time"
                          ? "badge bg-danger-subtle text-danger fs-13 mt-1 mx-1"
                          : jobVacancyListDetails.employment_type ===
                            "Freelancer"
                          ? "badge bg-primary-subtle text-primary fs-13 mt-1 mx-1"
                          : jobVacancyListDetails.employment_type ===
                            "Internship"
                          ? "badge bg-blue-subtle text-blue fs-13 mt-1"
                          : ""
                      }
                    >
                      {jobVacancyListDetails.employment_type}
                    </span>
                    {(jobVacancyListDetails.badges || []).map(
                      (badgeInner, key) => (
                        <span
                          className={`badge ${badgeInner.badgeclassName} fs-13 mt-1`}
                          key={key}
                        >
                          {badgeInner.badgeName}
                        </span>
                      )
                    )}
                  </div>
                </Col>
              </Row>
            </div>
            <div className="p-3 bg-light">
              <Row className="justify-content-between">
                <Col md={4}>
                  <div>
                    <p className="text-muted mb-0">
                      <span className="text-dark">Experience :</span>
                      {jobVacancyListDetails.professional_level}
                    </p>
                  </div>
                </Col>
                <Col lg={2} md={3}>
                  <div>
                    <Link
                      to={`/jobdetails/${jobVacancyListDetails.id}`}
                    
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
                <div className="mb-4">
                  <Label className="form-label" for="inputGroupFile01">
                    Resume Upload
                  </Label>
                  <Input
                    type="file"
                    className="form-control"
                    id="inputGroupFile01"
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Send Application
                </button>
              </ModalBody>
            </Modal>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default JobVacancyList;
