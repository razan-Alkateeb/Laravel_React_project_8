import React from "react";

// import Layout1 from "../pages/Home/Layout1/Layout1";
// import Layout2 from "../pages/Home/Layout2/Layout2";
// import Layout3 from "../pages/Home/Layout3/Layout3";

//Company Section
import AboutUs from "../pages/Company/AboutUs/AboutUs";
import Services from "../pages/Company/Services/Services";
import Team from "../pages/Company/Team/Team";
import Pricing from "../pages/Company/Pricing/Pricing";
import PrivacyAndPolicy from "../pages/Company/PrivacyAndPolicy/PrivacyAndPolicy";
import Faqs from "../pages/Company/Faqs/Faqs";

//Jobs Section
import JobList from "../pages/Jobs/JobList/JobList";
import JobList2 from "../pages/Jobs/JobList2/JobList2";
import JobGrid from "../pages/Jobs/JobGrid/JobGrid";
import JobGrid2 from "../pages/Jobs/JobGrid2/JobGrid2";
import JobDetails from "../pages/Jobs/JobDetails/JobDetails";
import JobsCategories from "../pages/Jobs/JobsCategories/JobsCategories";

//Candidate and Company Section
import CandidateList from "../pages/CandidateAndCompany/CandidateList/CandidateList";
import CandidateGrid from "../pages/CandidateAndCompany/CandidateGrid/CandidateGrid";
import CandidateDetails from "../pages/CandidateAndCompany/CandidateDetails/CandidateDetails";
import CompanyList from "../pages/CandidateAndCompany/CompanyList/CompanyList";
import CompanyDetails from "../pages/CandidateAndCompany/CompanyDetails/CompanyDetails";

//Blog Section
import Blog from "../pages/Blog/Blog/Blog";
import BlogGrid from "../pages/Blog/BlogGrid/BlogGrid";
import BlogModern from "../pages/Blog/BlogModern/BlogModern";
import BlogMasonary from "../pages/Blog/BlogMasonary/BlogMasonary";
import BlogDetails from "../pages/Blog/BlogDetails/BlogDetails";
import BlogAuther from "../pages/Blog/BlogAuther/BlogAuther";

//Contacts
import Contact from "../pages/Contact/Contact";

//AuthPages
import SignIn from "../pages/ExtraPages/SignIn";
import SignUp from "../pages/ExtraPages/SignUp";
import SignOut from "../pages/ExtraPages/SignOut";
import ResetPassword from "../pages/ExtraPages/ResetPassword";
import ComingSoon from "../pages/ExtraPages/ComingSoon";
import Error404 from "../pages/ExtraPages/Error404";
import Components from "../pages/ExtraPages/Components/Components";

//profile section(User Profile)
import BookMarkJobPost from "../pages/Profile/BookMarkJobPost/BookMarkJobPost";
import ManageJobs from "../pages/Profile/ManageJobs/ManageJobs";
import BookMarkJobs from "../pages/Profile/BookMarkJobs/BookMarkJobs";
import MyProfile from "../pages/Profile/MyProfile/MyProfile";

//Home Section
const Layout1 = React.lazy(() => import('../pages/Home/Layout1/Layout1'));
const Layout2 = React.lazy(() => import('../pages/Home/Layout2/Layout2'));
const Layout3 = React.lazy(() => import('../pages/Home/Layout3/Layout3'));

const userRoutes = [
  //profile Section(User Profile)
  { path: "/bookmarkjobpost", component: <BookMarkJobPost /> },
  { path: "/myprofile/:id", component: <MyProfile /> },
  { path: "/bookmarkjobs", component: <BookMarkJobs /> },
  { path: "/managejobs", component: <ManageJobs /> },

  //Components Section(Extra Pages)
  { path: "/components", component: <Components /> },

  //Contact
  { path: "/contact", component: <Contact /> },

  // Blog Section
  { path: "/blogauther", component: <BlogAuther /> },
  { path: "/blogdetails/:id", component: <BlogDetails /> },
  { path: "/blogmodern", component: <BlogModern /> },
  { path: "/blogmasonary", component: <BlogMasonary /> },
  { path: "/bloggrid", component: <BlogGrid /> },
  { path: "/blog", component: <Blog /> },

  //Candidate and Company Section
  { path: "/companydetails/:id", component: <CompanyDetails /> },
  { path: "/companylist", component: <CompanyList /> },
  // { path: "/candidatedetails", component: <CandidateDetails /> },
  { path: "/candidatedetails/:id", component: <CandidateDetails /> },
  { path: "/candidategrid", component: <CandidateGrid /> },
  { path: "/candidatelist", component: <CandidateList /> },

  //Jobs Section
  { path: "/jobscategories", component: <JobsCategories /> },
  { path: "/jobdetails/:id", component: <JobDetails /> },
  { path: "/jobgrid2", component: <JobGrid2 /> },
  { path: "/jobgrid", component: <JobGrid /> },
  { path: "/joblist2", component: <JobList2 /> },
  { path: "/joblist/:id", component: <JobList /> },

  //Company Section
  { path: "/faqs", component: <Faqs /> },
  { path: "/privacyandpolicy", component: <PrivacyAndPolicy /> },
  { path: "/pricing", component: <Pricing /> },
  { path: "/team", component: <Team /> },
  { path: "/services", component: <Services /> },
  { path: "/aboutus", component: <AboutUs /> },

  //Home Section
  { path: "/layout3", component: <Layout3 /> },
  { path: "/layout2", component: <Layout1 /> },
  { path: "/", component: <Layout2 /> },
];

const authRoutes = [
  { path: "/error404", component: <Error404 /> },
  { path: "/comingsoon", component: <ComingSoon /> },
  { path: "/resetpassword", component: <ResetPassword /> },
  { path: "/signout", component: <SignOut /> },
  { path: "/signup", component: <SignUp /> },
  { path: "/signin", component: <SignIn /> }
];
export { userRoutes, authRoutes };
