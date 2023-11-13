import React, { ReactNode } from "react";
import "./Card.css";
type CardProps = React.HTMLProps<HTMLDivElement> & {
  children: ReactNode;
};

const Card: React.FC<CardProps> = ({ children, ...props }) => {
  return (
    <div className="card" {...props}>
      <div className="card__title"></div>
      <div className="card__body">{children}</div>
    </div>
  );
};

export default Card;
