
import React, { useEffect, useState } from 'react'
import { useRouteData } from 'react-static'
import KenBurns from '../containers/springs/ken-burns/kenBurns'
import BrowserDetection from 'react-browser-detection';
import BannerText from '../containers/home/BannerText'
import NavBar from '../containers/navigation/navbar'
import LoadingPage from '../components/spashScreen'
import instagram from '../images/icons/instagram.png'
import facebook from '../images/icons/facebook.png'
import styled, {keyframes} from 'styled-components'

// Styles

const fadeIn = keyframes`
from: { opacity: 0 }
to:   { opacity: 1 }
`
const Container = styled.div`
  position: fixed;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  /* height: calc(${ props => props.vh } * 100); */
  height: ${ props => props.vh}px;
  h1 { color: white; }
  animation: ${fadeIn} 1.5s linear;
`

const SocialIcons = styled.div`
position: absolute;
text-align: center;
bottom: 0;
width: 100%;
`
const FireFoxHome = styled.div`
  width: 100vw;
  height: ${ props => props.vh}px;
  overflow: hidden;
  background-image: url(${({image}) => image });
  background-size: cover;
  background-position: center center;
`

function Home() {
  const { homePageSliderImages } = useRouteData()
  const [viewHeight, setViewHeight] = useState(0)
  const [browser, setBrowser] = useState(0)
  const [loading, setLoading] = useState(true)
  const [firefox, setFirefox] = useState(false)

  const browserHandler = {
    default: (browser) => {
      if (browser === "firefox" ){ 
        setFirefox(true)
        return null
      } else {
        return null
      }
    },
  };
  const handleHeight = (ele) => {
    setViewHeight(ele)
  }
  useEffect( () => {

    let toPreload = []
        homePageSliderImages.forEach( link => {
            toPreload.push([ `${link}?w=1920&q=40&fl=progressive` ])
        })
        // console.log(toPreload)
        var head = document.getElementsByTagName('head')[0];
        toPreload.forEach( each => {
            var link = document.createElement('link');
            link.rel = 'preload'
            link.as = 'image'
            link.href = each
            head.appendChild(link);
        })

    handleHeight(window.innerHeight)
    window.addEventListener('resize', handleHeight(window.innerHeight));
    setBrowser( 
      <BrowserDetection>
        { browserHandler }
      </BrowserDetection>
    )
    setTimeout(() => {
        setLoading(false)
    },1500)

    return () => window.removeEventListener('resize', handleHeight(window.innerHeight))
  }, [])

  const page = (
    <Container vh={viewHeight} style={{position: "relative", overflowX: "hidden"}}>
       {browser}
      <NavBar style={{zIndex: "1000"}}/>
      {firefox ? <FireFoxHome vh={viewHeight} image={homePageSliderImages[0]}/> : <KenBurns images={ homePageSliderImages } />}

      <BannerText />
      <SocialIcons>
        <a href="https://www.instagram.com/countrysidelandscapeaylmer/" target="_blank"><img src={instagram} style={{ width: "4rem", margin: "1rem" }} alt="Instagram icon"/></a>
        <a href="https://www.facebook.com/pages/category/Landscape-Company/Countryside-Landscape-1484042294955435/" target="_blank"><img src={facebook} style={{ width: "4rem", margin: "1rem" }} alt="Facebook icon"/></a>
      </ SocialIcons>
    </Container>
  )

  return loading ? <LoadingPage/> : page
}

export default Home