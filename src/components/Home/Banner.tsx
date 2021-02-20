import React from "react";
import { Row } from "react-bootstrap";

const Banner: React.FC = () => {
  return (
    <Row className="jc-center pt-5">
      <h1 className="home__banner text-center font-weight-bold text-white font-italic">
        Connect with people all around the world
      </h1>
    </Row>
  );
};

export default Banner;
