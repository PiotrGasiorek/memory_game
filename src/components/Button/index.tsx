import React, { ReactNode } from "react";
import "./Button.scss";
import { Link, LinkProps } from "react-router-dom";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    Omit<LinkProps, keyof React.ButtonHTMLAttributes<HTMLButtonElement>> {
  size: "sm" | "md" | "lg";
  color: "primary" | "ghost";
  variant: "contained" | "outlined" | "text";
  children: ReactNode;
  to?: string;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  size,
  color,
  variant,
  children,
  className = "",
  to,
  ...otherProps
}) => {
  const allClassNames = `button--${size} button--${color} button--${variant} button ${className}`;

  if (to)
    return (
      <Link to={to} className={allClassNames}>
        {children}
      </Link>
    );

  return (
    <button className={allClassNames} {...otherProps}>
      {children}
    </button>
  );
};
