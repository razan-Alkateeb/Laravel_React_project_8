import React from "react";
import Section from "../../Blog/BlogMasonary/Section";
import MasonaryContent from "../../Blog/BlogMasonary/MasonaryContent";

const BlogMasonary = () => {
  document.title =
    "Blog Masonary | Jobcy - Job Listing Template | Themesdesign";

  return (
    <React.Fragment>
      <Section />
      <MasonaryContent />
    </React.Fragment>
  );
};

export default BlogMasonary;
