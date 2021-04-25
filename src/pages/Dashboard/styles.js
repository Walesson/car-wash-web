import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  width: 1;
  left: 9px;
  height: 100vh;
  min-height: 340px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`

export const WrapperSideBar = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 12%;
  left: 9px;
  padding: 2em;
  background-color: #fff;
`

export const WrapperDashboard = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 88%;
  padding: 2em;
  background-color: #d3d3d3;
`
