import React, { ReactNode } from "react";
import "./Typography.scss";

type Components =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span"
  | "b"
  | "strong"
  | "label"
  | "li";

type Variants =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h5--light"
  | "h5--regular"
  | "h6"
  | "body--md"
  | "body--sm"
  | "mono--2xl"
  | "mono--xl"
  | "mono--md"
  | "mono--sm"
  | "mono--xs";

interface TypographyProps {
  component: Components;
  variant?: Variants;
  children: ReactNode;
  className?: string;
}

export const Typography: React.FC<TypographyProps> = ({
  component: Component,
  variant = Component,
  children,
  className = "",
}) => {
  return (
    <Component className={`${variant} ${className}`}>{children}</Component>
  );
};
