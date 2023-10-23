import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Card, CardBody, Col, Row } from "reactstrap";

//Import Job Images
import jobImage1 from "../../../assets/images/featured-job/img-01.png";

const CompanyDetails = () => {


  const [companies, setCompaines] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);


  const fetchProducts = async () => {
    await axios.get(`http://127.0.0.1:8000/api/companies`).then(({ data }) => {
      const companydetails = data;
      console.log(data[0].location[0].name);
      setCompaines(companydetails);
      setLoading(false)
    
    });
  };


 


  return (
    <React.Fragment>
      <Row className="align-items-center mb-4">
        <Col lg={8}>
          {/* <div className="mb-3 mb-lg-0">
            <h6 className="fs-16 mb-0"> Showing 1 – 8 of 11 results </h6>
          </div> */}
        </Col>

        <Col lg={8}>
          <div className="candidate-list-widgets">
            <Row>
              <Col lg={6}>
                <div className="selection-widget">
                  <select
                    className="form-select"
                    data-trigger
                    name="choices-single-filter-orderby"
                    id="choices-single-filter-orderby"
                    aria-label="Default select example"
                  >
                    <option value="df">Default</option>
                    <option value="ne">Newest</option>
                    <option value="od">Oldest</option>
                    <option value="rd">Random</option>
                  </select>
                </div>
              </Col>
              <Col lg={6}>
                <div className="selection-widget mt-2 mt-lg-0">
                  <select
                    className="form-select"
                    data-trigger
                    name="choices-candidate-page"
                    id="choices-candidate-page"
                    aria-label="Default select example"
                  >
                    <option value="df">All</option>
                    <option value="ne">8 per Page</option>
                    <option value="ne">12 per Page</option>
                  </select>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>

    {loading?(<div></div>):(  <Row>
        {companies.map((details, key) => (
          <Col lg={4} md={6} key={key}>
            <Card className="text-center mb-4">
              <CardBody className="px-4 py-5">
                {details.label && (
                  <div className="featured-label">
                    <span className="featured">
                      {details.labelRating}{" "}
                      <i className="mdi mdi-star-outline"></i>
                    </span>
                  </div>
                )}
                <img  src={`http://127.0.0.1:8000/company_img/${details.img1}`} alt="" className="img-fluid rounded-3" />
                <div className="mt-4">
                  <Link to={`/companydetails/${details.id}`} className="primary-link">
                    <h6 className="fs-18 mb-2">{details.name}</h6>
                  </Link>
                  <p className="text-muted mb-4">{details.location[0].name}</p>
                  <Link to={`/companydetails/${details.id}`} className="btn btn-primary">
                    {details.job.length} Opening Jobs
                  </Link>
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>)}
    </React.Fragment>
  );
};

export default CompanyDetails;
