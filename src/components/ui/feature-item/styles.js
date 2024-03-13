import styled from "styled-components";

export const StyledFeature = styled.article`
  width: 540px;
  min-height: 197px;
  padding: 20px;
  background-color: ${(props) =>
    props.isNegative
      ? props.theme.colorStoreBackground
      : props.theme.colorFermBackground};
  box-sizing: border-box;
`;

export const StyledFeatureHeader = styled.header`
  display: flex;
  margin-bottom: 20px;
  text-align: left;
`;

export const StyledFeatureImg = styled.img`
  float: left;
  width: 56px;
  height: 56px;
  margin-right: 20px;
`;

export const StyledFeatureOwner = styled.span`
  display: inline-block;
  min-height: 25px;
  margin-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 14px;
  line-height: 25px;
  color: ${(props) => props.theme.colorWhite};
  background-color: ${(props) =>
    props.isNegative
      ? props.theme.colorStoreOwner
      : props.theme.colorFermOwner};
`;

export const StyledFeatureText = styled.p`
  padding: 0;
  margin: 0;
  text-align: left;
  font-size: 18px;
  padding-right: 34px;
`;
