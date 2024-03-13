import styled from "styled-components";
import { Ul, Li } from "../elements";

export const List = styled(Ul)`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

export const Option = styled(Li)`
  font-size: 14px;

  :last-child {
    margin-bottom: 0;
  }
`;

export const Property = styled.span`
  font-weight: bold;
`;
