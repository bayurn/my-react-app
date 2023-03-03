import Styled from "styled-components";

export const StyledSection = Styled.div`
  padding-bottom: 32px;
  .container {
    margin: auto;

    @media (min-width: 1441px) {
      max-width: 1344px;
    }
    @media (min-width: 1216px) and (max-width: 1440px) {
      max-width: 1152px;
    }
    @media (min-width: 1023px) and (max-width: 1215px) {
      max-width: 960px;
    }
    @media (max-width: 1022px) {
      padding: 0 1.5rem;
    }
  }
`;
