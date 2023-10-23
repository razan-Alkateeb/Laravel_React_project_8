import React from "react";
const Section = React.lazy(() => import('../Layout1/Section'));
const Home = React.lazy(() => import('../Home'));

const Layout1 = () => {
  document.title = "Home | Jobcy - Job Listing Template | Themesdesign";
  return (
    <div>
      <Section />
      <Home />
    </div>
  );
};

export default Layout1;
