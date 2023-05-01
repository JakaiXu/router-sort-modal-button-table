import React from "react";
import classNames from "classnames";

const Button = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) => {

  const classes = classNames(rest.className, "flex items-center px-3 py-1.5 border", {
    "border-blue-500 bg-blue-500 text-white": primary,
    "border-gray-500 bg-gray-500 text-black": secondary,
    "border-green-500 bg-green-500 text-white": success,
    "border-yellow-500 bg-yellow-500 text-white": warning,
    "border-red-500 bg-red-500 text-white": danger,
    "border-gray-500 text-white": outline,
    "rounded-full border-gray-500 text-black": rounded,
    "text-blue-500": outline && primary,
    "text-red-500": warning && danger,
  });
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};

export default Button;
