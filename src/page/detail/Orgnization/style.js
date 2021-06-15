

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
  width: 330px;
  right: 20px;
  top:20px;
  border: 1px solid #e5e5e5;
  .ant-carousel .slick-slide {
    text-align: center;
    height: 220px;
    line-height: 240px;
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
    height:220px;
    width: 330px;
  }

  .anticon {
    display : none;
    background-color: #efefef;
    width: 20px;
    height: 30px;
    line-height: 32px;
  }

  &:hover .anticon {
    display : inline-block;
  }

`

export const CarouselRight= styled.div`
    top: 100px;
    right: 0px;
    position: absolute;
    z-index: 1000;
    cursor:pointer;
    opacity: 0.5;
`

export const CarouselLeft= styled.div`
    top: 100px;
    left: 0px;
    position: absolute;
    z-index: 1000;
    cursor:pointer;
    opacity: 0.5;
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
  font-size: 16px;
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