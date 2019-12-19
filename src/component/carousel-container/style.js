import styled from 'styled-components'

export const CarouselContainer = styled.div`
  width: 250px;
  margin: 10px 0;
  border: 1px solid #e6e6e6;
  h3 {
    font-size: 18px;
    color: #555;
    padding: 10px 10px ;
  }
  .slick-next:before {
    content:'→'
  }
  .slick-prev:before {
    content:'←'
  }
  .slick-slider slick-initialized {
    text-align: center;
    width: 250px;
    overflow: hidden;
    color:#000;
  }
  
  .slick-slider h3 {
    color: #555;
    width: 250px;
    line-height: 30px;
    text-align: center;
    font-size: 15px;
  }

  .slick-slider img, video,audio {
    height:160px;
    width: 250px;
  }
  .slick-slider audio {
    height:80px;
    width: 250px;
  }

  .slick-prev:before, .slick-next:before {
    color: black;
  }
`