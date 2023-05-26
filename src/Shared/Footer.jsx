import React from "react";
import { Container } from "react-bootstrap";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-dark mt-5">
      <Container className="d-flex justify-content-between py-4 align-items-center">
        <div>
          <p className="text-white fs-4">All rights reserved. Recipes Tasty.</p>
        </div>
        <div>
          <FaFacebookSquare className="text-white fs-3 mx-2"></FaFacebookSquare>
          <FaInstagramSquare className="text-white fs-3 mx-2"></FaInstagramSquare>
          <FaTwitterSquare className="text-white fs-3 mx-2"></FaTwitterSquare>
          <FaYoutubeSquare className="text-white fs-3"></FaYoutubeSquare>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
