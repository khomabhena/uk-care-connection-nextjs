import React from 'react'
import { ServicesCard, ServicesContainer, ServicesH1, ServicesH2, ServicesIcon, ServicesIconWrap, ServicesP, ServicesWrapper } from './ServicesElements'
import Icon1 from '../../../public/images/svg-injured.svg'
import Icon2 from '../../../public/images/svg-nurse.svg'
import Icon3 from '../../../public/images/svg-gran.svg'
import { urlFor } from '@/lib/client'

const Services = ({data}) => {
  return (
    <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                {
                    data.map(item => (
                        <ServicesCard>
                            <ServicesIconWrap><ServicesIcon src={urlFor(item.image)} /></ServicesIconWrap>
                            <ServicesH2>{item.title}</ServicesH2>
                            <ServicesP>{item.description}</ServicesP>
                        </ServicesCard>
                    ))
                }
            </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services