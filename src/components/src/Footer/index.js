import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { StyledFooter, StyledWrapperMenu, StyledMenuList } from "./style";

export const Footer = () => {
  const company = {
    image: "",
    description: "",
    socialMedia: [
      {
        icons: "fa-brands fa-facebook",
      },
      {
        icons: "fa-brands fa-intagram",
      },
      {
        icons: "fa-brands fa-twitter",
      },
    ],
  };

  return (
    <StyledFooter>
      <div className="container">
        <StyledWrapperMenu>
          <StyledMenuList>
            <div className="wr-logo">
              <FontAwesomeIcon icon="fa-solid fa-square-h" />
              <h2>Macarena Hotel</h2>
            </div>
            <h3>{company.description}</h3>
            <div className="ic-socmed">
              {company.socialMedia.map((item) => {
                return <FontAwesomeIcon icon={item.icons} />;
              })}
            </div>
          </StyledMenuList>
        </StyledWrapperMenu>
      </div>
    </StyledFooter>
  );
};

export default Footer;
