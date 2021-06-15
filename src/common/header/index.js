import React, { Component } from 'react';
import {
  HeaderWrapper,
  Nav,
  NavItem,
  Logo
} from './style'
import { Link } from 'react-router-dom'
class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Nav>
          <Logo />
          <NavItem className='left active'><Link  to="/">中国科协创新战略研究院</Link></NavItem>
          <NavItem className='right active'><Link  to="/supplement">社团资料补充</Link></NavItem>
        </Nav>
      </HeaderWrapper>
    )
  }
}

export default Header;