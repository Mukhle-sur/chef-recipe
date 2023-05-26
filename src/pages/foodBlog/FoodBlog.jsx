import React from "react";
import { Container, Image } from "react-bootstrap";
import food from "../../assets/food.jpg";

const FoodBlog = () => {
  return (
    <div className="mt-5 bg-light p-5">
      <div className="text-center">
        <h1 className="">"Tasty and Nutritious Recipes to Fuel Your Day"</h1>
        <p className="w-50 mx-auto fs-5">
          We love hearing from our readers! That's why we encourage users to
          rate and review our recipes. You can read reviews from other home
          cooks and leave your own feedback to help others make the most of our
          recipes.
        </p>
      </div>
      <Container className="d-lg-flex justify-content-lg-between align-items-center column-gap-3">
        <div>
          <h2 className="fs-2">Puffy Pancakes Glazed With Caramel Topped With Fruits</h2>
          <p className="fs-5">
            When it comes to cooking and eating, there's nothing quite like the
            pleasure of enjoying a delicious meal. Whether you're a seasoned
            home cook or someone who's just starting to explore the joys of the
            kitchen, there's always something new to discover and enjoy.
          </p>
        </div>
        <div>
          <Image src={food} fluid />
        </div>
      </Container>
    </div>
  );
};

export default FoodBlog;
