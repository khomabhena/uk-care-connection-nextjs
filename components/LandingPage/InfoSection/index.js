import { urlFor } from '@/lib/client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ButtonElement'
import { BtnWrap, Column1, Column2, Heading, Img, ImgWrap, InfoContainer, InfoRow, InfoWrapper, Subtitle, TextWrapper, TopLine } from './InfoElements'

const InfoSection = ({lightBg, id, imgStart, lightText, dark, primary, lightTextDesc, link,
    data: {smallTitle, title, description, buttonText, image} }) => {

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
                                <Link href={link}>
                                    <Button 
                                        primary={primary ? 1 : 0}
                                        dark={dark ? 1 : 0} 
                                        >{buttonText}</Button>
                                </Link>
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