import Styled from "styled-components";

export const Navbar = Styled.nav`
  position: sticky;
  z-index: 998;
  top: 0;
  width: 100%;
`;

export const StyledNavbar = Styled.div`
  background-color: white;
  box-shadow: rgb(0 0 0 / 12%) 0px 2px 6px;
  // padding: 16px 0;
  position: relative;
  overflow: hidden;
  height: 64px;

  .logo-type {
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
  }
`;

export const MenuWrapper = Styled.div`
  display: flex;
  margin: auto;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Menu = Styled.a`
  font-size: 16px !important;
  font-weight: 600;
  color: #3A3A3A;
  cursor: pointer;
  padding: 23px 12px;
  margin: 0;
  text-decoration: none;
  position: relative;

  &:hover {
    color: #68B984;
    &::after {
      content: "";
      background: #68B984;
      border-radius: 8px 8px 0px 0px;
      height: 4px;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
    }
  }
`;
