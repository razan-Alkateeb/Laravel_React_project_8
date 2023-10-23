import React, { useState, useEffect } from "react";
import { Col, Row, Modal, ModalBody, Input, Label, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";

import userImage1 from "../../../assets/images/profile.jpg";

const CandidateGridDetails = () => {
  //Apply Now Model
  const [modal, setModal] = useState(false);
  const openModal = () => setModal(!modal);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    await axios.get(`http://127.0.0.1:8000/api/users`).then(({ data }) => {
      const usersdetails = data;
      setUsers(usersdetails);
    });
  };

  const truncateText = (text, maxWords) => {
    const words = text.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    }
    return text;
  };

  const [selectedLevelValue, setSelectedLevelValue] = useState("All");
  const [selectedYearValue, setSelectedYearValue] = useState("");

  // Filter the data based on context values
  const filteredUsers = users.filter((user) => {
    if (
      user.professional_level === selectedLevelValue ||
      selectedLevelValue === "All"
    ) {
      if (selectedYearValue === "") {
        return true;
      } else if (selectedYearValue === "2" && user.years_of_experience >= 0 && user.years_of_experience <= 2) {
        return true;
      } else if (selectedYearValue === "5" && user.years_of_experience >= 3 && user.years_of_experience <= 5) {
        return true;
      } else if (selectedYearValue === "+5" && user.years_of_experience > 5) {
        return true;
      }
    }
  
    return false;
  });

  return (
    <React.Fragment>
      {/* filter ---------------------- */}
      <Row className="align-items-center">
        <Col lg={8} md={7}>
          <div>
            <h6 className="fs-16 mb-0"> Showing 1 – 8 of 11 results </h6>
          </div>
        </Col>

        <Col lg={4} md={5}>
          <div className="candidate-list-widgets">
            <Row>
              <Col md={6}>
                <div className="selection-widget mt-3 mt-md-0">
                  <select
                    className="form-select"
                    data-trigger
                    name="choices-single-filter-orderby"
                    id="choices-single-filter-orderby"
                    aria-label="Experience Level"
                    value={selectedLevelValue}
                    onChange={(event) => {
                      setSelectedLevelValue(event.target.value);
                    }}
                  >
                    <option value="All">All</option>
                    <option value="Entry Level">Entry Level</option>
                    <option value="Junior">Junior</option>
                    <option value="Mid-Senior Level">Mid-Senior Level</option>
                    <option value="Senior">Senior</option>
                  </select>
                </div>
              </Col>
              <Col md={6}>
                <div className="selection-widget mt-3 mt-md-0">
                  <select
                    className="form-select"
                    data-trigger
                    name="choices-candidate-page"
                    id="choices-candidate-page"
                    aria-label="Years of experience"
                    value={selectedYearValue}
                    onChange={(event) => {
                      setSelectedYearValue(event.target.value);
                    }}
                  >
                    <option value="">All</option>
                    <option value="2">0 - 2</option>
                    <option value="5">3 - 5</option>
                    <option value="+5">5 and more</option>
                  </select>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>

      <div className="candidate-list">
        <Row>

        {filteredUsers.length === 0 ? (
        
        <h5 style={{ textAlign: 'center', marginTop: '80px' }}>
        There are no candidate
      </h5>
  ) : (

          filteredUsers.map((details, key) => (
            <Col lg={4} md={6} key={key}>
              <div
                className={
                  details.addclassNameBookmark === true
                    ? "candidate-grid-box bookmark-post card mt-4"
                    : "candidate-grid-box card mt-4"
                }
              >
                <CardBody className="p-4">
                  {details.label && (
                    <div className="featured-label">
                      <span className="featured">{details.statuslabel}</span>
                    </div>
                  )}

                  <div className="d-flex mb-4">
                    <div className="flex-shrink-0 position-relative">
                      <img
                        src={`http://localhost:8000/img/${details.image}`}
                        alt=""
                        className="avatar-md rounded"
                      />
                      <span className={details.name}>
                        <span className="visually-hidden">active</span>
                      </span>
                    </div>
                    <div className="ms-3">
                      <Link to={`/candidatedetails/${details.id}`} className="primary-link">
                        <h5 className="fs-17">{details.name}</h5>
                      </Link>
                      <span className="badge bg-info-subtle text-info fs-13">
                        {details.academic_level} at{" "}
                        {details.academic_specialization}
                      </span>
                    </div>
                  </div>
                  <ul className="list-inline d-flex justify-content-between align-items-center">
                    <li className="list-inline-item text-warning fs-17">
                      Level : {details.professional_level}
                    </li>
                    <li className="list-inline-item">
                      <div className="favorite-icon">
                        <Link to="#">
                          <i className="uil uil-heart-alt fs-18"></i>
                        </Link>
                      </div>
                    </li>
                  </ul>
                  <div className="border rounded mb-4">
                    <div className="row g-0">
                      <Col lg={6}>
                        <div className="border-end px-3 py-2">
                          <p className="text-muted mb-0">
                            Exp. : {details.years_of_experience} Years
                          </p>
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="px-2 py-2">
                          <p className="text-muted mb-0">
                            {details.career_field}
                          </p>
                        </div>
                      </Col>
                    </div>
                  </div>
                  {details.about?(
                  <p className="text-muted">
                    {truncateText(details.about, 50)}
                  </p>

                  ):(
                    <p className="text-muted">
                    Nothing to show!!
                  </p>
                  )
                  }
                  <div className="mt-3">
                   
                    <Link
                      to={`/candidatedetails/${details.id}`}
                      className="btn btn-soft-primary btn-hover w-100 mt-2"
                    >
                      <i className="mdi mdi-eye"></i> View Profile
                    </Link>
                  </div>
                </CardBody>
              </div>
            </Col>
          ))

)}

          
        </Row>

        <div
          className="modal fade"
          id="hireNow"
          tabIndex="-1"
          aria-labelledby="hireNow"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <Modal isOpen={modal} toggle={openModal} centered>
              <ModalBody className="p-5">
                <div className="text-center mb-4">
                  <h5 className="modal-title" id="staticBackdropLabel">
                    Hire Now
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
                  <Label for="namrFormControlInput" className="form-label">
                    Company Name
                  </Label>
                  <Input
                    type="text"
                    className="form-control"
                    id="namrFormControlInput"
                    placeholder="Enter your company name"
                  />
                </div>
                <div className="mb-3">
                  <Label for="emailFormControlInput" className="form-label">
                    Email Address
                  </Label>
                  <Input
                    type="email"
                    className="form-control"
                    id="emailFormControlInput"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    for="messageFormControlTextarea"
                    className="form-label"
                  >
                    Message
                  </Label>
                  <textarea
                    className="form-control"
                    id="messageFormControlTextarea"
                    rows="4"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Send Message
                </button>
              </ModalBody>
            </Modal>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CandidateGridDetails;
