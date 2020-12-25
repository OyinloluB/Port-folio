import React from "react";
import Styles from "./button.module.scss";

const Button = ({ primary, color, text, arrow, handleClick }) => {
  let useStyle = {
    backgroundColor: "transparent",
  };

  if (primary) {
    useStyle = {
      backgroundColor: `${color}`,
      color: "#fafafa",
      border: `1px solid ${color}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
    };
  }
  return (
    <button style={useStyle} onClick={handleClick}>
      {arrow ? <img src={arrow} alt="arrow" /> : ""}
      {text}
    </button>
  );
};

export default Button;
