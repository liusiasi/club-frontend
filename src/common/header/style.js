import styled from 'styled-components'
import logo from './logo.jpg'

export const HeaderWrapper = styled.div`
  position: relative;
  height: 100px;
  border-bottom: 1px solid #f0f0f0;
  z-index: 1;
  background: -webkit-linear-gradient(top, #ffffff, #f9f9f9);
`

export const Nav = styled.div`
  width: 810px;
  height: 100%;
  box-sizing: border-box;
  margin: 0 auto;
`

export const NavItem = styled.div`
  padding: 0 93px 0px 0px;
  line-height: 100px;
  color: #333;
  &.left {
    float: left;
    font-size: 22px;
  }
  &.right {
    float: right;
    font-size: 18px;
    color:#000;
  }
  cursor: pointer;
  a {
    color : #000
    :hover {
      color: #417dc9;
    }
  }
`

export const Logo = styled.div`
  float: left;
  display: block;
  margin: 20px 10px 0px 0px;
  height: 62px;
  width: 62px;
  background: url(${logo});
  background-size: contain;
  background-repeat:no-repeat;

`