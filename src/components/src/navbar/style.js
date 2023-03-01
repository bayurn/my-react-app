import Styled from "styled-components";

export const Navbar = Styled.div`
  position: fixed;
  z-index: 999;
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
`;

export const MenuWrapper = Styled.div`
  display: flex;
  margin: auto;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

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
`;

export const Menu = Styled.a`
  font-size: 16px !important;
  font-weight: 600;
  color: #3A3A3A;
  cursor: pointer;
  padding: 0 12px;

  &:hover {
    color: #68B984;
  }

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    padding-right: 0px;
  }
`;
