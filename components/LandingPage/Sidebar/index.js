import React from 'react'
import { IconContext } from 'react-icons/lib'
import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarMenu, SidebarRoute, SidebarWrapper, SideBtnWrap } from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <IconContext.Provider value={{color: '#000'}}>      
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        </IconContext.Provider>

        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="about"  onClick={toggle}>About</SidebarLink>
                <SidebarLink to="discover" onClick={toggle}>Log In</SidebarLink>
                <SidebarLink to="services" onClick={toggle}>Services</SidebarLink>
                <SidebarLink to="signup" onClick={toggle}>Sign Up</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/employer-sign-in">Hire Care Workers</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar