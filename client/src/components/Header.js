import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  @media only screen and (max-width: 1022px) {
    height: 150px;
    width: 100%;
    background-image: url('/images/pizzahead.png');
    background-size: cover;
  }

  @media only screen and (min-width: 1023px) {
    height: 240px;
    width: 100%;
    background-image: url('/images/pizzahead.png');
    background-size: cover;
  }
`

const HeaderText = styled.h1`
  @media only screen and (min-width: 1023px) {
    font-size: 114px;
    color: white;
    font-family: Dokdo;
  }

  @media only screen and (max-width: 1024px) {
    font-size: 48px;
    font-family: Dokdo;
    color: white;
  }
`
function Header(props) {
  return (
    <HeaderContainer>
      <div className="container valign-wrapper">
        <div className="row">
          <div className="col s12">
            <HeaderText>PIZZABAKEREN</HeaderText>
          </div>
        </div>
      </div>
    </HeaderContainer>
  )
}

export default Header
