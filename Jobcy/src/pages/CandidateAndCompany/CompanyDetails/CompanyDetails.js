import React, { useState, useEffect } from "react";
import { Container, Row } from "reactstrap";
import LeftSideContent from "./LeftSideContent";
import RightSideContent from "./RightSideContent";
import Section from "./Section";
import { useParams } from "react-router-dom";
import axios from "axios";

const CompanyDetails = (props) => {
  const [company, setCompany] = useState();
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  useEffect(() => {
    // Fetch data from the API when the component mounts
    axios
      .get(`http://127.0.0.1:8000/api/companyjobs/${id}`)
      .then((response) => {
        setCompany(response.data);
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  document.title = "Company Details";
  return (
    <React.Fragment>
      <Section />
      <section className="section">
        <Container>
          {loading ? (
            <div></div>
          ) : (
            <Row>
              <LeftSideContent  company={company} />
              <RightSideContent company={company} />
            </Row>
          )}
        </Container>
      </section>
    </React.Fragment>
  );
};

export default CompanyDetails;
