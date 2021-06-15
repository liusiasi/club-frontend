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
  width: 760px;
  .ant-form .ant-btn {
    margin-top:5px;
  }
  .ant-legacy-form label {
    font-size: 16px;
  }
  .ant-input,.ant-picker-input > input,.ant-select {
    font-size: 16px;
  }
  .ant-btn{
    font-size: 16px;
    margin-top: 2px;
    height: 34px;
  }
`
export const NavItem = styled.div`
  position: absolute;
  right:-10px;
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