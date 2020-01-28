import React from 'react'
import { Link } from 'components/Router'
import styled from 'styled-components'

const FooterNavContainer = styled.div`
    position: relative;
    width: 100%;
    height: 20rem;
    color: black;
    z-index: 10;
    font-weight: 700;
    a { color: ${ ({light}) => light ? ({theme: {lightGrey}}) => lightGrey : ({theme: {darkGrey}}) => darkGrey } }
    ul {
        padding-inline-start: 0;
        padding: 5.2rem 0;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        list-style: none;
        
        li {
            display: inline-block;
        }
        li:first-child {
            padding-right: 5.2rem;
        }
    }
    .auana {
        font-size: 1rem;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
    }
`

const FooterNav = (props) => {

    return (
        <FooterNavContainer light={props.light}>
            <ul>
                <li style={ props.contact ? {display: "none"} : null }><Link to="/contact">Contact</Link></li>
                <li style={ props.ourStory ? {display: "none"} : null }><Link to="/about">Our Story</Link></li>
                <li style={ props.ourWork ? {display: "none"} : null }><Link to="/pool-installs">Our Work</Link></li>
            </ul>
            <a className="auana">Website by AUANA DIGITAL</a>
        </FooterNavContainer>
    )
}

export default FooterNav