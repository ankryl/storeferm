import styled from "styled-components";
import checkboxSelect from "./../../../assets/checkbox.svg";
import { css } from "styled-components";
import { Swiper } from "swiper/react";
import Price from "../../ui/price/price";
import { P } from "../../ui/elements/index";
import Button from "../../ui/button/button";

export const ConotrollColumn = styled.div`
  max-height: 100%;
  width: 353px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const ControllSection = styled.section`
  padding: 24px 20px 20px 20px;
  border: ${(props) => props.theme.testdefaultBorder};
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.04),
    0 0 1px rgba(0, 0, 0, 0.04);
  background-color: ${(props) => props.theme.colorWhite};
`;

export const OrderWrapper = styled.div`
  display: flex;
  padding: 40px ${(props) => props.theme.paddingSideMain} 0
    ${(props) => props.theme.paddingSideMain};
  background-color: ${(props) => props.theme.backgroundColorGray};
  max-height: 768px;
  box-sizing: border-box;
  position: absolute;
  top: 80px;
  bottom: 80px;
`;

export const CheckboxLabel = styled.span`
  position: relative;
  display: flex;
  height: 56px;
  font-size: 18px;
  text-align: left;
  align-items: center;
  cursor: pointer;

  &::after {
    content: "";
    right: 0;
    display: block;
    position: absolute;
    height: 22px;
    width: 22px;
    ${(props) =>
      props.$isChecked
        ? css`
            background-color: #fc9b27;
            border: 1px solid rgba(0, 0, 0, 0.1);
            background-image: url(${checkboxSelect});
            background-repeat: no-repeat;
            background-position: center center;
          `
        : css`
            background-color: ${props.theme.backgroundColorGray};
            border: 1px solid rgba(0, 0, 0, 0.1);
          `}
  }
`;

export const ProductSwiper = styled(Swiper)`
  width: 727px;

  .swiper-pagination {
    display: none;
  }

  .swiper-slide {
    flex-shrink: 1;
  }
`;

export const PriceValue = styled(Price)`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 32px;
`;

export const Address = styled.input`
  margin-bottom: 20px;
  margin-top: 24px;
  height: 48px;
  width: 100%;
  border: ${(props) => props.theme.testdefaultBorder};
  padding-left: 12px;
  padding-right: 12px;
  font-size: 14px;
  box-sizing: border-box;

  ::placeholder {
    color: ${(props) => props.theme.colorBlackForText};
  }
`;

export const PriceLabel = styled(P)`
  font-size: 14px;
  margin-bottom: 8px;
`;

export const StyledButton = styled(Button)`
  width: 100%;
`;
