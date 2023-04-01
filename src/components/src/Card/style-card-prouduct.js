import Styled from "styled-components";

export const StyledSection = Styled.div`
  // display: flex;
  // flex-direction: column;
  text-align: center;
  border-radius: 8px;
  border: 1px solid gray;
  height: 100%;
  position: relative;

  img {
    border-radius: 8px 8px 0 0;
    width: 100%;
    height: 228px;
  }
`;

export const StyledContent = Styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
`;

export const StyledButton = Styled.button`
  height: 46px;
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid green;
  background: green;
  color: white;
  margin-top: 8px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 8px;
  cursor: pointer;

  &:hover {
    filter: brightness(0.85);
  }
`;
