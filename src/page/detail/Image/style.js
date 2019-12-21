
import styled from 'styled-components'

export const TitleContext = styled.div`
  font-size: 34px;
  line-height: 35px;
  margin-bottom: 25px;
  width:500px;
`

export const DetailMiddle = styled.div`
  width: 900px;
  padding: 20px 0px;
  border-bottom: 1px solid #e5e5e5;
  position:relative;
  min-height:250px; 
  display: flex;
  justify-content:space-around;
`

export const ImageContainer = styled.div`
  img,video {
    max-width:400px;
    max-height: 300px;
    padding: 10px 10px;
  }
  p{
    text-align: center;
    max-width:400px;
  }
  margin: 0 0 10px;
`