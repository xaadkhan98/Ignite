import React from "react";
//Components
import Home from "./pages/Home";
import Nav from "./components/Nav";
//Styling
import GlobalStyles from "./components/GlobalStyle";
//Routing
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:id" element={<Home />} />
      </Routes>
      <div>Hi</div>
    </>
  );
};

export default App;
