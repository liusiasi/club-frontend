
import styled from 'styled-components'

export const DetailInfo = styled.div`
  width: 100%;
  display: flex;
  margin: 0 0 20px;
  justify-content: flex-start ;
  img {
    width: 120px;
    height: 170px;
    margin-right: 20px;
  }
  h1 {
    padding: 20px 0;
  }
`

export const ParaSection = styled.section`
  padding: 20px 30px;
  p:first-child {
    text-align: center;
    font-weight: bold;
    line-height: 35px;
  }
`

export const ParaContext = styled.p`
  font-size: 14px;
  font-family: Microsoft YaHei,SimHei,Verdana;
  word-wrap: break-word;
  line-height: 24px;
  margin-left: 50px;
  a {
    color: rgba(0, 0, 0, 0.65);
    :hover {
      color: #417dc9;
    }
  }
`