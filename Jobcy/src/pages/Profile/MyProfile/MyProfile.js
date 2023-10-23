import React from "react";
import { Container, Row } from "reactstrap";
import LeftSideContent from "./LeftSideContent";
import RightSideContent from "./RightSideContent";
import Section from "./Section";
import { useState, useEffect } from "react";
import axios from "../../../components/axios";
import { useSelector, useDispatch } from "react-redux";
import { loginSuccess } from "../../ExtraPages/Components/redux/authActions";

const MyProfile = () => {
  const [user, setUser] = useState({});
  const [loading, setIsLoading] = useState(true);
  const userb = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const fetchData = async () => {
    try {
      const response = await axios.get(`/users/${userb.id}`);
      setUser(response.data);
      setIsLoading(false);
      dispatch(loginSuccess(response.data));
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData()
  },[])

  document.title = "My Profile";
  return (
    <React.Fragment>
      <Section />
      <section className="section">
        <Container>
          {loading ? (
            <div></div>
          ) : (
            <Row>
              <LeftSideContent user={user} fetchData={fetchData} />
              <RightSideContent user={user} fetchData={fetchData} />
            </Row>
          )}
        </Container>
      </section>
    </React.Fragment>
  );
};

export default MyProfile;
