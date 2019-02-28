import React from "react";
import "./App.css";
import ImageThumbnail from "./components/HeaderComponents/ImageThumbnail";
import HeaderContainer from "./components/HeaderComponents/HeaderContainer";
import HeaderTitle from "./components/HeaderComponents/HeaderTitle";
import HeaderContent from "./components/HeaderComponents/HeaderContent";
import CardContainer from "./components/CardComponents/CardContainer";

const App = () => {
  return (
    <div>
      <ImageThumbnail />
      <HeaderContainer />
      <HeaderTitle />
      <HeaderContent />
      <CardContainer />
    </div>
  );
};

export default App;
