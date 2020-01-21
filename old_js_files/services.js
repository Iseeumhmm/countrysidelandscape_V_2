import React from 'react'
import styled from 'styled-components'
import { useRouteData } from 'react-static'
import Slider from "react-slick";
import { Link } from 'components/Router'
var ids = require('short-id')


const logo = require('../images/logos/LargeLogoSlogan.png')

// Styles
const PageContainer = styled.div`
  width: 85%;
  height: 100%;
  margin: auto;
`
const HeaderContainer = styled.div`
  width: 100%;
  height: 9rem;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Logo = styled.div`
  position: relative;
  right: 10px;
  width: 23rem;
  min-height: 7rem;
  background-image: url(${logo});
  background-size: cover;
  background-position: center center;
`
const DescriptionContainer = styled.div`
  text-align: center;
  h2 { font-family: 'Roboto', sans-serif; font-size: 1.75rem }
  height: auto;
  padding: 2rem 0;
`
const Slide = styled.img`
  /* min-height: 100vh; */
  object-fit: cover;
`

export default function About() {
  const { workImages } = useRouteData()
  let service
  let individualItems
  let slider 
  if (workImages) {
      service = workImages.copy
      individualItems = {
        [service]: workImages.items
      }

      const settings = {
        arrows: false,
        autoplay: true,
        autoplaySpeed: 10000,
        dots: false,
        draggable: false,
        fade: true,
        infinite: true,
        pauseOnFocus: false,
        speed: 0,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: false,
        touchMove: false,
        useTransforms: false
      }
      
      slider = (
        <Slider {...settings}>
          {individualItems[workImages.copy].map((post) => {
            const mobileImg = (post.full1920x1280) ? `${post.full1920x1280.fields.file.url} 768w, ${post.full1920x1280.fields.file.url} 2048w` : `${post.full1920x1280.fields.file.url} 2048w`
            const sourceSet = (post.full1920x1280) ? `${post.full1920x1280.fields.file.url} 768w, ${post.full1920x1280.fields.file.url} 2048w` : `${post.full1920x1280.fields.file.url} 2048w`
            return (
              <React.Fragment key={ids.generate()}>
                <Link to={`/${service}/single`}>
                  <Slide 
                    key={1}
                    srcSet={sourceSet}
                    sizes="100vw"
                    src={mobileImg} >
                  </Slide>
                </Link>
                <DescriptionContainer> <h2>Small writup here...</h2></DescriptionContainer>
                <Link to={`/${service}/single`}>
                  <Slide 
                    key={2}
                    srcSet={sourceSet}
                    sizes="100vw"
                    src={mobileImg} >
                  </Slide>
                </Link>
                <DescriptionContainer> <h2>Small writup here...</h2></DescriptionContainer>
                <Link to={`/${service}/single`}>
                  <Slide 
                    key={3}
                    srcSet={sourceSet}
                    sizes="100vw"
                    src={mobileImg} >
                  </Slide>
                </Link>
                <DescriptionContainer> <h2>Small writup here...</h2></DescriptionContainer>
                <Link to={`/${service}/single`}>
                  <Slide 
                    key={4}
                    srcSet={sourceSet}
                    sizes="100vw"
                    src={mobileImg} >
                  </Slide>
                </Link>
                <DescriptionContainer> <h2>Small writup here...</h2></DescriptionContainer>
                <Link to={`/${service}/single`}>
                  <Slide 
                    key={5}
                    srcSet={sourceSet}
                    sizes="100vw"
                    src={mobileImg} >
                  </Slide>
                </Link>
                <DescriptionContainer> <h2>Small writup here...</h2></DescriptionContainer>
                <Link to={`/${service}/single`}>
                  <Slide 
                    key={6}
                    srcSet={sourceSet}
                    sizes="100vw"
                    src={mobileImg} >
                  </Slide>
                </Link>
                <DescriptionContainer key={ids.generate()}> <h2>Small writup here...</h2></DescriptionContainer>
              </React.Fragment>
            )}
          )}
        </Slider>
      )
      
  } else {
      console.log('no items found')
  }
  
  return (
    <PageContainer>
      <HeaderContainer>
        <Link to="/"><Logo /></Link>
      </HeaderContainer>
  <h1>{service}</h1>
      {slider}
    </PageContainer>
  )
}

