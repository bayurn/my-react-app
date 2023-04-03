import Styled from "styled-components";

export const StyledSection = Styled.div`
  margin-top: 32px;
`;

export const StyledWrapperCard = Styled.div`
  display: flex;
  align-items: center;
`;

export const StyledWrapper = Styled.div`
  width: 25%;
  height: 100%;

  &:not(:last-child) {
    margin-right: 16px;
  }
`;
