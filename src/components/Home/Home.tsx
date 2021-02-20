import React from "react";
import { Container } from "react-bootstrap";
import Banner from "./Banner";
import NavButtons from "./NavButtons";

const Home: React.FC = () => {
  return (
    <Container>
      <Banner />
      <NavButtons />
    </Container>
  );
};

export default Home;
