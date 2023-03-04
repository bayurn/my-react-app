import MainBanner from "./components/banner-main";

const SectionBanner = (props) => {
  const { image } = props;
  return (
    <>
      <MainBanner image={image} />
    </>
  );
};

export default SectionBanner;
