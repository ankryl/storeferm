import React from "react";
import Logo from "../../ui/logo/logo";
import Button from "../../ui/button/button";
import { StyledHeader } from "./styles";
import { AppRoute } from "../../../const";
import { StyledButton } from "./styles";
import { useLocation } from "react-router-dom";
import { Li } from "../../ui/elements";

const links = [
  {
    to: AppRoute.MAIN,
    item: <StyledButton link={AppRoute.MAIN}>Главная</StyledButton>
  },
  { to: AppRoute.ORDER, item: <Button link={AppRoute.ORDER}>Купить</Button> }
];

export default function Header() {
  const pageUrl = useLocation().pathname;
  return (
    <StyledHeader>
      <Logo />
      {links
          .filter((link) => link.to !== pageUrl)
          .map((link) => (
            <Li key={link.to}>{link.item}</Li>
          ))}
    </StyledHeader>
  );
}
