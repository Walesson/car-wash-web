import React from 'react'
import { TitlePage, Button } from '../../components'
import Banner from '../../assets/images/dodge.jpg'
import {
  Wrapper,
  WrapperForm,
  WrapperBanner,
  Overlay,
  Container,
  Form,
  BigTitle,
} from './styles'

export const Login = () => {
  const handleLogin = () => null
  return (
    <Wrapper onClick={handleLogin}>
      <WrapperForm>
        <Container>
          <TitlePage>PORTAL CARWASH</TitlePage>
          <Form>
            <Button label='Acessar' primary />
            <Button label='Cadastrar-se' secondary outline />
          </Form>
        </Container>
      </WrapperForm>
      <WrapperBanner src={Banner}>
        <Overlay />
        <BigTitle>
          <cite>Seu Lava Jato mais</cite>
          <br />
          Sustentável
        </BigTitle>
      </WrapperBanner>
    </Wrapper>
  )
}
