import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
const images = [
   {
    id:1,
    image:"/images/banner_thumbnail.jpg",
   },
   {
    id:2,
    image:"/images/banner_thumbnail.jpg",
   },
   {
    id:3,
    image:"/images/banner_thumbnail.jpg",
   }
];

function MainBanner() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} controls={false}>
        {
            images.map((item)=>{
              return  <Carousel.Item key={item.id}>
                <img src={item.image} alt='item' />
            </Carousel.Item>
            })
        }
    </Carousel>
  );
}

export default MainBanner;