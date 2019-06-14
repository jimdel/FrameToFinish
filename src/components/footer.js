import { StaticQuery, graphql } from "gatsby"
import React from "react"
import styled from 'styled-components'

import SocialIcons from './socials'

const FooterContainer = styled.footer`
  background-color: #191818;
  color: #fff;
  width: 100%;
  position: absolute;
  bottom: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const BuiltBy = styled.p`
font-family: "Montserrat";
font-size: .65rem;
font-weight: 100;
text-align: center;
color: #777777;
margin: 0;
`

const Footer = ()  => (
      <FooterContainer>
        <div style={{width: `14rem`, marginLeft: `auto`, marginRight: `auto`}}>
          <SocialIcons size="3rem"/>
        </div>
          <BuiltBy> © Frame to Finish Custom Carpentry </BuiltBy>
          <BuiltBy>Built By James DeLay</BuiltBy>
      </FooterContainer>
      )

export default Footer
