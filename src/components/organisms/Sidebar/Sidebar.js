import React from 'react'
import ImgLogo from '../../../assets/images/logo-v1.png'
import ImgVGeral from '../../../assets/images/vetor_visaogeral.png'
import ImgAgenda from '../../../assets/images/vetor_agendamento.png'
import ImgRel from '../../../assets/images/vetor_relatorio.png'
import ImgConfig from '../../../assets/images/vetor_configuracao.png'
import { Logo, WrapperSideBar, MenuItems, Item, ItemLink, Span } from './styles'

export const Sidebar = () => (
  <WrapperSideBar>
    <Logo src={ImgLogo} />
    <MenuItems>
      <Item>
        <Span src={ImgVGeral} />
        <ItemLink to='/visaogeral'>Visão Geral</ItemLink>
      </Item>
      <Item>
        <Span src={ImgAgenda} />
        <ItemLink to='/agendamento'>Agendamentos</ItemLink>
      </Item>
      <Item>
        <Span src={ImgRel} />
        <ItemLink to='/relatorios'>Relatórios</ItemLink>
      </Item>
      <Item>
        <Span src={ImgConfig} />
        <ItemLink to='/configuracoes'>Configurações</ItemLink>
      </Item>
    </MenuItems>
  </WrapperSideBar>
)
