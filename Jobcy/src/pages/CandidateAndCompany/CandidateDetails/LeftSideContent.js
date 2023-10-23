import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col } from "reactstrap";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import axios from "axios";

//Import userImage
import userImage1 from "../../../assets/images/user/img-01.jpg";

const LeftSideContent = () => {


  const [users, setUsers] = useState([]);
  // const userb = useSelector((state) => state.user);
  const [userb, setUserb] = useState(1);

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
      <Col lg={4}>
        <Card className="side-bar">
          <CardBody className="p-4">
            <div className="candidate-profile text-center">
              <img
                src={`http://localhost:8000/img/${user.image}`}
                alt=""
                className="avatar-lg rounded-circle"
              />
              <h6 className="fs-18 mb-0 mt-4">{user.name}</h6>
              <p className="text-muted mb-4">{user.jop_title}</p>
              <ul className="candidate-detail-social-menu list-inline mb-0">
                <li className="list-inline-item">
                <Link
                    to={user.linkedin_link}
                    className="social-link rounded-3 btn-soft-primary"
                  >
                   <i className="uil uil-linkedin"></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to={user.phone_number} className="social-link">
                    <i className="uil uil-whatsapp"></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to={user.phone_number} className="social-link">
                    <i className="uil uil-phone-alt"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </CardBody>

          <CardBody className="candidate-profile-overview border-top p-4">
            <h6 className="fs-17 fw-semibold mb-3">Profile Overview</h6>
            <ul className="list-unstyled mb-0">
              <li>
                <div className="d-flex">
                  <label className="text-dark">Categories</label>
                  <div>
                    <p className="text-muted mb-0">{user.career_field}</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex">
                  <label className="text-dark">Offered Salary</label>
                  <div>
                    <p className="text-muted mb-0">$450 per hour</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex">
                  <label className="text-dark">Languages</label>
                  <div>
                  
                  {user &&
                    Array.isArray(user.languages) &&
                    user.languages.map((language) => (
                      <span>
                        {language.name},
                      </span>
                    ))}
               
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex">
                  <label className="text-dark">Experience</label>
                  <div>
                    <p className="text-muted mb-0">{user.years_of_experience}</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex">
                  <label className="text-dark">Qualification</label>
                  <div>
                    <p className="text-muted mb-0">{user.academic_specialization}</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex">
                  <label className="text-dark">Views</label>
                  <div>
                    <p className="text-muted mb-0">2574</p>
                  </div>
                </div>
              </li>
            </ul>
          
          
          </CardBody>
          <CardBody className="p-4 border-top">
            <h6 className="fs-17 fw-semibold mb-3">Professional Skills</h6>
            <div className="mt-0 d-flex flex-wrap align-items-start gap-1">
                  {user &&
                    Array.isArray(user.user_skills) &&
                    user.user_skills.map((skill) => (
                      <span
                        className="badge fs-13 bg-blue-subtle text-blue mt-2"
                        key={skill.id}
                      >
                        {skill.skill_name}
                      </span>
                    ))}
                </div>
              
            
          </CardBody>
          <CardBody className="candidate-contact-details p-4 border-top">
            <h6 className="fs-17 fw-semibold mb-3">Contact Details</h6>
            <ul className="list-unstyled mb-0">
              <li>
                <div className="d-flex align-items-center mt-4">
                  <div className="icon bg-primary-subtle text-primary flex-shrink-0">
                    <i className="uil uil-envelope-alt"></i>
                  </div>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-1">{user.email}</h6>
                    {/* <p className="text-muted mb-0">{user.mail}</p> */}
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex align-items-center mt-4">
                  <div className="icon bg-primary-subtle text-primary flex-shrink-0">
                    <i className="uil uil-map-marker"></i>
                  </div>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-1">{user.address}</h6>
                    {/* <p className="text-muted mb-0">{user.address}</p> */}
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex align-items-center mt-4">
                  <div className="icon bg-primary-subtle text-primary flex-shrink-0">
                    <i className="uil uil-phone"></i>
                  </div>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-1">{user.phone_number}</h6>
                    {/* <p className="text-muted mb-0">{user.phone_number}</p> */}
                  </div>
                </div>
              </li>
             
            </ul>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default LeftSideContent;
