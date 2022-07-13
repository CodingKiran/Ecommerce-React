import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import CloseIcon from "@mui/icons-material/Close";
import styled from "styled-components";

const Container = styled.div`
  max-width: 500px;
  width: 100%;
  height: 170px;
  position: relative;
  left: 20%;

  @media (min-width: 320px) and (max-width: 480px) {
    left: 0.5%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  border: 1px solid grey;
  border-radius: 4px;
  padding-left: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-right: 5px;
  margin-left: 3px;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const Li = styled.li`
  list-style: none;
`;

const Image = styled.img`
  max-width: 100%;
  width: 80px;
`;

const Heading4 = styled.h4`
  margin-bottom: 8px;
  margin-top: 12px;
`;

const Details = styled.div``;

const Price1 = styled.span`
  color: grey;
  text-decoration: line-through;
`;
const Offer = styled.span`
  color: orange;
  font-weight: bold;
`;

const PriceDetails = styled.div`
  margin-top: 8px;
`;

const AmountSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PricingWrapper = styled.div``;

const WrapperMini = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 300;
  font-size: 14px;
  margin-bottom: 15px;
  position: relative;
  left: 10%;
`;

const Heading41 = styled.h5`
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 10px;
`;

const Para = styled.p``;
const Span = styled.span`
  position: relative;
  left: 150px;
`;

const Bag = () => {
  const {
    state: { cart },
    dispatch,
  } = useContext(CartContext);

  const [total, setTotal] = useState(0);
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    setTotal(
      cart.reduce(
        (acc, curr) => acc + Number(curr.price.split(".")[1]) * curr.qty,
        0
      )
    );
    setPrice(
      cart.reduce((acc, curr) => acc + Number(curr.price1.split(".")[1]), 0)
    );

    setDiscount(
      cart.reduce(
        (acc, curr) =>
          acc + Number(curr.price1.split(".")[1] - curr.price.split(".")[1]),
        0
      )
    );
  }, [cart]);

  return (
    <Container>
      {cart.map((prod, index) => (
        <Li key={index}>
          <Wrapper>
            <Image src={prod.imgURL} alt="" />
            <Details>
              <Heading4> {prod.heading}</Heading4>
              <span>{prod.desc} </span>
              <PriceDetails>
                <span> {prod.price} </span>
                <Price1>{prod.price1} </Price1>
                <Offer>{prod.offer} </Offer>
              </PriceDetails>
            </Details>
            <CloseIcon
              onClick={() => {
                dispatch({ type: "REMOVE_FROM_CART", payload: prod, qty: 1 });
              }}
            ></CloseIcon>
          </Wrapper>
        </Li>
      ))}
      <AmountSection>
        <PricingWrapper>
          <Heading41>PRICE DETAILS ({cart.length} items)</Heading41>

          <WrapperMini>
            <Para>Total MRP</Para>
            <Span>{price} </Span>
          </WrapperMini>
          <WrapperMini>
            <Para>Discount on MRP</Para>
            <Span style={{ color: "green", fontWeight: 500 }}>-({discount})</Span>
          </WrapperMini>
          <WrapperMini>
            <Para>Convience Fee</Para>
            <Span>Rs.99 </Span>
          </WrapperMini>
          <WrapperMini>
            <Para>Total Amount</Para>
            <Span>{total + 99} </Span>
          </WrapperMini>
        </PricingWrapper>
      </AmountSection>
    </Container>
  );
};

export default Bag;
