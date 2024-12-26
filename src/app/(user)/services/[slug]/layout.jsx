import WelcomeBalance from "./../../../../components/WelcomeBalance/welcomeBalance";
import React from "react";

const ServicesLayout = ({ children }) => {
  return (
    <div>
      {" "}
      <WelcomeBalance />
      {children}
    </div>
  );
};

export default ServicesLayout;
