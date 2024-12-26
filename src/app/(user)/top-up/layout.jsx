import React from "react";
import WelcomeBalance from "../../../components/WelcomeBalance/welcomeBalance";
const TopUpLayout = ({ children }) => {
  return (
    <div>
      <WelcomeBalance />
      {children}
    </div>
  );
};

export default TopUpLayout;
