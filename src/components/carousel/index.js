import { Carousel as CarouselDiv } from '3d-react-carousal';
import Slide1 from './Slide1';
import Slide2 from './Slide2';
import Slide3 from './Slide3';

const slides = [
  <Slide1 />,
  <Slide2 />,
  <Slide3 />
];

const Carousel = () => {
  return (
    <CarouselDiv slides={slides} autoplay={false} interval={1000} />
  );
};

export default Carousel;