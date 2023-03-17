import Styled from "styled-components";

export const StyledSection = Styled.div`
  display: grid;
  grid-template-columns: auto auto;
  margin-bottom: 32px !important;
`;

export const StyledWrapper = Styled.div`
  &:last-child {
    padding-left: 10px;
  }

  &:first-child {
    padding-right: 10px;
  }

  img {
    height: 350px;
    object-fit: cover;
  }
`;
