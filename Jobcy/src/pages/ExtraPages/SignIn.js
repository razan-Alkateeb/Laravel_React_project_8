import React,{useState,} from "react";
import { Card, CardBody, Col, Container, Input, Row } from "reactstrap";
import { useNavigate } from "react-router-dom";
import axios from "../../components/axios"
import { connect } from 'react-redux';
import { loginSuccess } from './Components/redux/authActions';

//Import Image
import lightLogo from "../../assets/images/logo-light.png";
import darkLogo from "../../assets/images/logo-dark.png";
import signInImage from "../../assets/images/auth/sign-in.png";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";


const SignIn = ({ isAuthenticated, user, loginSuccess,  }) => {
  document.title = "Sign In";
  const [email,setemail] = useState("");
  const [password,setpassword] = useState("");
  const [errors,seterrors] = useState([]);
  const navigate = useNavigate();


  const handleLogin = async (e) => {
    e.preventDefault();
    seterrors([])
    try {
    
      const csrfResponse = await axios.get('/get-csrf-token');
      const csrfToken = csrfResponse.data.csrf_token;
      axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;

      // Now, make your login request
      await axios.post("/login", { email, password });

      setemail('');
      setpassword('');
      const data = await axios.get('/user')
     
      loginSuccess(data.data.user)
      navigate(-1);
      // console.log(response.data); // Log the user information
    } catch (e) {
     
      if (e.response.status === 422){
        seterrors(e.response.data.errors)
        console.log(errors);

      }
    }
  }

  return (
    <React.Fragment>
      <div>
        <div className="main-content">
          <div className="page-content">
            <section className="bg-auth">
              <Container>
                <Row className="justify-content-center">
                  <Col xl={10} lg={12}>
                    <Card className="auth-box">
                      <Row className="g-0">
                        <Col lg={6} className="text-center">
                          <CardBody className="p-4">
                            <Link to="/">
                              <img
                                src={lightLogo}
                                alt=""
                                className="logo-light"
                              />
                              <img
                                src={darkLogo}
                                alt=""
                                className="logo-dark"
                              />
                            </Link>
                            <div className="mt-5">
                              <img
                                src={signInImage}
                                alt=""
                                className="img-fluid"
                              />
                            </div>
                          </CardBody>
                        </Col>
                        <Col lg={6}>
                          <CardBody className="auth-content p-5 h-100 text-white">
                            <div className="w-100">
                              <div className="text-center mb-4">
                                <h5>Welcome Back !</h5>
                                <p className="text-white-70">
                                  Sign in to continue to Jobcy.
                                </p>
                              </div>
                              <Form onSubmit={handleLogin} className="auth-form">
                                <div className="mb-3">
                                  <label
                                    htmlFor="usernameInput"
                                    className="form-label"
                                  >
                                    Email
                                  </label>
                                  <Input
                                    type="email"
                                    value= {email}
                                    className="form-control"
                                    id="usernameInput"
                                    placeholder="Enter your username"
                                    onChange={(e) => setemail(e.target.value)
                                      
                                    }
                                    required
                                  />
                                </div>
                                 {errors.email &&
                                  <div>
                                    <span className="text-danger">{errors.email[0]}</span>
                                  </div>}
                                <div className="mb-3">
                                  <label
                                    htmlFor="passwordInput"
                                    className="form-label"
                                  >
                                    Password
                                  </label>
                                  <Input
                                    type="password"
                                    className="form-control"
                                    id="passInput"
                                    placeholder="Enter your password"
                                    value= {password}
                                    onChange={(e) => setpassword(e.target.value)}
                                    required
                                  />
                                  {errors.password &&
                                  <div>
                                    <span className="text-danger m-2 p-2">{errors.password[0]}</span>
                                  </div>}
                                </div>
                                <div className="mb-4">
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="flexCheckDefault"
                                    />
                                    <Link
                                      to="/resetpassword"
                                      className="float-end text-white"
                                    >
                                      Forgot Password?
                                    </Link>
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexCheckDefault"
                                    >
                                      Remember me
                                    </label>
                                  </div>
                                </div>
                                <div className="text-center">
                                  <button
                                    type="submit"
                                    className="btn btn-white btn-hover w-100"
                                  >
                                    Sign In
                                  </button>
                                </div>
                              </Form>
                              <div className="mt-4 text-center">
                                <p className="mb-0">
                                  Don't have an account ?{" "}
                                  <Link
                                    to="/signup"
                                    className="fw-medium text-white text-decoration-underline"
                                  >
                                    {" "}
                                    Sign Up{" "}
                                  </Link>
                                </p>
                              </div>
                            </div>
                          </CardBody>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </section>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.isAuthenticated,
  user: state.user,
});
export default connect(mapStateToProps, { loginSuccess })(SignIn);
