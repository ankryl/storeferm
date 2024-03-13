import styled, { css } from "styled-components";
import { Ul } from "../elements";

export const TitleList = styled(Ul)`
  display: flex;
  margin-bottom: 16px;
  margin-top: 16px;
`;

export const TitleButton = styled.li`
  margin-right: 8px;

  &:last-child {
    margin-right: 0;
  }
`;

export const TitleText = styled.a`
  padding: 8px 12px;
  font-size: 14px;
  line-height: 1.5;
  font-weight: 400;
  ${(props) =>
    props.$isSelect
      ? css`
          background-color: ${props.theme.backgroundColorActiveTab};
          border: 1px solid rgba(0, 0, 0, 0.1);
          color: ${props.theme.colorWhite};
        `
      : css`
          background-color: ${props.theme.backgroundColorGray};
          border: 1px solid rgba(0, 0, 0, 0.1);
          color: ${props.theme.colorBlack};
        `}
`;

export const Content = styled.div`
  font-size: 14px;
  text-align: left;
  max-height: 105px;
  overflow-y: overlay;
`;
