import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
const logo = require('../images/logos/LargeLogo.png')

const fadeOut = keyframes` 
0%      { opacity: 1 }
75%     { opacity: 1 }
100%    { opacity: 0 } 
`
const PageContainer = styled.div`
    position: relative;
    margin: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-color: #FFFFFA;
    animation: ${fadeOut} 1.5s linear;
    animation-fill-mode: forwards;
`  
const SplashContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
const Logo = styled.div`
        background-image: url(${logo});

    background-size: cover;
    width: 25rem;
    height: 9rem;
  
`
const fillAnim = keyframes` 
    {
        0%  {transform: scale(0.45);
            opacity:0.5; 
            transform-origin:center center;
            top:80px; 
            }
        50%{ transform: scale(1.01);
            transform-origin:center center;
            top:40px;
            opacity:1; 

        }
        100% {transform: scale(0.7);
            transform-origin:center center;
            top:-10px;
            opacity:0;
        } 
    }
`
const fillBc = keyframes` 
    {
        0%   { 
                background-position:0px 100px;
            }

        50%  { 
                background-position:0px 50px;
            }
        100% {
                background-position:0px 0px;
            } 
    }
`
const Bowl = styled.div`
    width: 100px;
    height: 100px;
    border-radius:100%;
    background-image: -webkit-linear-gradient(top,#0099cc 50%,#808080 50%);
    background-size:40px 200px; 
    box-shadow: inset 0px 0px 30px 5px rgba(0,0,238,0.314);
    margin: 50px auto;
    overflow: hidden;
    transform-origin:center center;  
    animation: ${fillBc} 1.5s infinite;
    animation-timing-function:linear;

    &:after{
        content:"";
        width: 98px;
        height: 20px;
        border-radius:100%;
        background-color:#0067b6;
        position: absolute;  
        top:90px; 
        margin: 5px 0px;
        transform-origin:center center;  
        animation: ${fillAnim} 1.5s infinite;
        animation-timing-function:linear;
    }
`
const SphereRef = styled.div`
    margin-left: -35px;
    position: absolute;
    width: 70px;height: 60px;
    border-radius:100%;
    background-image: -webkit-linear-gradient(bottom,rgba(255,255,255,0) 30%,rgba(255,255,255,0.6) 100%);
    left:50%;top:0px;
    color:rgba(238,238,238,0);
    text-shadow: -1px -1px 1px rgba(255,255,255,0.4);
    font-weight:bold;
    text-align: center;
    margin-top: 10px;
    line-height:80px;
    font-size:20px;
    font-family:"tahoma"; 
    &:after{
        content:"";
        position: absolute;
        width: 200px;height: 30px;
        margin: 80px 0px 0px -130px ;
        background-image: radial-gradient(
        center,rgba(0,0,0,1) 0%,rgba(0,0,0,0) 50%   
        );
        border-radius:100%;
    }
`
    const Mana = styled.div`
        display: block;
        position: relative;
        margin: 0px auto;
    `

const SplashScreen = () => {
    return (
        <PageContainer >
            <SplashContainer>
                <Logo />
                <Mana>
                    <Bowl />  
                    <SphereRef />
                </Mana>
            </SplashContainer>
        </PageContainer>
    )
}

export default SplashScreen