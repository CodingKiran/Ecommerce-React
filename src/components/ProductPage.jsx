import React, { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../context/CartContext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Li = styled.li`
  list-style: none;
  width: 80%;
`;

const ImgWrapper = styled.div`
  position: relative;
  left: 20%;
`;

const Image = styled.img`
  width: 100%;
  max-width: 300px;
  padding-left: 0;
`;

const Heading3 = styled.h3`
  font-size: 2rem;
`;

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

const Button = styled.button`
  background-color: #ff3e6c;
  width: fit-content;
  padding: 10px 20px;
  display: flex;
  border-radius: 4px;
  color: white;
  margin-top: 20px;
`;

const DetailsWrapper = styled.div`
  @media (min-width: 1200px) {
    position: absolute;
    left: 40%;
    top: 150px;
  }
`;

const Desc = styled.p`
  font-size: 20px;
  margin-bottom: 15px;
  margin-top: 15px;
`;

const Container = styled.div``;

const ProductPage = () => {
  const {
    state: { productlist },
    dispatch,
  } = useContext(CartContext);

  return (
    <Container>
      {productlist.map((item, index) => (
        <Li key={index}>
          <ImgWrapper>
            <Image src={item.imgURL} alt="" />
          </ImgWrapper>
          <DetailsWrapper>
            <Heading3> {item.heading} </Heading3>
            <Desc> {item.desc} </Desc>
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
              Add To Cart
            </Button>
          </DetailsWrapper>
        </Li>
      ))}
    </Container>
  );
};

export default ProductPage;
