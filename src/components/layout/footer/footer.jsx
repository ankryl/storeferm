import React from "react";
import Logo from "../../ui/logo/logo";
import { StyledFooter, StyledCopyright } from "./styles";

export default function Footer() {
  return (
    <StyledFooter>
      <Logo />
      <StyledCopyright>Создано 2021</StyledCopyright>
    </StyledFooter>
  );
}
