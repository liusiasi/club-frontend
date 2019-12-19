import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  background:rgba(0,0,0,.75);
  height: 50px
`
export const FooterContent = styled.div`
  width: 90%;
  height:100%;
  margin: 0 auto;
`

export const FooterItem = styled.div`
  padding: 0 15px;
  line-height: 50px;
  color: #ffffff;
  &.left {
    float: left;
    font-size: 15px;
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