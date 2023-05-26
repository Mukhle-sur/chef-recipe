import React from "react";
import Banner from "../banner/Banner";
import Chef from "../chef/Chef";
import FoodBlog from "../foodBlog/FoodBlog";
import Product from "../prodect/Product";
import ChefRecipe from "../chefRecipe/ChefRecipe";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const data = useLoaderData();
  // console.log(data)
  return (
    <div>
      <Banner></Banner>
      <Chef></Chef>
      <FoodBlog></FoodBlog>
      <Product></Product>
      {/* <ChefRecipe></ChefRecipe> */}
    </div>
  );
};

export default Home;
