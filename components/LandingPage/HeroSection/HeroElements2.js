import styled from "styled-components";
import {MdArrowForward, MdKeyboardArrowRight} from 'react-icons/md'


export const HeroSection2Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
    max-width: 1100px;
    margin: 0 auto;
    /* background: yellow; */

    @media screen and (max-width: 912px) {
        height: 650px;
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        /* height: 750px; */
    }
`

export const TextContent = styled.div`
    margin-top: 80px;
    padding: 0 4rem;
    width: 50%;

    @media screen and (max-width: 912px) {
        width: 80%;
    }

    @media screen and (max-width: 768px) {
        text-align: center;
        width: 80%;
    }

    @media screen and (max-width: 480px) {
        text-align: center;
        width: 100%;
    }
`

export const BlobImg = styled.img`
    position: absolute;
    left: 0;
    top: 0;
    width: 50%;
    z-index: -10;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const HeroImg = styled.img`
    width: 45%;
    align-self: flex-end;
    justify-self: flex-start;
    /* background: red; */

    @media screen and (max-width: 912px) {
        align-self: center;
    }

    @media screen and (max-width: 768px) {
        width: 50%;
        display: none;
    }
`

export const Hero2H1 = styled.h1`
    color: ${({primary}) => (primary ? `var(--grey)`: `black`)};
    font-size: 48px;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const Hero2H2 = styled.h2`
    color: var(--greyLight);
    font-size: 30px;
    padding-left: 4px;
`

export const Hero2P = styled.p`
    margin-top: 24px;
    color: var(--greyDark);
    font-size: 24px;
    max-width: 500px;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`

export const Hero2BtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;


    @media screen and (max-width: 768px) {
        align-items: center;
    }
`

export const Hero2Gradient = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 500px;
    background-image: linear-gradient(180deg, rgba(112, 175, 206, 1), rgba(165, 222, 241, 0.5));
`

export const HeroButton = styled.div`
    border-radius: 50px;
    background: ${({ primary }) => (primary ? `var(--primaryDark)`: `var(--primary)`)};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 48px': '12px 38px')};
    color: ${({ dark }) => (dark ? '#ffffff' : '#fff')};
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '1.1rem')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({ primary }) => (primary ? `var(--primary)` : `var(--primary)`)};
        
    }
`


export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`