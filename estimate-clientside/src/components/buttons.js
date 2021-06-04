// react libraries
import React from "react";

const Button = ({ classes, disabled, submit = false, onclick, children }) => {
  return (
    <button
      className={classes}
      type={submit ? "submit" : "button"}
      disabled={disabled}
      onClick={onclick}
    >
      {children}
    </button>
  );
};

export default Button;
