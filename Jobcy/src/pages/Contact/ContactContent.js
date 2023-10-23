import React, { useRef, useState } from "react";
import { Form } from "react-bootstrap";
import { Modal, ModalBody, Col, Container, Row, Input, Label } from "reactstrap";
import emailjs from "@emailjs/browser";


//Import Images
import contactImage from "../../assets/images/contact.png";

const ContactContent = () => {

  const form = useRef();
  const [modal, setModal] = useState(false);

  const openModal = () => setModal(!modal);


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_j4dgpoq",
        "template_6c4xbbq",
        form.current,
        "rA_MZKfielKCjyGv4"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("send email");
          openModal()
          
        },
        (error) => {
          console.log(error.text);
          
        }
      );
  };

  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row className="align-items-center mt-5">
            <Col lg={6}>
              <div className="section-title mt-4 mt-lg-0">
                <h3 className="title">Get in touch</h3>
                <p className="text-muted">
                  Start working with Jobcy that can provide everything you need
                  to generate awareness, drive traffic, connect.
                </p>

                <Form
                  ref={form}
                  onSubmit={sendEmail}
                  method="post"
                  className="contact-form mt-4"
                  name="myForm"
                  id="myForm"
                >
                  <span id="error-msg"></span>
                  <Row>
                    <Col lg={12}>
                      <div className="mb-3">
                        <Label htmlFor="nameInput" className="form-label">
                          Name
                        </Label>
                        <Input
                          type="text"
                          name="user_name"
                          id="name"
                          className="form-control"
                          placeholder="Enter your name"
                          required
                        />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="mb-3">
                        <Label htmlFor="emailInput" className="form-label">
                          Email
                        </Label>
                        <Input
                          type="email"
                          className="form-control"
                          id="email"
                          name="user_email"
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="mb-3">
                        <Label htmlFor="subjectInput" className="form-label">
                          Subject
                        </Label>
                        <Input
                          type="text"
                          className="form-control"
                          name="subject"
                          placeholder="Enter your subject"
                          required
                        />
                      </div>
                    </Col>
                    <Col lg={12}>
                      <div className="mb-3">
                        <Label htmlFor="messageInput" className="form-label">
                          Your Message
                        </Label>
                        <textarea
                          className="form-control"
                          placeholder="Enter your message"
                          name="message"
                          rows="3"
                          required
                        ></textarea>
                      </div>
                    </Col>
                  </Row>
                  <div className="text-end">
                    <input
                      type="submit"
                      id="submit"
                      name="submit"
                      className="btn btn-primary"
                      value="Send"
                    />
                  </div>
                </Form>
              
              </div>
            </Col>
            <Col lg={5} className="ms-auto order-first order-lg-last">
              <div className="text-center">
                <img src={contactImage} alt="" className="img-fluid" />
              </div>
              <div className="mt-4 pt-3">
                <div className="d-flex text-muted align-items-center mt-2">
                  <div className="flex-shrink-0 fs-22 text-primary">
                    <i className="uil uil-map-marker"></i>
                  </div>
                  <div className="flex-grow-1 ms-2">
                    <p className="mb-0">
                      2453 Clinton StreetLittle Rock, California, USA
                    </p>
                  </div>
                </div>
                <div className="d-flex text-muted align-items-center mt-2">
                  <div className="flex-shrink-0 fs-22 text-primary">
                    <i className="uil uil-envelope"></i>
                  </div>
                  <div className="flex-grow-1 ms-2">
                    <p className="mb-0">contactus@Jobcy.com</p>
                  </div>
                </div>
                <div className="d-flex text-muted align-items-center mt-2">
                  <div className="flex-shrink-0 fs-22 text-primary">
                    <i className="uil uil-phone-alt"></i>
                  </div>
                  <div className="flex-grow-1 ms-2">
                    <p className="mb-0">(+245) 223 1245</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
     
      <div className="map">
        <iframe
          title="maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d867750.3173800122!2d36.50808486756517!3d31.83453195876325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b5fb85d7981af%3A0x631c30c0f8dc65e8!2z2LnZhdmR2KfZhg!5e0!3m2!1sar!2sjo!4v1697672475989!5m2!1sar!2sjo"
          height="350"
          style={{ border: `0`, width: `100%` }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <Modal isOpen={modal} toggle={openModal} centered>
      <ModalBody className="modal-body p-5">
    
        <div className="text-center mb-4">
          <h5 className="modal-title" id="staticBackdropLabel">
            Thanks for your comment
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
        
      
        
        
        <button onClick={openModal} className="btn btn-primary w-100">
          back
        </button>
   
      </ModalBody>
    </Modal>
    </React.Fragment>
  );
};

export default ContactContent;
