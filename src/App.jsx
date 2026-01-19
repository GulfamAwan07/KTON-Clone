import React from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home.jsx";
import Stake from "./components/Stake.jsx";
import Wallet from "./components/Wallet.jsx";
// import Navbar from "./components/Navbar.jsx";

const App = () => {
  return (
    <>
     

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Stake" element={<Stake />} />
        <Route path="/Wallet" element={<Wallet />} />
      </Routes>
    </>
  );
};

export default App;
