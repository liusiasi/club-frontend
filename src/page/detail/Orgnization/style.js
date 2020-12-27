

import styled from 'styled-components'

export const TitleContext = styled.div`
  font-size: 34px;
  line-height: 35px;
  margin-bottom: 25px;
  width:580px;
`

export const DetailLeftTop = styled.div`
  width: 900px;
  padding: 20px 0px;
  border-bottom: 1px solid #e5e5e5;
  position:relative;
  min-height:250px; 
`
export const CarouselRightTop = styled.div`
  position:absolute;
  width: 250px;
  right: 50px;
  top:10px;
  .ant-carousel .slick-slide {
    text-align: center;
    height: 160px;
    line-height: 160px;
    background: #364d79;
    overflow: hidden;
  }
  .slick-dots li button:before {
    content: ' '!important
  }

  .ant-carousel .slick-dots {
    width: 70%
  }
  
  .ant-carousel .slick-slide h3 {
    color: #fff;
  }

  .ant-carousel .slick-slide img {
    height:160px;
    width: 250px;
  }
`


export const DetailMiddle = styled.div`
  width: 940px;
  padding: 20px 0px;
  min-height:250px; 
  .ant-tabs-tabpane {
    padding-left: 10px;
  }
`

export const ParaContext = styled.div`
  font-size: 14px;
  font-family: Microsoft YaHei,SimHei,Verdana;
  word-wrap: break-word;
  line-height: 24px;
  a {
    color: rgba(0, 0, 0, 0.65);
    :hover {
      color: #417dc9;
    }
  }
`