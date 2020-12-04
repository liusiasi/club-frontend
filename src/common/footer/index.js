import React from 'react'
import {
  FooterWrapper,
  FooterContent,
  FooterItem
} from './style'

export default function index() {
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterItem className='middle'>Copyright &copy;&nbsp;2020 中国科协创新战略研究院 </FooterItem>
        <FooterItem className='right'>	</FooterItem>
      </FooterContent>
    </FooterWrapper>
  )
}
