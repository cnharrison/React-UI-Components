import React from "react";
import "./App.css";
import CardContainer from "./components/CardComponents/CardContainer";
import ImageThumbnail from "./components/HeaderComponents/ImageThumbnail";
import HeaderContainer from "./components/HeaderComponents/HeaderContainer";

const App = () => {
  return (
    <div>
      <CardContainer />
      <ImageThumbnail />
      <HeaderContainer />
    </div>
  );
};

export default App;
