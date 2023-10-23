import React from "react";
import { Col, Container, Row } from "reactstrap";
import Section from "../../Jobs/JobList2/Section";
import JobSearchOptions from "../JobList/JobSearchOptions";
import Popular from "../JobList/Popular";
import Sidebar from "../JobList/Sidebar";
import JobVacancyPost2 from "./JobVacancyPost2";
import Pagination from "../JobList2/Pagination";

const JobList2 = () => {
  document.title = "Job List2 | Jobcy - Job Listing Template | Themesdesign";
  return (
    <React.Fragment>
      <Section />
      <section className="section">
        <Container>
          <Row>
            <Col lg={9}>
              <div className="me-lg-5">
                <JobSearchOptions />
                <Popular />
                <JobVacancyPost2 />
                <Pagination />
              </div>
            </Col>
            <Sidebar />
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default JobList2;
