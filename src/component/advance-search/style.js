import styled from 'styled-components'
export const SearchWraper = styled.div`
  height:150px;
  width: 810px;
  margin: 0 auto;
`
export const SearchRadio = styled.div`
  height: 40px;
  margin: 10px auto;
  .ant-radio-button-wrapper {
    width: 92px;
  }
`
export const SearchInput = styled.div`
  height: 40px;
  margin: 10px auto;
`
export const NavItem = styled.div`
  padding: 0 93px 0px 0px;
  line-height: 40px;
  color: #333;
  &.left {
    float: left;
    font-size: 22px;
  }
  &.right {
    float: right;
    font-size: 18px;
  }
  cursor: pointer;
  &:hover {
    color: #417dc9;
  }

`