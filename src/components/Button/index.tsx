import React, { ReactNode } from "react";
import "./Button.scss";
import { Link, LinkProps as ReactRouterLinkProps, To } from "react-router-dom";

type ButtonBaseProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size: "sm" | "md" | "lg";
  color: "primary" | "ghost";
  variant: "contained" | "outlined" | "text";
  children: ReactNode;
  className?: string;
};

type LinkProps = Omit<ReactRouterLinkProps, keyof ButtonBaseProps> & {
  to: To;
};

type ButtonProps = ButtonBaseProps & Partial<LinkProps>;

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
