import React from "react";
import "./App.css";
import ImageThumbnail from "./components/HeaderComponents/ImageThumbnail";
import HeaderContainer from "./components/HeaderComponents/HeaderContainer";
import HeaderTitle from "./components/HeaderComponents/HeaderTitle";
import HeaderContent from "./components/HeaderComponents/HeaderContent";
import CardContainer from "./components/CardComponents/CardContainer";
import CardBanner from "./components/CardComponents/CardBanner";
import CardContent from "./components/CardComponents/CardContent";

const App = () => {
  return (
    <div className="app">
      <div className="thumb-box">
        <ImageThumbnail />
      </div>
      <div className="header-and-card">
        <HeaderContainer>
          <div className="title-content">
            <HeaderTitle />
            <HeaderContent />
          </div>
        </HeaderContainer>
        <CardContainer>
          <CardBanner />
          <CardContent />
        </CardContainer>
      </div>
    </div>
  );
};

export default App;
