import { StyledFooter, StyledWrapperMenu, StyledMenuList } from "./style";

export const Footer = () => {
  const company = {
    image: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed erat placerat, ultricies lacus ac, ultricies libero. Phasellus placerat scelerisque nisi, sit amet ullamcorper tellus ultricies at. Phasellus sit amet libero non nisi varius ultrices vitae eu diam. Mauris urna mauris, aliquet sed quam ut, imperdiet aliquam mi. Integer molestie sit amet nunc nec tincidunt.",
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

  const explore = [
    {
      title: "Hotel 5 Star",
    },
    {
      title: "Apartment",
    },
    {
      title: "Environment",
    },
    {
      title: "Facilities",
    },
  ];

  const blog = [
    {
      title: "Book Room",
    },
    {
      title: "Rent Car",
    },
    {
      title: "Pool",
    },
    {
      title: "Food",
    },
  ];

  const about = [
    {
      title: "Our hotel",
    },
    {
      title: "History",
    },
    {
      title: "Contact Us",
    },
    {
      title: "Branch",
    },
  ];

  return (
    <StyledFooter>
      <div className="container">
        <StyledWrapperMenu>
          <div className="wr-menu">
            <StyledMenuList>
              <div className="wr-logo">
                <h2>Macarena Hotel</h2>
              </div>
              <span>{company.description}</span>
              <div className="ic-socmed">
                {/* {company.socialMedia.map((item) => {
                return (
                );
              })} */}
              </div>
            </StyledMenuList>
          </div>
          <div className="menu-right">
            <StyledMenuList>
              <div className="wrapper">
                <h3>EXPLORE</h3>
                {explore.map((list, key) => {
                  return <span key={key}>{list.title}</span>;
                })}
              </div>
            </StyledMenuList>
            <StyledMenuList>
              <div className="wrapper">
                <h3>BLOG</h3>
                {blog.map((list, key) => {
                  return <span key={key}>{list.title}</span>;
                })}
              </div>
            </StyledMenuList>
            <StyledMenuList>
              <div className="wrapper">
                <h3>ABOUT</h3>
                {about.map((list, key) => {
                  return <span key={key}>{list.title}</span>;
                })}
              </div>
            </StyledMenuList>
          </div>
        </StyledWrapperMenu>
      </div>
    </StyledFooter>
  );
};

export default Footer;
