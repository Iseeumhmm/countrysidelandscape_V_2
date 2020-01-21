import React, { useEffect, useState } from 'react'
import { useSpring, animated, useTransition, config} from 'react-spring'
import './ken_burns.css'

// Globals.injectFrame(
//     x => requestAnimationFrame(x),
//     x => cancelAnimationFrame(x)
//   );


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
    return <animated.div className="bg" style={{ ...props, backgroundImage: url, filter: "brightness(85%)" }} />
}

export default function KenBurns(props) {
    const homePageSliderImages = props.images
    const slides = []
    homePageSliderImages.forEach( function (each, i) {
        slides.push({ id: i, url: `${each}?w=1920&q=40&fl=progressive` })
    })

    const duration = 10000
    const [index, set] = useState(0)
    const transitions = useTransition(slides[index], item => item.id, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: config.molasses,
      }, [])
    useEffect(() => { 
        const interval = setInterval(() => set(state => (state + 1) % homePageSliderImages.length), duration)
        return () => clearInterval(interval)
    }, [homePageSliderImages.length, homePageSliderImages])

    // useEffect( () => {
    //     let toPreload = []
    //     homePageSliderImages.forEach( link => {
    //         toPreload.push([ `${link}?w=1920&q=40&fl=progressive` ])
    //     })
    //     // console.log(toPreload)
    //     var head = document.getElementsByTagName('head')[0];
    //     toPreload.forEach( each => {
    //         var link = document.createElement('link');
    //         link.rel = 'preload'
    //         link.as = 'image'
    //         link.href = each
    //         head.appendChild(link);
    //     })
    // }, [homePageSliderImages])

    return transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={{ ...props }}>
          <Image url={`url(${item.url}`} duration={duration} />
        </animated.div>
    ))

}
