import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaThumbsUp } from "react-icons/fa";
import "./singleChef.css";
import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';

const SingleChef = ({ singleChef }) => {
  const { _id, name, chef_img, title, description, experian, recipe, like } =
    singleChef;
  return (
    <Card style={{ width: "18rem" }} className="mx-auto">
      <LazyLoadImage
        variant="top"
        src={chef_img}
        effect="blur"
        className="img-fluid p-3 borderRadius"
        style={{ height: "280px" }}
      />
      <Card.Body>
        <Card.Title>Name : {name}</Card.Title>
        <Card.Text>Years of experience : {experian}</Card.Text>
        <Card.Text>Numbers of recipes : {recipe}</Card.Text>
        <Card.Text>
          <FaThumbsUp></FaThumbsUp> {like}
        </Card.Text>
        <Button variant="primary">
          <Link to={`/chef/${_id}`} className="text-decoration-none text-white">
            View Recipes
          </Link>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default SingleChef;
