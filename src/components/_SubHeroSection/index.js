import React from 'react'
// -----------------------------------------------------------------------------
import { CgCheckO } from 'react-icons/cg';
// import { Button } from '../ButtonElements'
import { 
  Column01, Column02,
  Heading, Heading2,
  IconDiv, Img01, Img02, Img03, Img04, ImgWrap, 
  InfoContainer, InfoRow, InfoWrapper,
  Item,
  Label,
  Menu,
  TextWrapper,
} from './InfoElements'

const SubHeroSection = ({
  id, headline, item01, item02, item03, item04,
  buttonLabel, imgStart, img01, img02, img03, img04, alt01, alt02, alt03, alt04,
  lightBg, lightText, lightTextDesc, dark, primary, darkText,
}) => {
  // -----------------------------------------------------------------------------
  return (
    <>
      <InfoContainer id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>           
          <Column01>
            <TextWrapper>
              <Heading id={id}>{headline}</Heading>
              <Heading2 id={id}>Black Novembro: 1 ano GRÁTIS!</Heading2>
              <Menu>
                { item01
                  && (
                    <Item>
                      <IconDiv>
                        <CgCheckO color="#000" size={24}/>
                      </IconDiv>
                      <Label>
                        {item01}
                      </Label>
                    </Item>                    
                  )
                }
                { item02
                  && (
                    <Item>
                      <IconDiv>
                        <CgCheckO color="#000" size={24}/>
                      </IconDiv>
                      <Label>
                        {item02}
                      </Label>
                    </Item>                    
                  )
                }
                { item03
                  && (
                    <Item>
                      <IconDiv>
                        <CgCheckO color="#000" size={24}/>
                      </IconDiv>
                      <Label>
                        {item03}
                      </Label>
                    </Item>                    
                  )
                }
                { item04
                  && (
                    <Item>
                      <IconDiv>
                        <CgCheckO color="#000" size={24}/>
                      </IconDiv>
                      <Label>
                        {item04}
                      </Label>
                    </Item>                    
                  )
                }
              </Menu>
            </TextWrapper>
          </Column01>
          <Column02>
            <ImgWrap>
              { img01 && (
                <Img01 src={img01} alt={alt01}/>
              )}
              { img02 && (
                <Img02 src={img02} alt={alt02}/>
              )}
            </ImgWrap>
          </Column02>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default SubHeroSection
