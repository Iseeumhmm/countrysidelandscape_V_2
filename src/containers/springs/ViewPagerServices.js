import React, { useRef } from 'react'
import { Link } from 'components/Router'
import clamp from 'lodash-es/clamp'
import { useSprings, animated } from 'react-spring'
import { useGesture } from 'react-use-gesture'
import styled from 'styled-components'
var ids = require('short-id')

const ViewPagerContainer = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  overflow: hidden;
  .main {
    position: absolute;
    width: 100%;
    height: 100vh;
    will-change: transform;
  }
  .picture {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    will-change: transform;
  }
  .split_page {
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
    height: 100vh;
    @media( max-width: 1140px ){
      flex-flow: column-reverse nowrap;
    }
  }
  .left{
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    width: 33%;
    height: 100%;
    h1 {text-align: center;}
    p {
      width: 80%;
    }
    @media( max-width: 1140px ){
      width: 100%;
      height: 67%;
    }
  }
  .right{
    width: 67%;
    height: 100%;
    background-size: cover;
    background-position: center bottom;
    @media( max-width: 1140px ){
      width: 100%;
    }
  }
`

export default function Viewpager(props) {

  const index = useRef(0)

  const [properties, set] = useSprings(props.images[1].length, i => ({ x: i * window.innerWidth, sc: 1, display: 'block' }))
  const bind = useGesture(({ down, delta: [xDelta], direction: [xDir], distance, cancel }) => {
    if (down && distance > window.innerWidth / 2)
      cancel((index.current = clamp(index.current + (xDir > 0 ? -1 : 1), 0, props.images[1].length - 1)))
    set(i => {
      if (i < index.current - 1 || i > index.current + 1) return { display: 'none' }
      const x = (i - index.current) * window.innerWidth + (down ? xDelta : 0)
      const sc = down ? 1 - distance / window.innerWidth / 8 : 1
      return { x, sc, display: 'block' }
    })
  })
  const viewPagerItems = properties.map(({ x, display, sc }, i) => (
      <animated.div {...bind()} 
        key={ids.generate()} 
        style={{ display, transform: x.interpolate(x => `translate3d(${x}px,0,0)`) }}
        className="main"
        >
          <div className="split_page">
            <div 
              className={ i % 2 === 0 ?  "" : "left"} 
              style={{ display: i % 2 === 0 ? "none" : "flex" }}
              >
                <h1>{props.images[1][i]['shortTitle']}</h1>
                <p>{props.images[1][i]['shortDescriptionOfImage']}</p>
            </div>
            <animated.div 
              style={{backgroundImage: `url(${props.images[1][i]['full1920x1280'].fields.file.url}?fm=jpg&w=1920&q=50&fl=progressive)`}}
              className={ i % 2 === 0 ? "picture" : "picture right" }
            />
          </div>
      </animated.div>
  ))
  return (
    <ViewPagerContainer id="view-pager">
        {viewPagerItems}
    </ViewPagerContainer>
  )
}

