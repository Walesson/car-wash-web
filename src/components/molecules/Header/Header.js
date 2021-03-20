import React from 'react'
import LogoImg from '../../../assets/images/Logo.png'
import {
  Wrapper,
  Container,
  Right,
  Entrar,
  Link,
  ListLinks,
  Logo,
} from './sytles'

export const Header = () => {
  const handleEnter = () => {
    console.info('abrir o modal/pagina de login')
  }
  return (
    <Wrapper>
      <Container>
        <Logo src={LogoImg} alt='Logo app' />
        <Right>
          <ListLinks>
            <Link>Baixa o App</Link>
            <Link>Sobre nós</Link>
            <Link>Planos</Link>
          </ListLinks>
          <Entrar onClick={handleEnter}>Entrar</Entrar>
        </Right>
      </Container>
    </Wrapper>
  )
}
