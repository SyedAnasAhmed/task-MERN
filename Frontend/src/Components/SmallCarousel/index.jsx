import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.css"

const SmallCarousel = () => {
  // const settings = {
  //     dots: true,
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 3,
  //     slidesToScroll: 3
  //   };

  return (
    <>
      <div className={`w-[90%] mx-auto flex items-center h-52 bg-white ${styles.carouselmaindiv} `}>
        <div className="flex items-center w-[100px] gap-2 ">
            <FontAwesomeIcon size="2xl" icon={faCaretLeft} />
          {/* <Slider {...settings}> */}
          {data.map((d) => (
            <img src={d.img} alt="" />
          ))}
          {/* </Slider> */}
          <FontAwesomeIcon size="2xl" icon={faCaretRight} />
        </div>
      </div>
    </>
  );
};

const data = [
  {
    img: `https://f.nooncdn.com/mpcms/EN0002/assets/6c849243-a5a9-4823-bee2-90b373f81bbd.png?format=avif`,
  },
  {
    img: `https://f.nooncdn.com/mpcms/EN0001/assets/e2950a81-2ff7-427b-a8e7-e5aa972d389b.png?format=avif`,
  },
  {
    img: `https://f.nooncdn.com/mpcms/EN0001/assets/9ab98bb1-a13d-4779-a59d-6339312601e6.png?format=avif`,
  },
  {
    img: `https://f.nooncdn.com/mpcms/EN0001/assets/a9899c42-5dbb-4d3f-b557-dbcc6a59e813.png?format=avif`,
  },
  {
    img: `https://f.nooncdn.com/mpcms/EN0001/assets/1c65b569-c17e-4b40-b16a-e90f29f8ef56.png?format=avif`,
  },
  {
    img: `https://f.nooncdn.com/mpcms/EN0001/assets/e0a1f2a8-e1a2-4801-8cc5-c107d91799e3.png?format=avif`,
  },
  {
    img: `https://f.nooncdn.com/mpcms/EN0001/assets/1361fea6-391a-49df-bbd4-18e472166065.png?format=avif`,
  },
  {
    img: `https://f.nooncdn.com/mpcms/EN0001/assets/0d89ae58-c161-4398-81b9-823dfeb0242b.png?format=avif`,
  },
  {
    img: `https://f.nooncdn.com/mpcms/EN0001/assets/539e2c8d-2ccc-40ec-aff5-28e1900a5634.png?format=avif`,
  },
  {
    img: `https://f.nooncdn.com/mpcms/EN0001/assets/0aa356f7-2140-467b-bf24-b5c3d8a2da91.png?format=avif`,
  },
  {
    img: `https://f.nooncdn.com/mpcms/EN0001/assets/98a7d802-3801-415f-86ce-2336ab80df5a.png?format=avif`,
  },
  {
    img: `https://f.nooncdn.com/mpcms/EN0001/assets/ca3ffbdc-3d5d-4963-8e4a-0a0578161bfc.png?format=avif`,
  },
  {
    img: `https://f.nooncdn.com/mpcms/EN0001/assets/5980eeb4-aea7-4a6e-9810-43b135335a55.png?format=avif`,
  },
  //   {
  //     img: `https://f.nooncdn.com/mpcms/EN0002/assets/529f462b-cd24-4667-a125-61b0b2adc42f.png?format=avif`,
  //   },
];

export default SmallCarousel;
