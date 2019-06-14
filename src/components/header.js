import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'

import HeroImage from "./hero"

const ContentContainer = styled.div`
margin: 0 auto;
max-width: 960px;
text-align: center;`

const HeaderContainer = styled.header`
  margin-bottom: 1.45rem;
  height: 45vh;
`
const HeaderText = styled(Link)`
color: #fff;
text-decoration: none;
font-family: "Montserrat";
font-weight: 100;
text-shadow: 2px 2px 3px #777777;
`

const SubHeader = styled.h2`
color: #fff;
text-decoration: none;
font-family: "Montserrat";
font-weight: 100;
text-shadow: 2px 2px 3px #777777;
padding-top: 1rem;
`

const Header = ({ siteTitle, siteDescription }) => (
<HeroImage>
  <HeaderContainer>
    <ContentContainer>
      <h1 style={{ margin: 0, paddingTop: `5rem`}}>
        <HeaderText to="/">
          {siteTitle}
        </HeaderText>
      </h1>
      <SubHeader>Custom Carpentry</SubHeader>
      </ContentContainer>
  </HeaderContainer>
  </HeroImage>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
