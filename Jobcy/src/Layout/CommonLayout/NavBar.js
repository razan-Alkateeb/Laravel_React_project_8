import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Col,
  Row,
  Container,
  Collapse,
  NavbarToggler,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";

import { Link } from "react-router-dom";
import classname from "classnames";
import withRouter from "../../components/withRouter";
import { logoutSuccess } from "../../pages/ExtraPages/Components/redux/authActions";
import { useDispatch } from "react-redux";
import darkLogo from "../../assets/images/logo-dark.png";
import lightLogo from "../../assets/images/logo-light.png";

import { useNavigate } from "react-router-dom";

// import profileImage from "../../assets/images/profile.jpg";
import axios from "../../components/axios";

const NavBar = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  console.log(user);
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  console.log(user);
  console.log(isAuthenticated);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const navigate = useNavigate();
  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      const csrfResponse = await axios.get("/get-csrf-token");
      const csrfToken = csrfResponse.data.csrf_token;
      axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;
      await axios.post("/logout");
      dispatch(logoutSuccess());

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const [home, setHome] = useState(false);
  const [company, setCompany] = useState(false);
  const [pages, setPages] = useState(false);
  const [blog, setBlog] = useState(false);

  //Notification Dropdown
  const [notification, setNotification] = useState(false);
  const dropDownnotification = () => setNotification((prevState) => !prevState);

  //user Profile Dropdown
  const [userProfile, setUserProfile] = useState(false);
  const dropDownuserprofile = () => setUserProfile((prevState) => !prevState);

  //scroll navbar
  const [navClass, setnavClass] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", scrollNavigation, true);
  });

  function scrollNavigation() {
    var scrollup = window.pageYOffset;
    if (scrollup > 0) {
      setnavClass("nav-sticky");
    } else {
      setnavClass("");
    }
  }
  //menu activation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const pathName = props.router.location.pathname;
    var matchingMenuItem = null;
    var ul = document.getElementById("navbarCollapse");
    var items = ul.getElementsByTagName("a");
    removeActivation(items);
    for (var i = 0; i < items.length; ++i) {
      if (pathName === items[i].pathname) {
        matchingMenuItem = items[i];
        break;
      }
    }
    if (matchingMenuItem) {
      activateParentDropdown(matchingMenuItem);
    }
  }, [props.router.location.pathname]);

  const removeActivation = (items) => {
    for (var i = 0; i < items.length; ++i) {
      var item = items[i];
      const parent = items[i].parentElement;
      if (item && item.classList.contains("active")) {
        item.classList.remove("active");
      }
      if (parent) {
        if (parent.classList.contains("active")) {
          parent.classList.remove("active");
        }
      }
    }
  };

  function activateParentDropdown(item) {
    item.classList.add("active");
    const parent = item.parentElement.parentElement.parentElement;

    if (parent) {
      parent.classList.add("active"); // li
      const parent2 = parent.parentElement;
      parent2.classList.add("active"); // li
      const parent3 = parent2.parentElement;
      if (parent3) {
        parent3.classList.add("active"); // li
        const parent4 = parent3.parentElement;
        if (parent4) {
          parent4.classList.add("active"); // li
          const parent5 = parent4.parentElement;
          if (parent5) {
            parent5.classList.add("active"); // li
            const parent6 = parent5.parentElement;
            if (parent6) {
              parent6.classList.add("active"); // li
            }
          }
        }
      }
    }
    return false;
  }

  return (
    <React.Fragment>
      <nav
        className={"navbar navbar-expand-lg fixed-top sticky p-0 " + navClass}
        id="navigation">
        <Container fluid className="custom-container">
          <Link className="navbar-brand text-dark fw-bold me-auto" to="/">
            <img src={darkLogo} height="22" alt="" className="logo-dark" />
            <img src={lightLogo} height="22" alt="" className="logo-light" />
          </Link>
          <div>
            <NavbarToggler
              className="me-3"
              type="button"
              onClick={() => toggle()}>
              <i className="mdi mdi-menu"></i>
            </NavbarToggler>
          </div>
          <Collapse
            isOpen={isOpen}
            className="navbar-collapse"
            id="navbarCollapse">
            <ul className="navbar-nav mx-auto navbar-center">
              <NavItem className="dropdown dropdown-hover">
                <NavLink to="/" id="homedrop" className="arrow-none">
                  <Link to="/">Home</Link>
                </NavLink>
              </NavItem>
              {/* <NavItem className="dropdown dropdown-hover">
                <NavLink
                  to="/#"
                  id="jobsdropdown"
                  role="button"
                  onClick={() => setCompany(!company)}>
                  Company <div className="arrow-down"></div>
                </NavLink>
                <ul
                  className={classname("dropdown-menu dropdown-menu-center", {
                    show: company,
                  })}
                  aria-labelledby="jobsdropdown">
                  <li>
                    <Link className="dropdown-item" to="/aboutus">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/services">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/team">
                      Team
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/pricing">
                      Pricing
                    </Link>
                  </li>
                  <Link className="dropdown-item" to="/privacyandpolicy">
                    Priacy & Policy
                  </Link>
                  <li>
                    <Link className="dropdown-item" to="/faqs">
                      Faqs
                    </Link>
                  </li>
                </ul>
              </NavItem>
              <li className="nav-item dropdown dropdown-hover">
                <Link
                  to="/#"
                  id="pagesdoropdown"
                  className="nav-link dropdown-toggle arrow-none"
                  onClick={() => setPages(!pages)}>
                  Pages
                  <div className="arrow-down"></div>
                </Link>
                <div
                  className={classname(
                    "dropdown-menu dropdown-menu-lg dropdown-menu-center",
                    { show: pages }
                  )}
                  aria-labelledby="pagesdoropdown">
                  <Row>
                    <Col lg={4}>
                      <span className="dropdown-header">Jobs</span>
                      <div>
                        <Link className="dropdown-item" to="/joblist">
                          Job List
                        </Link>
                        <Link className="dropdown-item" to="/joblist2">
                          Job List-2
                        </Link>
                        <Link className="dropdown-item" to="/jobgrid">
                          Job Grid
                        </Link>
                        <Link className="dropdown-item" to="/jobgrid2">
                          Job Grid-2
                        </Link>
                        <Link className="dropdown-item" to="/jobdetails">
                          Job Details
                        </Link>
                        <Link className="dropdown-item" to="/jobscategories">
                          Jobs Categories
                        </Link>
                      </div>
                    </Col>
                    <Col lg={4}>
                      <span className="dropdown-header">
                        Candidates / Companys
                      </span>
                      <div>
                        <Link className="dropdown-item" to="/candidatelist">
                          Candidate List
                        </Link>
                        <Link className="dropdown-item" to="/candidategrid">
                          Candidate Grid
                        </Link>
                        <Link className="dropdown-item" to="/candidatedetails">
                          Candidate Details
                        </Link>
                        <Link className="dropdown-item" to="/companylist">
                          Company List
                        </Link>
                        <Link className="dropdown-item" to="/companydetails">
                          Company Details
                        </Link>
                      </div>
                    </Col>
                    <Col lg={4}>
                      <span className="dropdown-header">Extra Pages</span>
                      <div>
                        <Link className="dropdown-item" to="/signup">
                          Sign Up
                        </Link>
                        <Link className="dropdown-item" to="/signin">
                          Sign In
                        </Link>
                        <Link className="dropdown-item" to="/signout">
                          Sign Out
                        </Link>
                        <Link className="dropdown-item" to="/resetpassword">
                          Reset Password
                        </Link>
                        <Link className="dropdown-item" to="/comingsoon">
                          Coming Soon
                        </Link>
                        <Link className="dropdown-item" to="/error404">
                          404 Error
                        </Link>
                        <Link className="dropdown-item" to="/components">
                          Components
                        </Link>
                      </div>
                    </Col>
                  </Row>
                </div>
              </li> */}

              <NavItem>
              <Link className="nav-link" to="/joblist/All">
                          Jobs
                        </Link>
              </NavItem>
              <NavItem>
              <Link className="nav-link" to="/companylist">
                          Companies
                        </Link>
              </NavItem>
              <NavItem>
              <Link className="nav-link" to="/candidategrid">
                          Candidate
                        </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/blogmasonary">
                  Posts
                </Link>
              </NavItem>
              {/* <ul
                  className={classname("dropdown-menu dropdown-menu-center", {
                    show: blog,
                  })}
                  aria-labelledby="productdropdown"
                >
                  <li>
                    <Link className="dropdown-item" to="/blog">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/bloggrid">
                      Blog Grid
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/blogmodern">
                      Blog Modern
                    </Link>
                  </li>
                  <li>
                 
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/blogdetails">
                      Blog details
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/blogauther">
                      Blog Author
                    </Link>
                  </li>
                </ul> */}

              <NavItem>
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/aboutus">
                  About Us
                </Link>
              </NavItem>
            </ul>
          </Collapse>

          <ul className="header-menu list-inline d-flex align-items-center mb-0">
            <Dropdown
              isOpen={notification}
              toggle={dropDownnotification}
              className="list-inline-item  me-4">
              {/* <DropdownToggle
                href="#"
                className="header-item noti-icon position-relative"
                id="notification"
                type="button"
                tag="a"
              >
                <i className="mdi mdi-bell fs-22"></i>
                <div className="count position-absolute">3</div>
              </DropdownToggle> */}
              {/* <DropdownMenu
                className="dropdown-menu-sm dropdown-menu-end p-0"
                aria-labelledby="notification"
                end
              >
                <div className="notification-header border-bottom bg-light">
                  <h6 className="mb-1"> Notification </h6>
                  <p className="text-muted fs-13 mb-0">
                    You have 4 unread Notification
                  </p>
                </div>
                <div className="notification-wrapper dropdown-scroll">
                  <Link
                    to="#"
                    className="text-dark notification-item d-block active"
                  >
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0 me-3">
                        <div className="avatar-xs bg-primary text-white rounded-circle text-center">
                          <i className="uil uil-user-check"></i>
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="mt-0 mb-1 fs-14">
                          22 verified registrations
                        </h6>
                        <p className="mb-0 fs-12 text-muted">
                          <i className="mdi mdi-clock-outline"></i>{" "}
                          <span>3 min ago</span>
                        </p>
                      </div>
                    </div>
                  </Link>
                  <Link to="#" className="text-dark notification-item d-block">
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0 me-3">
                        <img
                          src={userImage2}
                          className="rounded-circle avatar-xs"
                          alt="user-pic"
                        />
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="mt-0 mb-1 fs-14">James Lemire</h6>
                        <p className="text-muted fs-12 mb-0">
                          <i className="mdi mdi-clock-outline"></i>{" "}
                          <span>15 min ago</span>
                        </p>
                      </div>
                    </div>
                  </Link>
                  <Link to="#" className="text-dark notification-item d-block">
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0 me-3">
                        <img
                          src={jobImage4}
                          className="rounded-circle avatar-xs"
                          alt="user-pic"
                        />
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="mt-0 mb-1 fs-14">
                          Applications has been approved
                        </h6>
                        <p className="text-muted mb-0 fs-12">
                          <i className="mdi mdi-clock-outline"></i>{" "}
                          <span>45 min ago</span>
                        </p>
                      </div>
                    </div>
                  </Link>
                  <Link to="#" className="text-dark notification-item d-block">
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0 me-3">
                        <img
                          src={userImage1}
                          className="rounded-circle avatar-xs"
                          alt="user-pic"
                        />
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="mt-0 mb-1 fs-14">Kevin Stewart</h6>
                        <p className="text-muted mb-0 fs-12">
                          <i className="mdi mdi-clock-outline"></i>{" "}
                          <span>1 hour ago</span>
                        </p>
                      </div>
                    </div>
                  </Link>
                  <Link to="#" className="text-dark notification-item d-block">
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0 me-3">
                        <img
                          src={jobImage}
                          className="rounded-circle avatar-xs"
                          alt="user-pic"
                        />
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="mt-0 mb-1 fs-15">Creative Agency</h6>
                        <p className="text-muted mb-0 fs-12">
                          <i className="mdi mdi-clock-outline"></i>{" "}
                          <span>2 hour ago</span>
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="notification-footer border-top text-center">
                  <Link className="primary-link fs-13" to="#">
                    <i className="mdi mdi-arrow-right-circle me-1"></i>{" "}
                    <span>View More..</span>
                  </Link>
                </div>
              </DropdownMenu> */}
            </Dropdown>
            {isAuthenticated ? (
              // If the user is authenticated, show the user dropdown
              <Dropdown
                onClick={() => setUserProfile(!userProfile)}
                isOpen={userProfile}
                toggle={dropDownuserprofile}
                className="list-inline-item">
                {/* Dropdown toggle button with user image and name */}
                <DropdownToggle
                  to="#"
                  className="header-item"
                  id="userdropdown"
                  type="button"
                  tag="a"
                  aria-expanded="false">
                  <img
                    src={`http://localhost:8000/img/${user.image}`}
                    alt="mdo"
                    width="35"
                    height="35"
                    className="rounded-circle me-1"
                  />{" "}
                  <span className="d-none d-md-inline-block fw-medium">
                    Hi, {user.name}
                  </span>
                </DropdownToggle>

                {/* Dropdown menu with user options */}
                <DropdownMenu
                  className="dropdown-menu-end"
                  aria-labelledby="userdropdown"
                  end>
                 
                  <li>
                    <Link className="dropdown-item" to={`/myprofile/${user.id}`}>
                      My Profile
                    </Link>
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={handleLogout}>
                      Logout
                    </button>
                  </li>
                </DropdownMenu>
              </Dropdown>
            ) : (
              // If the user is not authenticated, show "Sign Up" and "Sign In" links
              <ul className="navbar-nav mx-auto navbar-center">
                <Link className="nav-link" to="/signup">
                  Sign Up
                </Link>

                <Link className="nav-link" to="/signin">
                  Sign In
                </Link>
              </ul>
            )}
          </ul>
        </Container>
      </nav>
    </React.Fragment>
  );
};

export default withRouter(NavBar);
