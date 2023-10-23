import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Button, Col, Collapse, Input, Label } from "reactstrap";

import { DataContext } from "../../FilterData/DataContext";

const Sidebar = () => {
  const [toggleFirst, setToggleFirst] = useState(true);
  const [toggleSecond, setToggleSecond] = useState(true);
  const [toggleThird, setToggleThird] = useState(true);
  const [toggleFourth, setToggleFourth] = useState(true);
  const [toggleFifth, setToggleFifth] = useState(true);

  //Context
  const {
    salaryF,
    setSalaryF,

    experienceF,
    setExperienceF,

    employmentF,
    setEmploymentF,

    locationF,
    setLocationF,
    comLocationF, setComLocationF,
    comIndustryF, setComIndustryF
  } = useContext(DataContext);



  // Define the initial state for experienceF as an empty array
  const [selectedExperience, setSelectedExperience] = useState([]);
  const [selectedEmployment, setSelectedEmployment] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState([]);


  //CheckBox
  const [isChecked, setIsChecked] = useState(true);


  const handleOnChange = (value) => {
    // Create a copy of the selectedExperience array
    const updatedSelectedExperience = [...selectedExperience];

    if (updatedSelectedExperience.includes(value)) {
      // If the value is already in the array, remove it
      const index = updatedSelectedExperience.indexOf(value);
      updatedSelectedExperience.splice(index, 1);
    } else {
      // If the value is not in the array, add it
      updatedSelectedExperience.push(value);
    }

    // Update the state and setExperienceF with the updated array
    setSelectedExperience(updatedSelectedExperience);
    setExperienceF(updatedSelectedExperience);
    setIsChecked(!isChecked);
  };



  const handleOnChangeEmployment = (value) => {
    // Create a copy of the selectedExperience array
    const updatedSelectedEmployment = [...selectedEmployment];

    if (updatedSelectedEmployment.includes(value)) {
      // If the value is already in the array, remove it
      const index = updatedSelectedEmployment.indexOf(value);
      updatedSelectedEmployment.splice(index, 1);
    } else {
      // If the value is not in the array, add it
      updatedSelectedEmployment.push(value);
    }

    // Update the state and setExperienceF with the updated array
    setSelectedEmployment(updatedSelectedEmployment);
    setEmploymentF(updatedSelectedEmployment);
    setIsChecked(!isChecked);
  };



  const handleOnChangeLocation = (value) => {
    // Create a copy of the selectedExperience array
    const updatedSelectedLocation = [...selectedLocation];

    if (updatedSelectedLocation.includes(value)) {
      // If the value is already in the array, remove it
      const index = updatedSelectedLocation.indexOf(value);
      updatedSelectedLocation.splice(index, 1);
    } else {
      // If the value is not in the array, add it
      updatedSelectedLocation.push(value);
    }

    // Update the state and setExperienceF with the updated array
    setSelectedLocation(updatedSelectedLocation);
    setLocationF(updatedSelectedLocation);
    setIsChecked(!isChecked);
  };



// console.log(experienceF, isChecked)
// console.log(employmentF, isChecked)
// console.log(locationF, isChecked)






  const [isDateChecked, setIsDateChecked] = useState(true);
  const handleDateOnChange = () => {
    setIsDateChecked(!isDateChecked);
  };

  return (
    <React.Fragment>
      <Col lg={3}>
        <div className="side-bar mt-5 mt-lg-0">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="locationOne">
                <Button
                  className="accordion-button"
                  onClick={(e) => {
                    e.preventDefault();
                    setToggleFirst(!toggleFirst);
                  }}
                  role="button"
                  id="collapseExample"
                >
                  Salary
                </Button>
              </h2>
              <Collapse isOpen={toggleFirst}>
                <div className="accordion-body">
                  <div className="side-title">
                    <div className="mb-3">
                      <form className="position-relative">
                        <Input
                          className="form-control"
                          type="search"
                          placeholder="Search..."
                          value={salaryF}
                          onChange={({ target: { value } }) => {
                            setSalaryF(value);
                          }}
                        />
                        <button
                          className="bg-transparent border-0 position-absolute top-50 end-0 translate-middle-y me-2"
                          type="submit"
                        >
                          <span className="mdi mdi-magnify text-muted"></span>
                        </button>
                      </form>
                    </div>
                    <div className="area-range slidecontainer">
                      <div className="form-label mb-4">
                        Salary Range: {salaryF}.00 JD
                        <span
                          className="example-val mt-2"
                          id="slider1-span"
                        ></span>
                      </div>
                      <input
                        type="range"
                        min="260"
                        max="2000"
                        value={salaryF}
                        onChange={({ target: { value } }) => {
                          setSalaryF(value);
                        }}
                        className={`slider ${
                          salaryF > 500 ? "slider-500" : "slider-260"
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </Collapse>
            </div>

            <div className="accordion-item mt-4">
              <h2 className="accordion-header" id="experienceOne">
                <Button
                  className="accordion-button"
                  onClick={(e) => {
                    e.preventDefault();
                    setToggleSecond(!toggleSecond);
                  }}
                  role="button"
                  id="collapseExample"
                >
                  Experience Level
                </Button>
              </h2>
              <Collapse isOpen={toggleSecond}>
                <div className="accordion-body">
                  <div className="side-title">
                    <div className="form-check mt-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="Entry Level"
                        id="flexCheckChecked1"
                        // checked={isChecked}
                        onChange={({ target: { value } }) =>
                          handleOnChange(value)
                        }
                      />

                      <label
                        className="form-check-label ms-2 text-muted"
                        htmlFor="flexCheckChecked1"
                      >
                        Entry Level
                      </label>
                    </div>

                    <div className="form-check mt-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="Junior"
                        id="flexCheckChecked2"
                        onChange={({ target: { value } }) =>
                          handleOnChange(value)
                        }
                      />
                      <label
                        className="form-check-label ms-2 text-muted"
                        htmlFor="flexCheckChecked2"
                      >
                        Junior/Associate
                      </label>
                    </div>
                    <div className="form-check mt-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="Mid-Senior Level"
                        id="flexCheckChecked3"
                        onChange={({ target: { value } }) =>
                          handleOnChange(value)
                        }
                      />
                      <label
                        className="form-check-label ms-2 text-muted"
                        htmlFor="flexCheckChecked3"
                      >
                        Mid-Senior level
                      </label>
                    </div>
                    <div className="form-check mt-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="Senior"
                        id="flexCheckChecked4"
                        onChange={({ target: { value } }) =>
                          handleOnChange(value)
                        }
                      />
                      <label
                        className="form-check-label ms-2 text-muted"
                        htmlFor="flexCheckChecked4"
                      >
                        Senior
                      </label>
                    </div>
                  </div>
                </div>
              </Collapse>
            </div>

            <div className="accordion-item mt-3">
              <h2 className="accordion-header" id="jobType">
                <Button
                  className="accordion-button"
                  onClick={(e) => {
                    e.preventDefault();
                    setToggleThird(!toggleThird);
                  }}
                  role="button"
                  id="collapseExample"
                >
                  Type of employment
                </Button>
              </h2>
              <Collapse isOpen={toggleThird}>
                <div className="accordion-body">
                  <div className="side-title">
                    <div className="form-check mt-2">
                      <Input
                        className="form-check-input"
                        type="checkbox"
                        value="Internship"
                        id="typeCheckChecked1"
                        // defaultChecked
                        onChange={({ target: { value } }) =>
                        handleOnChangeEmployment(value)
                        }
                      />
                      <label
                        className="form-check-label ms-2 text-muted"
                        htmlFor="typeCheckChecked1"
                      >
                        Internship
                      </label>
                    </div>

                    <div className="form-check mt-2">
                      <Input
                        className="form-check-input"
                        type="checkbox"
                        value="Freelancer"
                        id="typeCheckChecked2"
                        onChange={({ target: { value } }) =>
                        handleOnChangeEmployment(value)
                        }
                      />
                      <label
                        className="form-check-label ms-2 text-muted"
                        htmlFor="typeCheckChecked2"
                      >
                        Freelance
                      </label>
                    </div>
                    <div className="form-check mt-2">
                      <Input
                        className="form-check-input"
                        type="checkbox"
                        value="Part-time"
                        id="typeCheckChecked3"
                        onChange={({ target: { value } }) =>
                        handleOnChangeEmployment(value)
                        }
                      />
                      <label
                        className="form-check-label ms-2 text-muted"
                        htmlFor="typeCheckChecked3"
                      >
                        Part Time
                      </label>
                    </div>
                    <div className="form-check mt-2">
                      <Input
                        className="form-check-input"
                        type="checkbox"
                        value="Full-time"
                        id="typeCheckChecked4"
                        onChange={({ target: { value } }) =>
                        handleOnChangeEmployment(value)
                        }
                      />
                      <label
                        className="form-check-label ms-2 text-muted"
                        htmlFor="typeCheckChecked4"
                      >
                        Full Time
                      </label>
                    </div>

                  </div>
                </div>
              </Collapse>
            </div>

            {/* <div className="accordion-item mt-3">
              <h2 className="accordion-header" id="datePosted">
                <Button
                  className="accordion-button"
                  onClick={(e) => {
                    e.preventDefault();
                    setToggleFourth(!toggleFourth);
                  }}
                  role="button"
                  id="collapseExample"
                >
                  Date Posted
                </Button>
              </h2>
              <Collapse isOpen={toggleFourth}>
                <div className="accordion-body">
                  <div className="side-title form-check-all">
                    <div className="form-check">
                      <Input
                        className="form-check-input"
                        type="checkbox"
                        id="checkAll"
                        value=""
                      />
                      <Label
                        className="form-check-label ms-2 text-muted"
                        htmlFor="checkAll"
                      >
                        All
                      </Label>
                    </div>
                    <div className="form-check mt-2">
                      <Input
                        className="form-check-input"
                        type="checkbox"
                        name="datePosted"
                        value="last"
                        id="flexCheckChecked5"
                        checked={isDateChecked}
                        onChange={handleDateOnChange}
                      />
                      <Label
                        className="form-check-label ms-2 text-muted"
                        htmlFor="flexCheckChecked5"
                      >
                        Last Hour
                      </Label>
                    </div>
                    <div className="form-check mt-2">
                      <Input
                        className="form-check-input"
                        type="checkbox"
                        name="datePosted"
                        value="last"
                        id="flexCheckChecked6"
                      />
                      <Label
                        className="form-check-label ms-2 text-muted"
                        htmlFor="flexCheckChecked6"
                      >
                        Last 24 hours
                      </Label>
                    </div>
                    <div className="form-check mt-2">
                      <Input
                        className="form-check-input"
                        type="checkbox"
                        name="datePosted"
                        value="last"
                        id="flexCheckChecked7"
                      />
                      <Label
                        className="form-check-label ms-2 text-muted"
                        htmlFor="flexCheckChecked7"
                      >
                        Last 7 days
                      </Label>
                    </div>
                    <div className="form-check mt-2">
                      <Input
                        className="form-check-input"
                        type="checkbox"
                        name="datePosted"
                        value="last"
                        id="flexCheckChecked8"
                      />
                      <Label
                        className="form-check-label ms-2 text-muted"
                        htmlFor="flexCheckChecked8"
                      >
                        Last 14 days
                      </Label>
                    </div>
                    <div className="form-check mt-2">
                      <Input
                        className="form-check-input"
                        type="checkbox"
                        name="datePosted"
                        value="last"
                        id="flexCheckChecked9"
                      />
                      <Label
                        className="form-check-label ms-2 text-muted"
                        htmlFor="flexCheckChecked9"
                      >
                        Last 30 days
                      </Label>
                    </div>
                  </div>
                </div>
              </Collapse>
            </div> */}

            <div className="accordion-item mt-3">
              <h2 className="accordion-header" id="tagCloud">
                <Button
                  className="accordion-button"
                  onClick={(e) => {
                    e.preventDefault();
                    setToggleFifth(!toggleFifth);
                  }}
                  role="button"
                  id="collapseExample"
                >
                  Type of location
                </Button>
              </h2>
              <Collapse isOpen={toggleFifth}>
                <div className="accordion-body">
                  <div className="side-title">
                    <div className="form-check mt-2">
                      <Input
                        className="form-check-input"
                        type="checkbox"
                        value="On-site"
                        id="locCheckChecked1"
                        // defaultChecked
                        onChange={({ target: { value } }) =>
                        handleOnChangeLocation(value)
                        }
                      />
                      <label
                        className="form-check-label ms-2 text-muted"
                        htmlFor="locCheckChecked1"
                      >
                        On-site
                      </label>
                    </div>

                    <div className="form-check mt-2">
                      <Input
                        className="form-check-input"
                        type="checkbox"
                        value="Remote"
                        id="locCheckChecked2"
                        onChange={({ target: { value } }) =>
                        handleOnChangeLocation(value)
                        }
                      />
                      <label
                        className="form-check-label ms-2 text-muted"
                        htmlFor="locCheckChecked2"
                      >
                        Remote
                      </label>
                    </div>
                    <div className="form-check mt-2">
                      <Input
                        className="form-check-input"
                        type="checkbox"
                        value="Hybrid"
                        id="locCheckChecked3"
                        onChange={({ target: { value } }) =>
                        handleOnChangeLocation(value)
                        }
                      />
                      <label
                        className="form-check-label ms-2 text-muted"
                        htmlFor="locCheckChecked3"
                      >
                        Hybrid
                      </label>
                    </div>
                  </div>
                </div>
              </Collapse>
            </div>
          </div>
        </div>
      </Col>
    </React.Fragment>
  );
};

export default Sidebar;
