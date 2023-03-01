import { Navbar, StyledNavbar, MenuWrapper, Menu } from "./style";

const NavbarSection = () => {
  const listMenu = [
    {
      name: "Home",
    },
    {
      name: "About",
    },
    {
      name: "Products",
    },
  ];

  return (
    <Navbar>
      <StyledNavbar>
        <MenuWrapper>
          {listMenu.map((menu, key) => {
            return <Menu key={key}>{menu.name}</Menu>;
          })}
        </MenuWrapper>
      </StyledNavbar>
    </Navbar>
  );
};

export default NavbarSection;
