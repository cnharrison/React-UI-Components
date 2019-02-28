import React from "react";
import "./App.css";
import CardContainer from "./components/CardComponents/CardContainer";
import ImageThumbnail from "./components/HeaderComponents/ImageThumbnail";
import HeaderContainer from "./components/HeaderComponents/HeaderContainer";
import HeaderTitle from "./components/HeaderComponents/HeaderTitle";

const App = () => {
  return (
    <div>
      <CardContainer />
      <ImageThumbnail />
      <HeaderContainer />
      <HeaderTitle />
    </div>
  );
};

export default App;
