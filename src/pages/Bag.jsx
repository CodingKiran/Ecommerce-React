import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import DeleteIcon from "@mui/icons-material/Delete";
import styled from "styled-components";

const Container = styled.div`
  margin-left: 30px;
`;

const Wrapper = styled.div`
  width: 500px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const Li = styled.li`
  list-style: none;
`;

const Image = styled.img`
  width: 100px;
  margin-bottom: 30px;
`;

const Bag = () => {
  const {
    state: { cart },
    dispatch,
  } = useContext(CartContext);

  // const [total, setTotal] = useState(0);

  // useEffect(() => {
  //   setTotal(
  //     cart.reduce(
  //       (prev, curr) => console.log(prev) + console.log(Number(curr.price.split(".")[1])),
  //       0
  //     )
  //   );
  // }, [cart]);

  return (
    <Container>
      {cart.map((prod, index) => (
        <Li key={index}>
          <Wrapper>
            <Image src={prod.imgURL} alt="" />
            <h4> {prod.heading}</h4>
            <span> {prod.price} </span>

            <button
              style={{ height: "fit-content", width: "fit-content" }}
              onClick={() => {
                dispatch({ type: "REMOVE_FROM_CART", payload: prod, qty: 1 });
              }}
            >
              <DeleteIcon></DeleteIcon>
            </button>
          </Wrapper>
        </Li>
      ))}
      <span style={{ textAlign: "center" }}>
        No.Of Items :{cart.length} items
      </span>
      <span>Total: {} </span>
    </Container>
  );
};

export default Bag;
