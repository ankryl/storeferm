import styled from "styled-components";
import Button from "../../ui/button/button";

export const StyledHeader = styled.header`
  display: flex;
  padding-left: 90px;
  padding-right: 90px;
  width: 1280px;
  margin: 0 auto;
  position: relative;
  height: 80px;
  padding-top: 0;
  padding-bottom: 0;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colorWhite};
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.04),
    0 0 1px rgba(0, 0, 0, 0.04);
  align-items: center;
  z-index: 5;
  box-sizing: border-box;
`;

export const StyledButton = styled(Button)`
  position: relative;
  display: inline-block;
  padding: 0;
  width: auto;
  min-width: 0;
  background-color: ${(props) => props.theme.colorWhite};
  color: ${(props) => props.theme.colorBlack};
  font-size: 18px;
  line-height: 1;
  min-height: 18px;
  padding-top: 21px;
  padding-bottom: 21px;

  &::after {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 19px;
    height: 1px;
    background-color: ${(props) => props.theme.fontColorBlack};
    opacity: 0;
    transition: opacity 0.2s ease-out;
    content: "";
  }

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.colorWhite};

    &::after {
      opacity: 1;
    }
  }

  &:hover {
    box-shadow: none;
  }
`;