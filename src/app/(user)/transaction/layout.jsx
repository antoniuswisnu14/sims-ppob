import WelcomeBalance from "../../../components/WelcomeBalance/welcomeBalance";
import React from "react";

const TransactionLayout = ({ children }) => {
  return (
    <div>
      <WelcomeBalance />
      {children}
    </div>
  );
};

export default TransactionLayout;
