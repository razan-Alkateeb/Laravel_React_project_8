import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Col,
  Card,
  CardBody,
  Row,
  Input,
  Modal,
  ModalBody,
  Label,
} from "reactstrap";
import { Link } from "react-router-dom";

// Lightbox
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

// Import BlogImage
import blogImage1 from "../../../assets/images/blog/img-01.jpg";
import blogImage3 from "../../../assets/images/blog/img-03.jpg";
import blogImage12 from "../../../assets/images/blog/img-12.jpg";

// Job Images
import jobImage1 from "../../../assets/images/featured-job/img-01.png";
import jobImage2 from "../../../assets/images/featured-job/img-02.png";
import jobImage3 from "../../../assets/images/featured-job/img-03.png";
import jobImage4 from "../../../assets/images/featured-job/img-04.png";

const images = [blogImage1, blogImage3, blogImage12];

const RightSideContent = (props) => {
  // Apply Now Model
  const [modal, setModal] = useState(false);
  const openModal = () => setModal(!modal);

  // Lightbox
  const [photoIndex, setphotoIndex] = useState(0);
  const [isGallery, setisGallery] = useState(false);

  const jobVacancyPost = [
    // ... Your jobVacancyPost data (unchanged) ...
  ];

  return (
    <React.Fragment>
      {isGallery ? (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          enableZoom={true}
          onCloseRequest={() => {
            setisGallery(false);
          }}
          onMovePrevRequest={() => {
            setphotoIndex((photoIndex + images.length - 1) % images.length);
          }}
          onMoveNextRequest={() => {
            setphotoIndex((photoIndex + 1) % images.length);
          }}
          imageCaption={"Project " + parseFloat(photoIndex + 1)}
        />
      ) : null}
      <Col lg={8}>
        <Card className="ms-lg-4 mt-4 mt-lg-0">
          <CardBody className="p-4">
            <div className="mb-5">
              <h6 className="fs-17 fw-semibold mb-4">About Company</h6>
              <p className="text-muted">
                {props.company && props.company.about}{" "}
                {/* Replace with the actual company description */}
              </p>
            </div>
            <div className="candidate-portfolio mb-5">
              <h6 className="fs-17 fw-semibold mb-4">Gallery</h6>
              <Row className="g-3">
                <Col lg={6}>
                  <Link to="#" className="image-popup">
                    <img
                      src={blogImage1}
                      onClick={() => {
                        setisGallery(true);
                        setphotoIndex(0);
                      }}
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                </Col>
                <Col lg={6}>
                  <Link to="#" className="image-popup">
                    <img
                      src={blogImage3}
                      onClick={() => {
                        setisGallery(true);
                        setphotoIndex(1);
                      }}
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                </Col>
                <Col lg={12}>
                  <Link to="#" className="image-popup">
                    <img
                      src={blogImage12}
                      onClick={() => {
                        setisGallery(true);
                        setphotoIndex(2);
                      }}
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                </Col>
              </Row>
            </div>
            <div>
              <h6 className="fs-17 fw-semibold mb-4">Current Opening</h6>
              {props.company.job.map((fullTimeJobdetails,key) => (
               <div
               key={key}
               className={
                 fullTimeJobdetails.addclassNameBookmark === true
                   ? "job-box bookmark-post card mt-4"
                   : "job-box card mt-4"
               }
             >
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
                         <Link to={`/jobdetails/${fullTimeJobdetails.id}`} className="text-dark">
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
                           fullTimeJobdetails.employment_type === 'Full-time'
                             ? "badge bg-success-subtle text-success fs-13 mt-1 mx-1"
                             : fullTimeJobdetails.employment_type === 'Part-time'
                             ? "badge bg-danger-subtle text-danger fs-13 mt-1 mx-1"
                             : fullTimeJobdetails.employment_type === 'Freelancer'
                             ? "badge bg-primary-subtle text-primary fs-13 mt-1 mx-1"
                             : ""
                         }
                       >
                         {fullTimeJobdetails.employment_type}
                       </span>
                       {(fullTimeJobdetails.badges || []).map((badgeInner, key) => (
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
                   <Col md={5}>
                     <div>
                       <p className="text-muted mb-0">
                         <span className="text-dark">Experience :</span>{" "}
                         {fullTimeJobdetails.employment_type}
                       </p>
                     </div>
                   </Col>
     
                   <Col lg={4} md={5}>
                     {}
                     <div>
                       <p className="text-muted mb-0">
                         <span className="text-dark">
                           {fullTimeJobdetails.deadline_date === null ? "" : "Deadline :"}
                         </span>
                         {fullTimeJobdetails.deadline_date}{" "}
                       </p>
                     </div>
                   </Col>
     
                   <Col lg={3} md={3}>
                     <div className="text-start text-md-end">
                       <Link
                         onClick={openModal}
                         to={`/jobdetails/${fullTimeJobdetails.id}`}
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
              ))}
            </div>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default RightSideContent;
