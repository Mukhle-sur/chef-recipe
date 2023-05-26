import React, { useState } from "react";
import { Card, CardGroup, Container } from "react-bootstrap";
import { FaHeart, FaRegBookmark } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Details = ({ singleDetails }) => {
  const { id, chef_id, details, name, image, like, rating } = singleDetails;

  const [disable, setDisable] = useState(false);

  const handlerToast = () => {
    // alert("Food Added");
    toast.success("added");
    setDisable(true);
  };
  const notify = () => toast("Wow so easy!");
  return (
    <CardGroup>
      <Card>
        <LazyLoadImage
          variant="top"
          src={image}
          effect="blur"
          style={{ height: "250px", width: "100%" }}
        />
        <Card.Body>
          <Card.Title>Recipe : {name}</Card.Title>
          <Card.Text className="">
            Cooking Method : <small>{details}</small>
          </Card.Text>
          <Card.Text className="">
            Ratting : <small>{rating}</small>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <button className="btn btn-info text-white" onClick={notify}>
            <FaRegBookmark style={{ fontSize: "28px" }}></FaRegBookmark>
          </button>
          <ToastContainer></ToastContainer>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
};

export default Details;
