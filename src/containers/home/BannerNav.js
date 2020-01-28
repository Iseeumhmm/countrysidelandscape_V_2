import React from 'react'
import styled from 'styled-components'
import { Link } from 'components/Router'


const NavList = styled.ul`
    margin-bottom: -4rem;
    padding: 0;
    padding-top: ${props => (props.secondary ? "0" : "1.2rem")};
    display: flex;
    justify-content: center;
    li {
        a { 
            color: white; 
            text-shadow: 2px 2px 1px  rgba(0,0,0, 0.5);
            font-weight: 700;
        }
        font-size: 1.3rem;
        list-style-type:none;
        display: inline-block;
        padding: 0 .8rem;
    }
`

export default function BannerNav(props) {
   
    return (
        <NavList secondary={props.secondary}>
            <li><Link to="/about">OUR STORY</Link></li>
            <li style={{
                fontSize: "2rem", 
                marginTop: "-.1rem", 
                fontWeight: "bold"
                }}>
                <Link 
                    to="/pool-installs"
                    style={{
                        color: "#93D40A"
                    }}
                    >OUR WORK
                </Link>
            </li>
            <li><Link to="/contact">CONTACT</Link></li>
        </NavList>
    )
}