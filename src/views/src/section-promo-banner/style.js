import Styled from "styled-components";

export const StyledSection = Styled.div`
  margin-top: 32px;
`;

export const StyledWrapperImg = Styled.div`
  width: 100%;
  height: 200px;

  img {
    object-fit: cover;
    border-radius: 8px;
    object-position: 0 80%;
  }
`;
