import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import axios from "../../../components/axios"




//Import Image
import userImage1 from "../../../assets/images/user/img-01.jpg";
import { logDOM } from "@testing-library/react";


const BlogComments = (props) => {
console.log(props.comment);
const user = useSelector((state) => state.user)
const isAuthenticated = useSelector((state) => state.isAuthenticated)

const deleteComment = async (e,id) => {
  e.preventDefault();
  
  try {
  
    const csrfResponse = await axios.get('/get-csrf-token');
    const csrfToken = csrfResponse.data.csrf_token;
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;
console.log();
    // Now, make your login request
    await axios.delete(`/deletecomment/${id}`);
    props.fetchData()
    
   
    
    // console.log(response.data); // Log the user information
  } catch (e) {
   
  console.log(e);
  }
}



  return (
    <React.Fragment>
      <h5 className="border-bottom pb-3 mt-5">Comments</h5>
      {props.comment.map((comment, index) => (
  <div className="mt-5" key={index}>
    <div className="d-sm-flex align-items-top">
      <div className="flex-shrink-0">
        <img
        
          className="rounded-circle avatar-md img-thumbnail"
          src={`http://localhost:8000/img/${comment.user.image}`}
          alt="img"
        />
      </div>
      <div className="flex-grow-1 ms-sm-3">
       {isAuthenticated && user.id==comment.user.id && <Link onClick={(e) => deleteComment(e, comment.id)} className="float-end fs-20 text-muted btn-danger ">
              <i className="uil uil-trash danger " style={{ color: 'red' }}></i>
            </Link>}
        <Link  className="primary-link">
          <h6 className="fs-16 mt-sm-0 mt-3 mb-0">{comment.user.name}</h6>
        </Link>
        <p className=" mt-2 text-muted fs-14 mb-0">{new Date(comment.created_at).toLocaleDateString()}</p>
        
        <p className="my-3 text-muted fst-italic mb-0">
          {comment.text}
        </p>
      </div>
    </div>
  </div>
))}

      
    </React.Fragment>
  );
};

export default BlogComments;
