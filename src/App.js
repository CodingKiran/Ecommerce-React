import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
// import Wishlist from "./pages/Wishlist";
// import Profile from "./pages/Profile";
import { createGlobalStyle } from "styled-components";
import Bag from "./pages/Bag";

import { CartState } from "./context/CartContext";
import ProductPage from "./components/ProductPage";

const GlobalStyle = createGlobalStyle`
body { 
  margin: 0;
  padding:0;
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif;
}

h1, h2, h3, h4, p {
  padding: 0;
  margin: 0;
}

`;

function App() {
  return (
    <div>
      <CartState>
        <GlobalStyle />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home key={1} />} />
          {/* <Route path="/profile" element={<Profile key={2} />} /> */}
          <Route path="/cart" element={<Bag key={3} />} />
          {/* <Route path="/wishlist" element={<Wishlist key={4} />} /> */}
          <Route path="/productpage" element={<ProductPage key={4} />} />
        </Routes>
      </CartState>
    </div>
  );
}

export default App;
