import React from "react";
import Home from "../Home";
import Section from "../Layout2/Section";

const Layout2 = () => {
  document.title = "Home | Jobcy - Job Listing Template | Themesdesign";
  return (
    <React.Fragment>
      <Section />
      <Home />
    </React.Fragment>
  );
};
export default Layout2;
