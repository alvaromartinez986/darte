import { Stack } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Banner1 from '../assets/BANNER1.jpg';
import Banner2 from '../assets/BANNER2.jpg';

const CustomCarousel = () => {
  const heights = [Banner1, Banner2];

  return (
    <Carousel
      animation="fade"
      navButtonsAlwaysVisible
      autoPlay
      cycleNavigation
      NextIcon={<ArrowForwardIosIcon />}
      PrevIcon={<ArrowBackIosIcon />}
      indicatorIconButtonProps={{
        style: {
          color: '#F6D0E2',
          paddingRight: '7px'
        }
      }}
      activeIndicatorIconButtonProps={{
        style: {
          color: '#8F148F'
        }
      }}
      navButtonsProps={{
        style: {
          color: '#8F148F',
          backgroundColor: 'transparent'
        }
      }}
      navButtonsWrapperProps={{
        style: {
          fontSize: '32px'
        }
      }}
    >
      {heights.map((item, i) => (
        <Stack key={`test3-item-${i}`} sx={{ height: '100%' }}>
          <img src={item} alt="banne1" />
        </Stack>
      ))}
    </Carousel>
  );
};

export default CustomCarousel;
