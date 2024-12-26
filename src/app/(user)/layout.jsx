import React from "react";
import Navbar from "../../components/Navbar/navbar";

const layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="wrapper">{children}</div>
    </div>
  );
};

export default layout;
