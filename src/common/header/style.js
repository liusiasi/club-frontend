import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  position: relative;
  height: 100px;
  border-bottom: 1px solid #f0f0f0;
  z-index: 1;
  background: -webkit-linear-gradient(top, #ffffff, #f9f9f9);
`

export const Nav = styled.div`
  width: 90%;
  height: 100%;
  padding: 0 50px;
  box-sizing: border-box;
  margin: 0 auto;
`

export const NavItem = styled.div`
  padding: 0 15px;
  line-height: 100px;
  color: #333;
  &.left {
    float: left;
    font-size: 20px;
  }
  &.right {
    float: right;
    font-size: 10px;
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
  margin: 20px 25px;

  height: 62px;
  width: 151px;
  background: url(http://login.wanfangdata.com.cn//Content/src/img/anxs-logo_sns.png);
  background-size: contain;
`