import React, { useState } from 'react'
import { ArrowForward, ArrowRight, BlobImg, HeroButton } from './HeroElements2'
import { Hero2BtnWrapper, Hero2H1, Hero2H2, Hero2P, HeroImg, HeroSection2Container, TextContent } from './HeroElements2';
import img from '../../../public/images/svg-medical-care.svg'
import blob from '../../../public/images/blob2.png'
import { urlFor } from '@/lib/client';

const HeroSection = ({data: { title, blob, image, description, buttonText}}) => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }


  return (
    <HeroSection2Container id='home'>
        <TextContent>
            <Hero2H1 primary='true'>{title}</Hero2H1>
            <Hero2H1 primary='true'></Hero2H1>
            <Hero2H2 primary='true'></Hero2H2>
            <Hero2P>{description}</Hero2P>
            <Hero2BtnWrapper>
                <HeroButton to="/sign-in" 
                onMouseEnter={onHover} 
                onMouseLeave={onHover}
                primary='true'
                dark='true'>
                    {buttonText} {hover ? <ArrowForward /> : <ArrowRight />}
                </HeroButton>
            </Hero2BtnWrapper>
        </TextContent>
        {/* <Hero2Gradient /> */}
        <BlobImg src={urlFor(blob)} alt='blob' />
        <HeroImg src={urlFor(image)} alt='image' />
    </HeroSection2Container>
  )
}

export default HeroSection