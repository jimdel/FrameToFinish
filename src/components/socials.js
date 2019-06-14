import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

// Pass icons a rem to scale for diff devices
const createScaledStyle = (size) => {
  return {
    height: size,
    width: size,
    paddingLeft: `.7rem`,
    paddingRight: `.7rem`,
  }
}

const goToSocial = (link) => {
  return window.open(link);
}

/*
    facebook: `https://www.facebook.com/Frame-to-Finish-Custom-Carpentry-LLC-922181877869899/`,
    email: `roesslercraig@yahoo.com`
*/

const SocialIcons = ({ size, social }) => (
    <div style={{display: `flex`, justifyContent:`space-between`}}>
      <FontAwesomeIcon
        onClick={() => goToSocial(social)}
        style={createScaledStyle(size)}
        icon={faFacebookSquare}/>
      <FontAwesomeIcon
        onClick={() => goToSocial(social)}
        style={createScaledStyle(size)}
        icon={faInstagram} />
      <FontAwesomeIcon
        onClick={() => goToSocial(social)}
        style={createScaledStyle(size)}
        icon={faEnvelope} />
    </div>
)


export default SocialIcons
