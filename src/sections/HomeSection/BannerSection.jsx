import Banner1 from "../../assets/BANNER1.jpg";
import Banner2 from "../../assets/BANNER2.jpg";
import CustomCarousel from "../../components/CustomCarousel";

const BannerSection = () => {
  const heights = [Banner1, Banner2];

  return <CustomCarousel imgs={heights} />;
};

export default BannerSection;
