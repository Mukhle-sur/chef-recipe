import React from "react";
import { useLoaderData } from "react-router-dom";
import Details from "../details/Details";
import { Card, Container } from "react-bootstrap";
import { FaThumbsUp } from "react-icons/fa";
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';

const ChefRecipe = () => {
  const chefDetails = useLoaderData([]);
  console.log(chefDetails);
  return (
    <Container className="">
      <section className="bg-info rounded p-4 mb-4">
        <div className="d-lg-flex gap-5 align-items-center">
          <LazyLoadImage
            variant="top"
            src={chefDetails[0]?.chef_img}
            effect="blur"
            className="img-fluid p-3 borderRadius"
            style={{ height: "380px" }}
          />
          <div>
            <Card.Title className="text-black">Name : {chefDetails[0]?.names}</Card.Title>
            <Card.Text className="text-black">Bio : {chefDetails[0]?.bio} </Card.Text>
            <Card.Text className="text-black">Years of experience : {chefDetails[0]?.like}</Card.Text>
            <Card.Text className="text-black">Numbers of recipes : {chefDetails[0]?.recipe}</Card.Text>
            <Card.Text>
              <FaThumbsUp></FaThumbsUp>  {chefDetails[0]?.like}
            </Card.Text>
          </div>
        </div>
      </section>
      <div className="d-lg-flex gap-3">
        {chefDetails.map((singleDetails) => (
          <Details
            key={singleDetails.id}
            singleDetails={singleDetails}
          ></Details>
        ))}
      </div>
    </Container>
  );
};

export default ChefRecipe;
