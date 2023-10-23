import React from "react";
import { Link } from "react-router-dom";

//Import Images
import blogImage1 from "../../../assets/images/blog/img-01.jpg";
import blogImage2 from "../../../assets/images/blog/img-02.jpg";
import blogImage3 from "../../../assets/images/blog/img-03.jpg";
import blogImage10 from "../../../assets/images/blog/img-10.jpg";


const PopularPost = (props) => {
 
  return (
    <React.Fragment>
      <div className="mt-4 pt-2">
        <div className="sd-title">
          <h6 className="fs-16 mb-3">My posts</h6>
        </div>
        <ul className="widget-popular-post list-unstyled my-4">
          {props.user.post.map((popularPostDetails, key) => (
            <li
              className="d-flex mb-3 align-items-center pb-3 border-bottom"
              key={key}
            >
              <img
                src={`http://localhost:8000/img/${popularPostDetails.image}`}
                alt=""
                className="widget-popular-post-img rounded"
              />
              <div className="flex-grow-1 text-truncate ms-3">
                <Link to={`/blogdetails/${popularPostDetails.id}`} className="text-dark">
                  {popularPostDetails.title}
                </Link>
                <span className="d-block text-muted fs-14">
  {new Date(popularPostDetails.created_at).toLocaleDateString()}
</span>
              </div>
<button className = "btn btn-danger" onClick={() => props.handleDelete(popularPostDetails.id)}>
                        Delete
                      </button>
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default PopularPost;
