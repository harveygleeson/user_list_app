import "./Card.css";
import React from "react";

interface cardProps {
  className?: string;
  children: React.ReactNode;
}

const Card = (props: cardProps) => {
  const classes = "card " + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default Card;
