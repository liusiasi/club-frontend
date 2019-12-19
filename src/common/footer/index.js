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
        <FooterItem className='left'>Copyright &copy;&nbsp;2019 中国科技协会有限公司  地址：北京市大兴区天华大街 5号院12号楼3层307 电话：010-89237907</FooterItem>
        <FooterItem className='right'>京ICP备19018591号-1	</FooterItem>
      </FooterContent>
    </FooterWrapper>
  )
}
