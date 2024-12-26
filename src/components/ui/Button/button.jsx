import React from "react";
import styles from "./button.module.css";
import clsx from "clsx";

const Button = ({ children, className, onClick, type }) => {
  return (
    <button
      type={type ? type : "button"}
      className={className ? className : styles.button}
      onClick={onClick || (() => {})}
    >
      {children}
    </button>
  );
};

export default Button;
