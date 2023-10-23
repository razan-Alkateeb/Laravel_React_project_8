import React, { useEffect, useState, useContext } from "react";
import { Col, Container, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import GitData from "../../ApiData/GitDataApi";
import Masonry from "react-masonry-component";
import { format } from "date-fns";

//Pagination
import Pagination from "../../Jobs/JobList2/Pagination";

//Import BlogImage
import blogImage1 from "../../../assets/images/blog/img-01.jpg";
import blogImage2 from "../../../assets/images/blog/img-02.jpg";
import blogImage3 from "../../../assets/images/blog/img-03.jpg";
import blogImage6 from "../../../assets/images/blog/img-06.jpg";
import blogImage7 from "../../../assets/images/blog/img-07.jpg";
import blogImage8 from "../../../assets/images/blog/img-08.jpg";
import blogImage9 from "../../../assets/images/blog/img-09.jpg";
import blogImage10 from "../../../assets/images/blog/img-10.jpg";

//Import userImage
import userImage1 from "../../../assets/images/user/img-01.jpg";
import userImage2 from "../../../assets/images/user/img-02.jpg";
import userImage3 from "../../../assets/images/user/img-03.jpg";
import userImage4 from "../../../assets/images/user/img-04.jpg";
import userImage5 from "../../../assets/images/user/img-05.jpg";
import userImage6 from "../../../assets/images/user/img-06.jpg";
import userImage7 from "../../../assets/images/user/img-07.jpg";
import userImage8 from "../../../assets/images/user/img-08.jpg";
import userImage9 from "../../../assets/images/user/img-09.jpg";
// import { CardBody } from 'reactstrap';

const MasonaryContent = () => {
  
  const apiEndpoint = "http://127.0.0.1:8000/api/posts";
  const { data, loading, error } = GitData(apiEndpoint);


  const formattedData = data.map((item) => ({
    ...item,
    date: format(new Date(item.created_at), "yyyy-MM-dd HH:mm:ss"),
  }));

 

  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Masonry className="row">
            {formattedData.length === 0 ? (
              <h5 style={{ textAlign: "center", marginTop: "80px" }}>
                There are no posts
              </h5>
            ) : (
              formattedData.map((postsDetails, key) => (
                <Col key={key} lg={4} md={6} className="mb-4">
                  <Card className="blog-masonry-box shadow overflow-hidden border-0 p-2">
                    <div className="overflow-hidden">
                      <img
                        src={blogImage1}
                        alt=""
                        className="img-fluid blog-img"
                      />
                    </div>
                    <CardBody className="p-4">
                      <p className="text-muted mb-2">
                        <b></b> <i className="mdi mdi-circle-medium"></i>
                        {""}
                        {postsDetails.date}
                      </p>
                      <Link to={`/blogdetails/${postsDetails.id}`} className="primary-link">
                        <h5>{postsDetails.title}</h5>
                      </Link>
                      <div className="d-flex align-items-center mt-4">
                        <div className="flex-shrink-0">
                          <img
                            src={userImage1}
                            alt=""
                            className="avatar-xs rounded-circle"
                          />
                        </div>
                        <div className="ms-3">
                          <Link to="/blogauther" className="primary-link">
                            <h6 className="fs-16 mb-1">
                              {postsDetails.user.name}
                            </h6>
                          </Link>
                          <p className="text-muted fs-14 mb-0">
                            {postsDetails.user.jop_title}
                          </p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              ))
            )}
          </Masonry>

          <Pagination />
        </Container>
      </section>
    </React.Fragment>
  );
};

export default MasonaryContent;
