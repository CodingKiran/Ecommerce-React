import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div``;
const Profile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState({
    name: "",
    password: "",
  });

  //  function handleClick(e){
  //   e.preventDefault()
  //   setIsLoggedIn(true)
  // }
  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoggedIn(true);
    const newPerson = { ...name };
    try {
       await fetch("http://localhost:8080/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPerson),
      });

      
    } catch (error) {
      console.log(error);
    }

    setName({ name: "", password: "" });
    setIsLoggedIn(true);
  }

  function updateForm(value) {
    return setName((prev) => {
      return { ...prev, ...value };
    });
  }

  const loggedTrue = <h1> Welcome {name.name} </h1>;
  const loginForm = (
    <>
      <Container>
        <div>
          <form onSubmit={handleSubmit} action="" method="POST">
            <input
              value={name.name}
              onChange={(e) => updateForm({ name: e.target.value })}
              type="text"
              name="name"
              placeholder="Name"
            />
            <br />

            <input
              value={name.password}
              onChange={(e) => updateForm({ password: e.target.value })}
              type="Password"
              name="password"
              placeholder="Password"
            />
            <br />
            <button type="submit">Login</button>
          </form>
        </div>
      </Container>
    </>
  );
  return <div> {isLoggedIn === false ? loginForm : loggedTrue}</div>;
};

export default Profile;
