import { urlFor } from '@/lib/client'
import Image from 'next/image'
import React from 'react'
import { Button } from '../ButtonElement'
import { BtnWrap, Column1, Column2, Heading, Img, ImgWrap, InfoContainer, InfoRow, InfoWrapper, Subtitle, TextWrapper, TopLine } from './InfoElements'

const InfoSection = ({lightBg, id, imgStart, lightText, dark, primary, lightTextDesc,
    data: {smallTitle, title, description, buttonText, image} }) => {
        console.log(image)
  return (
    <>
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine lightText={lightText}>{smallTitle}</TopLine>
                            <Heading lightText={lightText}>{title}</Heading>
                            <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                            <BtnWrap>
                                <Button 
                                smooth={true} 
                                duration={500} 
                                spy={true} 
                                exact="true" 
                                offset={-80} 
                                primary={primary ? 1 : 0}
                                dark={dark ? 1 : 0} 
                                to='home'>{buttonText}</Button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                        {image && <Img src={urlFor(image)} alt='image' /> }
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    </>
  )
}

export default InfoSection