import React from "react";
import "./App.css";
import CardContainer from "./components/CardComponents/CardContainer";
import ImageThumbnail from "./components/HeaderComponents/ImageThumbnail";
import HeaderContainer from "./components/HeaderComponents/HeaderContainer";
import HeaderTitle from "./components/HeaderComponents/HeaderTitle";
import HeaderContent from "./components/HeaderComponents/HeaderContent";

const App = () => {
  return (
    <div>
      <CardContainer />
      <ImageThumbnail />
      <HeaderContainer />
      <HeaderTitle />
      <HeaderContent />
    </div>
  );
};

export default App;
