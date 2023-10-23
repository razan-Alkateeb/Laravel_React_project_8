import React, { useState,useEffect } from 'react';
import { Container, Col, Row } from "reactstrap";
import Section from "../BlogDetails/Section";
import axios from "../../../components/axios"
import BlogCategory from "../BlogGrid/BlogCategory";
import PopularPost from "../BlogGrid/PopularPost";
import TextWidget from "../BlogGrid/TextWidget";
import Archives from "../BlogGrid/Archives";
import Tags from "../BlogGrid/Tags";
import SocialConnect from "../BlogGrid/SocialConnect";
import BlogSwiper from "../BlogDetails/BlogSwiper";
import BlogColumn from "../BlogDetails/BlogColumn";
import BlogComments from "../BlogDetails/BlogComments";
import BlogForm from "../BlogDetails/BlogForm";
import BlogPost from "../BlogDetails/BlogPost";
import { useParams } from "react-router-dom";

const BlogDetails = () => {


const { id } = useParams();

const [post,setpost]=useState()
const [isLoading,setIsLoading]=useState(true)

const fetchData = async () => {
 

  try {
    const response = await axios.get(`/post/${id}`);
    setpost(response.data);
    setIsLoading(false);
  } catch (error) {
    console.error(error);
  }
};
useEffect(() => {
  fetchData()
  console.log(post);
},[])

  document.title = "Blog Details";

  return (
    <React.Fragment>
      <Section />
      {!isLoading?(<section className="section">
        <Container>
          
          <Row>
            <Col lg={8}>
              <div className="blog-post">
                <BlogSwiper />
                <BlogColumn post={post}  />
                <BlogComments comment= {post.comment} fetchData={fetchData} />
                <BlogForm post={post} fetchData={fetchData} />
                <BlogPost />
              </div>
            </Col>
            <Col lg={4} md={5}>
              <div className="sidebar ms-lg-4 ps-lg-4 mt-5 mt-lg-0">
                <BlogCategory />
                
                {/* <TextWidget /> */}
                <Archives />
                <Tags />
                <SocialConnect />
              </div>
            </Col>
          </Row>
        </Container>
      </section>):(<div>

      </div>)}
    </React.Fragment>
  );
};

export default BlogDetails;
