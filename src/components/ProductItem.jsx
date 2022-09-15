import React, { useContext } from "react";
import styled from "styled-components";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

// import products from "../data/Products.json";

const Price = styled.div`
  display: flex;
  gap: 4px;
  margin-top: 6px;
  font-weight: bold;
  font-size: 12px;
`;

const Price1 = styled.div`
  text-decoration: line-through;
  opacity: 0.5;
`;

const Offer = styled.div`
  color: orange;
  margin-bottom: 10px;
`;

const Image = styled.img`
  min-width: 70px;
  width: 100%;
  max-width: 200px;
`;

const Para = styled.p`
  font-size: 14px;
  opacity: 0.5;
  margin-top: 6px;
`;

const DetailsWrapper = styled.div`
  padding-left: 3px;
  padding-right: 3px;
  padding-bottom: 15px;
  position: absolute;
  max-width: 195px;
  min-width: 80px;
  width: 100%;

  &:hover {
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
    transition: 1s;
  }
`;

const Button = styled.button`
  text-align: center;
  margin-bottom: 10px;
  width: 100%;
  
  max-width: 200px;
  text-align: center;
  padding: 10px;
  box-shadow: px 0 10px rgba(0, 0, 0, 0.3);
  background-color: white;
  z-index: 1000;
`;

const Button1 = styled.button`
  text-align: center;
  margin-bottom: 10px;
  width: 100%;
  max-width: 200px;
  text-align: center;
  padding: 10px;
  box-shadow: px 0 10px rgba(0, 0, 0, 0.3);
  background-color: white;
  z-index: 1000;
`;

const Container = styled.div`
  position: relative;

  &:hover ${DetailsWrapper} {
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
    transition: 1s;
  }

  /* &:hover ${Button} {
    display: block;
  } */

  @media (min-width: 320px) and (max-width: 480px) {
    top: 25%;
    left: -1%;
  }
`;

const Rating = styled.div`
  background-color: white;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  bottom: 10px;
  left: 0;
  right: 0;
  text-align: center;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  width: fit-content;
  font-size: 10px;
  padding: 3px;
  margin-left: 5px;
`;

const ProductItem = (prod, id) => {
  const {
    state: { cart },
    dispatch,
  } = useContext(CartContext);

  return (
    <>
      <Container>
        <li style={{ listStyle: "none" }} key={prod.id}>
          <Link to="/productpage">
            <Image
              onClick={() => dispatch({ type: "ONIMGCLICK", payload: prod })}
              src={prod.imgURL}
              alt=""
            />
          </Link>
          <Rating>{prod.rating}</Rating>

          <DetailsWrapper>
            {cart.some((c) => c.imgURL === prod.imgURL) ? (
              <Button1
                onClick={() =>
                  dispatch({ type: "REMOVE_FROM_CART", payload: prod })
                }
              >
                <FavoriteBorderIcon
                  sx={{ fontSize: "medium", paddingRight: "3px" }}
                />
                <span style={{ paddingLeft: "5px", fontSize: "16px" }}>
                  Remove From Cart
                </span>
              </Button1>
            ) : (
              <Button
                onClick={() =>
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: { ...prod, qty: 1 },
                  })
                }
              >
                <FavoriteBorderIcon
                  sx={{ fontSize: "medium", paddingRight: "3px" }}
                />
                <span style={{ paddingLeft: "5px", fontSize: "16px" }}>
                  Add To Cart
                </span>
              </Button>
            )}

            <h4>{prod.heading}</h4>

            <Para>
              <span>{prod.desc}...</span>
            </Para>

            <Price>
              <span>{prod.price}</span>

              <Price1>
                <span>{prod.price1}</span>
              </Price1>

              <Offer>
                <span>{prod.offer}</span>
              </Offer>
            </Price>
          </DetailsWrapper>
        </li>
      </Container>
    </>
  );
};

export default ProductItem;
