import React from 'react'
import { FiUser, FiLock } from 'react-icons/fi'
import { useHistory } from 'react-router-dom'
import ImgLogo from '../../assets/images/logo-v1.png'
import { Button, InputField } from '../../components'
import {
  Wrapper,
  WrapperForm,
  ContentInput,
  WrapperBanner,
  Overlay,
  TitlePage,
  Logo,
  Container,
  Form,
  Fields,
  BigTitle,
} from './styles'

const Banner =
  'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'

export const Login = () => {
  const history = useHistory()
  const handleLogin = (event) => {
    event.preventDefault()
  }

  const goNewAccount = (event) => {
    event.preventDefault()
    history.push('/nova-conta')
  }

  return (
    <Wrapper onClick={handleLogin}>
      <WrapperForm>
        <Container>
          <Logo src={ImgLogo} />
          <Form>
            <TitlePage>Acessar</TitlePage>
            <Fields>
              <ContentInput>
                <InputField icon={<FiUser />} placeholder='Usuário' />
              </ContentInput>
              <ContentInput>
                <InputField
                  type='password'
                  icon={<FiLock />}
                  placeholder='Password'
                />
              </ContentInput>
            </Fields>
            <Button label='Acessar' primary />
            <br />
            <Button
              label='Cadastrar-se'
              onClick={goNewAccount}
              dark
              outline
              noBorder
            />
          </Form>
        </Container>
      </WrapperForm>
      <WrapperBanner src={Banner}>
        <Overlay />
        <BigTitle>
          <cite>Seu Lava Jato</cite>
          <br />
          <big>+</big> Produtivo
        </BigTitle>
      </WrapperBanner>
    </Wrapper>
  )
}
