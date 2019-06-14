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
const StyledLink = styled(Link)`
color: #fff;
text-decoration: none;
`

const Header = ({ siteTitle, siteDescription }) => (
<HeroImage>
  <HeaderContainer>
    <ContentContainer>
      <h1 style={{ margin: 0 }}>
        <StyledLink to="/">
          {siteTitle}
        </StyledLink>
      </h1>
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
