import React, { useEffect, useState } from 'react'
import { Globals, useSpring, animated, useTransition, config} from 'react-spring'
import './ken_burns.css'

Globals.injectFrame(
    x => requestAnimationFrame(x),
    x => cancelAnimationFrame(x)
  );


const Image = ({ url, duration }) => {
    const props = useSpring({
        from: {
        transform: 'scale(1) translateX(0%)',
        },
        to: {
        transform: 'scale(1.5) translateX(0%)',
        },
        config: {
        duration: duration + 1,
        },
    })
    return <animated.div className="bg" style={{ ...props, backgroundImage: url, filter: "brightness(55%)" }} />
}

export default function KenBurns(props) {
    const homePageSliderImages = props.images
    const slides = []
    homePageSliderImages.forEach( function (each, i) {
        slides.push({ id: i, url: `${each}?w=1900&q=50&fl=progressive` })
    })

    const duration = 10000
    const [index, set] = useState(0)
    const transitions = useTransition(slides[index], item => item.id, {
        from: { opacity: 1 },
        enter: { opacity: 1 },
        leave: { opacity: 1 },
        config: config.molasses,
      }, [])
    useEffect(() => { 
        const interval = setInterval(() => set(state => (state + 1) % homePageSliderImages.length), duration)
        return () => clearInterval(interval)
    }, [])
    return transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={{ ...props }}>
          <Image url={`url(${item.url}`} duration={duration} />
        </animated.div>
    ))

}
