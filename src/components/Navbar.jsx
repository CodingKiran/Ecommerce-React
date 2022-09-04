import React, { useContext } from "react";

// styled Components
import styled from "styled-components";

// Link From react-router-dom
import { Link } from "react-router-dom";

// MUI Icons
import { Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { CartContext } from "../context/CartContext";

// Main Container holds all the divs
const Container = styled.div`
  height: 60px;
  width: 100%;
  padding-top: 20px;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
  @media (min-width: 320px) and (max-width: 480px) {
    padding-left: 2px;
  }
`;

// logo image
const Image = styled.img`
  max-width: 100px;
  cursor: pointer;
`;

// search box
const InputBox = styled.div`
  @media (min-width: 320px) and (max-width: 480px) {
    display: none;
  }
`;

// container for profile, wishlist, and cart
const RightSide = styled.div`
  display: flex;
  margin-bottom: 10px;
  gap: 15px;
  align-items: center;
  justify-content: center;
`;

// Wrapper for right side icons and text
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  cursor: pointer;
`;

const Navbar = (prod) => {
  const {
    state: { cart },
  } = useContext(CartContext);

  return (
    <>
      <Container>
        {/* Home Page Link */}
        <Link to="/">
          <Image
            src="https://images.indianexpress.com/2021/01/myntra.png"
            alt=""
          />
        </Link>
        {/* Home Page Link Ends Here */}

        {/*Search Box */}
        <InputBox>
          <form>
            <input
              style={{
                width: "100%",
                maxWidth: "500px",
                minWidth: "350px",
                height: "40px",
                borderRadius: "2px solid grey",
                paddingLeft: "10px",
              }}
              type="search"
              placeholder="Search For Products, Brands, and More"
            />
          </form>
        </InputBox>
        {/*Search Box Ends Here */}

        <RightSide>
          {/* Wrapper One - Profile */}
          <Link
            to="/profile"
            style={{
              textDecoration: "none",
              color: "black",
              alignSelf: "center",
            }}
          >
            <Wrapper>
              <PersonIcon sx={{ textAlign: "center", margin: "auto" }} />
              <Typography>Profile</Typography>
            </Wrapper>
          </Link>

          {/* Wrapper Two - Wishlist */}
          {/* <Link
            to="/wishlist"
            style={{
              textDecoration: "none",
              color: "black",
              alignSelf: "center",
            }}
          >
            <Wrapper>
              <Badge badgeContent={0} color={"primary"}>
                <FavoriteBorderIcon sx={{ margin: "auto" }} />
              </Badge>
              <Typography>Wishlist</Typography>
            </Wrapper>
          </Link> */}

          {/* Wrapper Three - Cart */}
          <Wrapper>
            <Link
              to="/cart"
              style={{
                textDecoration: "none",
                color: "black",
                alignSelf: "center",
              }}
            >
              <Badge badgeContent={cart.length} color={"primary"}>
                <ShoppingCartIcon />
              </Badge>
              <Typography>Bag</Typography>
            </Link>
          </Wrapper>
        </RightSide>
      </Container>
    </>
  );
};

export default Navbar;
