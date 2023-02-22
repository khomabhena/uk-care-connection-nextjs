import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
    background: var(--primaryWhite);
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    box-shadow: ${({ scrollNav }) => (scrollNav ? `5px 3px 8px var(--greyLight)` : ``)};

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding-left: 5rem;
    padding-right: 5rem;
    

`

// export const NavLogo = styled(LinkR)`
export const NavLogo = styled.img`
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-left: 24px;
    
    @media screen and (max-width: 820px) {
        margin-left: 8px;
    }

`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 820px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #000;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 820px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled(LinkS)`
    color: var(--greyDark);
    display: flex;
    align-items: center;
    text-decoration: none;
    margin: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-size: 1.3rem;
    font-weight: 500;

    &.active {
        border-bottom: 3px solid var(--primaryDark);
        background-color: transparent;
    }

    :hover {
        transform: scale(1.1);
    }

    @media screen and (max-width: 912px) {
        font-size: 1rem;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;


    @media screen and (max-width: 820px) {
        display: none;
    }
`

export const NavBtnLink = styled.div`
    border-radius: 50px;
    background: var(--primaryDark);
    white-space: nowrap;
    padding: 10px 22px;
    color: var(--primaryWhite);
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-out;
        background: #fff;
        color: #010606;
    }
`