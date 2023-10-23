import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import JobDetailsDescription from "./JobDetailsDescription";
import JobVacancyPost from "./JobVacancyPost";
import RightSideContent from "./RightSideContent";
import Section from "./Section";
import Skeleton from "@yisheng90/react-loading";
import { useParams } from "react-router-dom";
import axios from "../../../components/axios";

const JobDetails = () => {
  document.title = "Job Details | Jobcy - Job Listing Template | Themesdesign";
  const [job, setJob] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  
  let { id } = useParams();

  const fetchData = async () => {
    // setIsLoading(true);

    try {
      const response = await axios.get(`/jobdetails/${id}`);
      setJob(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };


  
  useEffect(() => {
   

    fetchData();
  }, [id]); // Include `id` as a dependency

  return (
    <React.Fragment>
      <Section />
      <section className="section">
        <Container>
          <Row>
            <Col lg={8}>
              {isLoading ? (
                <div>
                  <Skeleton height={350} />
                  <br />
                  <Skeleton height={30} width={180} />
                  <br />
                  <Skeleton height={100} />
                  <br />
                  <Skeleton height={30} width={180} />
                  <br />
                  <Skeleton height={10} />
                  <Skeleton height={10} />
                  <Skeleton height={10} />
                  <Skeleton height={10} />
                  <Skeleton height={10} />
                </div>
              ) : (
                <div>
                  <JobDetailsDescription job={job} isLoading={isLoading} />
                  <JobVacancyPost job={job} isLoading={isLoading} />
                </div>
              )}
            </Col>
            <Col lg={4} className="mt-4 mt-lg-0">
            {isLoading ? (
                <div>
                 
                  <Skeleton height={30} width={180} />
                  <br />
                  <Row>
                  <Col lg={3} className="mt-4 mt-lg-0">
                    <Skeleton height={60} circle />
                    </Col>
                  <Col lg={6} className="mt-4 mt-lg-0">
                    <Skeleton height={10}  />
                    <br />
                    <Skeleton height={10}  />
                    </Col>
                    </Row>
                  
                  <br />
                  <Row>
                  <Col lg={3} className="mt-4 mt-lg-0">
                    <Skeleton height={60} circle />
                    </Col>
                  <Col lg={6} className="mt-4 mt-lg-0">
                    <Skeleton height={10}  />
                    <br />
                    <Skeleton height={10}  />
                    </Col>
                    </Row>
                  <br />
                  <Row>
                  <Col lg={3} className="mt-4 mt-lg-0">
                    <Skeleton height={60} circle />
                    </Col>
                  <Col lg={6} className="mt-4 mt-lg-0">
                    <Skeleton height={10}  />
                    <br />
                    <Skeleton height={10}  />
                    </Col>
                    </Row>
                  <br />
                  
                  <Row>
                  <Col lg={3} className="mt-4 mt-lg-0">
                    <Skeleton height={60} circle />
                    </Col>
                  <Col lg={6} className="mt-4 mt-lg-0">
                    <Skeleton height={10}  />
                    <br />
                    <Skeleton height={10}  />
                    </Col>
                    </Row>
                  <br />
                  <Row>
                  <Col lg={3} className="mt-4 mt-lg-0">
                    <Skeleton height={60} circle />
                    </Col>
                  <Col lg={6} className="mt-4 mt-lg-0">
                    <Skeleton height={10}  />
                    <br />
                    <Skeleton height={10}  />
                    </Col>
                    </Row>
                  <br />
                  <Row>
                  <Col lg={3} className="mt-4 mt-lg-0">
                    <Skeleton height={60} circle />
                    </Col>
                  <Col lg={6} className="mt-4 mt-lg-0">
                    <Skeleton height={10}  />
                    <br />
                    <Skeleton height={10}  />
                    </Col>
                    </Row>
                  <br />
            
                </div>
              ) : (
              <RightSideContent job={job} fetchData={fetchData}  />)}
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default JobDetails;
