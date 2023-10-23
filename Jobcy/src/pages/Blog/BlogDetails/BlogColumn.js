import React from "react";
import { Link } from "react-router-dom";

//import UserImage
import userImage3 from "../../../assets/images/user/img-03.jpg";

const BlogColumn = (props) => {
  
  return (
    <React.Fragment>
      <ul className="list-inline mb-0 mt-3 text-muted">
        <li className="list-inline-item">
          <div className="d-flex align-items-center">
            <div className="flex-shrink-0">
              <img
                src={userImage3}
                alt=""
                className="avatar-sm rounded-circle"
              />
            </div>
            <div className="ms-3">
              <Link to="/blogauther" className="primary-link">
                <h6 className="mb-0">By {props.post.user.name}</h6>
              </Link>
            </div>
          </div>
        </li>
        <li className="list-inline-item">
          <div className="d-flex align-items-center">
            <div className="flex-shrink-0">
              <i className="uil uil-calendar-alt"></i>
            </div>
            <div className="ms-2">
              <p className="mb-0"> {new Date(props.post.created_at).toLocaleDateString()}</p>
            </div>
          </div>
        </li>
        <li className="list-inline-item">
          <div className="d-flex align-items-center">
            <div className="flex-shrink-0">
              <i className="uil uil-comments-alt"></i>
            </div>
            <div className="ms-2 flex-grow-1">
              <p className="mb-0"> {props.post.comment.length} Comments</p>
            </div>
          </div>
        </li>
      </ul>
      <div className="mt-4">
        <h5>{props.post.title}</h5>
        <p className="text-muted">
        {props.post.text}
        </p>
      </div>
    </React.Fragment>
  );
};

export default BlogColumn;
