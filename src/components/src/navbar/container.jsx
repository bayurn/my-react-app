import { Navbar, StyledNavbar, MenuWrapper, Menu } from "./style";

const NavbarSection = () => {
  return (
    <Navbar>
      <StyledNavbar>
        <MenuWrapper>
          <Menu>Home</Menu>
          <Menu>About</Menu>
          <Menu>Product</Menu>
        </MenuWrapper>
      </StyledNavbar>
    </Navbar>
  );
};

export default NavbarSection;
