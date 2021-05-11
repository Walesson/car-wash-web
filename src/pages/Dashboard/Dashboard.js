import React from 'react'
import ImgLogo from '../../assets/images/logo-v1.png'
import { Wrapper, Logo, WrapperSideBar } from './styles'

export const Dashboard = () => (
  <Wrapper>
    <WrapperSideBar>
      <Logo src={ImgLogo} />
    </WrapperSideBar>
  </Wrapper>
)
