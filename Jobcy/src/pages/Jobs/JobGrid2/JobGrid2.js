import React from "react";
import { Container, Row } from "reactstrap";
import JobVacancy2 from "./JobVacancy2";
import Section from "./Section";
import Pagination from "../JobList2/Pagination";

const JobGrid2 = () => {
  document.title = "Job Grid2 | Jobcy - Job Listing Template | Themesdesign";
  return (
    <React.Fragment>
      <Section />
      <section className="section">
        <Container>
          <Row>
            <JobVacancy2 />
          </Row>
          <Pagination />
        </Container>
      </section>
    </React.Fragment>
  );
};

export default JobGrid2;
