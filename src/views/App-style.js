import Styled from "styled-components";

export const StyledSection = Styled.div`
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
    @media (min-width: 813px) and (max-width: 1022px) {
      padding: 0 1.5rem;
    }
    @media (max-width: 812px) {
      // padding: 0 1.5rem;
      // width: 100%;
      // height: 100%;
      // min-width:100%;
      // min-height: 100%;
      // overflow-x: hidden;
    }
  }

  .container-mobile {
    margin: auto;

    @media (max-width: 812px) {
      padding: 0 1.5rem;
      width: 100%;
      height: 100%;
      min-width:100%;
      min-height: 100%;
      overflow-x: hidden;
    }
  }
`;
