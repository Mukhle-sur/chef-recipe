import React from "react";
import { Container } from "react-bootstrap";
import product from "../../assets/product.png";
import productOne from "../../assets/product-2.png";
import productTwo from "../../assets/product-3.png";

const Product = () => {
  return (
    <div className="mt-5 bg-light p-5 mb-5">
      <Container>
        <div>
          <h2>Newly Released Products</h2>
          <p className="w-50">
            As requested, the new products are here. Get your cookery swag on
            with my latest collection and most trending items
          </p>
        </div>
        <div className="d-lg-flex justify-content-lg-between column-gap-2 mb-5">
          <div className="border border-secondary p-3 rounded me-lg-2">
            <img src={product} alt="" className="img-fluid" />
            <h3>Oak Wood Cutting Board</h3>
            <p>Price : 20.00$</p>
            <p>
              Finely crafted wood board for all kinds of ingredients. Board does
              meat, vegetable
            </p>
          </div>
          <div className="border border-secondary p-3 rounded me-lg-2">
            <img src={productOne} alt="" className="img-fluid" />
            <h3>State of The Art Spoon</h3>
            <p>Price : 8.00$</p>
            <p>
              Finely crafted wood board for all kinds of ingredients. Board does
              meat, vegetable
            </p>
          </div>
          <div className="border border-secondary p-3 rounded">
            <img src={productTwo} alt="" className="img-fluid" />
            <h3>Custom Branded Kettle</h3>
            <p>Price : 32.00$</p>
            <p>
              Finely crafted wood board for all kinds of ingredients. Board does
              meat, vegetable
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Product;
