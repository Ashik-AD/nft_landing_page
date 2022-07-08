import { FC } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomArrow from "./arrow/CustomArrow";
const Carousel: FC<PropsType> = (props) => {
  const { children, noOfScroll, noOfShow } = props;
  const settings: Settings = {
    slidesToScroll: noOfScroll ? noOfScroll : 3.5,
    slidesToShow: noOfShow ? noOfShow : 3.7,
    lazyLoad: "progressive",
    useCSS: true,
    arrows: true,
    nextArrow: <CustomArrow />,
    prevArrow: <></>,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 678,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return <Slider {...settings}>{children}</Slider>;
};

interface PropsType {
  children: any;
  noOfScroll?: number;
  noOfShow?: number;
}

export default Carousel;
