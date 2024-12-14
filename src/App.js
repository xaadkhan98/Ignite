import React from "react";
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyle";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:id" element={<Home />} />
      </Routes>
      <div>Hi</div>
    </>
  );
};

export default App;
