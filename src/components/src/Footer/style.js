import Styled from "styled-components";

export const StyledFooter = Styled.div`
  // background-color: #2C3333;
  margin-top: 32px;
  border-top: 1px solid #2C3333;
  padding: 16px 0;
`;

export const StyledWrapperMenu = Styled.div`
  display: grid;
  grid-template-columns: 30% auto auto auto;
  justify-content: space-between;

  .menu-right {
    display: flex;
    justify-content: space-between;
  }
`;

export const StyledMenuList = Styled.div`
  font-family: 'Roboto', sans-serif;

  .wr-logo {
    display: flex;
    h2 {
      margin: 0 0 20px;
    }
  }

  .ic-socmed {
    display: flex;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    h3 {
      margin: 0 0 20px;
    }
    span {
      &:not(:last-child) {
        margin-bottom: 8px;
      }
    }
  }
`;
