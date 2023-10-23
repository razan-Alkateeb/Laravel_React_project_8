import React from "react";
import { Container, Row } from "reactstrap";
import Section from "../../Blog/BlogAuther/Section";
import LeftSideContent from "../../Blog/BlogAuther/LeftSideContent";
import RightSideContent from "../../Blog/BlogAuther/RightSideContent";

const BlogAuther = () => {
  document.title = "Blog Auther | Jobcy - Job Listing Template | Themesdesign";
  return (
    <React.Fragment>
      <Section />
      <section className="section">
        <Container>
          <Row>
            <LeftSideContent />
            <RightSideContent />
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default BlogAuther;
