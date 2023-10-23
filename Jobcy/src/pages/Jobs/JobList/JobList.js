import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Section from "../../Jobs/JobList/Section";
import JobSearchOptions from "./JobSearchOptions";
import JobVacancyList from "./JobVacancyList";
import Sidebar from "./Sidebar";

// import { DataProvider } from "../../FilterData/DataContext";
// import { UpperProvider } from "../../FilterData/UpperContext";

const JobList = () => {
  document.title = "Job List";
  return (
    <React.Fragment>
      <Section />
      <section className="section">
        {/* <DataProvider> */}
          {/* <UpperProvider> */}
            <Container>
              <Row>
                <Col lg={9}>
                  <div className="me-lg-5">
                    <JobSearchOptions />
                    {/* <Popular /> */}
                    <JobVacancyList />
                  </div>
                </Col>
                <Sidebar />
              </Row>
            </Container>
          {/* </UpperProvider> */}
        {/* </DataProvider> */}
      </section>
    </React.Fragment>
  );
};

export default JobList;
