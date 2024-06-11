import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
import * as s from './style'


const Footer = () => {
  return (
    <s.Container>
        <s.SocialIcons>
            <a  href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer">
                <FaFacebook />
            </a>
           
            <a  href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer">
                <FaInstagram />
            </a>


            <a  href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer">
                <FaLinkedin />
            </a>
           
            <a  href="https://www.github.com"
                target="_blank"
                rel="noopener noreferrer">
                <FaGithub />
            </a>
        </s.SocialIcons>


        <s.DeveloperInfo>
             Todos os diretos reservados &&copy FIAP;
        </s.DeveloperInfo>
    </s.Container>
  )
}


export default Footer









