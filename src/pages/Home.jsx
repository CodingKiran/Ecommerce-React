import React from "react";
import Products from "../data/Products.json";
import ProductItem from "../components/ProductItem";
import styled from "styled-components";


const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  grid-row-gap: 7.7rem;
  position: relative;
  right: 1%;
  float: right;

  @media (min-width: 320px) and (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    left: 1%;
    right: 1%;
    top: -70px;
  }
`;

const Home = () => {
  
  return (
    <Container>
      {Products.map((product) => (
        <ProductItem
          key={product.id}
          imgURL={product.img}
          heading={product.heading}
          desc={product.desc}
          price={product.price}
          price1={product.price1}
          offer={product.offer}
          rating={product.rating}
        />
      ))}
    </Container>
  );
};

export default Home;
