
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
import logo from '../images/logos/LargeLogo.png'

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
const ConstructionPage = styled.div`
display: flex;
flex-flow: column nowrap;
align-items: center;
text-align: center;
width: 100%;
height: 100vh;
background-image: url('https://images.ctfassets.net/ur1u6ni4z1cg/27XoXJe8sqHgerkKcPd41w/98b1cf252e9c5aa2196918471bbb714e/pool3edited.jpg?w=1920&q=40&fl=progressive');
background-size: cover;
background-position: bottom center;
text-shadow: 5px 5px #0000;
img {
  width: 23rem;
  left: 50%;
}
h1 { 
  color: #FFF;
  text-align: center;
   }

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

    // let toPreload = []
    // homePageSliderImages.forEach( link => {
    //     toPreload.push([ `${link}?w=1920&q=40&fl=progressive` ])
    // })
    // // console.log(toPreload)
    // var head = document.getElementsByTagName('head')[0];
    // toPreload.forEach( each => {
    //     var link = document.createElement('link');
    //     link.rel = 'preload'
    //     link.as = 'image'
    //     link.href = each
    //     head.appendChild(link);
    // })

    handleHeight(window.innerHeight)
    window.addEventListener('resize', handleHeight(window.innerHeight));
    window.onorientationchange = () => handleHeight(null)

    setBrowser( 
      <BrowserDetection>
        { browserHandler }
      </BrowserDetection>
    )
    setTimeout(() => {
        setLoading(false)
    },1500)

    return () => {
      window.removeEventListener('resize', handleHeight(window.innerHeight))
      window.onorientationchange = null
    }
  }, [])

  const page = (
    <Container vh={viewHeight} style={{position: "relative", overflowX: "hidden"}}>
       {browser}
      <NavBar style={{zIndex: "1000"}}/>
      {firefox ? <FireFoxHome vh={viewHeight} image={homePageSliderImages[0]}/> : <KenBurns images={ homePageSliderImages } />}

      <BannerText />
      <SocialIcons>
        <a href="https://www.instagram.com/countrysidelandscapeaylmer/" target="_blank" without rel="noopener noreferrer"><img src={instagram} style={{ width: "4rem", margin: "1rem" }} alt="Instagram icon"/></a>
        <a href="https://www.facebook.com/pages/category/Landscape-Company/Countryside-Landscape-1484042294955435/" target="_blank"><img src={facebook} style={{ width: "4rem", margin: "1rem" }} alt="Facebook icon"/></a>
      </ SocialIcons>
    </Container>
  )

  let underConstruction = (
    <ConstructionPage>
      <div>
        <img src={logo} alt="logo" />
        <h1>We're currently making some changes to our site.<br /><br />
        Sorry for the inconvenience.<br /><br />
        We can still be reached at <br />
        </h1>
        <h1 className="vince_phone">(519) 403-5699</h1>
      </div>
    </ ConstructionPage>
  )
  return underConstruction
  // return loading ? <LoadingPage/> : page
}

export default Home