import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import Slider from "react-slick";
import { Link } from 'components/Router'
const leftArrow = require('../../images/icons/left-arrow.svg')
const rightArrow = require('../../images/icons/right-arrow.svg')
var ids = require('short-id')

// Styles
const SmallSlideContainer = styled.div`
  position: relative;
  text-align: center;
`
const SmallSlide = styled.img`
  height: 100%;
  object-fit: cover;
  filter: brightness(70%);
 
`
const LargeSlideContainer = styled.div`
  text-align: center;
`

const LargeSlide = styled.img`
  height: 40rem;
  width: 100%;
  object-fit: cover;
`
const Arrow = styled.img`
  z-index: 200;
  position: absolute;
  width: 2rem;
  height: 2rem;
  bottom: 55%;
  transform: translateY(50%);
  left: ${props => props.left ? "1rem" : "unset"};
  right: ${props => props.right ? "1rem" : "unset"};
`

export default function AsNavFor(props) {
    // Set State Properties
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [slider1, setSlider1] = useState(null);
    const [slider2, setSlider2] = useState(null);

    useEffect(() => {
        setNav1(slider1)
        setNav2(slider2)
    }, [slider1, slider2])

    const settingsSmall = {
        arrows: false,
        centerMode: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 2
                }
            }
        ],
        useTransform: false
    }
    const settingsLarge = {
        arrows: false
    }

    // make one array of all types of work
    let urls = [] 
    if (props.images) {
      Object.keys(props.images).forEach( key => {
        let item = {}
        item.title = key
        props.images[key].forEach( each =>{
          item.url = each.full1920x1280.fields.file.url
          // urls.push(each.full1920x1280.fields.file.url)
          urls.push(item)
        })
      })
    }
    
    

    return (
      <React.Fragment>
        {/* Top Slider */}
        <SmallSlideContainer>
          <Arrow 
            key={ids.generate()}
            left
            src={leftArrow}
            alt=""/>
          <Arrow 
            key={ids.generate()}
            right
            src={rightArrow}
            alt=""/>
          <Slider {...settingsSmall}
            style={{ position: "relative" }}
            asNavFor={nav1}
            ref={slider => (setSlider2(slider))}
            slidesToShow={3}
            swipeToSlide={true}
            focusOnSelect={true}
          >
          {urls.map( urls => {
              return (
                <SmallSlide 
                  key={ids.generate()}
                  src={urls.url}
                />
              )
            } 
          )}
          </Slider>
        </ SmallSlideContainer>
        {/* Bottom Slider */}
        <Slider {...settingsLarge}
          asNavFor={nav2}
          ref={slider => (setSlider1(slider))}
        >
          {urls.map( urls => {
              return (
                <Link  key={ids.generate()} to={`/${urls.title}`}>
                  <LargeSlideContainer>
                    <LargeSlide 
                      src={urls.url}
                    >
                    </ LargeSlide>
                    <h1>{urls.title}</h1>
                  </LargeSlideContainer>
                </Link>
              )
            } 
          )}
        </Slider>
      </React.Fragment>
    )
}

