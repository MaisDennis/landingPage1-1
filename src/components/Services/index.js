import React from 'react'
import arenaSushi from '../../images/qrCode/arenaSushi.png'
// import barracaDaSonia from '../../images/qrCode/barracaDaSonia.png'
// import cavaloMarinho from '../../images/qrCode/cavaloMarinho.png'
// import chapaLight from '../../images/qrCode/chapaLight.png'
// import estrela from '../../images/qrCode/estrela.png'
// import meuBar from '../../images/qrCode/meuBar.png'
// import helenasLanches from '../../images/qrCode/helenasLanches.png'
// import origemMineira from '../../images/qrCode/origemMineira.png'

import adeBar from '../../images/qrCode/adeBar.png'
import adeCaf from '../../images/qrCode/adeCaf.png'
import adeCan from '../../images/qrCode/adeCan.png'
import adeCav from '../../images/qrCode/adeCav.png'
import adeIe from '../../images/qrCode/adeIe.png'
import adeMeu from '../../images/qrCode/adeMeu.png'
import adeRay from '../../images/qrCode/adeRay.png'
import adeSin from '../../images/qrCode/adeSin.png'
import adeTex from '../../images/qrCode/adeTex.png'
import adeToc from '../../images/qrCode/adeToc.png'

import {
  ServicesContainer, ServicesDiv, ServicesH1, ServicesWrapper,
  ServicesCard, ServicesIcon, ServicesH2, ServicesP,
} from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer id="customers">
      <ServicesH1>Confira alguns cardápios de nossos parceiros</ServicesH1>
      <ServicesWrapper>
        <a href="/zA505/index_cube.html">
          <ServicesCard>
            <ServicesIcon src={adeBar} alt='qr code example 01'/>
            <ServicesDiv>
              <ServicesH2>Barraca da Sônia</ServicesH2>
            </ServicesDiv>
            <ServicesP>Bertioga, SP</ServicesP>
          </ServicesCard>
        </a>
        <a href="/zA573/index_cube.html">
          <ServicesCard>
            <ServicesIcon src={adeCaf} alt='qr code example 02'/>
            <ServicesDiv>
              <ServicesH2>Cafutbeer</ServicesH2>
            </ServicesDiv>
            <ServicesP>Maracás, BA</ServicesP>
          </ServicesCard>
        </a>
        <a href="/zA548/index_cube.html">
          <ServicesCard>
            <ServicesIcon src={adeCan} alt='qr code example 03'/>
            <ServicesDiv>
              <ServicesH2>Cantinho do Acarajé</ServicesH2>
            </ServicesDiv>
            <ServicesP>São Paulo, SP</ServicesP>
          </ServicesCard>
        </a>
        <a href="/zA521/index_cube.html" alt='qr code example 04'>
          <ServicesCard>
            <ServicesIcon src={adeCav}/>
            <ServicesDiv>
              <ServicesH2>Cavalo Marinho</ServicesH2>
            </ServicesDiv>
            <ServicesP>Bertioga, SP</ServicesP>
          </ServicesCard>
        </a>
        <a href="/zA555/index_cube.html">
          <ServicesCard>
            <ServicesIcon src={adeIe} alt='qr code example 05'/>
            <ServicesDiv>
              <ServicesH2>Sushi Iê</ServicesH2>
            </ServicesDiv>
            <ServicesP>São Paulo, SP</ServicesP>
          </ServicesCard>
        </a>
        <a href="/rA501/index_cube.html">
          <ServicesCard>
            <ServicesIcon src={adeMeu} alt='qr code example 06'/>
            <ServicesDiv>
              <ServicesH2>Meu Bar</ServicesH2>
            </ServicesDiv>
            <ServicesP>Recife, PE</ServicesP>
          </ServicesCard>
        </a>
        <a href="/zA551/index_cube.html">
          <ServicesCard>
            <ServicesIcon src={adeRay} alt='qr code example 07'/>
            <ServicesDiv>
              <ServicesH2>Ray Burguer</ServicesH2>
            </ServicesDiv>
            <ServicesP>Monsenhor Tabosa, CE</ServicesP>
          </ServicesCard>
        </a>
        <a href="/zA585/index_cube.html">
          <ServicesCard>
            <ServicesIcon src={adeSin} alt='qr code example 08'/>
            <ServicesDiv>
              <ServicesH2>Singané Potcha</ServicesH2>
            </ServicesDiv>
            <ServicesP>São Paulo, SP</ServicesP>
          </ServicesCard>
        </a>
        <a href="/zA566/index_cube.html">
          <ServicesCard>
            <ServicesIcon src={adeTex} alt='qr code example 09'/>
            <ServicesDiv>
              <ServicesH2>Texas Bar</ServicesH2>
            </ServicesDiv>
            
            <ServicesP>Brejo Santo, CE</ServicesP>
          </ServicesCard>
        </a>
        <a href="/zA586/index_cube.html">
          <ServicesCard>
            <ServicesIcon src={adeToc} alt='qr code example 10'/>
            <ServicesDiv>
              <ServicesH2>Restaurante Toca do Arbutre</ServicesH2>
            </ServicesDiv>
            <ServicesP>Ilha do Mel, PR</ServicesP>
          </ServicesCard>
        </a>

        
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
