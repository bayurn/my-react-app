import Styled from "styled-components";

export const StyledNavbar = Styled.div`
  background-color: white;
  box-shadow: rgb(0 0 0 / 12%) 0px 2px 6px;
  padding: 20px 0;
`;

export const Navbar = Styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  width: 100%;
  height: 64px;
`;

export const MenuWrapper = Styled.div`
  display: flex;
  margin: auto;
  align-items: center;

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
  font-size: 14px !important;
  font-weight: 400;
  color: #3A3A3A;
  cursor: pointer;

  &:hover {
    color: #68B984;
  }

  &:not(:last-child) {
    margin-right: 12px;
  }
`;
