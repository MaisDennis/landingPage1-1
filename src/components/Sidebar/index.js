import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
// -----------------------------------------------------------------------------
import { 
  SidebarContainer, Icon, CloseIcon, 
  SidebarWrapper, SidebarLink, SideBtnWrap, SidebarRoute, SidebarMenu,
  WhatsappLabel, WhatsappRoute,
} from './SidebarElements'
const Sidebar = ({ isOpen, toggle }) => {
  // -----------------------------------------------------------------------------
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink 
            to="about" 
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            O Que Fazemos? 
          </SidebarLink>
          <SidebarLink 
            to="discover" 
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Por Que Cardemon?
          </SidebarLink>
          <SidebarLink 
            to="customers" 
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Nossos Clientes
          </SidebarLink>
          <SidebarLink 
            to="price" 
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Preços
          </SidebarLink>
          <SidebarLink 
            to="signup" 
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Dúvidas
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <WhatsappRoute   
            href="https://wa.me/5511983495853" 
            target="_blank"
          >
            <FaWhatsapp size={16}/>
            <WhatsappLabel>(11) 9 8349 5853</WhatsappLabel>
          </WhatsappRoute>
        </SideBtnWrap>
        <SideBtnWrap>
          <SidebarRoute 
            to="signup"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >Entre em Contato</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
