import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./component/Header";
import { Body } from "./component/Body";
import { restro } from "./restro.js";
import { useState } from "react";
import { Restrocard } from "./component/Restrocard.js";
const AppLayout = () => {
  return (
    <div className="applayout">
      <Header />
      <Body />
      
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
console.log(AppLayout);
