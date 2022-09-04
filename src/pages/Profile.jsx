import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div``;
const Profile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState("");
  function handleClick(e) {
    e.preventDefault();
    setIsLoggedIn(true);
  }

  function handleChange(e) {
    setName(e.target.value);
  }
  const loggedTrue = <h1> Welcome {name} </h1>;
  const loginForm = (
    <>
      <Container>
        <h1> Login Page</h1>

        <form action="" method="post">
          <input
            onChange={handleChange}
            value={name}
            type="text"
            name="name"
            placeholder="Name"
            required="true"
          />
          <br />

          <input type="Password" name="Password" placeholder="Password" />
          <br />
          <button onClick={handleClick} type="submit">
            Login
          </button>
        </form>
      </Container>
    </>
  );
  return <div> {isLoggedIn === false ? loginForm : loggedTrue}</div>;
};

export default Profile;
