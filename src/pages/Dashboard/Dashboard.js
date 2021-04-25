import React from 'react'
import { Wrapper, Container, WrapperSideBar, WrapperDashboard } from './styles'

export const Dashboard = () => (
  <Wrapper>
    <WrapperSideBar>
      <Container>
        <h1>Side Bar!</h1>
      </Container>
    </WrapperSideBar>
    <WrapperDashboard>
      <h1>Dashboard!</h1>
    </WrapperDashboard>
  </Wrapper>
)
