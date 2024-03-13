import styled from "styled-components";

export const ControllSection = styled.section`
  padding: 20px 20px 20px 20px;
  border: ${(props) => props.theme.testdefaultBorder};
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.04),
    0 0 1px rgba(0, 0, 0, 0.04);
  background-color: ${(props) => props.theme.colorWhite};
`;

export const Image = styled.img`
  width: 248px;
  height: 248px;
  margin-right: 20px;
`;

export const Content = styled.div`
  position: relative;
  float: right;
  width: 417px;
  min-height: 248px;
  padding-bottom: 30px;
  box-sizing: border-box;
`;

export const Price = styled.span`
  padding: 4px 8px;
  font-size: 14px;
  font-weight: bold;
  line-height: 21px;
  background-color: ${(props) => props.theme.backgroundColorBlue};
`;
