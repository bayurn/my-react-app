import Styled from "styled-components";

export const StyledSection = Styled.div`
  display: flex;
  flex-direction: row;
`;

export const WrapperCard = Styled.div`
  // width: 33.333%;
  &:not(:last-child) {
    margin-right: 16px;
  }
`;
