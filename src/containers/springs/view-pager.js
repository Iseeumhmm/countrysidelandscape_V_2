import React, { useRef } from 'react'
import { Link } from 'components/Router'
import clamp from 'lodash-es/clamp'
import { useSprings, animated } from 'react-spring'
import { useGesture } from 'react-use-gesture'
import styled from 'styled-components'

// import './style.css'

const ViewPagerContainer = styled.div`
    position: relative;
    height: 30rem;
    overflow: hidden;
    /* cursor: url('https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/Ad1_-cursor.png') 39 39, 
    auto; */
    @media(min-width: 418px) {
      height: 72vw;
    }
    @media(min-width: 675px) {
      height: 78vw;
    }
    & > div {
        position: absolute;
        width: 100%;
        height: 100%;
        will-change: transform;
        h1 { 
          text-decoration: underline;
          z-index: 2;
          top: 0;
        }
    }

    & > div > div {
        border-radius: 10px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        width: 100%;
        /* height: 24rem; */
        padding-top: 64%;
        will-change: transform;
        /* box-shadow: 0 62.5px 125px -25px rgba(50, 50, 73, 0.5), 0 37.5px 75px -37.5px rgba(0, 0, 0, 0.6); */
    }


`

const pages = []

const processImages = (images) => {
  Object.keys(images).forEach( each => {
    pages.push([
      each,
      `${images[each][0]['full1920x1280'].fields.file.url}?fm=jpg&w=800&q=50&fl=progressive`
    ])
    
  })
}

export default function Viewpager(propsFrom) {
    // const [ wasClicked, setWasClicked ] = useState(null)
    const divWidth = propsFrom.width + 5;
    if (propsFrom.images) {processImages(propsFrom.images)}
    // const clickHandler = () => {
    //     setWasClicked(true)
    // }
  
  const index = useRef(0)
  const [props, set] = useSprings(pages.length, i => ({ x: i * divWidth, sc: 1, display: 'block' }))
  const bind = useGesture(({ down, delta: [xDelta], direction: [xDir], distance, cancel }) => {
    if (down && distance > divWidth / 2)
      cancel((index.current = clamp(index.current + (xDir > 0 ? -1 : 1), 0, pages.length - 1)))
    set(i => {
      if (i < index.current - 1 || i > index.current + 1) return { display: 'none' }
      const x = (i - index.current) * divWidth + (down ? xDelta : 0)
      const sc = down ? 1 - distance / divWidth / 2 : 1
      return { x, sc, display: 'block' }
    })
  })
  const viewPagerItems = props.map(({ x, display, sc }, i) => (
      <animated.div {...bind()} key={i} style={{ display, transform: x.interpolate(x => `translate3d(${x}px,0,0)`) }}>
            <Link key={`${i}_link`} to={`/${pages[i][0]}`}>

          <h1 style={{textAlign: "center"}}>{pages[i][0]}</h1>
        </Link>

        <animated.div style={{ transform: sc.interpolate(s => `scale(${s})`), backgroundImage: `url(${pages[i][1]})` }} />

      </animated.div>
  ))
  return (
    <ViewPagerContainer id="view-pager">
        {viewPagerItems}
    </ViewPagerContainer>
  )
}

