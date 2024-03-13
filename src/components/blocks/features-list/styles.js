import styled from "styled-components";

export const StyledFeatures = styled.section`
  position: relative;
  display: flex;
  padding-left: 90px;
  padding-right: 90px;
  box-sizing: border-box;
  padding-top: 100px;
  padding-bottom: 100px;
  flex-direction: column;
  align-items: center;
`;

export const StyledFeatureList = styled.ul`
  margin: 0;
  padding: 0;
  margin-top: 64px;
  margin-bottom: 64px;
  margin-left: -20px;
  font-size: 0;
  line-height: 0;
  text-align: center;
`;

export const StyledFeatureItem = styled.li`
  display: inline-block;
  margin-left: 20px;
  margin-top: 20px;
  font-size: 18px;
  line-height: 27px;
  vertical-align: top;
  text-align: left;
  overflow: hidden;
`;
