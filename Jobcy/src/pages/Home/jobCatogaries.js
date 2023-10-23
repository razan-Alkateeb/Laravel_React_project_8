
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Col, Row, Container } from "reactstrap";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import GitData from '../ApiData/GitDataApi';



const Jobcatogaries = () => {
  




  const apiEndpoint = 'http://127.0.0.1:8000/api/industries'; 
  const { data, loading, error } = GitData(apiEndpoint);


  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={6}>
              <div className="section-title text-center">
                <h3 className="title">Browser Jobs Categories </h3>
                <p className="text-muted">
                  Post a job to tell us about your project. We'll quickly match
                  you with the right freelancers.
                </p>
              </div>
            </Col>
          </Row>

          <Row>
            {(data || []).map((item, key) => (
              <Col lg={3} md={6} mt={4} pt={2} key={key}>
                <div className="popu-category-box rounded text-center">
                  <div className="popu-category-icon icons-md">
                    <Icon icon={item.logo} className="text-primary" />
                  </div>
                  <div className="popu-category-content mt-4">
                    <Link to="/joblist/All" className="text-dark stretched-link">
                      <h5 className="fs-18">{item.name}</h5>
                    </Link>
                    <p className="text-muted mb-0">Jobs</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          <Row>
            <Col lg={12}>
              <div className="mt-5 text-center">
                <Link
                  to="/joblist/All"
                  className="btn btn-primary btn-hover"
                >
                  Browse All Jobs <i className="uil uil-arrow-right"></i>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Jobcatogaries;
