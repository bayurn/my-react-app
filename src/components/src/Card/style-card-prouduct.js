import Styled from "styled-components";

export const StyledSection = Styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  border-radius: 8px;
  border: 1px solid gray;
  height: 100%;
  max-height: 423px;

  img {
    border-radius: 8px 8px 0 0;
  }
`;

export const StyledButton = Styled.button`
  height: 46px;
  padding: 8px 12px;
`;
