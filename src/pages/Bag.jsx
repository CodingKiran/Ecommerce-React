import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import CloseIcon from "@mui/icons-material/Close";
import styled from "styled-components";

const Container = styled.div`
  max-width: 900px;
  height: 170px;
  position: relative;
  left: 50%;
  translate: -30%;
  

  @media (min-width: 20px) and (max-width: 480px) {
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
  margin-left: px;
  justify-content: space-between;
  margin-bottom: 20px;
  max-width: 500px;
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

const Details = styled.div`

`;

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
  display: flex;
  gap: 5px;
`;

const AmountSection = styled.div`
  display: flex;
  justify-content: space-between;

  @media (min-width: 20px) and (max-width: 480px) {
    position: relative;
  }
`;

const PricingWrapper = styled.div`
  margin-left: 0px;
`;

const WrapperMini = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 00;
  font-size: 14px;
  margin-bottom: 15px;
  position: relative;
  left: 10%;
`;

const Heading41 = styled.h5`
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 10px;
  margin-top: 30px;
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
  const [discount, setDiscount] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce(
        (acc, curr) => acc + Number(curr.price.split(".")[1]) * curr.qty,
        0
      )
    );
    setPrice(
      cart.reduce((acc, curr) => acc + Number(curr.price1.split(".")[1]*curr.qty), 0)
    );

    setDiscount(
      cart.reduce(
        (acc, curr) =>
          acc + Number(curr.price1.split(".")[1] - curr.price.split(".")[1])*curr.qty,
        0
      )
    );
  }, [cart]);

  const noItems = (
    <div>
      <p>Cart Feels Light</p>
    </div>
  );

  const allItems = (
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

                <select  focused style={{border:"solid black"}}
                  value={prod.qty}
                  onChange={(e) =>
                    dispatch({
                      type: "CHANGE-CART-QTY",
                      payload: { imgURL: prod.imgURL, qty: e.target.value },
                    })
                  }
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </PriceDetails>
            </Details>
            <CloseIcon
              onClick={() => {
                dispatch({ type: "REMOVE_FROM_CART", payload: prod });
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
            <Span>₹{price} </Span>
          </WrapperMini>
          <WrapperMini>
            <Para>Discount on MRP</Para>
            <Span style={{ color: "green", fontWeight: 500 }}>
              -₹{discount}
            </Span>
          </WrapperMini>
          <WrapperMini>
            <Para>Convenience Fee</Para>

            <Span> ₹{price <= 1000 ? 99 : 0} </Span>
          </WrapperMini>
          <WrapperMini>
            <Para>Total Amount</Para>

            <Span>₹{total <= 1000 ? total + 99 : total}</Span>
          </WrapperMini>
        </PricingWrapper>
      </AmountSection>
    </Container>
  );

  return <div>{cart.length === 0 ? noItems : allItems}</div>;
};

export default Bag;
