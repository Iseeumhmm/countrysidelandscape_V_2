import React, { useEffect, useState} from 'react'
import { Head } from 'react-static'
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
        top: 40vw;
        width: 27vw;
        min-height: 10vw;
    }
    @media( min-width: 1081px ) {
        top: 0;
        left: 50%;
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
    padding: 10px;
    border-radius: 2rem;
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
     /* h2 {
         padding-top: 4rem;
     } */
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
    
    &#one { 
        padding-top: 76vw; 
        margin-bottom: 6rem; 
    }
    @media( min-width: 675px ) {
        &#one { padding-top: 62vw; }
        width: 48rem;
    }
    @media( min-width: 875px ) {
        h1 { text-align: left }
        width: 60rem;
    }
    @media( min-width: 950px ) {
        &#one {
            padding-top: 48vw;
        }
        width: 65%;
    }
    @media( min-width: 1081px ) {
        height: 20rem;
        background-color: rgba(0,0,0,.05);
        h1 { text-align: center; }
        margin-top: 0;
        width: 95%;
        &#one { 
            padding-top: 0;
            grid-column: 1/6; 
            grid-row: 1;
            background-color: unset;
        }
        &#two { 
            height: 42.5rem;
            grid-column: 4/6;
            grid-row: 2/4;
            p { padding-bottom: 0; }
            img { 
                bottom: 5rem;
                position: relative; 
            }
        }
        &#three { 
            height: 40rem;
            grid-column: 1/3;
            grid-row: 4/6;
        }
        &#four { 
            grid-column: 1/4;
            grid-row: 2;
        }
        &#five { 
            /* margin: auto 0; */
            grid-column: 1/4;
            grid-row: 3;
        }
        &#six { 
            height: 40rem;
            grid-column: 3/6;
            grid-row: 4/6;
        }
        &#seven { 
            grid-column: 1/6;
            grid-row: 8;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 75.5vw;
        }
    }
    /* @media( min-width: 1575px ) {
        &#one {
            padding-top: 36vw;
        }
        width: 69%;
    } */
`

const ContentContainer = styled.div`
    background-color: "#264A65";
    width: 95%;
    margin: auto;
    /* top: 4rem; */
    /* padding-bottom: 8rem; */
    .contact {
        width: 100%;
        height: 20rem;
        display: flex;
        align-items: center;
        justify-content: center;
        a { 
            font-size: 3.2rem;
            font-weight: 700;
        }
    }
    @media( min-width: 675px ) {
        position: relative;
        width: 90vw;
        box-shadow: 0px 0px 75px 0px rgba(0,0,0,0.75);
    }
    @media( min-width: 950px ) {
        top: 9.7vw;
        width: 80.1vw;
    }
    @media( min-width: 1081px ) {
        .grid {
            padding: 0 2rem;
            padding-top: 34vw;
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            grid-gap: 10px;
            /* grid-auto-rows: 20rem 40rem; */
        }
       
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
        height: 48rem;
    }
    /* @media( min-width: 950px ){
        height: 50rem;
    } */

    @media( min-width: 1081px ){
        height: 38rem;
    }
    
    @media( min-width: 1300px ) {
        height: ${({instagram}) => instagram ? "35rem" : "40rem"};
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
            <Head>
                {/* <link rel="preload" as="image" href={background} imagesrcset={`${background} 1200w, ${backgroundLarge}, 2300w`} imagesizes="100vw" /> */}
            </Head>
            <BackgroundContainer >
                <NavBar style={{zIndex: "1000"}}/>
                <Link to="/"><Logo/></Link>
                <ContentContainer>
                    <div className="grid">
                    <TextContainer id="one">
                        <h1>Your London Pool Builder</h1>
                        <p>We install quality fiberglass in ground swimming pools, fiberglass plunge pools, fiberglass lap pools and water features in and around London Ontario. We are a trusted landscape company with the experience, knowledge and staff to create your landscape dream safely, efficiently and affordably.
                        </p>
                        <a href={catalogue} download>Download Pool Catalogue</a>
                    </TextContainer>
                    <TextContainer id="two">
                        <ViewStackContainer id="view-pager-container">
                            {/* <h2>View our past projects</h2> */}
                            { divWidth ? <ViewStack width={divWidth} slideType="contentful" slideImages={contentfulImages}/> : ""}
                        </ViewStackContainer>
                        <img src={swipe} alt="swipe gesture"></img>
                    </TextContainer>
                    <TextContainer id="three">
                        <ViewStackContainer instagram id="view-pager-container-2">
                            <p style={{padding: "0"}}>Swipe through our Instagram Feed!</p>
                            { divWidth ? instagramFeed ? <ViewStack width={divWidth} slideType="instagram" slideImages={instagramFeed}/> : <h2>Loading...</h2> : ""}
                        </ViewStackContainer>
                    </TextContainer>
                    <TextContainer id="four">
                        <h2>We bring your vision to life with our expertise.</h2>  
                        <p>Countryside Landscape is a one-stop shop for custom landscapes. Our objective is to create unique spaces that are tailored to your site specific challenges. Whether your project scope is a small pocket garden in a downtown location or a sprawling country estate, we are committed to excellence in every stage of our project.</p>
                    </TextContainer>
                    <TextContainer id="five">
                        <h2>Our Services</h2>
                        <p>We are a mid-sized landscape company located in Aylmer, Ontario which is central to and services the towns, cities and surrounding country communities of Tillsonburg, St. Thomas, London and Ingersoll.</p>
                    </TextContainer>
                    <TextContainer id="six">
                        <h2>We offer a variety of quality services for your home and commercial properties.</h2>

                        <p style={{paddingBottom: "0"}}><b>Among our services are:</b></p>
                        <ul>
                        <li>Skid steer and mini excavating services, such as:  excavations, prep work, demolitions and clean-ups, excavate hydro ,water trenches, and excavate pools, and excavate and install driveway and parking lots.</li>

                        <li>Stamped concrete and regular concrete, interlocking stone, driveways, walkways, patios, pool decks and outdoor living spaces.</li>

                        <li>Manufactured and natural stone, retaining walls and steps. </li>

                        <li>Commercial and residential snow plowing and salting in Aylmer and surrounding communities.</li>
                        </ul>
                    </TextContainer>
                    <TextContainer id="seven">
                        <h2 style={{textAlign: 'center'}}>We conform to WSIB standards and are Commercial Liability insured.</h2>
                    </TextContainer>
                    </div>
                    <div className="contact">
                        <Link to="/contact">Get in touch with us!</Link>
                    </div>
                </ContentContainer>
            </BackgroundContainer>
        </ PageContainer>
    )
}
