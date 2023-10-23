import React, { useState } from 'react';
import { Form } from "react-bootstrap";
import { Col,Row } from "reactstrap";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import axios from "../../../components/axios"
import { Modal, ModalBody, Input, Label, Card, CardBody } from "reactstrap";



const BlogForm = (props) => {
  const [modal, setModal] = useState(false);

  const openModal = () => setModal(!modal);
  
const [text,setText]=useState("")
console.log(text);
  const user = useSelector((state) => state.user)
  const isAuthenticated = useSelector((state) => state.isAuthenticated)

  const handlecomment = async (e) => {
    e.preventDefault();
    
    try {
    
      const csrfResponse = await axios.get('/get-csrf-token');
      const csrfToken = csrfResponse.data.csrf_token;
      axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;

      // Now, make your login request
      await axios.post("/comment", {
        userId: user.id,
        postId: props.post.id,
        text: text,
      });

      setText("");     
      props.fetchData()
      openModal()
     
      
      // console.log(response.data); // Log the user information
    } catch (e) {
     
    console.log(e);
    }
  }

  return (
    <React.Fragment>
     {isAuthenticated?( <Form onSubmit={handlecomment} className="contact-form mt-5">
        <h5 className="border-bottom pb-3">Leave a Comment</h5>
        <Row className="mt-4">
          <Col lg={12}>
            <div className=" my-3 position-relative mb-3">
             
              <textarea
              onChange={(e) => {
                setText(e.target.value)
              }}
              value={text}
                name="comments"
                id="comments"
                rows="4"
                className="form-control"
                placeholder="Enter your message"
              ></textarea>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={12} className="text-end">
            <button
              name="submit"
              type="submit"
              id="submit"
              className="btn btn-primary btn-hover"
            >
              Comment <i className="uil uil-message ms-1"></i>
            </button>
          </Col>
        </Row>
      </Form>):( <Row className="my-5">
          <Col sm={12} className="text-end ">
            <Link
             to="/signin"
              id="submit"
              className="btn btn-primary btn-hover"
            >
              signin to comment <i className="uil uil-message ms-1"></i>
            </Link>
          </Col>
        </Row>)}
        <div className="modal-dialog modal-dialog-centered">
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
  </div>
    </React.Fragment>
  );
};

export default BlogForm;
