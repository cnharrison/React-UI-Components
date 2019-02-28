import React from "react";
import "./App.css";
import CardContainer from "./components/CardComponents/CardContainer";
import ImageThumbnail from "./components/HeaderComponents/ImageThumbnail";

const App = () => {
  return (
    <div>
      <CardContainer />
      <ImageThumbnail />
    </div>
  );
};

export default App;
