import styled from 'styled-components'
export const SearchWraper = styled.div`
  height:150px;
  width: 810px;
  margin: 0 auto;
  position: relative;
`
export const SearchRadio = styled.div`
  height: 40px;
  margin: 10px auto;
  .ant-radio-button-wrapper {
    width: 90px;
    text-align: center;
  }
`
export const SearchContent = styled.div`
  height: 90px;
  width: 750px;
  .ant-form .ant-btn {
    margin-top:5px;
  }
  .ant-btn{

  }
`
export const NavItem = styled.div`
  position: absolute;
  right:0;
  top: 50px;
  line-height: 40px;
  color: #333;
  &.left {
    font-size: 20px;
  }
  cursor: pointer;
  &:hover {
    color: #417dc9;
  }

`