import Styled from "styled-components";

export const StyledSection = Styled.div`
  // display: flex;
  // flex-direction: column;
  text-align: center;
  border-radius: 8px;
  border: 1px solid gray;
  height: 100%;
  position: relative;
  cursor: pointer;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  transition: all 0.3;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  }

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

  h2 {
    margin: 0 0 16px;
  }
`;

export const StyledButton = Styled.button`
  height: 46px;
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid #4aaf4a;
  color: white;
  margin-top: 8px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 8px;
  cursor: pointer;
  margin-top: 16px;
  font-weight: 600;
  background: linear-gradient(#0000, rgb(0 0 0/15%)) top/100% 800%;
  background-color: #4aaf4a;
  transition: all 0.3;

  &:hover {
    // background-image: linear-gradient(rgb(0 0 0/40%) 0 0);
    background-position: bottom;
  }
`;
