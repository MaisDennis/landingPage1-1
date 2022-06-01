import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import {
  FooterContainer, FooterWrap, 
  // FooterLink, FooterLabel,
  SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, 
  SocialIcons, SocialIconLink, 
} from './FooterElements'

import {
  FaFacebook, 
  // FaWhatsapp, 
  FaInstagram, 
  // FaYoutube, FaTwitter, FaLinkedin,
} from 'react-icons/fa'

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>cardemon</SocialLogo>
            <WebsiteRights>© {new Date().getFullYear()} Todos os direitos reservados.</WebsiteRights>
            {/* <FooterLink href="https://wa.me/5511983495853" target="_blank">
              <FaWhatsapp size={16}/>
              <FooterLabel>(11) 9 8349 5853</FooterLabel>
            </FooterLink> */}
            
            <SocialIcons>
              <SocialIconLink href="https://www.instagram.com/cardemon.co/" target="_blank" aria-label="Instagram">
                <FaInstagram/>
              </SocialIconLink>
              <SocialIconLink href="https://www.facebook.com/cardemon.co" target="_blank" aria-label="Facebook">
                <FaFacebook/>
              </SocialIconLink>
              {/* <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                <FaYoutube/>
              </SocialIconLink> */}
              {/* <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <FaTwitter/>
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                <FaLinkedin/>
              </SocialIconLink> */}
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
 