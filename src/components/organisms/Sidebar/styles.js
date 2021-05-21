import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Wrapper = styled.div`
  display: flex;
  position: absolute;
  width: 99%;
  height: 98.1vh;
  left: 8px;
  top: 11px;

  background: #ffffff;
`
export const WrapperSideBar = styled.section`
  display: flex;
  position: fixed;
  text-align: justify;
  left: 8px;
  width: 23em;
  height: 99.3vh;
  top: 0;
  flex-direction: row;
  border-right: 2px solid #f8f8f8;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.466);
`

export const Logo = styled.img`
  position: absolute;
  width: 118px;
  left: 47px;
  top: 33px;
`

export const MenuItems = styled.section`
  margin-top: 140px;
  margin-left: 40px;
  height: 60%;
  width: 100%;
  justify-content: center;
`
export const Item = styled.section`
  display: flex;
  margin: 0 0 0 7px;
  align-content: stretch;
  justify-content: flex-start;
  align-items: center;
`
export const ItemLink = styled(Link)`
  padding: 0 7px;
  color: #c7c7c7;
  display: flex;
  justify-content: start;
  text-decoration: none;
  align-items: center;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 45px;
`
export const Span = styled.img`
  width: 30px;
  height: 30px;
  display: inline;
  padding: 0 10px
  align-items: center;
`
