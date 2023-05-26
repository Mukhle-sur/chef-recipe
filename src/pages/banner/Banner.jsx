import React from "react";

import banner from "../../assets/background.jpg";
import { Container } from "react-bootstrap";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "200px 0px",
      }}
    >
      <Container>
        <div className="text-center">
          <p className="fs-4 text-white">Recipes & Tasty – Personal Food Blog </p>
          <h2 className="fs-2 text-white">
            Specially designed for food bloggers, cooking enthusiasts and small
            food businesses.
          </h2>
          <p className="fs-4 text-white">BRIGHT. VIBRANT. REFRESHING.</p>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
