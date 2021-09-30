import React from 'react'
import arenaSushi from '../../images/qrCode/arenaSushi.png'
import barracaDaSonia from '../../images/qrCode/barracaDaSonia.png'
import cavaloMarinho from '../../images/qrCode/cavaloMarinho.png'
import chapaLight from '../../images/qrCode/chapaLight.png'
import estrela from '../../images/qrCode/estrela.png'
import meuBar from '../../images/qrCode/meuBar.png'
import helenasLanches from '../../images/qrCode/helenasLanches.png'
import origemMineira from '../../images/qrCode/origemMineira.png'


import {
  ServicesContainer, ServicesH1, ServicesWrapper,
  ServicesCard, ServicesIcon, ServicesH2, ServicesP,
} from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer id="customers">
      <ServicesH1>Confira alguns cardápios de nossos parceiros</ServicesH1>
      <ServicesWrapper>
        <a href="/r0004/index.html">
          <ServicesCard>
            <ServicesIcon src={arenaSushi}/>
            <ServicesH2>Arena Sushi</ServicesH2>
            <ServicesP>Mogi das Cruzes, SP</ServicesP>
          </ServicesCard>
        </a>
        <a href="/zA505/index_cube.html">
          <ServicesCard>
            <ServicesIcon src={barracaDaSonia}/>
            <ServicesH2>Barraca da Sônia</ServicesH2>
            <ServicesP>Bertioga, SP</ServicesP>
          </ServicesCard>
        </a>
        <a href="/zA521/index_cube.html">
          <ServicesCard>
            <ServicesIcon src={cavaloMarinho}/>
            <ServicesH2>Cavalo Marinho Trailer</ServicesH2>
            <ServicesP>Bertioga, SP</ServicesP>
          </ServicesCard>
        </a>
        <a href="/r0001/index.html">
          <ServicesCard>
            <ServicesIcon src={chapaLight}/>
            <ServicesH2>Chapa Light</ServicesH2>
            <ServicesP>Bertioga, SP</ServicesP>
          </ServicesCard>
        </a>
        <a href="/zA546/index.html">
          <ServicesCard>
            <ServicesIcon src={meuBar}/>
            <ServicesH2>Estrela</ServicesH2>
            <ServicesP>São Paulo, SP</ServicesP>
          </ServicesCard>
        </a>
        <a href="/zA507/index.html">
          <ServicesCard>
            <ServicesIcon src={helenasLanches}/>
            <ServicesH2>Helena's Lanches</ServicesH2>
            <ServicesP>Bertioga, SP</ServicesP>
          </ServicesCard>
        </a>
        <a href="/r0003/index_cube.html">
          <ServicesCard>
            <ServicesIcon src={origemMineira}/>
            <ServicesH2>Origem Mineira</ServicesH2>
            <ServicesP>São Paulo, SP</ServicesP>
          </ServicesCard>
        </a>
        <a href="/r0002/index.html">
          <ServicesCard>
            <ServicesIcon src={meuBar}/>
            <ServicesH2>Meu Bar</ServicesH2>
            <ServicesP>Recife, PE</ServicesP>
          </ServicesCard>
        </a>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
