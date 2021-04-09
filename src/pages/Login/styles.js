import styled from 'styled-components'
import { H1 } from '../../components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex: 1;
  height: 100vh;
  min-height: 340px;
  /* padding: 1em; */
  margin: 0 auto;
  background-color: #333;
`

export const WrapperForm = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 57em;
  padding: 2em;
  background-color: #fff;
`

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 2em auto;
`

export const WrapperBanner = styled.section`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10em;
  flex: 1;
  /* background: url(${({ src }) => src}) no-repeat center; */
  background: url('https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')
    no-repeat center;
  /* background: url('https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80')
    no-repeat center; */
  background-size: cover;
  position: relative;
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(8, 86, 202, 0.7);
`

export const BigTitle = styled(H1)`
  color: ${({ theme }) => theme.colors.secondary.main};
  line-height: 1em;
  text-align: right;
  font-size: 6em;
  z-index: 1;
`
