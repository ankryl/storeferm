import React from "react";
import logo from "../../../assets/logo.svg";
import { StyledLogo, StyledText } from "./styles";
import { AppRoute } from "../../../const";

export default function Logo() {
  return (
    <StyledLogo to={AppRoute.MAIN}>
      <img src={logo} alt="логотип"/>
      <StyledText>Фермерские продукты</StyledText>
    </StyledLogo>
  );
}
