import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [salaryF, setSalaryF] = useState(1000); 
    const [experienceF, setExperienceF] = useState([]); 
    const [employmentF, setEmploymentF] = useState([]); 
    const [locationF, setLocationF] = useState([]); 
    const [comLocationF, setComLocationF] = useState("All");
    const [comIndustryF, setComIndustryF] = useState("");
  
    return (
      <DataContext.Provider value={{ salaryF, setSalaryF, experienceF, setExperienceF, employmentF, setEmploymentF, locationF, setLocationF, comLocationF, setComLocationF, comIndustryF, setComIndustryF }}>
        {children}
      </DataContext.Provider>
    );
  };

export { DataContext, DataProvider };


