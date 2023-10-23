import React from "react";
import UserLanguages from "./language";
import Murad from "../../../components/axios";

import { useState, useEffect } from "react";
import axios from "axios";
import {
  Col,
  Row,
  Nav,
  NavLink,
  TabContent,
  TabPane,
  Card,
  Input,
  Form,
  NavItem,
  CardBody,
  Label,
} from "reactstrap";
import classnames from "classnames";
// import userImage2 from "../../../assets/images/user/img-02.jpg";
import { Link } from "react-router-dom";

const RightSideContent = (props) => {
  // const userb = useSelector((state) => state.user);
  // const isAuthenticated = useSelector((state) => state.isAuthenticated);
  console.log(props.user);

  const [usera, setUsera] = useState({
    image: null,
    email: props.user.email,
    academic_specialization: "",
    name: props.user.name,
  });

  const handleImage = (e) => {
    setUsera({ ...usera, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const csrfResponse = await Murad.get("/get-csrf-token");
    const csrfToken = csrfResponse.data.csrf_token;
    axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;

    const formData = new FormData();
    formData.append("image", usera.image);
    formData.append("id", props.user.id);
    formData.append("email", usera.email);
    formData.append("academic_specialization", usera.academic_specialization);
    formData.append("name", usera.name);
    Murad.post("/image", formData)
      .then((response) => {
        console.log(response.data);
        props.fetchData();
      })
      .catch((error) => {
        console.error("Error uploading image: ", error);
      });
  };
  //------------------------------------------------------
  const [language, setLanguage] = useState({
    Lang1: "",
    level: "",
  });

  const addLanguage = async (e) => {
    e.preventDefault();

    const csrfResponse = await Murad.get("/get-csrf-token");
    const csrfToken = csrfResponse.data.csrf_token;
    axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;

    const languageData = new FormData();
    languageData.append("Lang1", language.Lang1);
    languageData.append("level", language.level);
    languageData.append("id", props.user.id);

    console.log(language.Lang1);
    Murad.post("/language", languageData)
      .then((response) => {
        console.log(response.data);
        setLanguage({
          Lang1: "",
          level: "",
        });
      
        props.fetchData();
      })
      .catch((error) => {
        console.error("Error uploading image: ", error);
      });
  };
  //------------------------------------------------------
  const handleDeleteLanguage = async (languageId) => {
    const csrfResponse = await Murad.get("/get-csrf-token");
    const csrfToken = csrfResponse.data.csrf_token;
    axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;

    Murad.delete(`/language/${props.user.id}/${languageId}`)
      .then((response) => {
        console.log(response.data);
        props.fetchData();
      })
      .catch((error) => {
        console.error("Error uploading image: ", error);
      });
  };
  //---------------------------------------------
  const deleteSkill = async (skill_id) => {
    const csrfResponse = await Murad.get("/get-csrf-token");
    const csrfToken = csrfResponse.data.csrf_token;
    axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;

    Murad.delete(`/skills/${skill_id}`)
      .then((response) => {
        console.log(response.data);
        props.fetchData();
      })
      .catch((error) => {
        console.error("Error uploading image: ", error);
      });
  };
  //------------------------------------------------------
  const [post, setPost] = useState({
    title: "",
    text: "",
    image: null,
  });

  const handleImagePost = (e) => {
    setPost({ ...post, image: e.target.files[0] });
  };
  const addPost = async (e) => {
    e.preventDefault();

    const csrfResponse = await Murad.get("/get-csrf-token");
    const csrfToken = csrfResponse.data.csrf_token;
    axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;

    const postData = new FormData();
    postData.append("title", post.title);
    postData.append("text", post.text);
    postData.append("image", post.image);
    postData.append("id", props.user.id);

    // console.log(language.Lang1);
    Murad.post("/posts", postData)
      .then((response) => {
        console.log(response.data);
        setPost({
          title: "",
          text: "",
          image: null,
        })
        props.fetchData();
      })
      .catch((error) => {
        console.error("Error uploading image: ", error);
      });
  };
  //------------------------------------------------------
  const [skills, setSkills] = useState({
    skill: "",
  });

  const addSkills = async (e) => {
    e.preventDefault();

    const csrfResponse = await Murad.get("/get-csrf-token");
    const csrfToken = csrfResponse.data.csrf_token;
    axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;

    const skillsData = new FormData();
    skillsData.append("skill", skills.skill);
    skillsData.append("id", props.user.id);
    // console.log(language.Lang1);
    Murad.post("/skills", skillsData)
      .then((response) => {
        console.log(response.data);
        setSkills({
          skill: "",
        })
        props.fetchData();
      })
      .catch((error) => {
        console.error("Error uploading image: ", error);
      });
  };
  //----------------------------------------------------------------

  const [userc, setUserc] = useState({
    about: "",
  });

  const handleAboutUpdate = async (e) => {
    e.preventDefault();

    const csrfResponse = await Murad.get("/get-csrf-token");
    const csrfToken = csrfResponse.data.csrf_token;
    axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;

    const aboutData = new FormData();
    aboutData.append("about", userc.about);
    aboutData.append("id", props.user.id);
    Murad.post("/about", aboutData)
      .then((response) => {
        console.log(response.data);
        props.fetchData();
      })
      .catch((error) => {
        console.error("Error uploading image: ", error);
      });
  };
  const [activeTab, setActiveTab] = useState("1");

  const tabChange = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <React.Fragment>
      <>{/* {selectedUser && ()} */}</>
      <Col lg={8}>
        <Card className="profile-content-page mt-4 mt-lg-0">
          <Nav
            className="profile-content-nav nav-pills border-bottom mb-4"
            id="pills-tab"
            role="tablist">
            <NavItem role="presentation">
              <NavLink
                to="#"
                className={classnames({ active: activeTab === "1" })}
                onClick={() => {
                  tabChange("1");
                }}
                type="button">
                Overview
              </NavLink>
            </NavItem>
            <NavItem role="presentation">
              <NavLink
                to="#"
                className={classnames({ active: activeTab === "2" })}
                onClick={() => {
                  tabChange("2");
                }}
                type="button">
                Settings
              </NavLink>
            </NavItem>
          </Nav>

          <CardBody className="p-4">
            <TabContent activeTab={activeTab}>
              
              <TabPane tabId="1">
                <div>
                  <h5 className="fs-18 fw-bold">About</h5>
                  <p className="text-muted mt-4">
                    {props.user ? (
                      props.user.about
                    ) : (
                      <p>User with ID {props.user.id} not found.</p>
                    )}
                  </p>
                </div>
                <div className="candidate-education-details mt-4">
                  <h6 className="fs-18 fw-bold mb-0">Education</h6>

                  {props.user &&
                    Array.isArray(props.user.educations) &&
                    props.user.educations.map((education) => (
                      <div className="candidate-education-content mt-4 d-flex">
                        <div className="circle flex-shrink-0 bg-primary-subtle text-primary">
                          {education.subject.charAt(0).toUpperCase()}
                        </div>
                        <div className="ms-4">
                          <h6 className="fs-16 mb-1">{education.subject}</h6>
                          <p className="mb-2 text-muted">
                            {education.schoole} - ( {education.from} -{" "}
                            {education.to})
                          </p>
                          <p className="text-muted">{education.description}</p>
                        </div>
                      </div>
                    ))}
                </div>
                <div className="candidate-education-details mt-4">
                  <h6 className="fs-18 fw-bold mb-0">Experiences</h6>
                  {props.user &&
                    Array.isArray(props.user.experiences) &&
                    props.user.experiences.map((experience) => (
                      <div className="candidate-education-content mt-4 d-flex">
                        <div className="circle flex-shrink-0 bg-primary-subtle text-primary">
                          {" "}
                          {experience.position.charAt(0).toUpperCase()}{" "}
                        </div>
                        <div className="ms-4">
                          <h6 className="fs-16 mb-1">{experience.position}</h6>
                          <p className="mb-2 text-muted">
                            {experience.position} - ({experience.from} -{" "}
                            {experience.to})
                          </p>
                          <p className="text-muted">{experience.description}</p>
                        </div>
                      </div>
                    ))}
                </div>
                <div className="mt-4">
                  <h5 className="fs-18 fw-bold">Skills</h5>
                </div>
                <div className="mt-0 d-flex flex-wrap align-items-start gap-1">
                  {props.user &&
                    Array.isArray(props.user.user_skills) &&
                    props.user.user_skills.map((skill) => (
                      <span
                        className="badge fs-13 bg-blue-subtle text-blue mt-2"
                        key={skill.id}>
                        {skill.skill_name}
                      </span>
                    ))}
                </div>
                <div className="mt-4">
                  <h5 className="fs-18 fw-bold">Spoken languages</h5>
                </div>
                <div className="mt-0 d-flex flex-wrap align-items-start gap-1">
                  {props.user &&
                    Array.isArray(props.user.languages) &&
                    props.user.languages.map((language) => (
                      <span className="badge fs-13 bg-success-subtle text-success mt-2">
                        {language.name}
                      </span>
                    ))}
                </div>
              </TabPane>

              <TabPane tabId="2">
                <form
                  action="#"
                  onSubmit={handleSubmit}
                  formData="multipart/form-data">
                  <div>
                    <h5 className="fs-17 fw-semibold mb-3 mb-0">My Account</h5>
                    <div className="text-center">
                      <div className="mb-4 profile-user">
                        <img
                          src={`http://localhost:8000/img/${props.user.image}`}
                          className="rounded-circle img-thumbnail profile-img"
                          id="profile-img"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <div>
                      <div>
                        <div className="p-0 rounded-circle profile-photo-edit">
                          <label htmlFor="firstName" className="form-label">
                            Uploade your image
                          </label>
                          <Input
                            id="profile-img-file-input"
                            type="file"
                            className="profile-img-file-input"
                            name="image"
                            onChange={handleImage}
                          />
                          <Label
                            htmlFor="profile-img-file-input"
                            className="profile-photo-edit avatar-xs">
                            <i className="uil uil-edit"></i>
                          </Label>
                        </div>
                      </div>
                    </div>
                    <Row>
                      <Col lg={12}>
                        <div className="mb-3">
                          <label htmlFor="firstName" className="form-label">
                            Name
                          </label>
                          <Input
                            type="text"
                            name="name"
                            className="form-control"
                            id="firstName"
                            value={usera.name}
                            // placeholder={user.name}
                            onChange={(e) =>
                              setUsera((prev) => ({
                                ...prev,
                                name: e.target.value,
                              }))
                            }
                            // value={user.name}
                          />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="mb-3">
                          <label
                            htmlFor="choices-single-categories"
                            className="form-label">
                            Your Field
                          </label>
                          <select
                            className="form-select"
                            data-trigger
                            name="academic_specialization"
                            id="choices-single-categories"
                            aria-label={usera.academic_specialization}
                            value={usera.academic_specialization}
                            onChange={(e) =>
                              setUsera((prev) => ({
                                ...prev,
                                academic_specialization: e.target.value,
                              }))
                            }>
                            <option value="Accounting">Accounting</option>
                            <option value="IT & Software">IT & Software</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Banking">Banking</option>
                          </select>
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="mb-3">
                          <Label htmlFor="email" className="form-label">
                            Email
                          </Label>
                          <Input
                            type="email"
                            className="form-control"
                            id="email"
                            value={usera.email}
                            name="email"
                            onChange={(e) =>
                              setUsera((prev) => ({
                                ...prev,
                                email: e.target.value,
                              }))
                            }
                          />
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <button className="btn btn-primary" type="submit">
                    Update
                  </button>
                </form>
                <div className="mt-4">
                  <h5 className="fs-17 fw-semibold mb-3">Your Languages</h5>
                  <Row>
                    <div className="mb-3 col-12">
                      <div className="mt-0 d-flex flex-wrap align-items-start gap-1">
                        {props.user &&
                          Array.isArray(props.user.languages) &&
                          props.user.languages.map((language, index) => (
                            <div
                              key={index}
                              className="d-flex align-items-center mt-2">
                              <span className="badge fs-13 bg-success-subtle text-success">
                                {language.name}
                              </span>
                              <span className="badge fs-13 bg-success-subtle text-success">
                                {language.pivot.level}
                              </span>
                              <button
                                className="btn btn-danger btn-sm ms-2"
                                onClick={() =>
                                  handleDeleteLanguage(language.id)
                                }>
                                Delete
                              </button>
                            </div>
                          ))}
                      </div>

                      <form
                        action="#"
                        onSubmit={addLanguage}
                        formData="multipart/form-data">
                        <Col lg={6}>
                          <select
                            className="form-select mb-2"
                            id="languages"
                            name="Lang1"
                            value={language.Lang1}
                            onChange={(e) =>
                              setLanguage((prev) => ({
                                ...prev,
                                Lang1: e.target.value,
                              }))
                            }>
                            <option value="languages">Languages</option>
                            <option value="Afrikaans">Afrikaans</option>
                            <option value="Albanian - shqip">
                              Albanian - shqip
                            </option>
                            <option value="Amharic - አማርኛ">
                              Amharic - አማርኛ
                            </option>
                            <option value="Arabic - العربية">
                              Arabic - العربية
                            </option>
                            <option value="Aragonese - aragonés">
                              Aragonese - aragonés
                            </option>
                            <option value="Armenian - հայերեն">
                              Armenian - հայերեն
                            </option>
                            <option value="Asturian - asturianu">
                              Asturian - asturianu
                            </option>
                            <option value="Azerbaijani - azərbaycan dili">
                              Azerbaijani - azərbaycan dili
                            </option>
                            <option value="Basque - euskara">
                              Basque - euskara
                            </option>
                            <option value="Belarusian - беларуская">
                              Belarusian - беларуская
                            </option>
                            <option value="Bengali - বাংলা">
                              Bengali - বাংলা
                            </option>
                            <option value="Bosnian - bosanski">
                              Bosnian - bosanski
                            </option>
                            <option value="Breton - brezhoneg">
                              Breton - brezhoneg
                            </option>
                            <option value="Bulgarian - български">
                              Bulgarian - български
                            </option>
                            <option value="Catalan - català">
                              Catalan - català
                            </option>
                            <option value="Central Kurdish - کوردی (دەستنوسی عەرەبی)">
                              Central Kurdish - کوردی (دەستنوسی عەرەبی)
                            </option>
                            <option value="Chinese - 中文">
                              Chinese - 中文
                            </option>
                            <option value="Chinese (Hong Kong) - 中文（香港）">
                              Chinese (Hong Kong) - 中文（香港）
                            </option>
                            <option value="Chinese (Simplified) - 中文（简体）">
                              Chinese (Simplified) - 中文（简体）
                            </option>
                            <option value="Chinese (Traditional) - 中文（繁體）">
                              Chinese (Traditional) - 中文（繁體）
                            </option>
                            <option value="Corsican">Corsican</option>
                            <option value="Croatian - hrvatski">
                              Croatian - hrvatski
                            </option>
                            <option value="Czech - čeština">
                              Czech - čeština
                            </option>
                            <option value="Danish - dansk">
                              Danish - dansk
                            </option>
                            <option value="Dutch - Nederlands">
                              Dutch - Nederlands
                            </option>
                            <option value="English">English</option>
                            <option value="English (Australia)">
                              English (Australia)
                            </option>
                            <option value="English (Canada)">
                              English (Canada)
                            </option>
                            <option value="English (India)">
                              English (India)
                            </option>
                            <option value="English (New Zealand)">
                              English (New Zealand)
                            </option>
                            <option value="English (South Africa)">
                              English (South Africa)
                            </option>
                            <option value="English (United Kingdom)">
                              English (United Kingdom)
                            </option>
                            <option value="English (United States)">
                              English (United States)
                            </option>
                            <option value="Esperanto - esperanto">
                              Esperanto - esperanto
                            </option>
                            <option value="Estonian - eesti">
                              Estonian - eesti
                            </option>
                            <option value="Faroese - føroyskt">
                              Faroese - føroyskt
                            </option>
                            <option value="Filipino">Filipino</option>
                            <option value="Finnish - suomi">
                              Finnish - suomi
                            </option>
                            <option value="French - français">
                              French - français
                            </option>
                            <option value="French (Canada) - français (Canada)">
                              French (Canada) - français (Canada)
                            </option>
                            <option value="French (France) - français (France)">
                              French (France) - français (France)
                            </option>
                            <option value="French (Switzerland) - français (Suisse)">
                              French (Switzerland) - français (Suisse)
                            </option>
                            <option value="Galician - galego">
                              Galician - galego
                            </option>
                            <option value="Georgian - ქართული">
                              Georgian - ქართული
                            </option>
                            <option value="German - Deutsch">
                              German - Deutsch
                            </option>
                            <option value="German (Austria) - Deutsch (Österreich)">
                              German (Austria) - Deutsch (Österreich)
                            </option>
                            <option value="German (Germany) - Deutsch (Deutschland)">
                              German (Germany) - Deutsch (Deutschland)
                            </option>
                            <option value="German (Liechtenstein) - Deutsch (Liechtenstein)">
                              German (Liechtenstein) - Deutsch (Liechtenstein)
                            </option>
                            <option value="German (Switzerland) - Deutsch (Schweiz)">
                              German (Switzerland) - Deutsch (Schweiz)
                            </option>
                            <option value="Greek - Ελληνικά">
                              Greek - Ελληνικά
                            </option>
                            <option value="Guarani">Guarani</option>
                            <option value="Gujarati - ગુજરાતી">
                              Gujarati - ગુજરાતી
                            </option>
                            <option value="Hausa">Hausa</option>
                            <option value="Hawaiian - ʻŌlelo Hawaiʻi">
                              Hawaiian - ʻŌlelo Hawaiʻi
                            </option>
                            <option value="Hebrew - עברית">
                              Hebrew - עברית
                            </option>
                            <option value="Hindi - हिन्दी">
                              Hindi - हिन्दी
                            </option>
                            <option value="Hungarian - magyar">
                              Hungarian - magyar
                            </option>
                            <option value="Icelandic - íslenska">
                              Icelandic - íslenska
                            </option>
                            <option value="Indonesian - Indonesia">
                              Indonesian - Indonesia
                            </option>
                            <option value="Interlingua">Interlingua</option>
                            <option value="Irish - Gaeilge">
                              Irish - Gaeilge
                            </option>
                            <option value="Italian - italiano">
                              Italian - italiano
                            </option>
                            <option value="Italian (Italy) - italiano (Italia)">
                              Italian (Italy) - italiano (Italia)
                            </option>
                            <option value="Italian (Switzerland) - italiano (Svizzera)">
                              Italian (Switzerland) - italiano (Svizzera)
                            </option>
                            <option value="Japanese - 日本語">
                              Japanese - 日本語
                            </option>
                            <option value="Kannada - ಕನ್ನಡ">
                              Kannada - ಕನ್ನಡ
                            </option>
                            <option value="Kazakh - қазақ тілі">
                              Kazakh - қазақ тілі
                            </option>
                            <option value="Khmer - ខ្មែរ">Khmer - ខ្មែរ</option>
                            <option value="Korean - 한국어">
                              Korean - 한국어
                            </option>
                            <option value="Kurdish - Kurdî">
                              Kurdish - Kurdî
                            </option>
                            <option value="Kyrgyz - кыргызча">
                              Kyrgyz - кыргызча
                            </option>
                            <option value="Lao - ລາວ">Lao - ລາວ</option>
                            <option value="Latin">Latin</option>
                            <option value="Latvian - latviešu">
                              Latvian - latviešu
                            </option>
                            <option value="Lingala - lingála">
                              Lingala - lingála
                            </option>
                            <option value="Lithuanian - lietuvių">
                              Lithuanian - lietuvių
                            </option>
                            <option value="Macedonian - македонски">
                              Macedonian - македонски
                            </option>
                            <option value="Malay - Bahasa Melayu">
                              Malay - Bahasa Melayu
                            </option>
                            <option value="Malayalam - മലയാളം">
                              Malayalam - മലയാളം
                            </option>
                            <option value="Maltese - Malti">
                              Maltese - Malti
                            </option>
                            <option value="Marathi - मराठी">
                              Marathi - मराठी
                            </option>
                            <option value="Mongolian - монгол">
                              Mongolian - монгол
                            </option>
                            <option value="Nepali - नेपाली">
                              Nepali - नेपाली
                            </option>
                            <option value="Norwegian - norsk">
                              Norwegian - norsk
                            </option>
                            <option value="Southern Sotho">
                              Southern Sotho
                            </option>
                            <option value="Sundanese">Sundanese</option>
                            <option value="Swahili - Kiswahili">
                              Swahili - Kiswahili
                            </option>
                            <option value="Swedish - svenska">
                              Swedish - svenska
                            </option>
                            <option value="Tajik - тоҷикӣ">
                              Tajik - тоҷикӣ
                            </option>
                            <option value="Tamil - தமிழ்">Tamil - தமிழ்</option>
                            <option value="Tatar">Tatar</option>
                            <option value="Turkish - Türkçe">
                              Turkish - Türkçe
                            </option>
                            <option value="Turkmen">Turkmen</option>
                            <option value="Twi">Twi</option>
                            <option value="Ukrainian - українська">
                              Ukrainian - українська
                            </option>
                            <option value="Urdu - اردو">Urdu - اردو</option>
                            <option value="Uyghur">Uyghur</option>
                            <option value="isiZulu">isiZulu</option>{" "}
                          </select>
                        </Col>
                        <Col lg={6}>
                        <label htmlFor="firstName" className="form-label">
                            Your level
                          </label>
                          <Input
                            type="text"
                            name="level"
                            className="form-control mb-2"
                            id="firstName"
                            value={language.level}
                            onChange={(e) =>
                              setLanguage((prev) => ({
                                ...prev,
                                level: e.target.value,
                              }))
                            }
                          />
                        </Col>
                        <button className="btn btn-primary" type="submit">
                          Add
                        </button>
                      </form>
                    </div>
                  </Row>
                </div>

                <div className="mt-4">
                  <h5 className="fs-17 fw-semibold mb-3">Your Skills</h5>
                  <form
                    action="#"
                    onSubmit={addSkills}
                    // formData="multipart/form-data"
                  >
                    <input
                      type="text"
                      className="form-control mb-2"
                      name="skills"
                      value={skills.skill} // Assuming you're using the "skills" state for the input value
                      onChange={(e) =>
                        setSkills((prev) => ({
                          ...prev,
                          skill: e.target.value,
                        }))
                      }
                    />
                    <button type="submit" class="btn btn-primary" >Add</button>
                  </form>
                  {props.user &&
                    Array.isArray(props.user.user_skills) &&
                    props.user.user_skills.map((skill) => (
                      <div key={skill.id}
                                                      className="d-flex align-items-center mt-2">

                        <span className="badge fs-13 bg-success-subtle text-success">
                          {skill.skill_name}
                        </span>
                        <button className="btn btn-danger btn-sm ms-2"onClick={() => deleteSkill(skill.id)}>
                          Delete
                        </button>
                      </div>
                    ))}
                   
                </div>
                <div className="mt-4">
                <h5 className="fs-17 fw-semibold mb-3">Add a Post</h5>
                  <form
                    action="#"
                    onSubmit={addPost}
                    formData="multipart/form-data">
                       <label htmlFor="firstName" className="form-label">
                            Title
                          </label>
                    <Input
                      type="text"
                      name="title"
                      className="form-control"
                      id="firstName"
                      // placeholder={user.name}
                      onChange={(e) =>
                        setPost((prev) => ({
                          ...prev,
                          title: e.target.value,
                        }))
                      }
                      // value={user.name}
                    />
                     <label htmlFor="firstName" className="form-label">
                            body
                          </label>
                    <Input
                      type="text"
                      name="text"
                      className="form-control"
                      id="firstName"
                      // placeholder={user.name}
                      onChange={(e) =>
                        setPost((prev) => ({
                          ...prev,
                          text: e.target.value,
                        }))
                      }
                    />
                     <label htmlFor="firstName" className="form-label">
                            Image
                          </label>
                    <Input
                      id="profile-img-file-input"
                      type="file"
                      className="profile-img-file-input"
                      name="image"
                      onChange={handleImagePost}
                    />
                    <button className="btn btn-primary" type="submit">
                      Upload Image
                    </button>
                  </form>
                </div>
                <div className="mt-4">
                  <h5 className="fs-17 fw-semibold mb-3">Profile</h5>
                  <Row>
                    <Col lg={12}>
                      <form onSubmit={handleAboutUpdate} action="#">
                        <div className="mb-3">
                          <Label
                            htmlFor="exampleFormControlTextarea1"
                            className="form-label">
                            About Yourself
                          </Label>
                          <textarea
                            className="form-control"
                            rows="5"
                            name="about"
                            value={usera.about}
                            onChange={(e) =>
                              setUserc((prev) => ({
                                ...prev,
                                about: e.target.value,
                              }))
                            }>
                            {usera.about}
                          </textarea>
                        </div>
                        <button className="btn btn-primary" type="submit">
                          Update
                        </button>
                      </form>
                    </Col>

                  
                  </Row>
                </div>

               
              </TabPane>

            </TabContent>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default RightSideContent;
