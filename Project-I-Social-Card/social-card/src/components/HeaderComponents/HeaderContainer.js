import React from "react";
import "./Header.css";

function HeaderContainer(props) {
  return <div className="header-container">{props.children}</div>;
}

export default HeaderContainer;
