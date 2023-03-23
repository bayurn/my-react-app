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
      <StyledNavbar className="container-mobile">
        <div className="logo-type container">
          <h2>MACARENA</h2>
        </div>
        <MenuWrapper className="container">
          {listMenu.map((menu, key) => {
            return <Menu key={key}>{menu.name}</Menu>;
          })}
        </MenuWrapper>
      </StyledNavbar>
    </Navbar>
  );
};

export default NavbarSection;
