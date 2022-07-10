import React, { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../context/CartContext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Typography } from "@mui/material";

const Li = styled.li`
  list-style: none;
`;

const ImgWrapper = styled.div``;

const Image = styled.img`
  width: 100%;
  max-width: 500px;
  padding-left: 0;
`;

const Heading3 = styled.h3``;

const Price = styled.span``;
const Price1 = styled.span`
  color: grey;
  text-decoration: line-through;
`;
const Offer = styled.span`
  color: orange;
  font-weight: bold;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 5px;
`;

const Button = styled.div`
  background-color: #ff3e6c;
  width: fit-content;
  padding: 10px 20px;
  display: flex;
  border-radius: 4px;
  color: white;
  margin-top: 20px;
`;

const ProductPage = (product) => {
  const {
    state: { productlist },
    dispatch,
  } = useContext(CartContext);
  return (
    <>
      <ul>
        {productlist.map((item, i) => (
          <Li key={i}>
            <ImgWrapper>
              <Image src={item.imgURL} alt="" />
            </ImgWrapper>
            <Heading3> {item.heading} </Heading3>
            <Price> {item.desc} </Price>
            <Wrapper>
              <Price>{item.price} </Price>
              <Price1>{item.price1}</Price1>
              <Offer>{item.offer}</Offer>
            </Wrapper>
            <Button
              onClick={() => dispatch({ type: "ADD_TO_CART", payload: item })}
            >
              <ShoppingCartIcon
                sx={{ fontSize: "large", paddingRight: "5px" }}
              />
              <Typography>ADD TO CART</Typography>
            </Button>
          </Li>
        ))}
      </ul>
    </>
  );
};

export default ProductPage;
