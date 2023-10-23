import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col } from "reactstrap";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Murad from "../../../components/axios";
import PopularPost from "../../Blog/BlogGrid/PopularPost";
import axios from "axios";

// import RightSideContent from './RightSideContent';



//Import images
import profileImage from "../../../assets/images/profile.jpg";


const LeftSideContent = (props) => {


  const handleDeletePost = async (posts_id) => {
    try {
      const csrfResponse = await Murad.get("/get-csrf-token");
      const csrfToken = csrfResponse.data.csrf_token;
      axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;
  
      await Murad.delete(`/posts/${posts_id}`);
  
      // If the delete request is successful, then you can fetch new data.
      await props.fetchData();
    } catch (error) {
      console.error("Error deleting post: ", error);
    }
  };
  //---------------------------------------------
    const [post, setPost] = useState({
      image: null,
      title: "",
      text: "",
    });

      const handleImage = (e) => {
        setPost({ ...post, image: e.target.files[0] });
      };
    const handleUpdatePost = async (posts_id) => {

      


      const csrfResponse = await Murad.get("/get-csrf-token");
      const csrfToken = csrfResponse.data.csrf_token;
      axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;

      const postData = new FormData();
      postData.append("image", post.image);
      postData.append("id", props.user.id);
      postData.append("email", post.title);
      postData.append("name", post.text);

      Murad.put(`/posts/${posts_id}`,postData)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error uploading image: ", error);
        });
    };
  //---------------------------------------------

 
 








  return (
    <React.Fragment>
      {props.user ? (
        <Col lg={4}>
          <Card className="profile-sidebar me-lg-4">
            <CardBody className="p-4">
              <div className="text-center pb-4 border-bottom">
                <img
                  src={`http://localhost:8000/img/${props.user.image}`}
                  alt=""
                  className="avatar-lg img-thumbnail rounded-circle mb-4"
                />
                <h5 className="mb-0">{props.user.name}</h5>
                <p className="text-muted">{props.user.jop_title}</p>
                <ul className="list-inline d-flex justify-content-center align-items-center ">
                  <li className="list-inline-item text-warning fs-19">
                    <i className="mdi mdi-star"></i>
                    <i className="mdi mdi-star"></i>
                    <i className="mdi mdi-star"></i>
                    <i className="mdi mdi-star"></i>
                    <i className="mdi mdi-star-half-full"></i>
                  </li>
                </ul>
                <ul className="candidate-detail-social-menu list-inline mb-0">
                  <li className="list-inline-item">
                    <Link
                      to={props.user.linkedin_link}
                      className="social-link rounded-3 btn-soft-primary"
                    >
                      <i className="uil uil-linkedin"></i>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link
                      to="#"
                      className="social-link rounded-3 btn-soft-info"
                    >
                      <i className="uil uil-twitter-alt"></i>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link
                      to="#"
                      className="social-link rounded-3 btn-soft-success"
                    >
                      <i className="uil uil-whatsapp"></i>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link
                      to={props.user.phone_number}
                      className="social-link rounded-3 btn-soft-danger"
                    >
                      <i className="uil uil-phone-alt"></i>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="mt-4 border-bottom pb-4">
                <h5 className="fs-17 fw-bold mb-3">Documents</h5>
                <ul className="profile-document list-unstyled mb-0">
                  <li>
                    <div className="profile-document-list d-flex align-items-center mt-4 ">
                      <div className="icon flex-shrink-0">
                        <i className="uil uil-file"></i>
                      </div>
                      <div className="ms-3">
                        <h6 className="fs-16 mb-0">Resume.pdf</h6>
                        <p className="text-muted mb-0">1.25 MB</p>
                      </div>
                      <div className="ms-auto">
                        <Link to="#" download className="fs-20 text-muted">
                          <i className="uil uil-import"></i>
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="profile-document-list d-flex align-items-center mt-4 ">
                      <div className="icon flex-shrink-0">
                        <i className="uil uil-file"></i>
                      </div>
                      <div className="ms-3">
                        <h6 className="fs-16 mb-0">Cover-letter.pdf</h6>
                        <p className="text-muted mb-0">1.25 MB</p>
                      </div>
                      <div className="ms-auto">
                        <Link
                          to="#"
                          download="dark-logo"
                          className="fs-20 text-muted"
                        >
                          <i className="uil uil-import"></i>
                        </Link>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-4">
                <h5 className="fs-17 fw-bold mb-3">Contacts</h5>
                <div className="profile-contact">
                  <ul className="list-unstyled mb-0">
                    <li>
                      <div className="d-flex">
                        <label>Email</label>
                        <div>
                          <p className="text-muted text-break mb-0">
                            {props.user.email}
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex">
                        <label>Phone Number</label>
                        <div>
                          <p className="text-muted mb-0">
                            {props.user.phone_number}
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex">
                        <label>Location</label>
                        <div>
                          <p className="text-muted mb-0">
                            {props.user.address}
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </CardBody>
          </Card>
          <PopularPost user={props.user} fetchData={props.fetchData} handleDelete={handleDeletePost} />
          {/* <Card className="profile-sidebar me-lg-4">
            <CardBody className="p-4">
              {props.user.post.map((post, index) => (
                <div key={index}>
                  <p
                    style={{
                      background: "black",
                      color: "white",
                      textAlign: "center",
                    }}
                  >
                    {index + 1}
                  </p>
                  {post.isUpdating ? ( // Check if the post is being edited
                    <div>
                      <form
                        action="#"
                        onSubmit={handleUpdatePost}
                        formData="multipart/form-data"
                      >
                        <input type="file" name="image" onClick={handleImage} />
                        <input
                          type="text"
                          name="title"
                          value={post.updatedTitle}
                          onChange={(e) =>
                            setPost((prev) => ({
                              ...prev,
                              title: e.target.value,
                            }))
                          }
                        />
                        <input
                          type="text"
                          name="text"
                          value={post.text}
                          onChange={(e) =>
                            setPost((prev) => ({
                              ...prev,
                              text: e.target.value,
                            }))
                          }
                        />
                        <button type="submit">Save</button>
                      </form>
                    </div>
                  ) : (
                    <div>
                      <p>
                        <b>Title:</b> {post.title}
                      </p>
                      <p>
                        <b>Text:</b> {post.text}
                      </p>
                      <img
                        src={`http://localhost:8000/img/${post.image}`}
                        style={{ width: "100%", height: "50%" }}
                        id="profile-img"
                        alt=""
                      />
                      <button onClick={() => handleUpdatePost(post.id)}>
                        Edit
                      </button>
                      <button  onClick={() => handleDeletePost(post.id)}>
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </CardBody>
          </Card> */}
        </Col>
      ) : (
        <p>User with ID {props.user.id} not found.</p>
      )}
    </React.Fragment>
  );
};

export default LeftSideContent;
