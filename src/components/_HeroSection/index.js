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
        <HeroH1>Venha criar o seu Cardápio com QR Code</HeroH1>
        {/* <HeroH1>com QR Code</HeroH1> */}
        <HeroH2>
          Sem necessidade de site, sem complicações
          <br/> O seu cardápio digital igual ao físico usado no restaurante 
          <br/> 
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
            Teste GRÁTIS{hover ? <ArrowForward/> : <ArrowRight/>}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
