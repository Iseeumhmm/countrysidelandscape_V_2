import "babel-polyfill";
import React from 'react'
import { Root, Routes, addPrefetchExcludes, Head } from 'react-static'
import { Router } from 'components/Router'
import Dynamic from 'containers/Dynamic'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
// const backgroundPools = require('./images/backgrounds/poolPage.jpg')
// const contactBackground = require('./images/backgrounds/contact.jpg')
// const og_image = require('./images/backgrounds/og_imageOpt.jpg')


// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

const theme = {
  // Global
  fontSize: "1.25rem", 
  headerPadding: "5.2rem 0 2rem",
  

  // Colours
  mainColour: "#1372B0",
  darkGrey: "#3b4145",
  lightGrey: "#f9f9fa",
  highlight: "#8AD30D",
  // highlightSecondary: "#C5893D",
  highlightSecondary: "#E6AD65",




  // Pool Page
  poolPageBackground: "#2C5E7E", 
  lineHeight: "2.6rem"
}

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Alegreya Sans SC';
    font-style: normal;
    font-weight: 300;
    src: local('Alegreya Sans SC Light'), local('AlegreyaSansSC-Light'),
        url('/fonts/alegreya-sans-sc-v9-latin/alegreya-sans-sc-v9-latin-300.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('/fonts/alegreya-sans-sc-v9-latin/alegreya-sans-sc-v9-latin-300.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }
    /* alegreya-sans-sc-regular - latin */
    @font-face {
      font-family: 'Alegreya Sans SC';
      font-style: normal;
      font-weight: 400;
      src: local('Alegreya Sans SC Regular'), local('AlegreyaSansSC-Regular'),
          url('/fonts/alegreya-sans-sc-v9-latin/alegreya-sans-sc-v9-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
          url('/fonts/alegreya-sans-sc-v9-latin/alegreya-sans-sc-v9-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }
    /* alegreya-sans-sc-700 - latin */
    @font-face {
      font-family: 'Alegreya Sans SC';
      font-style: normal;
      font-weight: 700;
      src: local('Alegreya Sans SC Bold'), local('AlegreyaSansSC-Bold'),
          
          url('/fonts/alegreya-sans-sc-v9-latin/alegreya-sans-sc-v9-latin-700.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
          url('/fonts/alegreya-sans-sc-v9-latin/alegreya-sans-sc-v9-latin-700.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }
    /* roboto-300 - latin */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 300;
      src: local('Roboto Light'), local('Roboto-Light'),
          url('/fonts/roboto-v20-latin/roboto-v20-latin-300.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
          url('/fonts/roboto-v20-latin/roboto-v20-latin-300.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }
    /* roboto-regular - latin */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      src: local('Roboto'), local('Roboto-Regular'),
          url('/fonts/roboto-v20-latin/roboto-v20-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
          url('/fonts/roboto-v20-latin/roboto-v20-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  } 

  * {
    scroll-behavior: smooth;
  }
  html {
    font-size: 62.5%;
    /* @media(min-width: 534px) {
      font-size: 70%;
    }  */
    @media(min-width: 1575px) {
      font-size: 80%;
    } 
  
    body {
      /* // font-family: 'Oswald', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif; */
      box-sizing: border-box;
      font-family: 'Alegreya Sans SC', sans-serif;

      font-weight: 300;
      line-height: 2.6rem;
      letter-spacing: .1rem;
      font-size: 1.6rem;
      margin: 0;
      padding: 0;
      color: black;
      h1 {
        font-weight: bold;
        color: black;
      }
      p {
        font-family: 'Roboto', sans-serif;
        line-height: 2.6rem;

      }
      @media(min-width: 775px) {
       /* p { font-size: 4rem; } */
      } 
    }
    
  }
  
  a {
    text-decoration: none;
    color: white;
  }

  img {
    max-width: 100%;
  }
`


function App() {
  return (
    <Root>
      <Head>
          <meta property="og:locale" content="en_CA" />
          <meta property="og:title" content="Your London Pool Buider" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Countryside Landscape and Pools" />
          <meta property="og:description" content="We install quality in-ground swimming pools, lap pools and water features in the London Ontario area" />
          <meta property="og:url" content="https://review.rickheffren.com" />
          <meta property="og:image" content="http://images.ctfassets.net/ur1u6ni4z1cg/27XoXJe8sqHgerkKcPd41w/98b1cf252e9c5aa2196918471bbb714e/pool3edited.jpg" />
          <meta property="og:image:secure_url" content="https://images.ctfassets.net/ur1u6ni4z1cg/27XoXJe8sqHgerkKcPd41w/98b1cf252e9c5aa2196918471bbb714e/pool3edited.jpg" />
          
          <title>Your London Pool Builder</title>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div className="content">
          <React.Suspense fallback={<em>Loading...</em>}>
            <Router>
              <Dynamic path="dynamic" />
              <Routes path="*" />
            </Router>
          </React.Suspense>
        </div>
      </ThemeProvider>
    </Root>
  )
}

export default App
