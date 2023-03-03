import Styled from "styled-components";

export const StyledSection = Styled.div`
  position: relative;
  overflow: hidden;
  box-shadow: rgb(0 0 0 / 20%) 2px 3px 6px;
  transition: all 0.3s ease 0s;
  border-radius: 10px;
  width: 100%;
  height: 600px;

  &:hover{
    cursor: pointer;
    box-shadow: rgb(0 0 0 / 20%) 5px 8px 6px;
  }

  img {
    height: 100%;
    object-fit: cover;
  }
`;

export const StyledWrapper = Styled.div`
  position: relative;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-align: center;
  font-family: 'Roboto', sans-serif;

  h2 {
    color: #2E3840;
  }

  span {

  }
`;

export const StyledMiniCard = Styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: white;
  z-index: 1;
  margin: 12px;
  border-radius: 8px;
  padding: 12px;
  height: 190px;
`;
