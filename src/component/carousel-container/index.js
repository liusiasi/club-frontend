import React,{
  memo
} from 'react';
import{
  CarouselContainer
} from './style';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
export default memo(function carouselContainer(props) {
  const {
    title,
    data,
  } = props;
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows:true
  };
  const carouselData = () => {
    switch (title) {
      case '图片':
        return data.map((item,index) => (<div key={index}><a href={item.url} target="_blank" rel="noopener noreferrer" ><img src={item.url}/></a><h3>{item.name}</h3></div>));
      case '视频':
        return data.map((item,index) => (<div key={index}><a href={item.url} target="_blank" rel="noopener noreferrer"><video src={item.url} controls="controls"/><h3>{item.name}</h3></a></div>));
      case '音频':
        return data.map((item,index) => (<div key={index}><audio src={item.url} controls="controls"/><h3>{item.name}</h3></div>));
      default:
        return '';
    }
  }
  return (
    <CarouselContainer>
      <h3>{title}</h3>
      <Slider {...settings}>
        {carouselData()}
      </Slider>
  </CarouselContainer>
  )
})
