import React from 'react'
import { FooterContainer, FooterLink, FooterLinkContainer, FooterLinkItems, FooterLinksWrapper, FooterLinkTitle, FooterWrap, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from './FooterElements'
import {FaFacebook, FaYoutube, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop()
    }

  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinkContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to="/about">How it works</FooterLink>
                        <FooterLink to="/about">Testimonials</FooterLink>
                        <FooterLink to="/about">Careers</FooterLink>
                        <FooterLink to="/about">Investors</FooterLink>
                        <FooterLink to="/about">Terms of service</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Videos</FooterLinkTitle>
                        <FooterLink to="/about">Submit Video</FooterLink>
                        <FooterLink to="/about">Ambassadors</FooterLink>
                        <FooterLink to="/about">Agency</FooterLink>
                        <FooterLink to="/about">Influencer</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                        <FooterLink to="/about">info@ukcareconnection.co.uk </FooterLink>
                        <FooterLink to="/about">+44785 162 2037</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <FooterLink to="/about">Instagram</FooterLink>
                        <FooterLink to="/about">Facebook</FooterLink>
                        <FooterLink to="/about">Youtube</FooterLink>
                        <FooterLink to="/about">Twitter</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinkContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/" onClick={toggleHome}>UK Care Connection</SocialLogo>
                    <WebsiteRights>uk care connection &copy; {new Date().getFullYear()} All rights reserved</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank" aria-label="Facebook"><FaFacebook /></SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Instagram"><FaInstagram /></SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Youtube"><FaYoutube /></SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Twitter"><FaTwitter /></SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Linkedin"><FaLinkedin /></SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer