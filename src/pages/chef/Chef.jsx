import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import SingleChef from "../singleChef/SingleChef";

import "./Chef.css";

const Chef = () => {
  const [allChef, setAllChef] = useState([]);
  useEffect(() => {
    fetch("https://my-chef-server.onrender.com/chef")
      .then((res) => res.json())
      .then((data) => setAllChef(data))
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Container className="mt-5">
      <div className="text-center">
        <h2 className="fs-2 fw-bold">All Italian Branded chef is Here !!</h2>
        <p>
          "Discover the Authentic Flavors of Italy with Our Delicious Recipes -
          Straight from the Kitchen of an Italian Chef
        </p>
      </div>
      <div className="d-lg-flex flex-lg-wrap gaps mt-4">
        {allChef.map((singleChef) => (
          <SingleChef key={singleChef._id} singleChef={singleChef}></SingleChef>
        ))}
      </div>
    </Container>
  );
};

export default Chef;
