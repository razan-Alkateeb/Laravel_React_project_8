import React  from "react";
import { Card, CardBody, Col, Row } from "reactstrap";

//Import Images
import JobDetailImage from "../../../assets/images/job-detail.jpg";
import JobImage10 from "../../../assets/images/featured-job/img-10.png";
import { Link } from "react-router-dom";

const JobDetailsDescription = (props) => {
 
// console.log(props.job.responsible[0].responsibilitie_name);
  return (
    <React.Fragment>
      <Card className="job-detail overflow-hidden">
        <div>
          <img src={JobDetailImage} alt="" className="img-fluid" />
          <div className="job-details-compnay-profile">
            <img
               src={`http://127.0.0.1:8000/company_img/${props.job.company.img1}`}
              alt=""
              className="img-fluid rounded-3 rounded-3"
            />
          </div>
        </div>
        <CardBody className="p-4">
          <div>
            <Row>
              <Col md={8}>
                <h5 className="mb-1">{props.job.title}</h5>
                <ul className="list-inline text-muted mb-0">
                  <li className="list-inline-item">
                    <i className="mdi mdi-account"></i> {props.job.application.length} Vacancy
                  </li>
               
                </ul>
              </Col>
              <Col lg={4}>
                <ul className="list-inline mb-0 text-lg-end mt-3 mt-lg-0">
                  <li className="list-inline-item">
                    <div className="favorite-icon">
                      <Link to="#">
                        <i className="uil uil-heart-alt"></i>
                      </Link>
                    </div>
                  </li>
                  <li className="list-inline-item">
                    <div className="favorite-icon">
                      <Link to="#">
                        <i className="uil uil-setting"></i>
                      </Link>
                    </div>
                  </li>
                </ul>
              </Col>
            </Row>
          </div>

          <div className="mt-4">
            <Row className="g-2">
              <Col lg={3}>
                <div className="border rounded-start p-3">
                  <p className="text-muted mb-0 fs-13">Deadline date</p>
                  <p className="fw-medium fs-15 mb-0">{props.job.deadline_date}</p>
                </div>
              </Col>
              <Col lg={3}>
                <div className="border p-3">
                  <p className="text-muted fs-13 mb-0">Employee type</p>
                  <p className="fw-medium mb-0">{props.job.employment_type}</p>
                </div>
              </Col>
              <Col lg={3}>
                <div className="border p-3">
                  <p className="text-muted fs-13 mb-0">Position</p>
                  <p className="fw-medium mb-0">{props.job.professional_level}</p>
                </div>
              </Col>
              <Col lg={3}>
                <div className="border rounded-end p-3">
                  <p className="text-muted fs-13 mb-0">Offer Salary</p>
                  <p className="fw-medium mb-0">${props.job.salary}/ Month</p>
                </div>
              </Col>
            </Row>
          </div>

          <div className="mt-4">
            <h5 className="mb-3">Job Description</h5>
            <div className="job-detail-desc">
              <p className="text-muted mb-0">
              {props.job.description}
              </p>
            </div>
          </div>

          <div className="mt-4">
            <h5 className="mb-3">Responsibilities</h5>
            <div className="job-detail-desc mt-2">
             
              <ul className="job-detail-list list-unstyled mb-0 text-muted">
              {props.job.responsible.map((res,index) => (
  <li key={index}>
    <i className="uil uil-circle"></i>{res.responsibilitie_name}
  </li>
))}

              
              </ul>
            </div>
          </div>

          <div className="mt-4">
            <h5 className="mb-3">Qualification </h5>
            <div className="job-detail-desc mt-2">
              <ul className="job-detail-list list-unstyled mb-0 text-muted">
              {props.job.qualification.map((res,index) => (
  <li key={index}>
    <i className="uil uil-circle"></i>{res.qualification_name}
  </li>
))}
              
              </ul>
            </div>
          </div>

          <div className="mt-4">
            <h5 className="mb-3">Skill & Experience</h5>
            <div className="job-details-desc">
              <ul className="job-detail-list list-unstyled mb-0 text-muted">
              {props.job.skill.map((res,index) => (
  <li key={index}>
    <i className="uil uil-circle"></i>{res.skill_name}
  </li>
))}
              </ul>
             
            </div>
          </div>

          <div className="mt-4 pt-3">
            <ul className="list-inline mb-0">
              <li className="list-inline-item mt-1">Share this job:</li>
              <li className="list-inline-item mt-1">
                <Link to="https://web.facebook.com" className="btn btn-primary btn-hover">
                  <i className="uil uil-facebook-f"></i> Facebook
                </Link>
              </li>
              <li className="list-inline-item mt-1">
                <Link to="https://mail.google.com/mail/u/0/#inbox" className="btn btn-danger btn-hover">
                  <i className="uil uil-google"></i> Google
                </Link>
              </li>
              <li className="list-inline-item mt-1">
                <Link to="https://www.linkedin.com/feed/" className="btn btn-success btn-hover">
                  <i className="uil uil-linkedin-alt"></i> linkedin
                </Link>
              </li>
            </ul>
          </div>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default JobDetailsDescription;
