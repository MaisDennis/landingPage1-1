import React from 'react'
import { useHistory } from 'react-router-dom';
import ScrollToTop from '../components/SignIn/ScrollToTop';
import Image from '../../src/images/heroImages/heroImage.jpg'

import { Container } from './signinStyles' 

const SignInPage = () => {
  const history = useHistory();

  function sendTo() {
    history.push('/')
  }

  return (
    <Container>
      <img className="greetingsImg" src={Image} alt="greeting" />
      <ScrollToTop/>
      <div className="wrapper">
        <div className="greetingsCard">
          <h1 className="greetingsH1">
            Obrigado!<br/> Entraremos em contato o mais breve,
          </h1>
          <button className="greetingsButton" onClick={sendTo}>Retornar</button>
        </div>
      </div>
      
      
    </Container>
  )
}

export default SignInPage
