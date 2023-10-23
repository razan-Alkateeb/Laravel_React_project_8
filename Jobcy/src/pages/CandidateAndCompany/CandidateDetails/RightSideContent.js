import React, { useState, useEffect } from "react";
import { Col, Card, CardBody, Row, Input } from "reactstrap";
import { Link } from "react-router-dom";



import axios from "axios";


//Lightbox
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

//Import Blog Imgaes
import blogImage1 from "../../../assets/images/blog/img-01.jpg";
import blogImage2 from "../../../assets/images/blog/img-02.jpg";
import blogImage3 from "../../../assets/images/blog/img-03.jpg";

//Import user Images
import userImage4 from "../../../assets/images/user/img-04.jpg";
import userImage2 from "../../../assets/images/user/img-02.jpg";

const images = [blogImage1, blogImage1, blogImage3];

const RightSideContent = () => {
  const [photoIndex, setphotoIndex] = useState(0);
  const [isGallery, setisGallery] = useState(false);



//-----------------------skills-----------------------------------------------------------
const [selectedUser, setSelectedUser] = useState(null);

useEffect(() => {
  // Fetch data from the API when the component mounts
  // ${userb.id}
  axios
    .get(`http://127.0.0.1:8000/api/userskills/1`)
    .then((response) => {
      setSelectedUser(response.data);
      console.log(selectedUser.name);
    })
    .catch((error) => {
      console.error("Error fetching data: ", error);
    });
}, []);


const [user, setUser] = useState([]);
useEffect(() => {
  axios
    .get(`http://127.0.0.1:8000/api/users/1}`)
    .then((response) => {
      setUser(response.data);
    })
    .catch((error) => {
      console.error("Error fetching data: ", error);
    });
}, []);



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
        <Card className="candidate-details ms-lg-4 mt-4 mt-lg-0">
          <CardBody className="p-4 candidate-personal-detail">
            <div>
              <h6 className="fs-17 fw-semibold mb-3">About Me</h6>
              <p className="text-muted mb-2">
              {user.about}
              </p>
             
            </div>
            <div className="candidate-education-details mt-4">
                  <h6 className="fs-18 fw-bold mb-0">Education</h6>

                  {user &&
                    Array.isArray(user.educations) &&
                    user.educations.map((education) => (
                      <div className="candidate-education-content mt-4 d-flex">
                        <div className="circle flex-shrink-0 bg-primary-subtle text-primary">
                          {education.subject.charAt(0).toUpperCase()}
                        </div>
                        <div className="ms-4">
                          <h6 className="fs-16 mb-1">{education.subject}</h6>
                          <p className="mb-2 text-muted">
                            {education.schoole} - ( {education.from} -{" "}
                            {education.to})
                          </p>
                          <p className="text-muted">{education.description}</p>
                        </div>
                      </div>
                    ))}
                </div>
                <div className="candidate-education-details mt-4">
                  <h6 className="fs-18 fw-bold mb-0">Experiences</h6>
                  {user &&
                    Array.isArray(user.experiences) &&
                    user.experiences.map((experience) => (
                      <div className="candidate-education-content mt-4 d-flex">
                        <div className="circle flex-shrink-0 bg-primary-subtle text-primary">
                          {" "}
                          {experience.position.charAt(0).toUpperCase()}{" "}
                        </div>
                        <div className="ms-4">
                          <h6 className="fs-16 mb-1">{experience.position}</h6>
                          <p className="mb-2 text-muted">
                            {experience.position} - ({experience.from} -{" "}
                            {experience.to})
                          </p>
                          <p className="text-muted">{experience.description}</p>
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
