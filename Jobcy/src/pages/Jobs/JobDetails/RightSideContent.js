import React, { useState,useEffect } from "react";
import { Modal, ModalBody, Input, Label, Card, CardBody,Form } from "reactstrap";
import { useSelector } from 'react-redux';

import axios from "../../../components/axios";

import { Link } from "react-router-dom";

//Import Images
import jobImages2 from "../../../assets/images/featured-job/img-02.png";

const RightSideContent = (props) => {

  const user = useSelector((state) => state.user)
  const isAuthenticated = useSelector((state) => state.isAuthenticated)

  const [date, setDate] = useState("");
  const [isApplied, setisApplied] = useState(false);
  const [deadLine, setDeadLine] = useState(false);
  // const [userId, setuserId] = useState(false);
  const [message, setMessage] = useState("");
  // const [errors, seterrors] = useState([]);
  const [modal, setModal] = useState(false);

  const openModal = () => setModal(!modal);

const submitForm = async (e) => {
  console.log(message);
  e.preventDefault();
  try {
  
    const csrfResponse = await axios.get('/get-csrf-token');
    const csrfToken = csrfResponse.data.csrf_token;
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;


      
      await axios.post('/apply', {
       userId: user.id,
       jobId: props.job.id,
       message: message,
     });
    
openModal()
    setMessage('');
    await props.fetchData() 
  } catch (e) {
    
    console.log(e);
    if (e.response.status === 422){
      // seterrors(e.response.data.errors)

    }
  }

}

 
useEffect((params) => {

if (isAuthenticated) {
  const isUserApplied = props.job.application.some(element => user.id === element.user_id);

    setisApplied(isUserApplied);
     console.log(isApplied);
}
  
  const timestamp = props.job.created_at;
const jobDeadline = new Date(props.job.deadline_date) ;


  const datePosted = new Date(timestamp);
  

  const currentDate = new Date();
  const deadDifference = jobDeadline - currentDate;
  if (deadDifference>0) {
    setDeadLine(true)
  }
  console.log(jobDeadline);
  console.log(deadDifference);
  
  const timeDifference = currentDate - datePosted;
  
 
  const millisecondsInSecond = 1000;
  const millisecondsInMinute = millisecondsInSecond * 60;
  const millisecondsInHour = millisecondsInMinute * 60;
  const millisecondsInDay = millisecondsInHour * 24;
  const millisecondsInMonth = millisecondsInDay * 30; // Approximation
  
  let datePostedString;
  
  if (timeDifference < millisecondsInMinute) {
    datePostedString = 'Posted less than a minute ago';
  } else if (timeDifference < millisecondsInHour) {
    const minutesDifference = Math.floor(timeDifference / millisecondsInMinute);
    datePostedString = `Posted ${minutesDifference} min ago`;
  } else if (timeDifference < millisecondsInDay) {
    const hoursDifference = Math.floor(timeDifference / millisecondsInHour);
    datePostedString = `Posted ${hoursDifference} hr ago`;
  } else if (timeDifference < millisecondsInMonth) {
    const daysDifference = Math.floor(timeDifference / millisecondsInDay);
    datePostedString = `Posted ${daysDifference} day ago`;
  } else {
    const monthsDifference = Math.floor(timeDifference / millisecondsInMonth);
    datePostedString = `Posted ${monthsDifference} month ago`;
  }
  
  setDate(datePostedString)
},[props.job.application])



  return (
    <React.Fragment>
      <div className="side-bar ms-lg-4">
        <Card className="job-overview">
          <CardBody className="p-4">
            <h6 className="fs-17">Job Overview</h6>
            <ul className="list-unstyled mt-4 mb-0">
              <li>
                <div className="d-flex mt-4">
                  <i className="uil uil-user icon bg-primary-subtle text-primary"></i>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-2">Job Title</h6>
                    <p className="text-muted mb-0">{props.job.title}</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex mt-4">
                  <i className="uil uil-star-half-alt icon bg-primary-subtle text-primary"></i>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-2">Experience</h6>
                    <p className="text-muted mb-0"> 0-3 Years</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex mt-4">
                  <i className="uil uil-location-point icon bg-primary-subtle text-primary"></i>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-2">Location</h6>
                    <p className="text-muted mb-0">{props.job.company.location[0].name}</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex mt-4">
                  <i className="uil uil-usd-circle icon bg-primary-subtle text-primary"></i>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-2">Offered Salary</h6>
                    <p className="text-muted mb-0">${props.job.salary}</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex mt-4">
                  <i className="uil uil-graduation-cap icon bg-primary-subtle text-primary"></i>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-2">Qualification</h6>
                    <p className="text-muted mb-0">{props.job.qualification[0].qualification_name}</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex mt-4">
                  <i className="uil uil-building icon bg-primary-subtle text-primary"></i>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-2">Industry</h6>
                    <p className="text-muted mb-0">{props.job.company.industry.name}</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex mt-4">
                  <i className="uil uil-history icon bg-primary-subtle text-primary"></i>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-2">Date Posted</h6>
                    <p className="text-muted mb-0">{date}</p>
                  </div>
                </div>
              </li>
            </ul>
            <div className="mt-3">
            {deadLine ? (
  isAuthenticated ? (
   isApplied?( <Link
    
    onClick={(e) => {
      e.preventDefault()
    }}
    className="btn btn-success btn-hover w-100 mt-2"
  >
    You have applied for this job
  </Link>):( <Link
    to="#applyNow"
    onClick={openModal}
    className="btn btn-primary btn-hover w-100 mt-2"
  >
    Apply Now <i className="uil uil-arrow-right"></i>
  </Link>)
  ) : (
    <Link
    to="/signin"
    onClick={openModal}
    className="btn btn-primary btn-hover w-100 mt-2"
  >
    Sign in please to Apply <i className="uil uil-arrow-right"></i>
  </Link>
  )
) : (
  <Link
    onClick={(e) => {
      e.preventDefault();
    }}
    className="btn btn-danger btn-hover w-100 mt-2"
  >
    Applyment stopped
  </Link>
)}
             
            </div>
          </CardBody>
        </Card>

        <Card className="company-profile mt-4">
          <CardBody className="p-4">
            <div className="text-center">
              <img src={jobImages2} alt="" className="img-fluid rounded-3" />

              <div className="mt-4">
                <h6 className="fs-17 mb-1">{props.job.company.name}</h6>
                
              </div>
            </div>
            <ul className="list-unstyled mt-4">
              <li>
                <div className="d-flex">
                  <i className="uil uil-phone-volume text-primary fs-4"></i>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-2">Phone</h6>
                    <p className="text-muted fs-14 mb-0">{props.job.company.phone_number}</p>
                  </div>
                </div>
              </li>
              <li className="mt-3">
                <div className="d-flex">
                  <i className="uil uil-envelope text-primary fs-4"></i>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-2">Email</h6>
                    <p className="text-muted fs-14 mb-0">
                    {props.job.company.email}
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-3">
                <div className="d-flex">
                  <i className="uil uil-globe text-primary fs-4"></i>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-2">Website</h6>
                    <p className="text-muted fs-14 text-break mb-0">
                    {props.job.company.website}
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-3">
                <div className="d-flex">
                  <i className="uil uil-map-marker text-primary fs-4"></i>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-2">Location</h6>
                    <p className="text-muted fs-14 mb-0">
                    {props.job.company.location[0].name}
                    </p>
                  </div>
                </div>
              </li>
            </ul>
            <div className="mt-4">
              <Link
                to="/companydetails"
                className="btn btn-primary btn-hover w-100 rounded"
              >
                <i className="mdi mdi-eye"></i> View Profile
              </Link>
            </div>
          </CardBody>
        </Card>

        <div className="mt-4">
          <h6 className="fs-16 mb-3">Job location</h6>
          <iframe
            title="maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d867750.3173800122!2d36.50808486756517!3d31.83453195876325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b5fb85d7981af%3A0x631c30c0f8dc65e8!2z2LnZhdmR2KfZhg!5e0!3m2!1sar!2sjo!4v1697672475989!5m2!1sar!2sjo"
            style={{ width: `100%`, height: `250` }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div
          className="modal fade"
          id="applyNow"
          tabIndex="-1"
          aria-labelledby="applyNow"
          aria-hidden="true"
        >
          {isAuthenticated ? (
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
        <Form onSubmit={submitForm}>
        <div className="mb-3">
          <Label for="nameControlInput" className="form-label">
            Name
          </Label>
          <Input
            defaultValue={user.name}
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
            defaultValue={user.email}
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
          value={message}
          onChange={(e) => {
            setMessage(e.target.value)
            console.log(message);
          }}
            className="form-control"
            id="messageControlTextarea"
            rows="4"
            placeholder="Enter your message"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Send Application
        </button>
    </Form>
      </ModalBody>
    </Modal>
  </div>
) : null}

        </div>
      </div>
    </React.Fragment>
  );
};


export default RightSideContent;
