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
    left: 0px;
    top: 0;
    width: calc(100% - 300px);
    max-width: 256px;
    height: 100%;
    max-height: 350px;
    display: inline-block;
    background: linear-gradient(-90deg, rgba(0, 0, 0, 0) 21%, rgb(0, 0, 0) 100%);
    opacity: 0.9;
  }

  // &:last-child {
  //   padding-left: 10px;
  // }

  &:first-child {
    padding-right: 10px;
  }

  // &:last-child {
  //   margin-left: 6px;
  //   left: 4px;
  // }
`;

export const StyledImg = Styled.img`
  height: 350px;
  object-fit: cover;
`;
