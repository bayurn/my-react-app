import Styled from "styled-components";

export const StyledSection = Styled.div`
  display: grid;
  grid-template-columns: auto auto;
  margin-bottom: 32px !important;
`;

export const StyledWrapper = Styled.div`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    max-width: 400px;
    height: 100%;
    max-height: 350px;
    display: inline-block;
    background: linear-gradient(-90deg, rgba(0, 0, 0, 0) 21%, rgb(0, 0, 0) 100%);
    opacity: 0.9;
  }

  &:first-child {
    padding-right: 10px;
  }
`;

export const StyledImg = Styled.img`
  height: 350px;
  object-fit: cover;
`;

export const StyledTextContent = Styled.div`
  position: absolute;
  left: 16px;
  top: calc(50% - 50px);
  color: white;
  z-index: 1;

  h2 {
    margin-top: 0;
  }

  span {
    display: inline-block;
    width: 50%;
  }
`;
