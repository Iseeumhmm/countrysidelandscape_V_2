import React from 'react'
import BannerNav from '../../containers/home/BannerNav'
import styled from 'styled-components'
const logo = require('../../images/logos/LargeLogo.png')

// styles
const TextContainer = styled.div`
    color: white;
    z-index: 2;
    width: 85%;

    position: absolute;
    top: ${props => props.secondary ? "0" : "50%"};
    left: 50%;
    transform: translate(-50%, -100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    h1 {
        margin-bottom: 0;
        width: 100%;
        font-size: 3rem;
        font-weight: 300 !important;
        text-align: center;
    }
`
const Logo = styled.div`
    position: relative;
    margin: 0 auto 1rem;
    right: 1rem;
    width: 23rem;
    min-height: 8rem;
    background-image: url(${logo});
    background-size: cover;
    background-position: center center;
`

export default function Banner(props) {
    return (
        <React.Fragment>
            <TextContainer>
                <Logo />
                <h1>Your London Pool Builder</h1>
                <BannerNav />
            </TextContainer>
        </React.Fragment>
    )
}