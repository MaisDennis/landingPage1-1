import React, { useState } from 'react'
// -----------------------------------------------------------------------------
import Image from '../../images/heroImages/heroImage04.jpg'
import {
  ArrowForward, ArrowRight,
  HeroBg, HeroBtnWrapper, HeroContainer, HeroContent, 
  HeroH1, HeroH2, HeroP, 
  ImgBg,
} from './HeroElements'
import { Button } from '../ButtonElements'

const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }
  // -----------------------------------------------------------------------------
  return (
    <HeroContainer id="home">
      <HeroBg>
        <ImgBg
          src={Image}
          alt="heroImage"
        />
      </HeroBg>

      <HeroContent>
        <HeroH1>Cardápio Digital com QR Code</HeroH1>
        <HeroH2>
          Sem necessidade de site, sem botões, sem complicações
          <br/> O seu cardápio igual ao físico usado no restaurante, 
          <br/> agora em formato digital
        </HeroH2>
        <HeroP>
        Atendimento em todo o Brasil
        </HeroP>
        <HeroBtnWrapper>
          <Button 
            to="signup" 
            onMouseEnter={onHover} 
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Teste GRÁTIS s/ compromisso {hover ? <ArrowForward/> : <ArrowRight/>}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
