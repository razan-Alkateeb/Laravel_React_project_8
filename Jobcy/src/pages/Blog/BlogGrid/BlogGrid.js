import React from "react";
import { Container, Row, Col } from "reactstrap";
import Section from "../../../pages/Blog/BlogGrid/Section";
import BlogText from "../../Blog/BlogGrid/BlogText";
import PopularPost from "../../Blog/BlogGrid/PopularPost";
import BlogCategory from "../../Blog/BlogGrid/BlogCategory";
import TextWidget from "../../Blog/BlogGrid/TextWidget";
import Archives from "../../Blog/BlogGrid/Archives";
import Tags from "../../Blog/BlogGrid/Tags";
import SocialConnect from "../../Blog/BlogGrid/SocialConnect";

const BlogGrid = () => {
  document.title = "Blog Grid | Jobcy - Job Listing Template | Themesdesign";

  return (
    <React.Fragment>
      <Section />
      <section className="section">
        <Container>
          <Row>
            <Col lg={8} md={7}>
              <div className="blog-post">
                <BlogText />
              </div>
            </Col>
            <Col lg={4} md={5}>
              <div className="sidebar ms-lg-4 ps-lg-4 mt-5 mt-lg-0">
                <BlogCategory />
                <PopularPost />
                <TextWidget />
                <Archives />
                <Tags />
                <SocialConnect />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default BlogGrid;
