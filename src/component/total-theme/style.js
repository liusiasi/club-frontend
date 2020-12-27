import styled from 'styled-components'

export const ContainsNumber = styled.div`
  margin: 10px auto;
  width:577px; /*设置文字盒子的宽度，这里设置其和图片宽度一致*/
	height:50px;
	line-height:50px;/*设置行高和高度一样，可以实现单行元素，在垂直方向上的居中*/
  text-align:center;/*设置文字水平居中*/
  &.title{
    font-size: 40px;
  }
`