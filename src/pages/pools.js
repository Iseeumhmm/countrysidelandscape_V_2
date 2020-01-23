import React, { useEffect, useState} from 'react'
import { Link } from 'components/Router'
import styled, { keyframes } from 'styled-components'
import { useRouteData } from 'react-static'
import NavBar from '../containers/navigation/navbar'
import ViewStack from '../containers/springs/view-pager'
import instagram from '../components/helperFuncrtions/getInstagram'
const background = require('../images/backgrounds/poolPage.jpg')
const backgroundLarge = require('../images/backgrounds/poolPage_2360.jpg')
const swipe = require('../images/icons/swipe-left.png')

const logo = require('../images/logos/LargeLogoBlack.png')
const catalogue = require('../../public/Leisure Pools Consumer Brochure 2019-0424.pdf')

const PageContainer = styled.div`
    background-color: #2C5E7E;
    height: auto;
`
const BackgroundContainer = styled.div`
width: 100vw;
background-image: url(${background});
background-repeat: no-repeat;
background-size: contain;
background-position: top center;
@media( min-width: 950px ) {
    background-image: url(${backgroundLarge});
}
@media( min-width: 1575px ) {
    /* background-size: cover; */
}
`
const Logo = styled.div`
    position: absolute;
    top: 48vw;
    /* top: 22rem; */
    left: calc(50% - 1rem);
    transform: translateX(-50%);
    width: 23rem;
    min-height: 8rem;
    background-image: url(${logo});
    background-size: cover;
    background-position: center center;
    z-index: 50;
    @media( min-width: 673px ) {
        top: 44vw;
    }
    @media( min-width: 771px ) {
        width: 33rem;
        min-height: 12rem;
    }
    @media( min-width: 950px ) {
        top: 34vw;
        width: 27vw;
        min-height: 10vw;
    }
    @media( min-width: 1575px ) {
        top: 34vw;
        width: 25rem;
        min-height: 9rem;
    }
`
const swipeGesture = keyframes`
0%      { transform: translateX(50px) }
50%     { transform: translateX(-50px) }
100%    { transform: translateX(50px) }
`
const TextContainer = styled.div`
    width: 95%;
    /* height: ${(instagram) => instagram ? "52rem" : "auto"}; */
    margin: auto;
    position: relative;
    h1 { color: white; }
    color: white;
    text-align: center;
    p, h2 { 
        text-align: left;
        color: white;
     }
     h2 {
         padding-top: 4rem;
     }
     p { padding-bottom: 4rem; }
     img { 
         width: 5rem;
         animation: ${swipeGesture} 2s ease-in-out infinite;
    }
    li {
        font-family: 'Roboto',sans-serif;
        text-align: left;
    }
    font-size: 1.25rem;
    &:first-of-type { padding-top: 68vw; }
    @media( min-width: 875px ) {
        h1 { text-align: left }
        width: 60rem;
    }
    @media( min-width: 950px ) {
        &:first-of-type {
            padding-top: 48vw;
        }
        width: 68%;
    }
    @media( min-width: 1575px ) {
        &:first-of-type {
            padding-top: 47vw;
        }
        width: 69%;
    }
`

const ContentContainer = styled.div`
    background-color: "#264A65";
    width: 95%;
    margin: auto;
    top: 4rem;
    padding-bottom: 8rem;
    @media( min-width: 675px ) {
        position: relative;
        left: 1px;
        width: 85vw;
        box-shadow: 0px 0px 75px 0px rgba(0,0,0,0.75);
    }
    @media( min-width: 1575px ) {
        /* width: 55vw; */
}
`
const ViewStackContainer = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    margin: 0 auto;
    overflow: hidden;
    border-radius: 7px;
    @media( min-width: 675px ){
        height: 78vw;
    }
    @media( min-width: 950px ){
        height: 60rem;
    }
    @media( min-width: 1300px ) {
        height: ${({instagram}) => instagram ? "70rem" : "60rem"};
    }
`

export default function Pools() {
    const { contentfulImages } = useRouteData()
    const [ divWidth, setDivWidth ] = useState(null)
    const [ instagramFeed, setInstagramFeed ] = useState(null)
    const getWidth = (ele) => {
        setDivWidth(ele)
    }
    useEffect(() => {
        let element = document.getElementById("view-pager-container").offsetWidth
        getWidth(element)
        window.addEventListener( 'resize', getWidth(element) );
        
        return () => window.removeEventListener('resize', getWidth )
    }, [divWidth])
    useEffect(() => {
        instagram().then( (result) => {
            setInstagramFeed(result)
        }, (error) => {
            console.log("There was an error retrieveing the instagram feed: ", error)
        } )
    }, [])
    return (
        <PageContainer style={{position: "relative", overflowX: "hidden"}}>
            <BackgroundContainer >
                <NavBar style={{zIndex: "1000"}}/>
                <ContentContainer>
                    <Link to="/"><Logo/></Link>
                    <TextContainer>
                        <h1>Your London Pool Builder</h1>
                        <p>We install quality fiberglass in ground swimming pools, fiberglass plunge pools, fiberglass lap pools and water features in and around London Ontario. We are a trusted landscape company with the experience, knowledge and staff to create your landscape dream safely, efficiently and affordably.
                        </p>
                        <a href={catalogue} download>Download Pool Catalogue</a>
                        <h2>We bring your vision to life with our expertise.</h2>  
                        <p>Countryside Landscape is a one-stop shop for custom landscapes. Our objective is to create unique spaces that are tailored to your site specific challenges. Whether your project scope is a small pocket garden in a downtown location or a sprawling country estate, we are committed to excellence in every stage of our project.</p>
                        <ViewStackContainer id="view-pager-container">
                            <h2>View our past projects</h2>
                            { divWidth ? <ViewStack width={divWidth} slideType="contentful" slideImages={contentfulImages}/> : ""}
                        </ViewStackContainer>
                        <img src={swipe} alt="swipe gesture"></img>
                    </TextContainer>
                    <TextContainer>
                        <ViewStackContainer instagram id="view-pager-container-2">
                            <h2>Swipe through our Instagram Feed!</h2>
                            { divWidth ? instagramFeed ? <ViewStack width={divWidth} slideType="instagram" slideImages={instagramFeed}/> : <h2>Loading...</h2> : ""}
                        </ViewStackContainer>
                    </TextContainer>
                    <TextContainer>
                        <h1>Pools &amp; Landscaping</h1>
                        <p>We install quality fiberglass in ground swimming pools, fiberglass plunge pools, fiberglass lap pools and water features throughout southern Ontario.
                        We are a trusted landscape company with the experience, knowledge and staff to create your landscape dream safely, efficiently and affordably.</p>

                        <h1>Our Services</h1>
                        <p>We are a mid-sized landscape company located in Aylmer, Ontario which is central to and services the towns, cities and surrounding country communities of Tillsonburg, St. Thomas, London and Ingersoll.</p>

                        <h2>We offer a variety of quality services for your home and commercial properties.</h2>

                        <p><b>Among our services are:</b></p>
                        <ul>
                        <li>Skid steer and mini excavating services, such as:  excavations, prep work, demolitions and clean-ups, excavate hydro ,water trenches, and excavate pools, and excavate and install driveway and parking lots.</li>

                        <li>Stamped concrete and regular concrete, interlocking stone, driveways, walkways, patios, pool decks and outdoor living spaces.</li>

                        <li>Manufactured and natural stone, retaining walls and steps. </li>

                        <li>Commercial and residential snow plowing and salting in Aylmer and surrounding communities.</li>
                        </ul>
                        <h2 style={{textAlign: 'center'}}>We conform to WSIB standards and are Commercial Liability insured.</h2>


                    </TextContainer>
                </ContentContainer>
            </BackgroundContainer>
        </ PageContainer>
    )
}
