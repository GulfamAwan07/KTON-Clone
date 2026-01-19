import React from 'react'
import { Route, Routes } from 'react-router';
import Home from "./pages/Home.jsx";
import NFTDetail from "./pages/NFTDetail.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/card/:id" element={<NFTDetail />} />
    </Routes>
  )
}

export default App;