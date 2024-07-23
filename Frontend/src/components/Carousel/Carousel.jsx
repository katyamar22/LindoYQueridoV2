import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';
import Image1 from '../../../public/assets/Carousel/carousel-1.png';
import Image2 from '../../../public/assets/Carousel/carousel-2.png';
import Image3 from '../../../public/assets/Carousel/carousel-3.png';
import Image4 from '../../../public/assets/about-image.png';

function AboutCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="about-img" src={Image4}/>
      </Carousel.Item>
      <Carousel.Item>
        <img className="about-img" src={Image1}/>
      </Carousel.Item>
      <Carousel.Item>
        <img className="about-img" src={Image2}/>
      </Carousel.Item>
      <Carousel.Item>
        <img className="about-img" src={Image3}/>
      </Carousel.Item>
    </Carousel>
  );
}

export default AboutCarousel;
