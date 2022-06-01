import React, { useState } from 'react'
import InputMask from 'react-input-mask';
import { useHistory } from 'react-router-dom';
// -----------------------------------------------------------------------------
import Video from '../../videos/video02.mp4'
import firebase from '../../services/firebase'
import {
  InfoContainer, InfoWrapper, Heading, SignUpP, VideoBg,
  SignUpDiv, SignUpForm, Input, CityWrap, CityInput, Select, Select02, Option,
  CheckBoxDiv, Span, PolicyLink,
  BtnWrap, Button,
} from './InfoElements'
// -----------------------------------------------------------------------------
const SignUpSection = () => {
  const history = useHistory();
  const firestore = firebase.firestore()
  const stateOptions = [ 
    'AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG',
    'PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'
  ]
  const restaurantOptions = [ 'Restaurante', 'Bar', 'Loja', 'Academia', 'Salão', 'Cabeleleiro(a)', 'Clínica', 'Outro']
  
  const [restName, setRestName] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('AC')
  const [businessType, setBusinessType] = useState('Restaurante')
  const [ masked, setMasked ] = useState(' ');
  const [policy, setPolicy] = useState();

  function handlePolicy() {
    setPolicy(!policy)
  }

  async function onSubmit() {
    const user_id = Math.floor(Math.random() * 1000)
    const phonenumber = masked ? masked.replace(/\D/gim, '') : '';

    if(restName === '') {
      alert('Preencher o campo "Nome do Restaurante"')
      return
    }
    if(name === '') {
      alert('Preencher o campo "Nome do Contato"')
      return
    }
    if(phonenumber === '') {
      alert('Preencher o campo "Whatsapp"')
      return
    }
    if(email === '') {
      alert('Preencher o campo "e-mail"')
      return
    }
    if(city === '') {
      alert('Preencher o campo "Cidade"')
      return
    }
    if(policy === false) {
      alert('Por favor concordar com a política de privacidade')
      return
    }


    await firestore.collection(`cardemon/entry/${restName}+${user_id}`).add({
      restaurant_name: restName,
      name: name,
      phonenumber: phonenumber,
      email: email,
      city: city,
      state: state,
      businessType: businessType,
      timestamp: new Date(),
    })
    .then(() => {
      console.log("Document successfully written!");
      setRestName('')
      setName('')
      setEmail('')
      setCity('')
      setState('')
      setBusinessType('Restaurant')
      setMasked()
      history.push('/signin')
    })
    .catch((error) => {
      console.log("Error writing document: ", error);
    });
  }
  // ---------------------------------------------------------------------------
  return (
    <>
      <InfoContainer id="signup">
        <InfoWrapper>
          <VideoBg 
            autoPlay 
            loop 
            muted 
            src={Video}
            type='video/mp4'
            alt='sign-up-video'
          />
          <SignUpDiv>
            <Heading>
              Preencha os dados <br/>e entraremos em contato
            </Heading>
            <SignUpP>
              ou no Whatsapp: (11) 9-4469-4607
            </SignUpP>

            <SignUpForm>
              <Input 
                name='restaurant_name' 
                placeholder='Nome do Restaurante ou Bar'
                value={restName} 
                onChange={(e) => setRestName(e.target.value)}
              />
              <Input
                name='name' 
                placeholder='Nome do contato'
                value={name} 
                onChange={(e) => setName(e.target.value)}
              />
              {/* <Input name='phonenumber' placeholder='Whatsapp para o contato'/> */}
              <InputMask
              name ="phoneNumberMask"
              type="text"
              mask="(99) 99999-9999"
              // placeholder="(99) 91234-1234"
              placeholder="Whatsapp para o contato"
              maskChar="_"
              onChange={e => {setMasked(e.target.value);}}
            />
              <Input 
                name='email' 
                placeholder='e-mail'
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
              />
              <CityWrap>
                <CityInput
                  name='city' 
                  placeholder='Cidade'
                  value={city} 
                  onChange={(e) => setCity(e.target.value)}
                />
                <Select 
                  value={state} 
                  onChange={(e) => setState(e.target.value)}
                >
                  {stateOptions.map(s =>
                    <Option key={s} value={s}>{s}</Option>
                  )}
                </Select>
              </CityWrap>
              <Select02
                value={businessType} 
                onChange={(e) => setBusinessType(e.target.value)}
                >
                {restaurantOptions.map(r =>
                  <Option key={r} value={r}>{r}</Option>
                )}
              </Select02>
              <CheckBoxDiv>
                <input
                  className="checkboxInput"
                  type="checkbox"
                  onClick={handlePolicy}
                />
                <Span>Eu li e concordo com a</Span> 
                <PolicyLink to="/policy">Política de Privacidade</PolicyLink>
              </CheckBoxDiv>
              <BtnWrap>
                <Button 
                  onClick={onSubmit}
                  // react-scroll props
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  primary={true}
                  dark1={true}
                  dark2={true}
                >Iniciar</Button>
              </BtnWrap>
            </SignUpForm>
          </SignUpDiv>  
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default SignUpSection
