import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Select from "react-select";
import GitData from "../../ApiData/GitDataApi";
import { DataContext } from "../../FilterData/DataContext";
// import { UpperContext } from "../../FilterData/UpperContext";
const JobType = () => {

  
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

  const [selectedIndustry, setSelectedIndustry] = useState("");

  // const { comLocationF, setComLocationF, comIndustryF, setComIndustryF } = useContext(UpperContext);



  //git data from API
  const apiEndpoint = "http://127.0.0.1:8000/api/industries";
  const { data, loading, error } = GitData(apiEndpoint);

  const options = data.map((industry) => ({
    label: industry.name,
    value: industry.id,
  }));

  // Create a default option
  const newOption = {
    label: "All",
    value: "",
  };
  options.unshift(newOption);

  //end Api-------------

  // Event handler to capture the selected value and update the state
  const handleSelectChange = (selected) => {
    setSelectedIndustry(selected);
    // If you want to update the context state as well, you can do it here.
     setComIndustryF(selected.value);
  };

 

  const colourStyles = {
    control: (styles) => ({
      ...styles,
      border: 0,
      boxShadow: "none",
      padding: "12px 0 12px 40px",
      margin: "-16px -6px 0 -52px",
      borderRadius: "0",
    }),
  };


  return (
    <React.Fragment>
      <Select
        options={options}
        styles={colourStyles}
        className="selectForm__inner"
        // defaultValue={{ label: "All", value: "" }}
        data-trigger
        value={selectedIndustry}
        onChange={handleSelectChange}
        name="choices-single-categories"
        id="choices-single-categories"
        aria-label="Default select example"
      />
    </React.Fragment>
  );
};

export default JobType;
