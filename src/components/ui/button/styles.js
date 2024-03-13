import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledButton = styled(Link)`
  display: block;
  min-height: 60px;
  padding: 0 24px;
  width: 260px;
  font-size: ${(props) => props.theme.fontSizeDefault};
  font-weight: bold;
  line-height: 58px;
  text-align: center;
  text-decoration: none;
  color: ${(props) => props.theme.colorWhite};
  background-color: ${(props) => props.theme.colorForButton};
  border: none;
  background-image: none;
  box-shadow: none;
  cursor: pointer;
  transition: background-color 0.2s ease-out, box-shadow 0.2s ease-out;
  box-sizing: border-box;
  font-family: "Inter", "Arial", sans-serif;

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.colorForButtonHover};
    box-shadow: inset 0 4px 0 rgba(0, 0, 0, 0.14);
  }

  &:active {
    box-shadow: none;
  }
`;
