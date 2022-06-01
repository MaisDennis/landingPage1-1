import React, { useState,  useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
// to style all icons at once
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll'
import { FaWhatsapp } from 'react-icons/fa'
// -----------------------------------------------------------------------------
import { 
  MobileIcon,
  Nav, NavbarContainer, NavBtn, NavBtnLink,
  NavItem, NavLinks, NavLogo, NavMenu, 
  WhatsappItem, WhatsappLabel, WhatsappLinks,
}  from './NavbarsElements'

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)  
  
  // function to make NavBar transparent
  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop();
  }
  // -----------------------------------------------------------------------------
  return (
    <>
      <IconContext.Provider value={{ color: '#fff'}}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              cardemon
            </NavLogo>

            <MobileIcon>
              <FaBars onClick={toggle}/>
            </MobileIcon>
            
            <NavMenu>
              <NavItem>
                <NavLinks 
                  to="about" 
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  // activeClass="active" 
                >O Que Fazemos?</NavLinks> 
              </NavItem>
              <NavItem>
                <NavLinks 
                  to="discover"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >Por Que a Cardemon?</NavLinks> 
              </NavItem>
              <NavItem>
                <NavLinks 
                  to="customers"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >Nossos Clientes</NavLinks> 
              </NavItem>
              <NavItem>
                <NavLinks 
                  to="price"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >Preços</NavLinks> 
              </NavItem>
              <NavItem>
                <NavLinks 
                  to="signup"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >Dúvidas</NavLinks> 
              </NavItem>
            </NavMenu>

            <WhatsappItem>
              <WhatsappLinks 
                href="https://wa.me/5511944694607" 
                target="_blank"
              >
                <FaWhatsapp size={16}/>
                <WhatsappLabel>(11) 9-4469-4607</WhatsappLabel>
              </WhatsappLinks> 
            </WhatsappItem>

            <NavBtn>
              <NavBtnLink
                to="signup"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >Entre em Contato</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar