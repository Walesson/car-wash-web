import styled from 'styled-components'
import BackgroundPage from '../../assets/images/dodge.jpg'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 100vh;
  background: url('${BackgroundPage}') center no-repeat;
  background-size: cover;
`

export const Overlay = styled.div`
  display: flex;
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 970px;
  margin: 0 auto;
`
