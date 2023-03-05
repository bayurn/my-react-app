import Styled from "styled-components";

export const StyledSection = Styled.div`
  margin-top: 32px;
`;

export const StyledContainer = Styled.div`
  display: flex;
`;

export const StyledWrapperImg = Styled.div`
  flex: 1;
  overflow: hidden;
  border-radius: 4px;
  width: 100%;
  max-height: 500px;
  transition: all .5s;

  &:not(:last-child) {
    margin-right: 4px;
  }

  img {
    object-fit: cover;
    filter: grayscale(1);
  }

  &:hover {
    flex: 3;
  }

  &:hover img {
    filter: none;
    width: 600px;
    height: 500px;
  }
`;
