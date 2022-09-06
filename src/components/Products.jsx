import React from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
`;

const Products = () => {
  return (
    <Container>
      {popularProducts.map((product) => (
        <Product product={product} key={product.id} /> // keys used because console warned about using unique keys.
      ))}
    </Container>
  );
};

export default Products;
