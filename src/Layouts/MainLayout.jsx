import React, { Fragment } from "react";
import NavBar from "../components/NavBar/NavBar";
import GameStructure from "../components/GameStructure/GameStructure";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <GameStructure />
      <Footer />
    </>
  );
};

export default MainLayout;
