import React from "react";
import { StyledButton, } from "./styles";

export default function Button({ children, link, onClick, ...props }) {
  return <StyledButton   {...props}{...(link ? { to: link } : { as: "button", onClick, type: "button" })}>{children}</StyledButton>;
}
